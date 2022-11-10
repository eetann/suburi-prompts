const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: "autocomplete",
    name: "person",
    message: "一人選んでね",
    choices: [
      { title: "Kerryabc"},
      { title: "Kerrydef", value: "値がtitleからここに書いたものに変わります" },
      { title: "Kerryghi" },
      { title: "Johnny"},
      { title: "Goro" },
    ],
  });

  console.log(response);
})();
