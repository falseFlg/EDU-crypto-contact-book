require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/ba4ddd791ce64e5eb78ce255db9116ca", //Infura url with projectId
      accounts: [
        "0x30c3b302c392d5fc522c3543aedc347c2c135adc5061d03f3d9753a4ecd1c3c5",
      ], // add the account that will deploy the contract (private key)
    },
  },
};
