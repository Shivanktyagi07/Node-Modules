const fs = require('fs');

// Reading from input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Writing to output.txt
  fs.writeFile('output.txt', data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File has been successfully written to output.txt.');
  });
});
