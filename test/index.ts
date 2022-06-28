import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });

describe("NFT", function() {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
    const NFT = await ethers.getContractFactory("MyNFT");
    const nft = await NFT.deploy();
    const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
    await nft.deployed();
    await nft.mint("0x7028f6756a9b815711bc2d37e8d5be23fdac846d", URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});

