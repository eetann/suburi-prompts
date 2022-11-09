const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: "number",
    name: "num",
    message: "-10から10の間で好きな数字を入力してね",
    initial: 7,
    min: -10,
    max: 10,
  });

  console.log(response);
})();
