//!connect Discord library in our project
const { Client, IntentsBitField } = require("discord.js");
require("dotenv/config");
//*add some intents
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
//*send message in console if our bot turn ON
client.on("ready", () => {
  console.log("The bot is ready!!");
});

//*connect bot token
client.login(process.env.TOKEN);
