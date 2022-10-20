import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { utils } from "ethers";
import {Staking, Staking__factory} from '../typechain-types'
import {initialBalance, tokens, ONE_YEAR_IN_SECS} from "./config";

describe("Staking", function () {
  async function deployStaking() {

    const [owner, holder, holder2] = await ethers.getSigners();

    const Staking:Staking__factory = await ethers.getContractFactory("Staking");
    const staking:Staking = await Staking.deploy();

    return { staking, owner, holder, holder2 };
  }

  describe("tests", async function () {
    it('deploy', async function() {
      const {staking, owner} = await loadFixture(deployStaking);

      const ownerBalance = await staking.balanceOf(owner.address);

      expect(initialBalance).to.eq(utils.formatEther(ownerBalance))
    })

    it('getting tokens from the owner & purchase of tokens', async function() {
      const {staking, owner, holder, holder2} = await loadFixture(deployStaking);

      await staking.connect(owner).mint(holder.address, tokens);

      const holderBalance = await staking.balanceOf(holder.address);
      expect(tokens).to.eq(+(utils.formatEther(holderBalance)))

      // HOLDER2
      const tx = await holder2.sendTransaction({
        to: staking.address,
        value: ethers.utils.parseEther("1.0")
      });

      const holder2Balance = await staking.balanceOf(holder2.address);
      expect(tokens).to.eq(+(utils.formatEther(holder2Balance)))
    })

    it('staking', async function() {
      const {staking, holder} = await loadFixture(deployStaking);

      await holder.sendTransaction({
        to: staking.address,
        value: ethers.utils.parseEther("1.0")
      });

      const holderBalance = await staking.balanceOf(holder.address);

      await staking.connect(holder).approve(staking.address, holderBalance);
      await staking.connect(holder).deposit(holderBalance)

      const holderBalanceBefore = await staking.balanceOf(holder.address);
      expect(0).to.eq(+(utils.formatEther(holderBalanceBefore)))

      await time.increase(time.duration.years(1))

      const holderActiveBalance = await staking.getActiveBalance(holder.address);
      console.log(utils.formatEther(holderActiveBalance) + ' active')

      await staking.connect(holder).tokensWithdraw();
      const balance_TokensBefore = await staking.balanceOf(holder.address);

    })

    it('withdraw ethers', async function() {
      const {staking, holder, owner} = await loadFixture(deployStaking);

      await holder.sendTransaction({
        to: staking.address,
        value: ethers.utils.parseEther("10.0")
      });


      await expect( staking.connect(owner).withdraw())
         .to.changeEtherBalance(owner.address, utils.parseEther('10'))

    })
  })
});
