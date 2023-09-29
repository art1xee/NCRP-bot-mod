//! Import the discord.js library
const { Client } = require("discord.js");

module.exports = {
  name: "info",
  category: "info",
  description: "Get bot ping :/",
  usage: "info",
  /**
   * @param {Message} message
   *
   */
  //* Check if the user has permission to manage messages
  run: async (message) => {
    if (message.member.permissions.has("MANAGE_MESSAGES")) return;
  },
};

module.exports = {
  // Callback function to handle commands
  callback: ({ message }) => {
    const { content } = message;
    const args = content.split(" ")[1];
    //! In the future, when creating a new command, change the value in parentheses in the line below if (content.startsWith("/info"))
    if (content.startsWith("/info")) {
      message.reply(
        `Если вы хотите узнать побольше о нашем NC:RP проекте, вы можете перейти по ссылке и прочитать всю нужную информацию -> https://www.ncrpfivemsite.cf/.`
      );
    } else {
      message.reply("command is not working!");
    }
  },
};
