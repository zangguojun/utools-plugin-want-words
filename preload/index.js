const axios = require('axios')
const { features } = require('../plugin.json')

const outputMap = {
  汉语: 'ChineseRD',
  英语: 'EnglishRD',
}

const getBackSetByUrl = async (url) => {
  const { data = [] } = await axios.get(url)
  if (Array.isArray(data)) {
    window.backSetList = data.slice(0, 100).map(item => ({
      title: item.w,
      description: item.d,
      url: `https://openhownet.thunlp.org/search?keyword=${item.w}`
    }))
  } else {
    window.backSetList = [{
      title: data.message,
      description: data.details,
    }]
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
        window.utools.hideMainWindow()
        window.utools.copyText(itemData.title)
        await praise(itemData)
        window.utools.outPlugin()
      },
      placeholder: `请输入${input}`
    }
  }
  return { ...pre, [code]: detail }
}, {})
