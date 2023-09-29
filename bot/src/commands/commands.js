//!Include the discord.js library
const { Client } = require("discord.js");

module.exports = {
  name: "help",
  category: "info",
  description: "Get bot ping :/",
  usage: "help",
  /**
   * @param {Message} message
   *
   */
  //* Check if the user has rights to manage messages
  run: async (message) => {
    if (message.member.permissions.has("MANAGE_MESSAGES")) return;
  },
};

module.exports = {
  //call the callback function with which we can use commands
  callback: ({ message }) => {
    const { content } = message;
    //! when creating a new command in the future, change the value in brackets in the bottom line if (content.startsWith("/help"))
    if (content.startsWith("/help")) {
      //! you can change your list of commands
      message.reply(`Команды бота и их приминение:

            КОМАНДЫ ДЛЯ АДМИНОВ (МАСТХЕВ):

        '/accept' - (Для администрации) Если заявка пользователя прошла проверку и она понравилась администрации, то админ может написать эту команду, затем упомянуть пользователя написав его 'user' и 'id',
         и пользователь получит в лс сообщение от бота, что он принят на наш сервер.
        
        '/denial' - (Для администрации) Если заявка пользователя прошла проверку, но она не понравилась администрации, то админ может написать эту команду, затем упомянуть пользователя написав его 'user' и 'id',
         и пользователь получит в лс сообщение от бота, что ему отказали в присоединении на наш проект.
        
        '/sm' - (Для администрации) Если админу нужно связаться с игроком сервера, то он может написать эту команду, 'user' и 'id' игрока, и нужный текст, а затем бот отправит сообщение игроку ему в лс.
        
        '/random' - Игра Орёл или Решка.
        
        '/commands' (эта команда) - Отправляет список команд и их приминение.
        
        '/info' - Даёт ссылку на основной сайт нашего проекта, где есть вся нужная информация.

        '/background' - квента
        `);
    } else {
      message.reply("command is not working!");
    }
  },
};
