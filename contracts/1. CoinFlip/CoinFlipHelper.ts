import { expect } from "chai";
import { ethers } from "hardhat";


const helper = async (victim: any, attacker: any) => {   
   for (var x:number = 0; x<10; x++) {
       await attacker.hackCoin();
   };
}

export default helper;
