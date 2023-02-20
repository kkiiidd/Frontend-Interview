const uri = (protocol, domain) => {
    return `${protocol}://${domain}`;
}

console.log(uri('https', 'www.baidu.com'));
console.log(uri('https', 'www.google.com'));
// 柯里化前，https是每次都要输入的 @kofeine,2023-02-20-10:29:38


const uricu = (protocol) => {
    return (domain) => {
        return `${protocol}://${domain}`;
    }
}

const https = uricu('https');
console.log(https('www.baidu.com'));
console.log(https('www.google.com'));

// 柯里化后，只需要输入一次https @kofeine,2023-02-20-10:32:54


