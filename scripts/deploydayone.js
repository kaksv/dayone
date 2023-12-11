const hre = require('hardhat');

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

async function main() {

    const christmasContract = await hre.ethers.deployContract("ChristmasContract");
    await christmasContract.waitForDeployment();

    // Printing the address of the deployed contract
    console.log("Christmas Contract address:",christmasContract.target);

    await sleep(30 * 1000);

    await hre.run("verify:veerify", {
        address: christmasContract.target
    });
 
}
main() 
   .then(() => process.exit(0))
   .catch(err => {
    console.error(err); 
    process.exit(1) 
  });