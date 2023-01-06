const axios = require('axios')

!(async () => {
  const data = await axios.get('https://wantwords.net/ChineseRD/?q=%E4%BD%A0%E5%A5%BD&m=ZhZh&f=1')
  console.log('🚀~ 4  data', data)
})()
