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
require("../../global.js");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, vcнaт) => {
  try {
    var data = await νℓкуяє.Anime.punch();
    var animeExt = data.slice(-4);
    if (!animeExt.endsWith(".gif")) {
      return vcнaт.reply(
        `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._`
      );
    }
    console.log(data);
    var rando = Math.random().toString(36).replace(".", "");
    var dataGname = `${pfname}_${rando}.gif`;
    var dataMname = `${pfname}_${rando}.mp4`;
    νℓкуяє
      .request(data)
      .pipe(νℓкуяє.fs.createWriteStream(dataGname))
      .on("close", () => {
        νℓкуяє.exec(
          νℓкуяє.pathFFmpeg +
            ` -i ${dataGname} -pix_fmt yuv420p -c:v libx264 -movflags +faststart -filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2' ${dataMname}`,
          async (error) => {
            if (error) {
              return vcнaт.reply(`*🕊️You:* ${
                νℓкуяє.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢ID:* ${vcнaт.chat}

*😥Sorry:* _${νℓкуяє.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
            if (νℓкуяє.args[0] && νℓкуяє.args[0].startsWith("@")) {
              let mention = νℓкуяє.mentionByTag;
              let dataFor =
                (await mention[0]) || vcнaт.msg.contextInfo.participant;
              return await νℓкуяє
                .sendMessage(
                  vcнaт.chat,
                  {
                    gifPlayback: true,
                    video: νℓкуяє.fs.readFileSync(dataMname),
                    caption: `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
*🎋Feeling:* ${pfname}
*📢From:* ${νℓкуяє.pushname}
*⚡For:* @${dataFor.split("@")[0] || ""}`,
                    mentions: [dataFor, vcнaт.sender],
                  },
                  { quoted: vcнaт }
                )
                .then(
                  νℓкуяє.fs.unlinkSync(dataGname),
                  νℓкуяє.fs.unlinkSync(dataMname)
                );
              ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
            } else if (νℓкуяє.mentionByReply) {
              let dataFor =
                vcнaт.mtype == "extendedTextMessage" &&
                vcнaт.message.extendedTextMessage.contextInfo != null
                  ? vcнaт.message.extendedTextMessage.contextInfo
                      .participant || ""
                  : "";
              return await νℓкуяє
                .sendMessage(
                  vcнaт.chat,
                  {
                    gifPlayback: true,
                    video: νℓкуяє.fs.readFileSync(dataMname),
                    caption: `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
*🎋Feeling:* ${pfname}
*📢From:* ${νℓкуяє.pushname}
*⚡For:* @${dataFor.split("@")[0] || ""}`,
                    mentions: [dataFor, vcнaт.sender],
                  },
                  { quoted: vcнaт }
                )
                .then(
                  νℓкуяє.fs.unlinkSync(dataGname),
                  νℓкуяє.fs.unlinkSync(dataMname)
                );
              ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
            } else {
              return await νℓкуяє
                .sendMessage(
                  vcнaт.chat,
                  {
                    gifPlayback: true,
                    video: νℓкуяє.fs.readFileSync(dataMname),
                    caption: `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
*⚡For:* ${νℓкуяє.pushname}
*🎋Feeling:* ${pfname}`,
                  },
                  { quoted: vcнaт }
                )
                .then(
                  νℓкуяє.fs.unlinkSync(dataGname),
                  νℓкуяє.fs.unlinkSync(dataMname)
                );
            }
          }
        );
      });
  } catch (error) {
    return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
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
