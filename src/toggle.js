const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'toggle',
    name: 'is_gohan',
    message: 'ご飯かパン',
    initial: true,
    active: 'ご飯',
    inactive: 'パン'
});

  console.log(response);
})();
