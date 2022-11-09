const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: "text",
    message: "onRenderのthis.msgがあったら上書きされます",
    name: "username",
    initial: "Kerry",
    onRender(kleur) {
      this.msg = `名前を入力してください（${kleur.red("色つきます")}）\n改行もできる\n${kleur.yellow().bgRed().underline("黄色文字と赤背景下線")}`;
    }
  });

  console.log(response);
})();
