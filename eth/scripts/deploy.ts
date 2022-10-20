import { ethers } from "hardhat";
import path from 'path';
import * as fs from "fs";
const hre = require('hardhat');

async function main() {

  const Staking = await ethers.getContractFactory("Staking");
  const staking = await Staking.deploy();

  await staking.deployed();

  console.log(`address - ${staking.address}`);

  saveFrontendFiles({
    Staking:staking
  })
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

function saveFrontendFiles(contracts:any) {
  const contractsDir = path.join(__dirname, '/../..', 'src/shared/lib/contracts')

  Object.entries(contracts).forEach((contract_item:any) => {
    const [name, contract] = contract_item;

    if(contract) {
      fs.writeFileSync(
         path.join(contractsDir, '/', name + '-contract-address.json'),
         JSON.stringify({[name]: contract.address}, undefined, 2)
      )
    }

    const ContractArtifact = hre.artifacts.readArtifactSync(name)

    fs.writeFileSync(
       path.join(contractsDir, '/', name + ".json"),
       JSON.stringify(ContractArtifact, null, 2)
    )


  })
}