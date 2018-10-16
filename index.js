const { exec } = require('child_process');
const config = require('./config')

config.projects.forEach(project => {
  if (!project.path) return;
  console.log(`Building ${ project.path }`);
  exec(`cd ${ project.path } && npm install --scripts-prepend-node-path=auto && ${ project.command }`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});
