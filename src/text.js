const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: "text",
    message: "名前を入力してください",
    name: "username",
    initial: "Kerry",
    validate: name => name === "ああああ" ? "適当に入力しないで😡" : true
  });

  console.log(response);
})();
