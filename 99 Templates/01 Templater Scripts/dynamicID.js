// Get current folder name (e.g., "PROJECT1")
const folder = app.fileManager.getNewFileParent(tp.file.path(true)).name;
const prefix = `${folder}-`;

// List files in folder and find highest existing ID
const files = app.vault.getFiles().filter(f => 
  f.path.startsWith(tp.file.folder(true)) && f.name.startsWith(prefix)
);
const maxId = Math.max(...files.map(f => 
  parseInt(f.name.replace(prefix, "").split("-")[0]) || 0
));
const nextId = (maxId + 1).toString().padStart(3, "0");

// Set new filename
return `${prefix}${nextId}`;