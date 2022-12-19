("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
ppath = require("path");
require("../System/craft.js");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, vChat) => {
  let urlYt = νℓкуяє.args.join(" ");
  if (!urlYt) {
    return vChat.reply(
      `*❌Error* 
> __${νℓкуяє.pushname}, No query provided!_

*⚡Usage*   
> _${νℓкуяє.prefix}${pfname} song/link_`
    );
  } else if (urlYt.includes("yout")) {
    if (!νℓкуяє.TubeRegex.test(urlYt)) {
      return vChat.reply(
        `*❌Error* 
> __${νℓкуяє.pushname}, No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} song/link_`
      );
    }
  }
  let yt_info = await νℓкуяє.playdl.search(urlYt, {
    limit: 1,
  });
  console.log(yt_info);
  if (!yt_info[0].url) {
    return vChat.reply(
      `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _No Music Found!_`
    );
  }
  if (yt_info[0].durationRaw > 600) {
    return vChat.reply(
      `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _Cannot Download >10min audio!_`
    );
  }
  var { DLoader, thumb } = await νℓкуяє.Tube_Audio(yt_info[0].url, "en136");
  var directShorten = await νℓкуяє.Tinyurl(DLoader);
  await νℓкуяє.imgB(
    νℓкуяє,
    vChat,
    `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*

*🍻Title:* ${yt_info[0].title}
*🙈Views:* ${yt_info[0].views}
*⏰Duration:* ${yt_info[0].durationRaw}
*🔗Link:* ${directShorten}
*📜Description:* ${yt_info[0].description}`,
    thumb
  );
  let randomName = getRandom(".mp3");
  const stream = ytdl(urlYt, {
    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
  }).pipe(fs.createWriteStream(`./${randomName}`));

  return;
  let buttonMessage = {
    document: DLoader,
    mimetype: "audio/mpeg",
    fileName: yt_info[0].title + ".mp3",
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: yt_info[0].title,
        body: νℓкуяє.pushname + "\nVlkyre™ By KryKenz",
        renderLargerThumbnail: true,
        thumbnailUrl: thumb,
        mediaUrl: urlYt,
        mediaType: 1,
        thumbnail: await νℓкуяє.getBuffer(thumb),
        sourceUrl: urlYt,
      },
    },
  };
  return await νℓкуяє.sendMessage(vChat.chat, buttonMessage, {
    quoted: vChat,
  });
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
