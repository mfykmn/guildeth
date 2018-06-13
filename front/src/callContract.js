const Web3 = require('web3');
const web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:7545'));
web3.eth.defaultAccount=web3.eth.accounts[0];

web3.eth.accounts.forEach((account) => {
  const balance = web3.eth.getBalance(account);
console.log(account);
console.log(balance);
});

//コントラクトのアドレス
const address = "0xcdC1Cb1bFcEdAC94Cb7771c9AD427B2D044aBF96";

//abi情報
const abi = [{"constant": false, "inputs": [{"name": "_message", "type": "string"}], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "get", "outputs": [{"name": "_data", "type": "string"}],"payable": false,"stateMutability": "view","type": "function"}];

//実行
contract(address, abi).then((c) => {
  c.set.call("aaaa");
  return c;
}).then((c) => {
  return c.get.call();
}).then((res) => {
  console.log("response:", res);
});

//コントラクトの取得
async function contract(address, abi) {
  return await web3.eth.contract(abi).at(address);
}