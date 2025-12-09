const fs = require('fs');
const path = require('path');

function printDirectory(dir, prefix = '', isLast = true, maxDepth = 5, currentDepth = 0) {
  if (currentDepth >= maxDepth) return;
  
  const items = fs.readdirSync(dir);
  
  // Filter out common ignore patterns
  const ignorePatterns = [
    'node_modules',
    '.next',
    '.git',
    'dist',
    'build',
    '.DS_Store',
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    '.env',
    '.env.local'
  ];
  
  const filteredItems = items.filter(item => !ignorePatterns.includes(item));
  
  filteredItems.forEach((item, index) => {
    const isLastItem = index === filteredItems.length - 1;
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    
    // Print current item
    const connector = isLastItem ? '└── ' : '├── ';
    console.log(prefix + connector + item);
    
    // If directory, recurse
    if (stats.isDirectory()) {
      const newPrefix = prefix + (isLastItem ? '    ' : '│   ');
      printDirectory(fullPath, newPrefix, isLastItem, maxDepth, currentDepth + 1);
    }
  });
}

// Get the directory to scan (current directory by default)
const targetDir = process.argv[2] || process.cwd();

console.log('\n📁 Next.js Project Structure:\n');
console.log(path.basename(targetDir) + '/');
printDirectory(targetDir);
console.log('\n');