//!Import the Discord.js library
const { Client, Message, MessageEmbed } = require("discord.js");

//!Define the `sm` command
module.exports = {
  name: "sm",

  //* Check if the user has the `MANAGE_MESSAGES` permission
  //* This code checks if the user has the `MANAGE_MESSAGES` permission. If they do, the code does nothing. If they don't, the code deletes the message from the channel after it is sent.
  run: async (client, message, args) => {
    if (message.member.permissions.has("MANAGE_MESSAGES")) return;

    //* Get the user to send the message to
    const user =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0])?.user;

    //* Get the message text to send
    const str = args.slice(1).join(" ");

    //* Replace the mention of the user who sent the command
    const newStr = str.replaceAll(`<@${message.author.id}>`, "");

    //* Send the message to the user
    user.send(newStr);

    //* Delete the message from the channel after it is sent
    message.delete({ timeout: 10000 });
  },
};

//!Define the callback function that is used to invoke commands
module.exports = {
  //* Check if the message starts with the `/sm` command
  //* If it does, call the `sm` command
  callback: ({ message }) => {
    const { content } = message;
    if (content.startsWith("/sm")) {
      const args = content.split(" ")[1];
      const user =
        message.mentions.users.first() ||
        message.guild.members.cache.get(args[0])?.user;

      if (user) {
        //* Send the message to the user
        user.send(content.slice(4).replaceAll(`<@${message.author.id}>`, ""));
      } else {
        //* If the bot couldn't find the user
        message.reply("User not found");
      }
    }

    //* Delete the message from the channel after it is sent
    message.delete({ timeout: 10000 });
  },
};
