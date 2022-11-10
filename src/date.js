const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: "date",
    name: "day",
    message: "空いてる日時を教えて下さい",
    initial: new Date(),
    validate: date => date < Date.now() ? "今日以降を指定してください": true,
    mask: "YYYY年M月D日(dddd) H時m分",
    locales: {
      weekdays: ['日', '月', '火', '水', '木', '金', '土'],
    },
  });

  console.log(response);
})();
