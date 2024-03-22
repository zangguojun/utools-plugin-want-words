const axios = require('axios')
const { features } = require('../plugin.json')

// 后续可能失效
let flag = 'cceb1c9565836a0f3f55f9ac'

const service = axios.create({
  baseURL: 'https://wantwords.net'
});

service.interceptors.request.use(
  config => {
    config.headers.flag = flag;
    return config;
  },
  error => {
    console.error(error);
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  undefined,
  async (error) => {
    const { response } = error
    if (response.status === 403) {
      const { data: jsText } = await service.get('/static/js/home.js')
      flag = /const flag = '(.*?)';/.exec(jsText)?.[1]
    }
    return Promise.reject(error);
  }
);

const outputMap = {
  汉语: 'ChineseRD',
  英语: 'EnglishRD',
}

const praise = (selectData, originData = window.backSetList[0]) => {
  return service.get(`/feedback/?c=${selectData.title}|2|||${originData.title}&m=w`)
}

window.exports = features.reduce((pre, cur) => {
  const { code, explain } = cur
  const [input, output] = explain.split('=>')
  const detail = {
    mode: "list",
    args: {
      search: async (action, searchWord, callbackSetList) => {
        const { data = [] } =  await service.get(`${outputMap[output]}/?q=${searchWord}&m=${code}&f=1`)
        if (Array.isArray(data)) {
          window.backSetList = data.slice(0, 100).map(item => ({
            title: item.w,
            description: item.d,
            url: `https://openhownet.thunlp.org/search?keyword=${item.w}`
          }))
          try {
            const w = data.slice(0, 100).map(it => it?.w).join('|')
            const { data: descData = [] } = await service.post('/GetChDefis/', {
              w,
              m: 0
            }, {
              headers: {
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
        callbackSetList(window.backSetList)
      },
      select: async (action, itemData) => {
        window.utools?.copyText(itemData.title)
        window.utools?.hideMainWindow()
        await praise(itemData)
        window.utools?.outPlugin()
      },
      placeholder: `请输入${input}`
    }
  }
  return { ...pre, [code]: detail }
}, {})
