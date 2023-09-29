//!connect Discord library in our project
const { Client, IntentsBitField } = require("discord.js");
require("dotenv/config");

//!connect folder command-handler in main file
const CH = require("command-handler");

//!connect module "path" from command-handler/src/util/get-all-files.js
const path = require("path");
const { promiseHooks } = require("v8");

//*add some intents
const client = new Client({
  intents: [
    // IntentsBitField.Flags.Guilds - allows the bot to see the servers it is on
    // IntentsBitField.Flags.GuildMembers - allows the bot to see the users on the servers it is on
    // IntentsBitField.Flags.GuildMessages - allows the bot to see the messages in channels on the servers it is on
    // IntentsBitField.Flags.MessageContent - allows the bot to see the contents of messages
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

//*send message in console if our bot turn ON
client.on("ready", () => {
  // Outputs a message to the console when the bot is ready to work
  console.log("The bot is ready!!");

  // Creates a new instance of the command handler
  new CH({
    client,
    commandsDir: path.join(__dirname, "commands"), // Specifies the path to the directory with commands
  });
});

client.login(process.env.TOKEN); //* Connects the bot to Discord using the bot token
