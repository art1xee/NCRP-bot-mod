//!Include the discord.js library
const { Client } = require("discord.js");

module.exports = {
  name: "background",
  category: "info",
  description: "Get bot ping :/",
  usage: "background",
  /**
   * @param {Message} message
   *
   */
  //*Check whether the user has rights to manage messages
  run: async (message) => {
    if (message.member.permissions.has("MANAGE_MESSAGES")) return;
  },
};

module.exports = {
  //call the callback function with which we can use commands
  callback: ({ message }) => {
    const { content } = message;
    const args = content.split(" ")[1];
    //!When creating a new command in the future, change the value in brackets in the bottom line if (content.startsWith("/background"))
    if (content.startsWith("/background")) {
      message.reply(
        //! I’ll say right away that I don’t know what the text with veta will look like in your code, but if it looks great in your code, then I beg you, DO NOT TOUCH IT! now everything is correct and beautifully written
        `
        Имя:

Фамилия:
       
Дата рождения и возраст:
       
Пол: Мужчина/Женщина
       
Место рождения: Страна/Штат/Город, Штат Сан-Андреас/Либерти-Сити/Вайс-Сити
(И указать город рождения, например:Лос-Сантос,Либерти-Сити,Вайс-Сити,Сан-Фиерро,Лас-Вентурас и т.д)
       
Вероисповедование:
       
Гражданство: (Если вы будете идти в полицию то у вас должно быть гражданство США минимум 5 лет)
       
Этническая принадлежность: Европеец (Светлокожий)/Афроамериканец/Латиноамериканец/Азиат/Коренной американец (Индеец)
       
Рост:
       
Вес:
       
Описание телосложения:
       
Мед.история:
       
История персонажа:
       
План
            1. Рассказать о характере персонажа
       
            2. Что повлияло на характер
       
            3. Образование, работа
       
            4. Самые значимые события в жизни
       
            5. Свои добавления (По желанию)`
      );
    } else {
      message.reply("command is not working!");
    }
  },
};
