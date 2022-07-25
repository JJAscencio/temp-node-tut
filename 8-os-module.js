const os = require('os') //built in module no need for ./

// info about current user

const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds
console.log(`The Sistem Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);