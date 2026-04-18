import { expect } from "chai";
import { ethers } from "hardhat";

describe("Escrow", function () {
  it("Should deploy correctly", async function () {
    const [payer, payee, arbiter] = await ethers.getSigners();

    const Escrow = await ethers.getContractFactory("Escrow");
    const escrow = await Escrow.deploy(
      payee.address,
      arbiter.address,
      { value: ethers.parseEther("1") }
    );

    expect(await escrow.payer()).to.equal(payer.address);
    expect(await escrow.payee()).to.equal(payee.address);
    expect(await escrow.arbiter()).to.equal(arbiter.address);
  });

  it("Only arbiter can approve", async function () {
    const [payer, payee, arbiter, attacker] = await ethers.getSigners();

    const Escrow = await ethers.getContractFactory("Escrow");
    const escrow = await Escrow.deploy(
      payee.address,
      arbiter.address,
      { value: ethers.parseEther("1") }
    );

    await expect(
      escrow.connect(attacker).approve()
    ).to.be.revertedWith("Only arbiter can approve");
  });

  it("Transfers funds after approval", async function () {
    const [payer, payee, arbiter] = await ethers.getSigners();

    const Escrow = await ethers.getContractFactory("Escrow");
    const escrow = await Escrow.deploy(
      payee.address,
      arbiter.address,
      { value: ethers.parseEther("1") }
    );

    const initialBalance = await ethers.provider.getBalance(payee.address);

    await escrow.connect(arbiter).approve();

    const finalBalance = await ethers.provider.getBalance(payee.address);

    expect(finalBalance).to.be.gt(initialBalance);
  });
});
