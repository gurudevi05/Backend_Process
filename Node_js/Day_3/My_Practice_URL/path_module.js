
import path from "path";

// path.basename()-->Returns the file name 

const filePath="E:/Backend/Node_js/Day_3/My_Practice_URL/modules.js";

console.log(path.basename(filePath));

// path.dirname() -->Returns the folder name (directory path)

console.log(path.dirname(filePath));


// path.extname()-->Returns the file extension

console.log(path.extname(filePath));

// path.join()-->joins multiple path parts safely


const finalPath= path.join("E:","Backend","Node_js","Day_3","My_Practice_URL","modules.js");

console.log(finalPath);

// path.resolve() -->Returns the full absolute path

const result =path.resolve("My_Practice_URL","module.js");
console.log(result);

// path.parse()--Breaks a full path into parts

console.log(path.parse(filePath));

// path.format()-->Builds a path from an object 

// console.log(path.format(filePath));


// path.isAbsolute() -->check if the path is absolute or relative

console.log(path.isAbsolute(filePath));

// path.sep -->Tells which separator your OS uses

console.log(path.sep);







