const { readFile, writeFile } = require('fs'); //async non blocking

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => { //need to add utf8 if not it will show buffer
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`
            , (err, result) => {
                if (err) {
                    console.log(errs);
                    return
                }
                console.log('done with this task');

            })
    })
})
console.log('Starting next task');