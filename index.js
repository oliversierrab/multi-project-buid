const { exec } = require('child_process');
exec('cd project1\ && rm -rf node_modules && npm install --scripts-prepend-node-path=auto && npm run build --scripts-prepend-node-path=auto', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

exec('cd project2\ && rm -rf node_modules && npm install --scripts-prepend-node-path=auto && npm run build --scripts-prepend-node-path=auto', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
