// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Escrow {
    address public payer;
    address public payee;
    address public arbiter;

    bool public isApproved;

    constructor(address _payee, address _arbiter) payable {
        payer = msg.sender;
        payee = _payee;
        arbiter = _arbiter;
    }

    function approve() external {
        require(msg.sender == arbiter, "Only arbiter can approve");
        require(!isApproved, "Already approved");

        isApproved = true;
        payable(payee).transfer(address(this).balance);
    }
}
