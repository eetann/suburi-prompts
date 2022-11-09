const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: "list",
    name: "people",
    message: "参加者を教えて下さい",
    separator: ":"
  });

  console.log(response);
})();
