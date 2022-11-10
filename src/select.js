const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: "select",
    name: "person",
    message: "一人選んでね",
    initial: 1,
    choices: [
      { title: "Johnny", description: "選択時に表示されます" },
      { title: "Kerry", value: "値がindexからここに書いたものに変わります" },
      { title: "Goro", disabled: true },
    ],
    hint: "ヒントも表示できます",
    warn: "選択できません"
  });

  console.log(response);
})();
