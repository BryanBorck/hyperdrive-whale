// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/ERC6551Registry.sol";
import "../src/SafeAccount.sol";
import "../src/interface/IERC6551Account.sol";
import "../src/MarFinance.sol";
import "../src/QuotaBeacon.sol";
import "../src/MockERC20.sol";

contract Mint is Script {




    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        MockERC20 stablecoin = MockERC20(0x4F28e4Aa42Cec704c41f7641c60a5a8157B3790e);

        stablecoin.mint(0xab53369e91dcFC275744DC0A30BD3E363B2785e0, 1000000 ether);

        vm.stopBroadcast();
        
    }
}
