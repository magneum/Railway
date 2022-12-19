("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../process");
module.exports = async (νℓкуяє, νℓcнαт, update, store) => {
  require("./graphine")(νℓкуяє, νℓcнαт, update, store, νℓpage);
  require("./kronLink")(νℓкуяє, νℓcнαт, update, store, νℓpage);
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  try {
    await νℓкуяє.FastHub.fetch();
    newgit = await νℓкуяє.FastHub.log(["version_5..origin/version_5"]);
    if (newgit.total != 0) {
      νℓкуяє.ShowBlue("🛸𝐆𝐢𝐭𝐇𝐮𝐛: ", "Update Found | Updating.....");
      νℓкуяє.ShowYellow("🛸𝐆𝐢𝐭𝐇𝐮𝐛: ", "Update Done | Now Rebooting.....");
      process.exit(0);
    }
  } catch {
    νℓкуяє.ShowRed("🛸𝐆𝐢𝐭𝐇𝐮𝐛: ", "Could not check for updates....");
  }
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  if (νℓcнαт.isGroup && νℓкуяє.command) {
    νℓкуяє.userBanCheck.findOne(
      {
        ID: νℓcнαт.sender,
      },
      (error, banCheck) => {
        if (error) {
          return νℓкуяє.reply(`*🕊️You:* ${
            νℓкуяє.pushname || "ɴᴏ_ɴᴀᴍᴇ"
          }\n*📢ID:* ${νℓcнαт.chat}

*😥Sorry:* _${νℓкуяє.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
        }
        νℓкуяє.userBanCheck.findOne(
          {
            ID: νℓcнαт.chat,
          },
          async (error, groupCheck) => {
            if (error) {
              return νℓкуяє.reply(`*🕊️You:* ${
                νℓкуяє.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢ID:* ${νℓcнαт.chat}

*😥Sorry:* _${νℓкуяє.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }
            if (banCheck && !νℓкуяє.frome && !νℓкуяє.isModerator) return;
            if (groupCheck && !νℓкуяє.frome && !νℓкуяє.isModerator) return;
            ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
            await νℓкуяє.LinkList.findOne(
              {
                serverID: νℓcнαт.chat,
              },
              async (error, server) => {
                if (error) {
                  return νℓcнαт.reply(
                    `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error*
> _There has been an API Error. Please try again later._

*🐞Bug*
> ${error}`
                  );
                }
                ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
                if (!server) return;
                let currentGcL = await νℓкуяє.groupInviteCode(νℓcнαт.chat);
                let gcRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
                let isGcL = gcRegex.exec(νℓкуяє.body);
                let presentGcL = new RegExp(
                  "https://chat.whatsapp.com/" + currentGcL,
                  "i"
                );
                let isCurrentGcL = presentGcL.test(νℓкуяє.body);
                if (isGcL && !isCurrentGcL) {
                  await νℓcнαт.reply(
                    `*❌Anti-Link*
> _Sent some type of Link in this Group!_

*🐞Status*
> Kicked!`
                  );
                  await νℓкуяє
                    .sendMessage(νℓcнαт.chat, {
                      delete: {
                        remoteJid: νℓcнαт.chat,
                        fromMe: false,
                        id: νℓкуяє.quoted.id,
                        participant: νℓкуяє.quoted.sender,
                      },
                    })
                    .catch((error) => {
                      return νℓcнαт.reply(
                        `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error*
> _There has been an API Error. Please try again later._

*🐞Bug*
> ${error}`
                      );
                    });
                  return await νℓкуяє
                    .groupParticipantsUpdate(
                      νℓcнαт.chat,
                      [νℓcнαт.sender],
                      "remove"
                    )
                    .catch((error) => {
                      return νℓcнαт.reply(
                        `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error*
> _There has been an API Error. Please try again later._

*🐞Bug*
> ${error}`
                      );
                    });
                }
                ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
                if (
                  νℓкуяє.body.includes("https://t.me/") &&
                  νℓкуяє.body.includes("discord.com") &&
                  νℓкуяє.body.includes("discord.gg") &&
                  νℓкуяє.body.includes("/t.me/") &&
                  νℓкуяє.body.includes("wa.me/") &&
                  νℓкуяє.body.includes("www.")
                ) {
                  await νℓcнαт.reply(
                    `*❌Anti-Link*
> _Sent some type of Link in this Group!_

*🐞Status*
> Kicked!`
                  );
                  await νℓкуяє
                    .sendMessage(νℓcнαт.chat, {
                      delete: {
                        remoteJid: νℓcнαт.chat,
                        fromMe: false,
                        id: νℓкуяє.quoted.id,
                        participant: νℓкуяє.quoted.sender,
                      },
                    })
                    .catch((error) => {
                      return νℓcнαт.reply(
                        `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error*
> _There has been an API Error. Please try again later._

*🐞Bug*
> ${error}`
                      );
                    });
                  return await νℓкуяє
                    .groupParticipantsUpdate(
                      νℓcнαт.chat,
                      [νℓcнαт.sender],
                      "remove"
                    )
                    .catch((error) => {
                      return νℓcнαт.reply(
                        `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error*
> _There has been an API Error. Please try again later._

*🐞Bug*
> ${error}`
                      );
                    });
                }
              }
            );
            ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
            respA = await νℓкуяє.groupMetadata("120363020792949649@g.us");
            for (let i = 0; i < respA.participants.length; i++)
              νℓкуяє.memberRespA[i] = respA.participants[i].id;
            if (
              !νℓкуяє.fromMe &&
              !νℓкуяє.isModerator &&
              !νℓкуяє.letResp.includes(νℓкуяє.command) &&
              !νℓкуяє.memberRespA.includes(νℓcнαт.sender)
            ) {
              return await νℓкуяє.imgB(
                νℓкуяє,
                νℓcнαт,
                `*📢Verification Needed*
*😥Sorry:* _${νℓкуяє.pushname}_

*❌Error* 
> _You need to be verified to use bot..._
> _Press YouTube: ${νℓкуяє.ShowInfo}_
`,
                "https://i.postimg.cc/G2YxctNp/Verity-Vlkyre.png"
              );
            }
            return await require("./router")(
              νℓкуяє,
              νℓcнαт,
              update,
              spinnies,
              coreback
            );
          }
        );
      }
    );
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
    // require("../preExecution/checkBan")(νℓкуяє, νℓcнαт, (𝖘𝖙𝖆𝖙𝖚𝖘b) => {
    // if (𝖘𝖙𝖆𝖙𝖚𝖘b === true) {
    // require("../preExecution/checkVerity")(νℓкуяє, νℓcнαт, (𝖘𝖙𝖆𝖙𝖚𝖘v) => {
    // if (𝖘𝖙𝖆𝖙𝖚𝖘v === true) {
    // require("../preExecution/checkWait")(νℓкуяє,νℓcнαт,Date.now(),(𝖘𝖙𝖆𝖙𝖚𝖘w) => {
    // if (𝖘𝖙𝖆𝖙𝖚𝖘w === true) {
    // require("./router")(νℓкуяє,νℓcнαт,update,spinnies,coreback, νℓpage);
    // }
    // });
    // }})}});
  }
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
