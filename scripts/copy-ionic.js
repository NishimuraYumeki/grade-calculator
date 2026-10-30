// Copies Ionic from node_modules into www/ so the app works offline on the phone
const fs = require('fs');
fs.cpSync('node_modules/@ionic/core/dist/ionic', 'www/ionic', { recursive: true });
fs.cpSync('node_modules/@ionic/core/css', 'www/css', { recursive: true });
console.log('Ionic copied to www/');
