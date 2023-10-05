// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/ERC6551Registry.sol";
import "../src/SafeAccount.sol";
import "../src/interface/IERC6551Account.sol";
import "../src/WhaleFinance.sol";
import "../src/QuotaBeacon.sol";
import "../src/MockERC20.sol";

contract Deploy is Script {

    WhaleFinance public whaleFinance;



    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        address token = 0x74DC1C4ec10abE9F5C8A3EabF1A90b97cDc3Ead8;

        whaleFinance = WhaleFinance(0xE7fB04eA857F9F96939fc98bD17Ff88ce8b0AdF0);
        whaleFinance.setWhiteListedToken(address(token));

        vm.stopBroadcast();
        
    }
}
