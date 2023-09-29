//!Import the Discord.js library
const { Client } = require("discord.js");

//!Define the `random` command
module.exports = {
  name: "random",

  //* The category of the command
  category: "game",

  //* The description of the command
  description: "Get bot ping :/",

  //* The usage of the command
  usage: "random",

  //* The function that is called when the command is executed
  run: async (message) => {
    //* Check if the user has the `MANAGE_MESSAGES` permission
    if (message.member.permissions.has("MANAGE_MESSAGES")) return;
  },
};

//!Define the callback function that is used to invoke commands
module.exports = {
  //* The function that is called when a message is received
  callback: ({ message }) => {
    //* Get the content of the message
    const { content } = message;

    //* Generate a random number between 1 and 2
    const randomNumber = Math.floor(Math.random() * 2 + 1);

    //* Check if the message starts with the `/random` command
    if (content.startsWith("/random")) {
      //* Respond to the message with the random number
      message.reply(randomNumber === 1 ? "Орёл!" : "Решка!"); //! if you wanna use this command in english then change values "Орёл" and "Решка" on "Eagle" "Tails"
    } else {
      //* If the message is not a command, respond with an error message
      message.reply("command is not working!");
    }
  },
};
