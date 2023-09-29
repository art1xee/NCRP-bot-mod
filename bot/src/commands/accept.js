//!Include the discord.js library
const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "accept",

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
  callback: ({ message }) => {
    const { content } = message;
    //!в будущем создавая новую команду - меняйте значение в скобках в нижней строчке if (content.startsWith("/accept"))
    if (content.startsWith("/accept")) {
      // Get command arguments
      // This code takes the first argument to the command, which is the name of the user to whom the message is being sent.
      const args = content.split(" ")[1];
      // Get the user mentioned in the message
      // This code gets the user mentioned in the message, if there is one. If there is no user, then the code tries to find the user by his name.
      const user =
        message.mentions.users.first() ||
        message.guild.members.cache.get(args)?.user;

      //*send a PM message to the user if the bot has found the user
      if (user) {
        user.send(
          `Привет! Твоя заявка на NC:RP[FiveM] рассмотрена. Для продолжения создайте тикет в канале https://discord.com/channels/899951952614551593/1085550399559319652 с названием: "Моя заявка рассмотрена" и далее вам напишут.`
        );
      } else {
        message.reply("User not found");
      }
      // Delete the message in the channel after it has been sent
      message.delete({ timeout: 10000 });
    }
  },
};
