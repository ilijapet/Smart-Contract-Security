const { expect } = require("chai");

describe("AttackingCoinFlip contract", function () {
  it("Basic testing of Attack Coin Flip contract", async function () {
    
    const AttackingCoinFlip = await ethers.getContractFactory("AttackingCoinFlip");

    const attackingCoinFlip = await AttackingCoinFlip.deploy();
    // await attackingCoinFlip.deployed();

    const result = await attackingCoinFlip.testCoin();
    console.log(result);
    expect(result).to.equal(10);
  });
});

