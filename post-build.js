const fs = require('fs');
const path = require('path');

const typesFileName = 'types.js';
const typesDir = path.join(__dirname, 'types', 'src');
const typesFilePath = path.join(typesDir, typesFileName);

const excludedFiles = [
  path.join(typesDir, 'OAuth.d.ts'),
  path.join(typesDir, 'utils', 'Builder.d.ts')
];

function getRelativeImportPath(filePath, typesToImport) {
  const relativePath = path.relative(path.dirname(filePath), typesFilePath);
  return `import { ${typesToImport.join(', ')} } from "${relativePath.replace(/\\/g, '/')}";\n`;
}

function findRelevantTypes(content) {
  const typeRegex = /@returns\s*{\s*Promise<([^>]+)>/g;
  const matches = new Set();
  let match;
  while ((match = typeRegex.exec(content)) !== null) {
    matches.add(match[1]);
  }
  // also add the types from the @param tags if type starts with Tidy
  const paramRegex = /@param\s*{\s*(Tidy\w*)\s*}/g;
  while ((match = paramRegex.exec(content)) !== null) {
    matches.add(match[1]);
  }
  return Array.from(matches);
}

function addImportToFile(filePath) {
  if (excludedFiles.includes(filePath)) {
    console.log(`Skipping import for ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const typesToImport = findRelevantTypes(content);

  if (typesToImport.length > 0) {
    const importStatement = getRelativeImportPath(filePath, typesToImport);
    if (!content.includes(importStatement)) {
      fs.writeFileSync(filePath, content + importStatement, 'utf8');
      console.log(`Added import to ${filePath}`);
    }
  }
}

function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.d.ts')) {
      addImportToFile(fullPath);
    }
  });
}

processDirectory(typesDir);
// also do webhook.d.ts in parent dir
addImportToFile(path.join(__dirname, 'types', 'webhook.d.ts'));

// replace the types in the types file to start with export type, not type at start of lines with regex
const typesFilePathTS = path.join(typesDir, "types.d.ts");
const typesContent = fs.readFileSync(typesFilePathTS, 'utf8');
const updatedTypesContent = typesContent.replace(/^type /gm, 'export type ');
fs.writeFileSync(typesFilePathTS, updatedTypesContent, 'utf8');
console.log(`Updated types in ${typesFilePathTS}`);
