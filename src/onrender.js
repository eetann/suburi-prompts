const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: "text",
    message: "onRenderのthis.msgがあったら上書きされます",
    name: "username",
    initial: "Kerry",
    onRender(kleur) {
      this.msg = `${kleur.bgBlue().yellow().underline("kleurが使える")}`;
    }
  });

  console.log(response);
})();
