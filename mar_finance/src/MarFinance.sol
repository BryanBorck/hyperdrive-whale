// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interface/IERC6551Registry.sol";
import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import "./QuotaToken.sol";
import "./interface/IV2SwapRouter.sol";

contract MarFinance is ERC721, Ownable {
    //GLOBAL VARIABLES FOR THE PLATFORM
    uint256 public _fundIdCounter;
    IERC6551Registry public fundsRegister;
    address public erc6551Implementation;
    address public quotaTokenImplementation;
    IERC20 public stablecoin;
    mapping(address => bool) public whiteListedTokens;
    
    IV2SwapRouter public swapRouter = IV2SwapRouter(0x7963c1bd24E4511A0b14bf148F93e2556AFe3C27);

    // MAPPINGS TO THE NFTS
    mapping(uint256 => address) public fundsAddresses;
    mapping(uint256 => string) public fundsNames;
    mapping(uint256 => uint256) public admFees;
    mapping(uint256 => uint256) public perfFees;
    mapping(uint256 => uint256) public initialAmounts; // think
    mapping(uint256 => uint256) public openInvestimentTimestamps;
    mapping(uint256 => uint256) public closeInvestimentTimestamps;
    mapping(uint256 => uint256) public openRedeemTimestamps;
    mapping(uint256 => address[]) public fundsAllowedTokens;
    mapping(uint256 => address) public quotasAddresses;

    //EVENTS
    event FundCreated(address indexed fundAddress, address indexed quotaTokenAddress);
    event InvestimentMade(address indexed fundAddress, address indexed investor, uint256 amount);
    event RedeemMade(address indexed fundAddress, address indexed investor, uint256 amount);

    constructor(address _fundsRegister, address _erc6551Implementation, address _erc20Implementation, address _stablecoin) Ownable(_msgSender()) ERC721("MarFinance", "WFI")  {
        fundsRegister = IERC6551Registry(_fundsRegister);
        erc6551Implementation = _erc6551Implementation; //ERC 6551 Implementation
        stablecoin = IERC20(_stablecoin);
        quotaTokenImplementation = _erc20Implementation;
    }

    function createFund(string calldata _name, string calldata _symbol, address _to, address[] memory _allowedTokens, 
                    uint256 _admFee, uint256 _perfFee, uint256 _openInvestiment, uint256 _closeInvestiments, uint256 _openRedeem) 
                    public returns(uint256){
        
        uint256 fundId = _fundIdCounter;
        _fundIdCounter++;
        _mint(_to, fundId);

        for(uint256 i = 0; i < _allowedTokens.length; i++) {
            if(!whiteListedTokens[_allowedTokens[i]]){
                revert("You tried to create a fund with a non whitelisted token");
            }

            fundsAllowedTokens[fundId].push(_allowedTokens[i]);
        }

        address createdFundAddress = fundsRegister.createAccount(
            address(erc6551Implementation),
            block.chainid,
            address(this),
            fundId,
            0,
            ""
        );
        fundsAddresses[fundId] = createdFundAddress;
        fundsNames[fundId] = _name;
        admFees[fundId] = _admFee; // the fee is in bps, if admFee = 100, the fee is 1%
        perfFees[fundId] = _perfFee; // the fee is in bps, if admFee = 100, the fee is 1%
        openInvestimentTimestamps[fundId] = _openInvestiment;
        closeInvestimentTimestamps[fundId] = _closeInvestiments;
        openRedeemTimestamps[fundId] = _openRedeem;
        BeaconProxy newQuotaTokenAddress = new BeaconProxy(quotaTokenImplementation,
            abi.encodeWithSelector(QuotaToken(address(0)).initialize.selector,
            _symbol, address(this), _openInvestiment));

        quotasAddresses[fundId] = address(newQuotaTokenAddress);
        emit FundCreated(createdFundAddress, address(newQuotaTokenAddress));
        return fundId;
    }

    function invest(uint256 _amount, uint256 fundId) public {
        require(_amount > 0, "You need to invest more than 0");
        require(block.timestamp >= openInvestimentTimestamps[fundId], "Investiment is not open yet");
        require(block.timestamp <= closeInvestimentTimestamps[fundId], "Investiment is closed");

        address fundTargetAddress = fundsAddresses[fundId];
        require(fundTargetAddress != address(0), "Fund not found");

        uint256 managerAdmFee = _amount * admFees[fundId] / 10000;
        uint256 amountInvestor = _amount - managerAdmFee;

        stablecoin.transferFrom(msg.sender, fundTargetAddress, amountInvestor);
        stablecoin.transferFrom(msg.sender, ownerOf(fundId), managerAdmFee); // paying adm fee to manager

        initialAmounts[fundId] += amountInvestor;

        address fundQuotaAddress = quotasAddresses[fundId];
        QuotaToken(fundQuotaAddress).mint(msg.sender, amountInvestor);
        emit InvestimentMade(fundTargetAddress, msg.sender, _amount);
    }

    function redeemYield(uint256 fundId) public {
        require(block.timestamp >= openRedeemTimestamps[fundId], "Redeem is not open yet");
        address fundQuotaAddress = quotasAddresses[fundId];
        uint256 amountQuotas = QuotaToken(fundQuotaAddress).balanceOf(msg.sender);
        
        uint256 redeemableAmount = (amountQuotas/initialAmounts[fundId]) * stablecoin.balanceOf(fundsAddresses[fundId]);

        stablecoin.transferFrom(fundsAddresses[fundId], msg.sender, redeemableAmount);

        QuotaToken(fundQuotaAddress).burn(amountQuotas);

        emit RedeemMade(fundsAddresses[fundId], msg.sender, redeemableAmount);
    }

    function setWhiteListedToken(address _token) public onlyOwner {
        whiteListedTokens[_token] = true;
    }

    function removeWhiteListedToken(address _token) public onlyOwner {
        whiteListedTokens[_token] = false;
    }

    
}