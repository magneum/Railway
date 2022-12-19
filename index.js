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
require("events").EventEmitter.prototype._maxListeners = 0;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  console.error(error, "Uncaught Exception....");
});
require("./global");
var {
  default: кяуνℓ,
  DisconnectReason,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  downloadContentFromMessage,
  makeInMemoryStore,
  MessageRetryMap,
  jidDecode,
  proto,
} = require("@adiwajshing/baileys");
var fs = require("fs");
var path = require("path");
var pino = require("pino");
var chalk = require("chalk");
var express = require("express");
var { Boom } = require("@hapi/boom"); 
var dbAuth = require("./Authenticator/Authy");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
function ShowRed(Topic, Text) {
  var TShow = chalk.hex("#ff6347").bold(Topic);
  var Show = chalk.hex("#ed7777").italic.bold(Text);
  console.log(chalk.black(chalk.bgBlack(TShow)), chalk.black(Show));
}
function ShowBlue(Topic, Text) {
  var TShow = chalk.hex("#008B8B").bold(Topic);
  var Show = chalk.hex("#818d94").italic.bold(Text);
  console.log(chalk.black(chalk.bgBlack(TShow)), chalk.black(Show));
}
function ShowGreen(Topic, Text) {
  var TShow = chalk.hex("#2D5A27").bold(Topic);
  var Show = chalk.hex("#849871").italic.bold(Text);
  console.log(chalk.black(chalk.bgBlack(TShow)), chalk.black(Show));
}
function ShowYellow(Topic, Text) {
  var TShow = chalk.hex("#8B8000").bold(Topic);
  var Show = chalk.hex("#ECCF8D").italic.bold(Text);
  console.log(chalk.black(chalk.bgBlack(TShow)), chalk.black(Show));
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var νℓpage = express();
var sequelize = DATABASE;
var PORT = process.env.PORT || 8080;
var store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});
var getVersionWaweb = () => {
  var version;
  try {
    var a = fetchJson(
      "https://web.whatsapp.com/check-update?version=1&platform=web"
    );
    version = [a.currentVersion.replace(/[.]/g, ", ")];
  } catch {
    version = [2, 2204, 13];
  }
  return version;
};
var msgRetryCounterMap = MessageRetryMap;
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
async function кяукєηz() {
  await sequelize.sync();
  var { state, sandbox } = await dbAuth();
  await monGoose
    .connect(MONGO_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .catch((error) => {
      ShowRed("🦋Info: ", "Unable to Connected with 🍃Provisional Mongoose.");
      console.log(error);
      process.exit(0);
    })
    .then(ShowGreen("🦋Info: ", "Connected with 🍃Provisional Mongoose."));
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  var νℓкуяє = кяуνℓ({
    auth: state,
    msgRetryCounterMap,
    printQRInTerminal: true,
    defaultQueryTimeoutMs: undefined,
    logger: pino({ level: "silent" }),
    browser: ["Vlkyre", "Chrome", "4.0.0"],
    version: getVersionWaweb() || [2, 2242, 6],
    fireInitQueries: false,
    downloadHistory: false,
    syncFullHistory: false,
    shouldSyncHistoryMessage: false,
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
        return msg.message || undefined;
      }
      return {
        conversation: "An Error Occurred, Repeat Command!",
      };
    },
  });
  store.bind(νℓкуяє.ev);
  νℓкуяє.ev.on("creds.update", (update) => sandbox(update));
  νℓкуяє.ev.on("connection.update", async (update) => {
    var { lastDisconnect, connection, qr } = update;
    var fs = require("fs");
    if (connection == "open")
      console.log("🦋Info:", "Successfully connected to whatsapp...");
    if (connection === "close") {
      console.log("🦋Info:", "Connection terminated...");
      var reason = new Boom(lastDisconnect.error).output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log("🦋Info:", "Bad Session File.Please Scan Again...");
        process.exit(0);
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("🦋Info: ", "Connection closed.Reconnecting....");
        await кяукєηz();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("🦋Info:", "Connection Lost from Server.Reconnecting...");
        await кяукєηz();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log(
          "🦋Info:",
          "Connection Replaced, Another New Session Opened.Please Close Current Session First..."
        );
        await кяукєηz();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log("🦋Info:", "Device Logged Out.Please Scan Again...");
        await кяукєηz();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("🦋Info: ", "Restart Required.Restarting...");
        await кяукєηz();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("🦋Info: ", "Connection Timedout.Reconnecting...");
        await кяукєηz();
      } else {
        νℓкуяє.end(
          `Unknown DisconnectReason: ${reason}|${lastDisconnect.error}`
        );
      }
    }
    if (qr) {
      console.clear();
      console.log(qr);
      console.log("🦋Info:", "New QR generated.Please Scan...");
    }
  });
}
кяукєηz().catch((error) => console.log(error));
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νℓpage.listen(PORT, () => {
  if (fs.existsSync(".env")) {
    ShowGreen(
      "🦋Info: ",
      "Vlkyre Router Running Locally in: http://localhost:" + PORT
    );
  } else {
    ShowGreen("🦋Info: Vlkyre Router Running in Docker/Node");
  }
});
νℓpage.get("/", (req, res) => res.redirect("https://krykenz.github.io/Vlkyre"));
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
