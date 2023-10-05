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

contract Deploy is Script {
    ERC6551Registry public registry;

    QuotaToken public quotaTokenImplementation;
    MockERC20 public stablecoin;
    SafeAccount public safeAccount;
    MarFinance public marFinance;
    BeaconERC20 public beacon;


    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
        quotaTokenImplementation = new QuotaToken();
        registry = new ERC6551Registry();

        stablecoin = new MockERC20("BTCUSD", "BTCUSD");

        safeAccount = new SafeAccount();
        beacon = new BeaconERC20(address(quotaTokenImplementation)); //quota

        marFinance = new MarFinance(address(registry), address(safeAccount), address(beacon), address(stablecoin));
        marFinance.setWhiteListedToken(address(stablecoin));

        console.log("QuotaToken Implementation address: %s", address(quotaTokenImplementation));
        console.log("Registry address: %s", address(registry));
        console.log("stablecoin address: %s", address(stablecoin));
        console.log("SafeAccount address: %s", address(safeAccount));
        console.log("Beacon address: %s", address(beacon));
        console.log("MarFinance address: %s", address(marFinance));

        console.log("MarFinance address: %s", address(marFinance));

        vm.stopBroadcast();
        
    }
}
