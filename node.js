const fs = require('fs');
const path = require('path');

//const filePath = "C:\\Users\\Aditi\\OneDrive\\Documents\\25-28 Addressing Modes and Data Transfer and Manipulation.pptx";

const filePath = path.join(__dirname , 'QUESTIONS.pdf');

const readStream = fs.createReadStream(filePath , {highWaterMark: 1024});

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
    console.log('Chunk size:', chunk.length);
});

readStream.on('end', () => {
    console.log('Finished reading file');
});

readStream.on('error', (err) => {
    console.log('Error reading file', err);
});