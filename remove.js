const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function removeLogs() {
    if (fs.existsSync(logsDir)) {
        
        const files = fs.readdirSync(logsDir);
        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath); 
            console.log(`delete files: ${file}`);
        });

        fs.rmdirSync(logsDir);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs  not exist');
    }
}
removeLogs();
