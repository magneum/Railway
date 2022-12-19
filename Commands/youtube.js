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
  if (!νℓкуяє.args.join(" ")) {
    return vChat.reply(
      `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${νℓкуяє.prefix}${pfname} song/link_`
    );
  }
  if (νℓкуяє.args.join(" ").includes("yout")) {
    if (!νℓкуяє.TubeRegex.test(νℓкуяє.args.join(" "))) {
      return vChat.reply(
        `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} song/link_`
      );
    }
  }
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  let yt_info = await νℓкуяє.playdl.search(νℓкуяє.args.join(" "), {
    limit: 1,
  });
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
> _Cannot Download More Then 10m audio!_`
    );
  }
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  var finalId = νℓкуяє.getVideoId(yt_info[0].url);
  var thumbUrl =
    `http://img.youtube.com/vi/${finalId.id}/maxresdefault.jpg` ||
    `http://img.youtube.com/vi/${finalId.id}/hqdefault.jpg` ||
    `http://img.youtube.com/vi/${finalId.id}/default.jpg`;
  await νℓкуяє.imgB(
    νℓкуяє,
    vChat,
    `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
*🍻Title:* ${yt_info[0].title}
*🙈Views:* ${yt_info[0].views}
*⏰Duration:* ${yt_info[0].durationRaw}
*🔗Link:* ${yt_info[0].url}
*📜Description:* ${yt_info[0].description}`,
    thumbUrl
  );
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  const yClient = require("ytdl-secktor");
  const efs = require("fs-extra");
  var dlsize = 100;
  const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
  };
  let urlYt = νℓкуяє.args.join(" ");
  let randomName = getRandom(".mp3");
  const stream = yClient(urlYt, {
    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
  }).pipe(efs.createWriteStream(`./${randomName}`));
  await new Promise((resolve, reject) => {
    stream.on("error", reject);
    stream.on("finish", resolve);
  });
  let stats = efs.statSync(`./${randomName}`);
  let fileSizeInBytes = stats.size;
  let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
  if (fileSizeInMegabytes <= dlsize) {
    let buttonMessage = {
      audio: efs.readFileSync(`./${randomName}`),
      mimetype: "audio/mpeg",
      fileName: yt_info[0].title + ".mp3",
      headerType: 4,
      contextInfo: {
        externalAdReply: {
          title: yt_info[0].title,
          body: νℓкуяє.pushname,
          renderLargerThumbnail: true,
          thumbnailUrl: thumbUrl,
          mediaUrl: yt_info[0].url,
          mediaType: 1,
          thumbnail: await νℓкуяє.getBuffer(thumbUrl),
          sourceUrl: yt_info[0].url,
        },
      },
    };
    await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
    return efs.unlinkSync(`./${randomName}`);
  }
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
