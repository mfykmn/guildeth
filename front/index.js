const Web3 = require('web3');
const web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:7545'));
web3.eth.defaultAccount=web3.eth.accounts[0];

web3.eth.accounts.forEach((account) => {
  const balance = web3.eth.getBalance(account);
console.log(account);
console.log(balance);
});