// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Staking is ERC20, Ownable {
    uint constant annual_interest = 20 ether;
    mapping (address => uint) public stake;
    mapping (address => uint) public timer;

    constructor() ERC20("StakingToken", "SKT") {
        _mint(msg.sender, 10_000 * 1 ether);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * 1 ether);
    }

    function _percentages(uint256 amount, uint256 elapsed_time) pure public returns(uint) {
        uint percentages = (annual_interest*elapsed_time) / 31_536_000 ether;
        return (amount * percentages)/100;
//        return (amount * (annual_interest / (elapsed_time * 12 ether / 31_536_000 ether))) / 100 ether;
    }

    function getActiveBalance(address holder) public view returns(uint){
        uint elapsed_time = block.timestamp - timer[holder];
        uint percentages = _percentages(stake[holder], elapsed_time * 1 ether);
        return percentages + stake[holder];
    }

    function deposit(uint amount) public {
        uint approveAmountTokens = allowance(msg.sender, address(this));
        require(approveAmountTokens >= amount, "incorrect number of approved tokens");

        transferFrom(msg.sender, address(this), amount);

        stake[msg.sender] += amount;
        timer[msg.sender] = block.timestamp;
    }

    function tokensWithdraw() public {
        uint active_balance = getActiveBalance(msg.sender);
        require(active_balance > 0, "you don't have any active tokens");

        _mint(msg.sender, active_balance);
        stake[msg.sender] = 0;
        timer[msg.sender] = block.timestamp;
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    receive() external payable {
        // 1 ether - 10_000 tokens
        uint valueTokens = (msg.value) * 10_000;
        _mint(msg.sender, valueTokens);
    }
}
