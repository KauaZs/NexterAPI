const Canvas = require('canvas')
const { fillTextWithTwemoji } = require('node-canvas-with-twemoji-and-discord-emoji');
const express = require('express')
const Util = new (require('../../utils/functions.js'))()

module.exports = async function showImage(req, res) {
  
    const query = req?.query

    const user_1 = query?.avatarOne;
    const user_2 = query?.avatarTwo;
    let emoji = query?.emoji;

    if(!user_1) return res.status(400).send({
      "message": 'Defina o avatar do primeiro usuário.'
    });
  if(!user_2) return res.status(400).send({
      "message": 'Defina o avatar do segundo usuário.'
    });
  if(!Util.isImage(user_1)) return res.status(400).send({
    "message": "O link do primeiro avatar não pertence a uma imagem!"
  })
  if(!Util.isImage(user_2)) return res.status(400).send({
    "message": "O link do segundo avatar não pertence a uma imagem!"
  })
  
  if(!emoji) emoji = '♥️'
  if(Util.getEmojis(emoji).length < 1) return res.status(400).send({
    "message": 'Nenhum emoji foi encontrado!'
  })
   const canvas = Canvas.createCanvas(384, 128)  
   const ctx = canvas.getContext('2d')
   const background = await 
   Canvas.loadImage('./background.png')
   ctx.drawImage(background, 0, 0, 384, 128)
  
  ctx.fillStyle = "#000000"
  ctx.font = "85px Arial"
  await fillTextWithTwemoji(ctx, emoji, 143, 95);
 
  const avatar_1 = await Canvas.loadImage(user_1);
  const avatar_2 = await Canvas.loadImage(user_2) 
  
  ctx.drawImage(avatar_1, 0, 0, 130, 130);
  ctx.drawImage(avatar_2, 255, 0, 130, 130)

  res.set({'Content-Type': 'image/png'})
  res.status(200).send(canvas.toBuffer())
}