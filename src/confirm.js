const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: "confirm",
    name: "beautiful",
    message: "月が綺麗ですか？",
    initial: false,
  });

  console.log(response);
})();
