(async () => {
  const { createAudioResource } = require("@discordjs/voice");
  const play = require("play-dl");
  const fs = require("fs");

  let yt_info = await play.search("Eyes Blue or Brown", {
    limit: 1,
  });

  let stream = await play.stream(yt_info[0].url);

  fs.createWriteStream(stream);
})();
