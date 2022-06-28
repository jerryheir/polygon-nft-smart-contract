// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.getContractFactory("MyNFT");
  const URI = "ipfs://YOUR_METADATA_CID"
  const WALLET_ADDRESS = "YOUR_WALLET_ADDRESS"
  const CONTRACT_ADDRESS = "YOUR_NFT_CONTRACT_ADDRESS"
  const contract = NFT.attach(CONTRACT_ADDRESS);

  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});