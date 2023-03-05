const { exec } = require('child_process');

// User input is used to construct a command that is passed to exec
const userInput = process.argv[2];
exec(`ls ${userInput}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
