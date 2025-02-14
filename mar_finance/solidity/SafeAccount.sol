// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "../node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "../node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol";
import "../node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./interface/IERC6551Account.sol";
import "./interface/IV2SwapRouter.sol";

contract SafeAccount is IERC165, IERC1271, IERC6551Account {

    IV2SwapRouter public swapRouter = IV2SwapRouter(0x7963c1bd24E4511A0b14bf148F93e2556AFe3C27);


    function executeSwapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts){
        require(_isValidSigner(msg.sender), "Invalid signer");

        return swapRouter.swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline);
    }

    function executeApprove(address tokenErc20, address spender, uint256 amount) external returns (bool){
        require(_isValidSigner(msg.sender), "Invalid signer");
        
        return IERC20(tokenErc20).approve(spender, amount);
    }



    function isValidSignature(
        bytes32 hash,
        bytes memory signature
    ) external view returns (bytes4 magicValue) {
        bool isValid = SignatureChecker.isValidSignatureNow(
            owner(),
            hash,
            signature
        );

        if (isValid) {
            return IERC1271.isValidSignature.selector;
        }

        return "";
    }

    function token() public view returns (uint256, address, uint256) {
        bytes memory footer = new bytes(0x60);

        assembly {
            extcodecopy(address(), add(footer, 0x20), 0x4d, 0x60)
        }

        return abi.decode(footer, (uint256, address, uint256));
    }

    function owner() public view returns (address) {
        (uint256 chainId, address tokenContract, uint256 tokenId) = token();
        if (chainId != block.chainid) return address(0);

        return IERC721(tokenContract).ownerOf(tokenId);
    }

    function _isValidSigner(address signer) internal view returns (bool) {
        return signer == owner();
    }

    function supportsInterface(
        bytes4 interfaceId
    ) external view override returns (bool) {}

    function executeCall(
        address to,
        uint256 value,
        bytes calldata data
    ) external payable override returns (bytes memory) {}

    function nonce() external view override returns (uint256) {}
}