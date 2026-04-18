import { ethers } from "hardhat";

async function main() {
  const [deployer, payee, arbiter] = await ethers.getSigners();

  console.log("Deploying with:", deployer.address);

  const Escrow = await ethers.getContractFactory("Escrow");

  const escrow = await Escrow.deploy(
    payee.address,
    arbiter.address,
    {
      value: ethers.parseEther("1")
    }
  );

  await escrow.waitForDeployment();

  console.log("Escrow deployed to:", await escrow.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
