const os = require('os');

console.log("CPU Architecture is "+ os.arch()); 

console.log("free memorr is "+ os.freemem());

console.log("Total memorr is "+ os.totalmem());
console.log("os type  is "+ os.type());
console.log("Hostname  is "+ os.hostname());
console.log("Platform   is "+ os.platform());