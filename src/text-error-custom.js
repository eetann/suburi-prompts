const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: "text",
    message: "名前を入力してください",
    name: "username",
    initial: "Kerry",
    validate: name => name.match(/^a{3,}/) ? "適当に入力しないで😡" : true,
    onRender(kleur) {
      this.errorMsg = `${kleur.reset().bgYellow().black(this.errorMsg)}`;
    }
  });

  console.log(response);
})();
