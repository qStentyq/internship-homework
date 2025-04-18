const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');


//'react-tasks/task1', 'react-tasks/task-2', 'react-tasks/task-3', 
// 'react-tasks/task-4', ,'react-tasks/task-5','react-tasks/task-6',
// 'react-tasks/task-7', 'react-tasks/task-8', 'angular'
const projects = ['converter','react-tasks/task1', 'react-tasks/task-2', 'react-tasks/task-3', 
  'react-tasks/task-4', ,'react-tasks/task-5','react-tasks/task-6',
  'react-tasks/task-7', 'react-tasks/task-8', 'angular'];
const deployDir = 'docs';

function log(msg) {
  console.log(`\x1b[36m${msg}\x1b[0m`);
}

//Очистка docs
if (fs.existsSync(deployDir)) {
  fs.rmSync(deployDir, { recursive: true });
}
fs.mkdirSync(deployDir);

projects.forEach((proj) => {
  const projPath = path.join(__dirname, proj);
  const distPath = path.join(projPath, 'dist') || '';
  const buildPath = path.join(projPath, 'build', 'client') || '';
  log('Dist path:', distPath);
  log('Build path:', buildPath);
  if(!distPath && !buildPath) {
    log(`⚠️ No dist or build folder found in ${proj}`);
    return;
  }
  const targetPath = path.join(__dirname, deployDir, proj);

  log(`📦 Building ${proj}...`);

  execSync('npm install', { cwd: projPath, stdio: 'inherit' });
  execSync('npm run build', { cwd: projPath, stdio: 'inherit' });

  if(proj === 'react-tasks/task-5') {
    log(`📁 Copying ${buildPath} → ${targetPath}`);
    fs.mkdirSync(targetPath, { recursive: true });
    
    copyDir(buildPath, targetPath);
  }
  else {
    log(`📁 Copying ${distPath} → ${targetPath}`);
    fs.mkdirSync(targetPath, { recursive: true });
    
    copyDir(distPath, targetPath);
    
  }

});

log('✅ All projects built and copied to /docs/');

// ✅ Авто-коммит и пуш
try {
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "📦 Build for deploy to Github Pages"`, {
    stdio: 'inherit',
  });
  execSync('git push', { stdio: 'inherit' });
  log('🚀 Pushed to GitHub!');
} catch (err) {
  log('⚠️ Git push failed (maybe nothing changed?)');
}

// -------------------

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.readdirSync(src).forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.lstatSync(srcPath).isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}
