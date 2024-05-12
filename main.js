const { exec } = require("child_process");

const argValue = "siddhant";
const command = `./main ${argValue}`;

exec(command, (error, stdout) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`${stdout}`);
});
