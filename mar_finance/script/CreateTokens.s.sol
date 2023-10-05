// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/MockERC20.sol";

contract Create is Script {
    MockERC20 public weth;


    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        weth = new MockERC20("WETH", "WETH");
        weth.mint(0xab53369e91dcFC275744DC0A30BD3E363B2785e0, 100000 ether);


        console.log("WETH address: %s", address(weth));

        vm.stopBroadcast();
        
    }
}