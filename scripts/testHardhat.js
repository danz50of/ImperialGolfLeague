// scripts/testHardhat.js
const hre = require("hardhat");

console.log("Hardhat runtime:", hre.ethers ? "OK" : "Missing");