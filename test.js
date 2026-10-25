const add = require('./app');

if(add(10,20) === 30) {
    console.log('Test passed');
}else{
    throw new Error('Test failed');
}