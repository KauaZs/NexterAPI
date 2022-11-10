const Util = new (require('../../utils/functions.js'))()
module.exports = async function showBanner(req, res) {
  const query = req.query
  const userID = query?.userID
  let format = query?.format
  let size = query?.size

  const formatImages = ['png','gif','webp','svg']

  if(!userID) return res.status(400).send({
    "message": "Usuário nao definido!"
  });
  
  if(!size) size = 2048;
  if(!formatImages.includes(format) && format) return res.status(400).send({
    "message": "Formato de imagem inválido!"
  });
  
  let userData;
  try {
   userData = await Util.fetchUser(userID)
    
  } catch(e) {
    return res.status(400).send({
      "message": 'Usuario nao encontrado'
    })
  }
  if(!format) format = userData?.banner?.startsWith('a_') ? 'gif' : 'webp';
  
  let banner = userData?.banner || null
  const bannerURL = `https://cdn.discordapp.com/banners/${userID}/${banner}.${format}?size=${size}`
  res.status(200).send({
    "banner": banner ? bannerURL : banner
  })
}