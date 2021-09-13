const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/8fTnG0B.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*FILO MADE BY AFLAHXRD 🙂💘*\n
\n*owner number wa.me/918129624395*\n
\n*CONTACT OWNER THROUGH social networks-instagram @nexus.efx*\n
\n*bot setting video : https://youtu.be/VR_ppqEl2q8*\n
\n*githublink       https://github.com/nexusNw/filo*\n
\n*audio commads     https://github.com/nexusNw/filo/tree/master/uploads*\n
`}) 

}));
