
import process from "process";

// current working directory

console.log("Current Directory:",process.cwd());

// Node.js version

console.log("Node.js version:",process.version);

// platforms(windows/linux/mac)

console.log("Platform:",process.platform);

// Process ID (unique number of this running process)

console.log("Process ID:",process.pid);

// Memory usage info

console.log("Memory usage:",process.memoryUsage());

// Environment variables

console.log("Environment Variables:",process.env.USER);

// Command Line Arguments

console.log("Command Line Arguments:",process.argv);





