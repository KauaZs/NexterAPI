const axios = require('axios')
module.exports = class Functions {
  
    getEmojis(str) {
return str.replace(/[^\p{Emoji}]/gu,'').replace(/[0-9]/g,'')
  }
  
  async fetchUser(userID) {
  const userFindData = await axios.get(`https://discord.com/api/v10/users/${userID}`, { 
  headers: {
'Authorization': `Bot ${process.env.TOKEN}`
}}).catch(e => {})
   return userFindData?.data
  }

  async isImage(url) {
    if(typeof url !== 'string') return false;
    if(!/(www|http:|https:)+[^\s]+[\w]/g.test(url)) return false
    const link = await axios.get(url).catch(e => {
      return false
    })
    return link?.headers['content-type'].includes('image')
  }
}