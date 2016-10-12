const plan = require('flightplan');

const appName = 'API_DEVENTS';
const tmpDir = `${appName}-${new Date().getTime()}`;

// configuration
plan.target('production', [
  {
    host: 'api.devents.noders.com',
    username: 'root',
    privateKey: '/tmp/devents_prod_api_key',
    agent: process.env.SSH_AUTH_SOCK,
  },
]);

// run commands on localhost
plan.local((local) => {
  local.log('Copy files to remote hosts');
  const filesToCopy = local.ls('-alR ../build', { silent: true });
  // rsync files to all the target's remote hosts
  local.transfer(filesToCopy, `/tmp/${tmpDir}`);
});

// run commands on the target's remote hosts
plan.remote((remote) => {
  remote.log('Move folder to web root');
  remote.sudo(`cp -R /tmp/${tmpDir} ~`, { user: 'root' });
  remote.rm(`-rf /tmp/${tmpDir}`);

  remote.log('Install dependencies');
  remote.sudo(`npm --production --prefix ~/${tmpDir} install ~/${tmpDir}`);

  remote.log('Reload application');
  remote.sudo(`ln -snf ~/${tmpDir} /var/www/appName/${appName}`);
  // remote.sudo('pm2 reload example-com');
});