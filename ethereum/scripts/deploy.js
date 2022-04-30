const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners(); //get the account to deploy the contract

  console.log("Deploying contracts with the account:", deployer.address);

  const ContactFactory = await ethers.getContractFactory("ContactFactory");
  const contactFactory = await ContactFactory.deploy();

  await contactFactory.deployed();

  console.log("contactFactory deployed to:", contactFactory.address);
}

// TODO: забрать приватный ключ по мнемонической фразе
// let mnemonic = "";
// let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
// console.log(mnemonicWallet.privateKey);

//0x5FbDB2315678afecb367f032d93F642f64180aa3

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
