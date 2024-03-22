const axios = require('axios')
const { features } = require('../plugin.json')

let flag = 'cceb1c9565836a0f3f55f9ac'

const outputMap = {
  汉语: 'ChineseRD',
  英语: 'EnglishRD',
}

const tryUrl = async (url) => {
  const { data = [] } = await axios.get(url, {
    method: "get",
    headers: {
      flag,
      'X-Requested-With': 'XMLHttpRequest',
    }
  })
  if (Array.isArray(data)) {
    window.backSetList = data.slice(0, 100).map(item => ({
      title: item.w,
      description: item.d,
      url: `https://openhownet.thunlp.org/search?keyword=${item.w}`
    }))
    try {
      const w = data.slice(0, 100).map(it => it?.w).join('|')
      const { data: descData = [] } = await axios.post('https://wantwords.net/GetChDefis/', {
        w,
        m: 0
      }, {
        headers: {
          flag,
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        }
      })

      window.backSetList = data.map((item, index) => ({
        title: item.w,
        description: descData?.[index]?.Z?.map(([, v, desc], i) => `${i + 1}.${v ? `[${v}]` : ''}${desc}`).join(''),
        url: `https://openhownet.thunlp.org/search?keyword=${item.w}`
      }))

    } catch (e) {}

  } else {
    window.backSetList = [{
      title: data.message,
      description: data.details,
    }]
  }
}

const getBackSetByUrl = async (url) => {
  try {
    await tryUrl(url)
  } catch (e) {
    const res = await axios.get('https://wantwords.net/static/js/home.js')
    flag = /const flag = '(.*?)';/.exec(res?.data)?.[1]
    if (flag) {
      await tryUrl(url)
    } else {
      window.backSetList = [{
        title: '获取失败',
        description: '获取失败，请联系插件开发者',
      }]
    }
  }
}

const praise = async (selectData, originData = window.backSetList[0]) => {
  await axios.get(`https://wantwords.net/feedback/?c=${selectData.title}|2|||${originData.title}&m=w`)
}

window.exports = features.reduce((pre, cur) => {
  const { code, explain } = cur
  const [input, output] = explain.split('=>')
  const detail = {
    mode: "list",
    args: {
      search: async (action, searchWord, callbackSetList) => {
        await getBackSetByUrl(`https://wantwords.net/${outputMap[output]}/?q=${searchWord}&m=${code}&f=1`)
        callbackSetList(window.backSetList)
      },
      select: async (action, itemData) => {
        window.utools.copyText(itemData.title)
        window.utools.hideMainWindow()
        await praise(itemData)
        window.utools.outPlugin()
      },
      placeholder: `请输入${input}`
    }
  }
  return { ...pre, [code]: detail }
}, {})
