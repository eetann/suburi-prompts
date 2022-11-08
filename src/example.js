const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: "text",
    message: "名前を入力してください",
    name: "username",
    initial: "Kerry",
    onRender (kleur) {
      this.msg = kleur.cyan(this.msg)
    }
  });

  console.log(response);
})();
