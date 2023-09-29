//!Include the discord.js library
const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "denial",

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   *
   */

  //*Check whether the user has rights to manage messages
  //*This code checks if the user has rights to manage messages. If yes, then the code does nothing. If not, then the code deletes the message in the channel after it is sent
  run: async (client, message, args) => {
    if (message.member.permissions.has("MANAGE_MESSAGES")) return;
    // Delete the message in the channel after it has been sent
    message.delete({ timeout: 10000 });
  },
};

module.exports = {
  //call the callback function with which we can use commands
  callback: ({ message }) => {
    const { content } = message;

    //!в будущем создавая новую команду - меняйте значение в скобках в нижней строчке if (content.startsWith("/denial"))
    if (content.startsWith("/denial")) {
      //Get command arguments
      //This code takes the first argument of the command, which is the name of the user to whom the message is sent.
      const args = content.split(" ")[1];

      //Get the user mentioned in the message
      //This code gets the user mentioned in the message, if there is one. If there is no user, then the code tries to find the user by his name.
      const user =
        message.mentions.users.first() ||
        message.guild.members.cache.get(args)?.user;

      //*send a PM message to the user if the bot has found the user
      if (user) {
        user.send(
          `Привет! Твоя заявка на NC:RP[FiveM] рассмотрена. К сожалению, тебя не приняли. Заявку можно переподать, но обязательно подумай, что могло быть не так с ней и попробуй её исправить, удачи!`
        );
      } else {
        //*shows an error if the bot did not find the required user
        message.reply("User not found");
      }
      // Delete the message in the channel after it has been sent
      message.delete({ timeout: 10000 });
    }
  },
};
