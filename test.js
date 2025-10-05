import fs from "fs";
import { promises as fsPromises } from "fs";

/* Reding file in Sync
try {
    const data = fs.readFileSync("text.txt", "utf-8");
    const data2 = fs.readFileSync("text.txt", "utf-16le");
    const data3 = fs.readFileSync("text.txt", "base64");
    console.log("UTF-8" + data);
    console.log("DATA 2" + data2);
    console.log("DATA 3" + data3);
} catch (error) {
    console.log("sync reading file error:", error);
}
*/

/* Reading file in Async

// (Old Way)
fs.readFile("text.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Async file reading error", err);
    }
    console.log("Data in Async", data);
})

// (Modern way)
async function readFileAsync() {
    try {
        const data = await fsPromises.readFile("text.txt", "utf-8");
        console.log(data);
    } catch (error) {
        console.log("Promise Error: ", error)
    }
}

readFileAsync();

*/

/* Write File

//In sync
 fs.writeFileSync("text.txt", "This is only for testing \n");

//In async
fs.writeFile("text.txt", "This file will Add for this async calling \n", (err) => {
    if (err) console.log("This error from async calling");
    console.log("Text added successfully");
});

//In async (promise)
fsPromises.writeFile("text.txt", "This is the Promise Text");

*/

/* Append File */
// fsPromises.appendFile("text.txt", "\n This is new Line \n");

if (fs.existsSync("don.txt")) {
    console.log("File exist");
} else {
    console.log("Not exist");
}

if (fsPromises.stat("text.txt")) {
    console.log("File Exist");
}