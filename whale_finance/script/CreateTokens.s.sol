// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/MockERC20.sol";

contract Create is Script {
    MockERC20 public zusd;
    MockERC20 public weth;


    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        zusd = new MockERC20("WETH", "WETH");
        zusd.mint(0x0CCfc28Ce76f48726C59Fc2a598b6eAac8bd3Ab4, 100 ether);


        console.log("ZUSD address: %s", address(zusd));

        vm.stopBroadcast();
        
    }
}