const assert = require("assert");
const { Web3 } = require("web3");
const ganache = require("ganache");

const web3 = new Web3(ganache.provider());

beforeEach(async () => {
  // Get a list of all accounts

  let fetchedAcc = await web3.eth.getAccounts();

  console.log(fetchedAcc);

  // Use one of those accounts to deploy the contract
});

it("", async () => {});
