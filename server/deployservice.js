import { exec } from 'child_process';
import path from 'path';

async function deployToVercel(dir) {
  return new Promise((resolve, reject) => {
    const cmd = `vercel --prod --confirm ${dir}`;

    exec(cmd, { cwd: dir }, (error, stdout, stderr) => {
      if (error) return reject(error);
      const match = stdout.match(/https:\/\/[\w.-]+\.vercel\.app/);
      return match ? resolve(match[0]) : reject(new Error('Deployment failed'));
    });
  });
}

export default  { deployToVercel };
