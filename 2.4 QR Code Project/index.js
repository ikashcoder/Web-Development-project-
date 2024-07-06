/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// index.js
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [
  {
    type: 'input',
    name: 'url',
    message: 'Enter URL:',
    validate: function(value) {
      const pass = value.match(
        /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid URL';
    }
  }
];

inquirer.prompt(questions).then((answers) => {
  var url =answers.url;
    // Generate QR code image
    const qr_svg = qr.image(url, { type: 'png' });
    const output = fs.createWriteStream('qrcode.png');
    qr_svg.pipe(output);

    output.on('finish', () => {
        console.log('QR code generated and saved as qrcode.png');
      });
}).catch(error => {
  if (error.isTtyError) {
    console.log('Prompt couldn\'t be rendered in the current environment');
  } else {
    console.log('Something went wrong');
  }
});



 


 
