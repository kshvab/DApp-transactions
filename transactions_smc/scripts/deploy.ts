import { ethers } from "hardhat";

const deploy = async () => {
  const Transactions = await ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Greeter deployed to:", transactions.address);
};

const runDeploy = async () => {
  try {
    await deploy();
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

runDeploy();
