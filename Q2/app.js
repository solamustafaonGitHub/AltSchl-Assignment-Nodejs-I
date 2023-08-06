// Using the FS module:Create directory/folder named: “Students”
// import fs module
const fs = require('fs')
const path = require('path')
// // create a directory named Students
// fs.mkdir('Students', (err) => { 
//     if (err) { 
//         return console.error(err); 
//     } 
//     console.log('Directory created successfully!'); 
// }
// )


// In the Students directory, create a file named user.js

const dirPath = path.join(__dirname, 'Students', 'user.js')
// fs.open(dirPath, 'w+', (err) => {
//         if (err){
//         return console.error(err)}
//         console.log('File created successfully!')   
//     }
// )


// Update the Students directory to “Names”
const oldPath = path.join(__dirname, 'Students')
const newPath = path.join(__dirname, 'Names')
// fs.rename(oldPath, newPath, (err) => {  
    
//     if (err) {
//         return console.error(err);
//         }
//         console.log('Directory renamed successfully!');
//         }
//          )	

// Add your name as content to the file user.js
const filePath = path.join(__dirname, 'Names', 'user.js')   
// const content = 'Fibi'
// fs.writeFile(filePath, content, (err) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Data written successfully!');
//     }
//     )

    // Update the file and add your age, sex, nationality, phone number and any other information about yourself
const dirPath2 = path.join(__dirname, 'Names', 'user.js')
const content2 = "\nAge:20yrs \nSex:Female \nNationality:Nigeria \nPhone Number:09012345678"
// fs.appendFile(dirPath2, content2, (err) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Data updated successfully!');
//     }
//     )

// Update the file user.js to {your_name}.js eg daniel_adesoji.js
const oldPath2 = path.join(__dirname, 'Names', 'user.js')
const newPath2 = path.join(__dirname, 'Names', 'fibi.js')
// fs.rename(oldPath2, newPath2, (err) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('File renamed successfully!');
//     }
//     )

// Read the contents from {your_name}.js. User fs.open or fs.readFile
const filePath2 = path.join(__dirname, 'Names', 'fibi.js')
// fs.readFile(filePath2, 'utf8', (err, data) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data);
//     }
//     )


// Delete the file {your_name}.js
const filePath3 = path.join(__dirname, 'Names', 'fibi.js')
// fs.rm(filePath3, (err) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('File deleted successfully!');
//     }
//     )

// Delete the directory “Names"
const dirPath3 = path.join(__dirname, 'Names')
// fs.rmdir(dirPath3, (err) => {
//     if(err){
//         return console.error(err)
//     }
//     console.log('Directory deleted successfully!')
// })
