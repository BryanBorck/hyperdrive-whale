// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/interface/IV2SwapRouter.sol";



contract Swap is Script {

    address public wzeniq = 0x74DC1C4ec10abE9F5C8A3EabF1A90b97cDc3Ead8;

    address public tokenA = 0xA3f156324feCc5ED3A8495C2399666a598A73ee4; //zusd
    address public tokenB = 0x982EBDD03487622fDa5FD33D1486A5082F281Efd; //weth 
    address public zeniqSwapRouter = 0x7963c1bd24E4511A0b14bf148F93e2556AFe3C27;

    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
        

        address[] memory path = new address[](3);
        path[0] = tokenA;
        path[1] = wzeniq;
        path[2] = tokenB;


        IV2SwapRouter router = IV2SwapRouter(zeniqSwapRouter);

        router.swapExactTokensForTokens(0.001 ether, 0, path, 0x0CCfc28Ce76f48726C59Fc2a598b6eAac8bd3Ab4, block.timestamp + 10 days);

        vm.stopBroadcast();
        
    }
}
