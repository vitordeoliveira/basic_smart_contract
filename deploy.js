const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "require risk roof recall wheat dumb tube teach clerk feel iron cup",
  "https://sepolia.infura.io/v3/168619f403aa4816b60b91a751781916",
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(accounts);

  provider.engine.stop();
};

deploy();
