// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";

import "../src/ERC6551Registry.sol";
import "../src/SafeAccount.sol";
import "../src/interface/IERC6551Account.sol";
import "../src/interface/IERC6551Registry.sol";
import "../src/QuotaToken.sol";
import "../src/WhaleFinance.sol";
import "../src/QuotaBeacon.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./mocks/mockERC20.sol";

contract WhaleFinanceTest is Test {
    ERC6551Registry public registry;
    SafeAccount public safeAccount;
    WhaleFinance public whaleFinance;
    QuotaToken public quotaTokenImplementation;
    BeaconERC20 public beacon;
    MockERC20 public stablecoin; 
    address owner = vm.addr(1);
    
    

    function setUp() public {
        stablecoin = new MockERC20();
        registry = new ERC6551Registry();
        safeAccount = new SafeAccount();
        quotaTokenImplementation = new QuotaToken();
        beacon = new BeaconERC20(address(quotaTokenImplementation));
        vm.prank(owner);
        whaleFinance = new WhaleFinance(address(registry), address(safeAccount), address(beacon), address(stablecoin));
        
    }

    function testCreateFund() public {
        string memory symbol = "WFI";
        vm.prank(owner);
        whaleFinance.setWhiteListedToken(address(stablecoin));
        
        address[] memory allowedTokens = new address[](1);
        allowedTokens[0] = (address(stablecoin));
        uint256 admFee = 50; // 0.5%
        uint256 perfFee = 100; // 1%
        uint256 openInvestiment = block.timestamp;
        uint256 closeInvestiments = block.timestamp + 7 days;
        uint256 openRedeem = block.timestamp + 14 days;
        vm.prank(owner);
        uint256 fundId = whaleFinance.createFund(symbol,symbol, owner, allowedTokens, admFee, perfFee, openInvestiment, closeInvestiments, openRedeem);

        assertTrue(fundId >= 0);
    
        assertTrue(whaleFinance.ownerOf(fundId) == owner);

        address predictedERC6551 = registry.account(
            address(safeAccount),
            block.chainid,
            address(whaleFinance),
            fundId,
            0
        );

        assertEq(predictedERC6551, whaleFinance.fundsAddresses(fundId));
    }

    function testInvestiment() public {
        uint256 amount = 200000;
        address investor = vm.addr(2);
        vm.prank(investor);
        stablecoin.mint(investor, amount);
        assertTrue(stablecoin.balanceOf(investor) == amount);

        string memory symbol = "WFI";
        vm.prank(owner);
        whaleFinance.setWhiteListedToken(address(stablecoin));
        
        address[] memory allowedTokens = new address[](1);
        allowedTokens[0] = (address(stablecoin));
        uint256 admFee = 50; // 0.5%
        uint256 perfFee = 100; // 1%
        uint256 openInvestiment = block.timestamp;
        uint256 closeInvestiments = block.timestamp + 7 days;
        uint256 openRedeem = block.timestamp + 14 days;
        vm.prank(owner);
        uint256 fundId = whaleFinance.createFund(symbol,symbol, owner, allowedTokens, admFee, perfFee, openInvestiment, closeInvestiments, openRedeem);

        vm.prank(investor);
        stablecoin.approve(address(whaleFinance), amount);
        vm.prank(investor);
        whaleFinance.invest(amount, fundId);

        QuotaToken quotaToken = QuotaToken(whaleFinance.quotasAddresses(fundId));

        uint256 newAmount = amount - (amount * admFee / 10000);
        assertTrue(quotaToken.balanceOf(investor) == newAmount);

        uint256 totalAmount = whaleFinance.initialAmounts(fundId);
        assertTrue(totalAmount == newAmount);
    }


}