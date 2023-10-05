const WhaleFinance = {
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_fundsRegister",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_erc6551Implementation",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_erc20Implementation",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_stablecoin",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721IncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721InsufficientApproval",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOperator",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721NonexistentToken",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "fundAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "quotaTokenAddress",
          "type": "address"
        }
      ],
      "name": "FundCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "fundAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "investor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "InvestimentMade",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "fundAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "investor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "RedeemMade",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "_fundIdCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "admFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "closeInvestimentTimestamps",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "_allowedTokens",
          "type": "address[]"
        },
        {
          "internalType": "uint256",
          "name": "_admFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_perfFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_openInvestiment",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_closeInvestiments",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_openRedeem",
          "type": "uint256"
        }
      ],
      "name": "createFund",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "erc6551Implementation",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "fundsAddresses",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "fundsAllowedTokens",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "fundsNames",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fundsRegister",
      "outputs": [
        {
          "internalType": "contract IERC6551Registry",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "initialAmounts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fundId",
          "type": "uint256"
        }
      ],
      "name": "invest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "openInvestimentTimestamps",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "openRedeemTimestamps",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "perfFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "quotaTokenImplementation",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "quotasAddresses",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "fundId",
          "type": "uint256"
        }
      ],
      "name": "redeemYield",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "removeWhiteListedToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "setWhiteListedToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stablecoin",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "whiteListedTokens",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x60806040523480156200001157600080fd5b50604051620039c7380380620039c7833981016040819052620000349162000196565b336040518060400160405280600c81526020016b5768616c6546696e616e636560a01b8152506040518060400160405280600381526020016257464960e81b815250816000908162000087919062000298565b50600162000096828262000298565b5050506001600160a01b038116620000c857604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000d38162000127565b50600880546001600160a01b039586166001600160a01b0319918216179091556009805494861694821694909417909355600b8054918516918416919091179055600a805491909316911617905562000364565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b03811681146200019157600080fd5b919050565b60008060008060808587031215620001ad57600080fd5b620001b88562000179565b9350620001c86020860162000179565b9250620001d86040860162000179565b9150620001e86060860162000179565b905092959194509250565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200021e57607f821691505b6020821081036200023f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200029357600081815260208120601f850160051c810160208610156200026e5750805b601f850160051c820191505b818110156200028f578281556001016200027a565b5050505b505050565b81516001600160401b03811115620002b457620002b4620001f3565b620002cc81620002c5845462000209565b8462000245565b602080601f831160018114620003045760008415620002eb5750858301515b600019600386901b1c1916600185901b1785556200028f565b600085815260208120601f198616915b82811015620003355788860151825594840194600190910190840162000314565b5085821015620003545787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61365380620003746000396000f3fe60806040523480156200001157600080fd5b5060043610620002aa5760003560e01c8063822dde8d116200017c578063c2ae0e3e11620000e9578063e7e1f1c71162000097578063e9cbd822116200007a578063e9cbd82214620006ce578063f2fde38b14620006ef578063fb91fb42146200070657600080fd5b8063e7e1f1c71462000649578063e985e9c5146200068257600080fd5b8063d3c2638311620000cc578063d3c2638314620005f5578063d87aa643146200061b578063dae51d03146200063257600080fd5b8063c2ae0e3e14620005bd578063c87b56dd14620005de57600080fd5b8063995c84721162000147578063b3dd12a2116200012a578063b3dd12a2146200056e578063b5541dd8146200058f578063b88d4fde14620005a657600080fd5b8063995c84721462000534578063a22cb465146200055757600080fd5b8063822dde8d14620004d35780638d18019514620004ea5780638da5cb5b146200050b57806395d89b41146200052a57600080fd5b8063258d3c33116200021b5780636166cb9311620001e65780636c4f844211620001c95780636c4f8442146200049b57806370a0823114620004b2578063715018a614620004c957600080fd5b80636166cb93146200046d5780636352211e146200048457600080fd5b8063258d3c3314620003e357806342842e0e14620003fa5780634835a6be146200041157806354d89c91146200044a57600080fd5b8063095ea7b311620002795780631c02225f116200025c5780631c02225f146200039f5780631ec3e6c414620003c257806323b872dd14620003cc57600080fd5b8063095ea7b314620003635780630d0a01cf146200037c57600080fd5b806301ffc9a714620002af578063069af24114620002db57806306fdde03146200030d578063081812fc1462000326575b600080fd5b620002c6620002c036600462002652565b62000729565b60405190151581526020015b60405180910390f35b620002fe620002ec36600462002672565b60136020526000908152604090205481565b604051908152602001620002d2565b6200031762000810565b604051620002d29190620026fe565b6200033d6200033736600462002672565b620008aa565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001620002d2565b6200037a6200037436600462002748565b620008e3565b005b620002fe6200038d36600462002672565b60106020526000908152604090205481565b620002fe620003b036600462002672565b60126020526000908152604090205481565b620002fe60075481565b6200037a620003dd36600462002777565b620008f4565b6200037a620003f436600462002672565b620009ef565b6200037a6200040b36600462002777565b62000d7c565b6200033d6200042236600462002672565b60166020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620002fe6200045b36600462002672565b60146020526000908152604090205481565b6200033d6200047e366004620027bd565b62000d9e565b6200033d6200049536600462002672565b62000de4565b620002fe620004ac36600462002941565b62000df1565b620002fe620004c336600462002a23565b620012e0565b6200037a6200135d565b6200037a620004e436600462002a23565b62001375565b6008546200033d9073ffffffffffffffffffffffffffffffffffffffff1681565b60065473ffffffffffffffffffffffffffffffffffffffff166200033d565b62000317620013ce565b620002fe6200054536600462002672565b600f6020526000908152604090205481565b6200037a6200056836600462002a52565b620013df565b6009546200033d9073ffffffffffffffffffffffffffffffffffffffff1681565b6200037a620005a036600462002a23565b620013ec565b6200037a620005b736600462002a90565b62001442565b600a546200033d9073ffffffffffffffffffffffffffffffffffffffff1681565b62000317620005ef36600462002672565b6200145d565b620002c66200060636600462002a23565b600c6020526000908152604090205460ff1681565b6200037a6200062c366004620027bd565b620014db565b620003176200064336600462002672565b6200198d565b6200033d6200065a36600462002672565b600d6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620002c66200069336600462002b7f565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b600b546200033d9073ffffffffffffffffffffffffffffffffffffffff1681565b6200037a6200070036600462002a23565b62001a2f565b620002fe6200071736600462002672565b60116020526000908152604090205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480620007bd57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806200080a57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060008054620008219062002bb2565b80601f01602080910402602001604051908101604052809291908181526020018280546200084f9062002bb2565b8015620008a05780601f106200087457610100808354040283529160200191620008a0565b820191906000526020600020905b8154815290600101906020018083116200088257829003601f168201915b5050505050905090565b6000620008b78262001a99565b5060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff166200080a565b620008f082823362001afa565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166200094a576040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b60006200095983833362001b09565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620009e9576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8086166004830152602482018490528216604482015260640162000941565b50505050565b60008181526014602052604090205442101562000a69576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f52656465656d206973206e6f74206f70656e2079657400000000000000000000604482015260640162000941565b6000818152601660205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116919082906370a0823190602401602060405180830381865afa15801562000ae7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000b0d919062002c07565b600b546000858152600d60205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015293945090929116906370a0823190602401602060405180830381865afa15801562000b91573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000bb7919062002c07565b60008581526011602052604090205462000bd2908462002c50565b62000bde919062002c8c565b600b546000868152600d6020526040908190205490517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201523360248201526044810184905292935016906323b872dd906064016020604051808303816000875af115801562000c6f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c95919062002ca6565b506040517f42966c680000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff8416906342966c6890602401600060405180830381600087803b15801562000cff57600080fd5b505af115801562000d14573d6000803e3d6000fd5b5050506000858152600d602090815260409182902054915184815233935073ffffffffffffffffffffffffffffffffffffffff909216917f6c9b4e508889a1ad47d9f443fa4a922856051bb1cc015e2048740e560e0f46f1910160405180910390a350505050565b62000d998383836040518060200160405280600081525062001442565b505050565b6015602052816000526040600020818154811062000dbb57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60006200080a8262001a99565b6007805460009181908362000e068362002cc6565b919050555062000e17898262001c8d565b60005b885181101562000f9957600c60008a838151811062000e3d5762000e3d62002d01565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff1662000eff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f596f7520747269656420746f2063726561746520612066756e6420776974682060448201527f61206e6f6e2077686974656c697374656420746f6b656e000000000000000000606482015260840162000941565b600082815260156020526040902089518a908390811062000f245762000f2462002d01565b60209081029190910181015182546001810184556000938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790558062000f908162002cc6565b91505062000e1a565b506008546009546040517fda7323b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201524660248201523060448201526064810184905260006084820181905260c060a483015260c4820181905292919091169063da7323b39060e4016020604051808303816000875af11580156200103c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001062919062002d30565b905080600d600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508d8d600e60008581526020019081526020016000209182620010da92919062002da2565b5087600f6000848152602001908152602001600020819055508660106000848152602001908152602001600020819055508560126000848152602001908152602001600020819055508460136000848152602001908152602001600020819055508360146000848152602001908152602001600020819055506000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1663e0921f8560e01b8e8e308b60405160240162001199949392919062002ec9565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909416939093179092529051620012239062002615565b6200123092919062002f3d565b604051809103906000f0801580156200124d573d6000803e3d6000fd5b5060008481526016602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85811691821790925591519394509092908516917f9de2be681a220396ec1518a4ecd6c853a760e34fb9174e9213d7aa5a8b12f37991a350909d9c50505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821662001334576040517f89c62b640000000000000000000000000000000000000000000000000000000081526000600482015260240162000941565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6200136762001d44565b62001373600062001d99565b565b6200137f62001d44565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b606060018054620008219062002bb2565b620008f033838362001e10565b620013f662001d44565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6200144f848484620008f4565b620009e98484848462001f0f565b60606200146a8262001a99565b5060006200148360408051602081019091526000815290565b90506000815111620014a55760405180602001604052806000815250620014d4565b80620014b18462002113565b604051602001620014c492919062002f6e565b6040516020818303038152906040525b9392505050565b6000821162001547576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f596f75206e65656420746f20696e76657374206d6f7265207468616e20300000604482015260640162000941565b600081815260126020526040902054421015620015c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e76657374696d656e74206973206e6f74206f70656e207965740000000000604482015260640162000941565b6000818152601360205260409020544211156200163b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76657374696d656e7420697320636c6f7365640000000000000000000000604482015260640162000941565b6000818152600d602052604090205473ffffffffffffffffffffffffffffffffffffffff1680620016c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f46756e64206e6f7420666f756e64000000000000000000000000000000000000604482015260640162000941565b6000828152600f602052604081205461271090620016e8908662002c8c565b620016f4919062002c50565b9050600062001704828662002fa1565b600b546040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8681166024830152604482018490529293509116906323b872dd906064016020604051808303816000875af115801562001786573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620017ac919062002ca6565b50600b5473ffffffffffffffffffffffffffffffffffffffff166323b872dd33620017d78762000de4565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604481018590526064016020604051808303816000875af115801562001851573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001877919062002ca6565b50600084815260116020526040812080548392906200189890849062002fb7565b9091555050600084815260166020526040908190205490517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169081906340c10f1990604401600060405180830381600087803b1580156200191f57600080fd5b505af115801562001934573d6000803e3d6000fd5b505060405188815233925073ffffffffffffffffffffffffffffffffffffffff871691507f15bcca398c35efcf80f9148394b3ff1b358089610b2e18b315a3a18050a509429060200160405180910390a3505050505050565b600e6020526000908152604090208054620019a89062002bb2565b80601f0160208091040260200160405190810160405280929190818152602001828054620019d69062002bb2565b801562001a275780601f10620019fb5761010080835404028352916020019162001a27565b820191906000526020600020905b81548152906001019060200180831162001a0957829003601f168201915b505050505081565b62001a3962001d44565b73ffffffffffffffffffffffffffffffffffffffff811662001a8b576040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526000600482015260240162000941565b62001a968162001d99565b50565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff16806200080a576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810184905260240162000941565b62000d998383836001620021d8565b60008281526002602052604081205473ffffffffffffffffffffffffffffffffffffffff9081169083161562001b465762001b46818486620023ac565b73ffffffffffffffffffffffffffffffffffffffff81161562001bbf5762001b73600085600080620021d8565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff85161562001c095773ffffffffffffffffffffffffffffffffffffffff85166000908152600360205260409020805460010190555b60008481526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff89811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b73ffffffffffffffffffffffffffffffffffffffff821662001cdf576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240162000941565b600062001cef8383600062001b09565b905073ffffffffffffffffffffffffffffffffffffffff81161562000d99576040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526000600482015260240162000941565b60065473ffffffffffffffffffffffffffffffffffffffff16331462001373576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240162000941565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff821662001e77576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316600482015260240162000941565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff83163b15620009e9576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a029062001f8790339088908790879060040162002fcd565b6020604051808303816000875af192505050801562001fe3575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925262001fe09181019062003018565b60015b62002077573d80801562002014576040519150601f19603f3d011682016040523d82523d6000602084013e62002019565b606091505b5080516000036200206f576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240162000941565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a0200000000000000000000000000000000000000000000000000000000146200210c576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240162000941565b5050505050565b60606000620021228362002462565b600101905060008167ffffffffffffffff8111156200214557620021456200282c565b6040519080825280601f01601f19166020018201604052801562002170576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846200217a57509392505050565b8080620021fa575073ffffffffffffffffffffffffffffffffffffffff821615155b15620023575760006200220d8462001a99565b905073ffffffffffffffffffffffffffffffffffffffff8316158015906200226157508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015620022a1575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209387168352929052205460ff16155b15620022f2576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240162000941565b81156200235557838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b620023b98383836200254b565b62000d995773ffffffffffffffffffffffffffffffffffffffff831662002410576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810182905260240162000941565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024810182905260440162000941565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310620024ac577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310620024d9576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310620024f857662386f26fc10000830492506010015b6305f5e100831062002511576305f5e100830492506008015b61271083106200252657612710830492506004015b6064831062002539576064830492506002015b600a83106200080a5760010192915050565b600073ffffffffffffffffffffffffffffffffffffffff8316158015906200260d57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480620025db575073ffffffffffffffffffffffffffffffffffffffff80851660009081526005602090815260408083209387168352929052205460ff165b806200260d575060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b6105e5806200303983390190565b7fffffffff000000000000000000000000000000000000000000000000000000008116811462001a9657600080fd5b6000602082840312156200266557600080fd5b8135620014d48162002623565b6000602082840312156200268557600080fd5b5035919050565b60005b83811015620026a95781810151838201526020016200268f565b50506000910152565b60008151808452620026cc8160208601602086016200268c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000620014d46020830184620026b2565b73ffffffffffffffffffffffffffffffffffffffff8116811462001a9657600080fd5b8035620027438162002713565b919050565b600080604083850312156200275c57600080fd5b8235620027698162002713565b946020939093013593505050565b6000806000606084860312156200278d57600080fd5b83356200279a8162002713565b92506020840135620027ac8162002713565b929592945050506040919091013590565b60008060408385031215620027d157600080fd5b50508035926020909101359150565b60008083601f840112620027f357600080fd5b50813567ffffffffffffffff8111156200280c57600080fd5b6020830191508360208285010111156200282557600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715620028a557620028a56200282c565b604052919050565b600082601f830112620028bf57600080fd5b8135602067ffffffffffffffff821115620028de57620028de6200282c565b8160051b620028ef8282016200285b565b92835284810182019282810190878511156200290a57600080fd5b83870192505b8483101562002936578235620029268162002713565b8252918301919083019062002910565b979650505050505050565b60008060008060008060008060008060006101208c8e0312156200296457600080fd5b67ffffffffffffffff808d3511156200297c57600080fd5b6200298b8e8e358f01620027e0565b909c509a5060208d0135811015620029a257600080fd5b620029b48e60208f01358f01620027e0565b909a509850620029c760408e0162002736565b97508060608e01351115620029db57600080fd5b50620029ee8d60608e01358e01620028ad565b9a9d999c50979a9699959895975050505060808401359360a08101359360c0820135935060e082013592506101009091013590565b60006020828403121562002a3657600080fd5b8135620014d48162002713565b801515811462001a9657600080fd5b6000806040838503121562002a6657600080fd5b823562002a738162002713565b9150602083013562002a858162002a43565b809150509250929050565b6000806000806080858703121562002aa757600080fd5b843562002ab48162002713565b935060208581013562002ac78162002713565b935060408601359250606086013567ffffffffffffffff8082111562002aec57600080fd5b818801915088601f83011262002b0157600080fd5b81358181111562002b165762002b166200282c565b62002b48847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016200285b565b9150808252898482850101111562002b5f57600080fd5b808484018584013760008482840101525080935050505092959194509250565b6000806040838503121562002b9357600080fd5b823562002ba08162002713565b9150602083013562002a858162002713565b600181811c9082168062002bc757607f821691505b60208210810362002c01577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121562002c1a57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008262002c87577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176200080a576200080a62002c21565b60006020828403121562002cb957600080fd5b8151620014d48162002a43565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362002cfa5762002cfa62002c21565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121562002d4357600080fd5b8151620014d48162002713565b601f82111562000d9957600081815260208120601f850160051c8101602086101562002d795750805b601f850160051c820191505b8181101562002d9a5782815560010162002d85565b505050505050565b67ffffffffffffffff83111562002dbd5762002dbd6200282c565b62002dd58362002dce835462002bb2565b8362002d50565b6000601f84116001811462002e2a576000851562002df35750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556200210c565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b8281101562002e7b578685013582556020948501946001909201910162002e59565b508682101562002eb7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b6060815283606082015283856080830137600060808583010152600060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f870116830101905073ffffffffffffffffffffffffffffffffffffffff8416602083015282604083015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006200260d6040830184620026b2565b6000835162002f828184602088016200268c565b83519083019062002f988183602088016200268c565b01949350505050565b818103818111156200080a576200080a62002c21565b808201808211156200080a576200080a62002c21565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526200300e6080830184620026b2565b9695505050505050565b6000602082840312156200302b57600080fd5b8151620014d4816200262356fe60a06040526040516105e53803806105e583398101604081905261002291610387565b61002c828261003e565b506001600160a01b031660805261047e565b610047826100fe565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a28051156100f2576100ed826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e79190610447565b82610211565b505050565b6100fa610288565b5050565b806001600160a01b03163b60000361013957604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b81529051600092841691635c60da1b9160048083019260209291908290030181865afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610447565b9050806001600160a01b03163b6000036100fa57604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610130565b6060600080846001600160a01b03168460405161022e9190610462565b600060405180830381855af49150503d8060008114610269576040519150601f19603f3d011682016040523d82523d6000602084013e61026e565b606091505b50909250905061027f8583836102a9565b95945050505050565b34156102a75760405163b398979f60e01b815260040160405180910390fd5b565b6060826102be576102b982610308565b610301565b81511580156102d557506001600160a01b0384163b155b156102fe57604051639996b31560e01b81526001600160a01b0385166004820152602401610130565b50805b9392505050565b8051156103185780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b80516001600160a01b038116811461034857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561037e578181015183820152602001610366565b50506000910152565b6000806040838503121561039a57600080fd5b6103a383610331565b60208401519092506001600160401b03808211156103c057600080fd5b818501915085601f8301126103d457600080fd5b8151818111156103e6576103e661034d565b604051601f8201601f19908116603f0116810190838211818310171561040e5761040e61034d565b8160405282815288602084870101111561042757600080fd5b610438836020830160208801610363565b80955050505050509250929050565b60006020828403121561045957600080fd5b61030182610331565b60008251610474818460208701610363565b9190910192915050565b60805161014d61049860003960006024015261014d6000f3fe608060405261000c61000e565b005b61001e610019610020565b6100b6565b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b191906100da565b905090565b3660008037600080366000845af43d6000803e8080156100d5573d6000f35b3d6000fd5b6000602082840312156100ec57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461011057600080fd5b939250505056fea2646970667358221220f264fd31c6b294063385b5e6559a67913b2618204bd7b4fbf778e39fd93b7a5964736f6c63430008140033a2646970667358221220a445e1a8b672919efea95286902b764d66af84d3c808ccbdbb870a938618aea364736f6c63430008140033",
    "sourceMap": "537:5334:62:-:0;;;1779:418;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;720:10:42;1381:113:37;;;;;;;;;;;;;-1:-1:-1;;;1381:113:37;;;;;;;;;;;;;;;;-1:-1:-1;;;1381:113:37;;;1455:5;1447;:13;;;;;;:::i;:::-;-1:-1:-1;1470:7:37;:17;1480:7;1470;:17;:::i;:::-;-1:-1:-1;;;;;;;;1273:26:26;;1269:95;;1322:31;;-1:-1:-1;;;1322:31:26;;1350:1;1322:31;;;3532:51:67;3505:18;;1322:31:26;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;1961:13:62::2;:48:::0;;-1:-1:-1;;;;;1961:48:62;;::::2;-1:-1:-1::0;;;;;;1961:48:62;;::::2;;::::0;;;2019:21:::2;:46:::0;;;;::::2;::::0;;::::2;::::0;;;::::2;::::0;;;2101:10:::2;:32:::0;;;;::::2;::::0;;::::2;::::0;;;::::2;::::0;;2143:24:::2;:47:::0;;;;;::::2;::::0;::::2;;::::0;;537:5334;;2912:187:26;3004:6;;;-1:-1:-1;;;;;3020:17:26;;;-1:-1:-1;;;;;;3020:17:26;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;14:177:67:-;93:13;;-1:-1:-1;;;;;135:31:67;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:464::-;293:6;301;309;317;370:3;358:9;349:7;345:23;341:33;338:53;;;387:1;384;377:12;338:53;410:40;440:9;410:40;:::i;:::-;400:50;;469:49;514:2;503:9;499:18;469:49;:::i;:::-;459:59;;537:49;582:2;571:9;567:18;537:49;:::i;:::-;527:59;;605:49;650:2;639:9;635:18;605:49;:::i;:::-;595:59;;196:464;;;;;;;:::o;665:127::-;726:10;721:3;717:20;714:1;707:31;757:4;754:1;747:15;781:4;778:1;771:15;797:380;876:1;872:12;;;;919;;;940:61;;994:4;986:6;982:17;972:27;;940:61;1047:2;1039:6;1036:14;1016:18;1013:38;1010:161;;1093:10;1088:3;1084:20;1081:1;1074:31;1128:4;1125:1;1118:15;1156:4;1153:1;1146:15;1010:161;;797:380;;;:::o;1308:545::-;1410:2;1405:3;1402:11;1399:448;;;1446:1;1471:5;1467:2;1460:17;1516:4;1512:2;1502:19;1586:2;1574:10;1570:19;1567:1;1563:27;1557:4;1553:38;1622:4;1610:10;1607:20;1604:47;;;-1:-1:-1;1645:4:67;1604:47;1700:2;1695:3;1691:12;1688:1;1684:20;1678:4;1674:31;1664:41;;1755:82;1773:2;1766:5;1763:13;1755:82;;;1818:17;;;1799:1;1788:13;1755:82;;;1759:3;;;1399:448;1308:545;;;:::o;2029:1352::-;2149:10;;-1:-1:-1;;;;;2171:30:67;;2168:56;;;2204:18;;:::i;:::-;2233:97;2323:6;2283:38;2315:4;2309:11;2283:38;:::i;:::-;2277:4;2233:97;:::i;:::-;2385:4;;2449:2;2438:14;;2466:1;2461:663;;;;3168:1;3185:6;3182:89;;;-1:-1:-1;3237:19:67;;;3231:26;3182:89;-1:-1:-1;;1986:1:67;1982:11;;;1978:24;1974:29;1964:40;2010:1;2006:11;;;1961:57;3284:81;;2431:944;;2461:663;1255:1;1248:14;;;1292:4;1279:18;;-1:-1:-1;;2497:20:67;;;2615:236;2629:7;2626:1;2623:14;2615:236;;;2718:19;;;2712:26;2697:42;;2810:27;;;;2778:1;2766:14;;;;2645:19;;2615:236;;;2619:3;2879:6;2870:7;2867:19;2864:201;;;2940:19;;;2934:26;-1:-1:-1;;3023:1:67;3019:14;;;3035:3;3015:24;3011:37;3007:42;2992:58;2977:74;;2864:201;-1:-1:-1;;;;;3111:1:67;3095:14;;;3091:22;3078:36;;-1:-1:-1;2029:1352:67:o;3386:203::-;537:5334:62;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040523480156200001157600080fd5b5060043610620002aa5760003560e01c8063822dde8d116200017c578063c2ae0e3e11620000e9578063e7e1f1c71162000097578063e9cbd822116200007a578063e9cbd82214620006ce578063f2fde38b14620006ef578063fb91fb42146200070657600080fd5b8063e7e1f1c71462000649578063e985e9c5146200068257600080fd5b8063d3c2638311620000cc578063d3c2638314620005f5578063d87aa643146200061b578063dae51d03146200063257600080fd5b8063c2ae0e3e14620005bd578063c87b56dd14620005de57600080fd5b8063995c84721162000147578063b3dd12a2116200012a578063b3dd12a2146200056e578063b5541dd8146200058f578063b88d4fde14620005a657600080fd5b8063995c84721462000534578063a22cb465146200055757600080fd5b8063822dde8d14620004d35780638d18019514620004ea5780638da5cb5b146200050b57806395d89b41146200052a57600080fd5b8063258d3c33116200021b5780636166cb9311620001e65780636c4f844211620001c95780636c4f8442146200049b57806370a0823114620004b2578063715018a614620004c957600080fd5b80636166cb93146200046d5780636352211e146200048457600080fd5b8063258d3c3314620003e357806342842e0e14620003fa5780634835a6be146200041157806354d89c91146200044a57600080fd5b8063095ea7b311620002795780631c02225f116200025c5780631c02225f146200039f5780631ec3e6c414620003c257806323b872dd14620003cc57600080fd5b8063095ea7b314620003635780630d0a01cf146200037c57600080fd5b806301ffc9a714620002af578063069af24114620002db57806306fdde03146200030d578063081812fc1462000326575b600080fd5b620002c6620002c036600462002652565b62000729565b60405190151581526020015b60405180910390f35b620002fe620002ec36600462002672565b60136020526000908152604090205481565b604051908152602001620002d2565b6200031762000810565b604051620002d29190620026fe565b6200033d6200033736600462002672565b620008aa565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001620002d2565b6200037a6200037436600462002748565b620008e3565b005b620002fe6200038d36600462002672565b60106020526000908152604090205481565b620002fe620003b036600462002672565b60126020526000908152604090205481565b620002fe60075481565b6200037a620003dd36600462002777565b620008f4565b6200037a620003f436600462002672565b620009ef565b6200037a6200040b36600462002777565b62000d7c565b6200033d6200042236600462002672565b60166020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620002fe6200045b36600462002672565b60146020526000908152604090205481565b6200033d6200047e366004620027bd565b62000d9e565b6200033d6200049536600462002672565b62000de4565b620002fe620004ac36600462002941565b62000df1565b620002fe620004c336600462002a23565b620012e0565b6200037a6200135d565b6200037a620004e436600462002a23565b62001375565b6008546200033d9073ffffffffffffffffffffffffffffffffffffffff1681565b60065473ffffffffffffffffffffffffffffffffffffffff166200033d565b62000317620013ce565b620002fe6200054536600462002672565b600f6020526000908152604090205481565b6200037a6200056836600462002a52565b620013df565b6009546200033d9073ffffffffffffffffffffffffffffffffffffffff1681565b6200037a620005a036600462002a23565b620013ec565b6200037a620005b736600462002a90565b62001442565b600a546200033d9073ffffffffffffffffffffffffffffffffffffffff1681565b62000317620005ef36600462002672565b6200145d565b620002c66200060636600462002a23565b600c6020526000908152604090205460ff1681565b6200037a6200062c366004620027bd565b620014db565b620003176200064336600462002672565b6200198d565b6200033d6200065a36600462002672565b600d6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620002c66200069336600462002b7f565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b600b546200033d9073ffffffffffffffffffffffffffffffffffffffff1681565b6200037a6200070036600462002a23565b62001a2f565b620002fe6200071736600462002672565b60116020526000908152604090205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480620007bd57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806200080a57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060008054620008219062002bb2565b80601f01602080910402602001604051908101604052809291908181526020018280546200084f9062002bb2565b8015620008a05780601f106200087457610100808354040283529160200191620008a0565b820191906000526020600020905b8154815290600101906020018083116200088257829003601f168201915b5050505050905090565b6000620008b78262001a99565b5060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff166200080a565b620008f082823362001afa565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166200094a576040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b60006200095983833362001b09565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620009e9576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8086166004830152602482018490528216604482015260640162000941565b50505050565b60008181526014602052604090205442101562000a69576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f52656465656d206973206e6f74206f70656e2079657400000000000000000000604482015260640162000941565b6000818152601660205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116919082906370a0823190602401602060405180830381865afa15801562000ae7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000b0d919062002c07565b600b546000858152600d60205260408082205490517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015293945090929116906370a0823190602401602060405180830381865afa15801562000b91573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000bb7919062002c07565b60008581526011602052604090205462000bd2908462002c50565b62000bde919062002c8c565b600b546000868152600d6020526040908190205490517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201523360248201526044810184905292935016906323b872dd906064016020604051808303816000875af115801562000c6f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c95919062002ca6565b506040517f42966c680000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff8416906342966c6890602401600060405180830381600087803b15801562000cff57600080fd5b505af115801562000d14573d6000803e3d6000fd5b5050506000858152600d602090815260409182902054915184815233935073ffffffffffffffffffffffffffffffffffffffff909216917f6c9b4e508889a1ad47d9f443fa4a922856051bb1cc015e2048740e560e0f46f1910160405180910390a350505050565b62000d998383836040518060200160405280600081525062001442565b505050565b6015602052816000526040600020818154811062000dbb57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60006200080a8262001a99565b6007805460009181908362000e068362002cc6565b919050555062000e17898262001c8d565b60005b885181101562000f9957600c60008a838151811062000e3d5762000e3d62002d01565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff1662000eff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f596f7520747269656420746f2063726561746520612066756e6420776974682060448201527f61206e6f6e2077686974656c697374656420746f6b656e000000000000000000606482015260840162000941565b600082815260156020526040902089518a908390811062000f245762000f2462002d01565b60209081029190910181015182546001810184556000938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790558062000f908162002cc6565b91505062000e1a565b506008546009546040517fda7323b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201524660248201523060448201526064810184905260006084820181905260c060a483015260c4820181905292919091169063da7323b39060e4016020604051808303816000875af11580156200103c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001062919062002d30565b905080600d600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508d8d600e60008581526020019081526020016000209182620010da92919062002da2565b5087600f6000848152602001908152602001600020819055508660106000848152602001908152602001600020819055508560126000848152602001908152602001600020819055508460136000848152602001908152602001600020819055508360146000848152602001908152602001600020819055506000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1663e0921f8560e01b8e8e308b60405160240162001199949392919062002ec9565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909416939093179092529051620012239062002615565b6200123092919062002f3d565b604051809103906000f0801580156200124d573d6000803e3d6000fd5b5060008481526016602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85811691821790925591519394509092908516917f9de2be681a220396ec1518a4ecd6c853a760e34fb9174e9213d7aa5a8b12f37991a350909d9c50505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821662001334576040517f89c62b640000000000000000000000000000000000000000000000000000000081526000600482015260240162000941565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6200136762001d44565b62001373600062001d99565b565b6200137f62001d44565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b606060018054620008219062002bb2565b620008f033838362001e10565b620013f662001d44565b73ffffffffffffffffffffffffffffffffffffffff166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6200144f848484620008f4565b620009e98484848462001f0f565b60606200146a8262001a99565b5060006200148360408051602081019091526000815290565b90506000815111620014a55760405180602001604052806000815250620014d4565b80620014b18462002113565b604051602001620014c492919062002f6e565b6040516020818303038152906040525b9392505050565b6000821162001547576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f596f75206e65656420746f20696e76657374206d6f7265207468616e20300000604482015260640162000941565b600081815260126020526040902054421015620015c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e76657374696d656e74206973206e6f74206f70656e207965740000000000604482015260640162000941565b6000818152601360205260409020544211156200163b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76657374696d656e7420697320636c6f7365640000000000000000000000604482015260640162000941565b6000818152600d602052604090205473ffffffffffffffffffffffffffffffffffffffff1680620016c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f46756e64206e6f7420666f756e64000000000000000000000000000000000000604482015260640162000941565b6000828152600f602052604081205461271090620016e8908662002c8c565b620016f4919062002c50565b9050600062001704828662002fa1565b600b546040517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8681166024830152604482018490529293509116906323b872dd906064016020604051808303816000875af115801562001786573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620017ac919062002ca6565b50600b5473ffffffffffffffffffffffffffffffffffffffff166323b872dd33620017d78762000de4565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604481018590526064016020604051808303816000875af115801562001851573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001877919062002ca6565b50600084815260116020526040812080548392906200189890849062002fb7565b9091555050600084815260166020526040908190205490517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169081906340c10f1990604401600060405180830381600087803b1580156200191f57600080fd5b505af115801562001934573d6000803e3d6000fd5b505060405188815233925073ffffffffffffffffffffffffffffffffffffffff871691507f15bcca398c35efcf80f9148394b3ff1b358089610b2e18b315a3a18050a509429060200160405180910390a3505050505050565b600e6020526000908152604090208054620019a89062002bb2565b80601f0160208091040260200160405190810160405280929190818152602001828054620019d69062002bb2565b801562001a275780601f10620019fb5761010080835404028352916020019162001a27565b820191906000526020600020905b81548152906001019060200180831162001a0957829003601f168201915b505050505081565b62001a3962001d44565b73ffffffffffffffffffffffffffffffffffffffff811662001a8b576040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526000600482015260240162000941565b62001a968162001d99565b50565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff16806200080a576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810184905260240162000941565b62000d998383836001620021d8565b60008281526002602052604081205473ffffffffffffffffffffffffffffffffffffffff9081169083161562001b465762001b46818486620023ac565b73ffffffffffffffffffffffffffffffffffffffff81161562001bbf5762001b73600085600080620021d8565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff85161562001c095773ffffffffffffffffffffffffffffffffffffffff85166000908152600360205260409020805460010190555b60008481526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff89811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b73ffffffffffffffffffffffffffffffffffffffff821662001cdf576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240162000941565b600062001cef8383600062001b09565b905073ffffffffffffffffffffffffffffffffffffffff81161562000d99576040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526000600482015260240162000941565b60065473ffffffffffffffffffffffffffffffffffffffff16331462001373576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240162000941565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff821662001e77576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316600482015260240162000941565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff83163b15620009e9576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a029062001f8790339088908790879060040162002fcd565b6020604051808303816000875af192505050801562001fe3575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925262001fe09181019062003018565b60015b62002077573d80801562002014576040519150601f19603f3d011682016040523d82523d6000602084013e62002019565b606091505b5080516000036200206f576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240162000941565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a0200000000000000000000000000000000000000000000000000000000146200210c576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240162000941565b5050505050565b60606000620021228362002462565b600101905060008167ffffffffffffffff8111156200214557620021456200282c565b6040519080825280601f01601f19166020018201604052801562002170576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846200217a57509392505050565b8080620021fa575073ffffffffffffffffffffffffffffffffffffffff821615155b15620023575760006200220d8462001a99565b905073ffffffffffffffffffffffffffffffffffffffff8316158015906200226157508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015620022a1575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209387168352929052205460ff16155b15620022f2576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240162000941565b81156200235557838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b620023b98383836200254b565b62000d995773ffffffffffffffffffffffffffffffffffffffff831662002410576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810182905260240162000941565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024810182905260440162000941565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310620024ac577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310620024d9576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310620024f857662386f26fc10000830492506010015b6305f5e100831062002511576305f5e100830492506008015b61271083106200252657612710830492506004015b6064831062002539576064830492506002015b600a83106200080a5760010192915050565b600073ffffffffffffffffffffffffffffffffffffffff8316158015906200260d57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480620025db575073ffffffffffffffffffffffffffffffffffffffff80851660009081526005602090815260408083209387168352929052205460ff165b806200260d575060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b6105e5806200303983390190565b7fffffffff000000000000000000000000000000000000000000000000000000008116811462001a9657600080fd5b6000602082840312156200266557600080fd5b8135620014d48162002623565b6000602082840312156200268557600080fd5b5035919050565b60005b83811015620026a95781810151838201526020016200268f565b50506000910152565b60008151808452620026cc8160208601602086016200268c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000620014d46020830184620026b2565b73ffffffffffffffffffffffffffffffffffffffff8116811462001a9657600080fd5b8035620027438162002713565b919050565b600080604083850312156200275c57600080fd5b8235620027698162002713565b946020939093013593505050565b6000806000606084860312156200278d57600080fd5b83356200279a8162002713565b92506020840135620027ac8162002713565b929592945050506040919091013590565b60008060408385031215620027d157600080fd5b50508035926020909101359150565b60008083601f840112620027f357600080fd5b50813567ffffffffffffffff8111156200280c57600080fd5b6020830191508360208285010111156200282557600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715620028a557620028a56200282c565b604052919050565b600082601f830112620028bf57600080fd5b8135602067ffffffffffffffff821115620028de57620028de6200282c565b8160051b620028ef8282016200285b565b92835284810182019282810190878511156200290a57600080fd5b83870192505b8483101562002936578235620029268162002713565b8252918301919083019062002910565b979650505050505050565b60008060008060008060008060008060006101208c8e0312156200296457600080fd5b67ffffffffffffffff808d3511156200297c57600080fd5b6200298b8e8e358f01620027e0565b909c509a5060208d0135811015620029a257600080fd5b620029b48e60208f01358f01620027e0565b909a509850620029c760408e0162002736565b97508060608e01351115620029db57600080fd5b50620029ee8d60608e01358e01620028ad565b9a9d999c50979a9699959895975050505060808401359360a08101359360c0820135935060e082013592506101009091013590565b60006020828403121562002a3657600080fd5b8135620014d48162002713565b801515811462001a9657600080fd5b6000806040838503121562002a6657600080fd5b823562002a738162002713565b9150602083013562002a858162002a43565b809150509250929050565b6000806000806080858703121562002aa757600080fd5b843562002ab48162002713565b935060208581013562002ac78162002713565b935060408601359250606086013567ffffffffffffffff8082111562002aec57600080fd5b818801915088601f83011262002b0157600080fd5b81358181111562002b165762002b166200282c565b62002b48847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016200285b565b9150808252898482850101111562002b5f57600080fd5b808484018584013760008482840101525080935050505092959194509250565b6000806040838503121562002b9357600080fd5b823562002ba08162002713565b9150602083013562002a858162002713565b600181811c9082168062002bc757607f821691505b60208210810362002c01577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121562002c1a57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008262002c87577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176200080a576200080a62002c21565b60006020828403121562002cb957600080fd5b8151620014d48162002a43565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362002cfa5762002cfa62002c21565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121562002d4357600080fd5b8151620014d48162002713565b601f82111562000d9957600081815260208120601f850160051c8101602086101562002d795750805b601f850160051c820191505b8181101562002d9a5782815560010162002d85565b505050505050565b67ffffffffffffffff83111562002dbd5762002dbd6200282c565b62002dd58362002dce835462002bb2565b8362002d50565b6000601f84116001811462002e2a576000851562002df35750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556200210c565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b8281101562002e7b578685013582556020948501946001909201910162002e59565b508682101562002eb7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b6060815283606082015283856080830137600060808583010152600060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f870116830101905073ffffffffffffffffffffffffffffffffffffffff8416602083015282604083015295945050505050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006200260d6040830184620026b2565b6000835162002f828184602088016200268c565b83519083019062002f988183602088016200268c565b01949350505050565b818103818111156200080a576200080a62002c21565b808201808211156200080a576200080a62002c21565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526200300e6080830184620026b2565b9695505050505050565b6000602082840312156200302b57600080fd5b8151620014d4816200262356fe60a06040526040516105e53803806105e583398101604081905261002291610387565b61002c828261003e565b506001600160a01b031660805261047e565b610047826100fe565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a28051156100f2576100ed826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e79190610447565b82610211565b505050565b6100fa610288565b5050565b806001600160a01b03163b60000361013957604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b81529051600092841691635c60da1b9160048083019260209291908290030181865afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610447565b9050806001600160a01b03163b6000036100fa57604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610130565b6060600080846001600160a01b03168460405161022e9190610462565b600060405180830381855af49150503d8060008114610269576040519150601f19603f3d011682016040523d82523d6000602084013e61026e565b606091505b50909250905061027f8583836102a9565b95945050505050565b34156102a75760405163b398979f60e01b815260040160405180910390fd5b565b6060826102be576102b982610308565b610301565b81511580156102d557506001600160a01b0384163b155b156102fe57604051639996b31560e01b81526001600160a01b0385166004820152602401610130565b50805b9392505050565b8051156103185780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b80516001600160a01b038116811461034857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561037e578181015183820152602001610366565b50506000910152565b6000806040838503121561039a57600080fd5b6103a383610331565b60208401519092506001600160401b03808211156103c057600080fd5b818501915085601f8301126103d457600080fd5b8151818111156103e6576103e661034d565b604051601f8201601f19908116603f0116810190838211818310171561040e5761040e61034d565b8160405282815288602084870101111561042757600080fd5b610438836020830160208801610363565b80955050505050509250929050565b60006020828403121561045957600080fd5b61030182610331565b60008251610474818460208701610363565b9190910192915050565b60805161014d61049860003960006024015261014d6000f3fe608060405261000c61000e565b005b61001e610019610020565b6100b6565b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b191906100da565b905090565b3660008037600080366000845af43d6000803e8080156100d5573d6000f35b3d6000fd5b6000602082840312156100ec57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461011057600080fd5b939250505056fea2646970667358221220f264fd31c6b294063385b5e6559a67913b2618204bd7b4fbf778e39fd93b7a5964736f6c63430008140033a2646970667358221220a445e1a8b672919efea95286902b764d66af84d3c808ccbdbb870a938618aea364736f6c63430008140033",
    "sourceMap": "537:5334:62:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1561:300:37;;;;;;:::i;:::-;;:::i;:::-;;;611:14:67;;604:22;586:41;;574:2;559:18;1561:300:37;;;;;;;;1241:61:62;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;969:25:67;;;957:2;942:18;1241:61:62;823:177:67;2365:89:37;;;:::i;:::-;;;;;;;:::i;3497:154::-;;;;;;:::i;:::-;;:::i;:::-;;;1996:42:67;1984:55;;;1966:74;;1954:2;1939:18;3497:154:37;1820:226:67;3323:113:37;;;;;;:::i;:::-;;:::i;:::-;;1062:43:62;;;;;;:::i;:::-;;;;;;;;;;;;;;1175:60;;;;;;:::i;:::-;;;;;;;;;;;;;;630:29;;;;;;4143:578:37;;;;;;:::i;:::-;;:::i;4983:642:62:-;;;;;;:::i;:::-;;:::i;4787:132:37:-;;;;;;:::i;:::-;;:::i;1430:50:62:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1308:55;;;;;;:::i;:::-;;;;;;;;;;;;;;1369;;;;;;:::i;:::-;;:::i;2185:118:37:-;;;;;;:::i;:::-;;:::i;2203:1747:62:-;;;;;;:::i;:::-;;:::i;1920:208:37:-;;;;;;:::i;:::-;;:::i;2293:101:26:-;;;:::i;5631:111:62:-;;;;;;:::i;:::-;;:::i;665:37::-;;;;;;;;;1638:85:26;1710:6;;;;1638:85;;2518:93:37;;;:::i;1014:42:62:-;;;;;;:::i;:::-;;;;;;;;;;;;;;3718:144:37;;;;;;:::i;:::-;;:::i;708:36:62:-;;;;;;;;;5748:115;;;;;;:::i;:::-;;:::i;4985:208:37:-;;;;;;:::i;:::-;;:::i;750:39:62:-;;;;;;;;;2677:255:37;;;;;;:::i;:::-;;:::i;825:49:62:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;3956:1021;;;;;;:::i;:::-;;:::i;964:44::-;;;;;;:::i;:::-;;:::i;909:49::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;3928:153:37;;;;;;:::i;:::-;4039:25;;;;4016:4;4039:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;3928:153;795:24:62;;;;;;;;;2543:215:26;;;;;;:::i;:::-;;:::i;1111:49:62:-;;;;;;:::i;:::-;;;;;;;;;;;;;;1561:300:37;1663:4;1698:40;;;1713:25;1698:40;;:104;;-1:-1:-1;1754:48:37;;;1769:33;1754:48;1698:104;:156;;;-1:-1:-1;861:25:48;846:40;;;;1818:36:37;1679:175;1561:300;-1:-1:-1;;1561:300:37:o;2365:89::-;2410:13;2442:5;2435:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2365:89;:::o;3497:154::-;3564:7;3583:22;3597:7;3583:13;:22::i;:::-;-1:-1:-1;6008:7:37;6034:24;;;:15;:24;;;;;;;;3623:21;5938:127;3323:113;3394:35;3403:2;3407:7;720:10:42;3394:8:37;:35::i;:::-;3323:113;;:::o;4143:578::-;4237:16;;;4233:87;;4276:33;;;;;4306:1;4276:33;;;1966:74:67;1939:18;;4276:33:37;;;;;;;;4233:87;4538:21;4562:34;4570:2;4574:7;720:10:42;4562:7:37;:34::i;:::-;4538:58;;4627:4;4610:21;;:13;:21;;;4606:109;;4654:50;;;;;9885:42:67;9954:15;;;4654:50:37;;;9936:34:67;9986:18;;;9979:34;;;10049:15;;10029:18;;;10022:43;9848:18;;4654:50:37;9673:398:67;4606:109:37;4223:498;4143:578;;;:::o;4983:642:62:-;5064:28;;;;:20;:28;;;;;;5045:15;:47;;5037:82;;;;;;;10278:2:67;5037:82:62;;;10260:21:67;10317:2;10297:18;;;10290:30;10356:24;10336:18;;;10329:52;10398:18;;5037:82:62;10076:346:67;5037:82:62;5129:24;5156:23;;;:15;:23;;;;;;;5212:50;;;;;5251:10;5212:50;;;1966:74:67;5156:23:62;;;;;5129:24;5156:23;;5212:38;;1939:18:67;;5212:50:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5348:10;;5281:24;5369:22;;;:14;:22;;;;;;;5348:44;;;;;:10;5369:22;;;5348:44;;;1966:74:67;5189:73:62;;-1:-1:-1;5281:24:62;;5348:10;;;:20;;1939:18:67;;5348:44:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5322:22;;;;:14;:22;;;;;;5309:35;;:12;:35;:::i;:::-;5308:84;;;;:::i;:::-;5403:10;;;5427:22;;;:14;:22;;;;;;;;5403:77;;;;;:10;5427:22;;;5403:77;;;11709:34:67;5451:10:62;11759:18:67;;;11752:43;11811:18;;;11804:34;;;5281:111:62;;-1:-1:-1;5403:10:62;;:23;;11621:18:67;;5403:77:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;5491:47:62;;;;;;;;969:25:67;;;5491:33:62;;;;;;942:18:67;;5491:47:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5565:22:62;;;;:14;:22;;;;;;;;;;5554:64;;969:25:67;;;5589:10:62;;-1:-1:-1;5554:64:62;5565:22;;;;5554:64;;942:18:67;5554:64:62;;;;;;;5027:598;;;4983:642;:::o;4787:132:37:-;4873:39;4890:4;4896:2;4900:7;4873:39;;;;;;;;;;;;:16;:39::i;:::-;4787:132;;;:::o;1369:55:62:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1369:55:62;;-1:-1:-1;1369:55:62:o;2185:118:37:-;2248:7;2274:22;2288:7;2274:13;:22::i;2203:1747:62:-;2528:14;;;2484:7;;2528:14;;2484:7;2552:16;2528:14;2552:16;:::i;:::-;;;;;;2578:18;2584:3;2589:6;2578:5;:18::i;:::-;2611:9;2607:279;2630:14;:21;2626:1;:25;2607:279;;;2676:17;:36;2694:14;2709:1;2694:17;;;;;;;;:::i;:::-;;;;;;;;;;;;2676:36;;;;;;;;;;;;-1:-1:-1;2676:36:62;;;;2672:139;;2731:65;;;;;12690:2:67;2731:65:62;;;12672:21:67;12729:2;12709:18;;;12702:30;12768:34;12748:18;;;12741:62;12839:25;12819:18;;;12812:53;12882:19;;2731:65:62;12488:419:67;2672:139:62;2825:26;;;;:18;:26;;;;;2857:17;;:14;;2872:1;;2857:17;;;;;;:::i;:::-;;;;;;;;;;;;2825:50;;;;;;;-1:-1:-1;2825:50:62;;;;;;;;;;;;;;;;;;;;;;2653:3;;;;:::i;:::-;;;;2607:279;;;-1:-1:-1;2925:13:62;;2974:21;;2925:186;;;;;:13;2974:21;;;2925:186;;;13304:34:67;3010:13:62;13354:18:67;;;13347:34;3045:4:62;13397:18:67;;;13390:43;13449:18;;;13442:34;;;2896:26:62;13492:19:67;;;13485:35;;;13557:3;13536:19;;;13529:32;13577:19;;;13570:30;;;2896:26:62;2925:13;;;;;:27;;13617:19:67;;2925:186:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2896:215;;3146:18;3121:14;:22;3136:6;3121:22;;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;3195:5;;3174:10;:18;3185:6;3174:18;;;;;;;;;;;:26;;;;;;;:::i;:::-;;3228:7;3210;:15;3218:6;3210:15;;;;;;;;;;;:25;;;;3317:8;3298;:16;3307:6;3298:16;;;;;;;;;;;:27;;;;3424:16;3388:25;:33;3414:6;3388:33;;;;;;;;;;;:52;;;;3487:18;3450:26;:34;3477:6;3450:34;;;;;;;;;;;:55;;;;3546:11;3515:20;:28;3536:6;3515:28;;;;;;;;;;;:42;;;;3567:32;3618:24;;;;;;;;;;;3679:42;;;3735:7;;3752:4;3759:16;3656:120;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3602:175;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3788:23:62;;;;:15;:23;;;;;;:55;;;;;;;;;;;;;;3858:62;;3788:55;;-1:-1:-1;3788:55:62;;3858:62;;;;;;;-1:-1:-1;3937:6:62;;2203:1747;-1:-1:-1;;;;;;;;;;;;;2203:1747:62:o;1920:208:37:-;1983:7;2006:19;;;2002:87;;2048:30;;;;;2075:1;2048:30;;;1966:74:67;1939:18;;2048:30:37;1820:226:67;2002:87:37;-1:-1:-1;2105:16:37;;;;;;:9;:16;;;;;;;1920:208::o;2293:101:26:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;5631:111:62:-;1531:13:26;:11;:13::i;:::-;5703:25:62::1;;;::::0;;;:17:::1;:25;::::0;;;;:32;;;::::1;5731:4;5703:32;::::0;;5631:111::o;2518:93:37:-;2565:13;2597:7;2590:14;;;;;:::i;3718:144::-;3803:52;720:10:42;3836:8:37;3846;3803:18;:52::i;5748:115:62:-;1531:13:26;:11;:13::i;:::-;5823:25:62::1;;5851:5;5823:25:::0;;;:17:::1;:25;::::0;;;;:33;;;::::1;::::0;;5748:115::o;4985:208:37:-;5098:31;5111:4;5117:2;5121:7;5098:12;:31::i;:::-;5139:47;5162:4;5168:2;5172:7;5181:4;5139:22;:47::i;2677:255::-;2741:13;2766:22;2780:7;2766:13;:22::i;:::-;;2799:21;2823:10;3250:9;;;;;;;;;-1:-1:-1;3250:9:37;;;3174:92;2823:10;2799:34;;2874:1;2856:7;2850:21;:25;:75;;;;;;;;;;;;;;;;;2892:7;2901:18;:7;:16;:18::i;:::-;2878:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2850:75;2843:82;2677:255;-1:-1:-1;;;2677:255:37:o;3956:1021:62:-;4040:1;4030:7;:11;4022:54;;;;;;;17836:2:67;4022:54:62;;;17818:21:67;17875:2;17855:18;;;17848:30;17914:32;17894:18;;;17887:60;17964:18;;4022:54:62;17634:354:67;4022:54:62;4113:33;;;;:25;:33;;;;;;4094:15;:52;;4086:92;;;;;;;18195:2:67;4086:92:62;;;18177:21:67;18234:2;18214:18;;;18207:30;18273:29;18253:18;;;18246:57;18320:18;;4086:92:62;17993:351:67;4086:92:62;4215:34;;;;:26;:34;;;;;;4196:15;:53;;4188:87;;;;;;;18551:2:67;4188:87:62;;;18533:21:67;18590:2;18570:18;;;18563:30;18629:23;18609:18;;;18602:51;18670:18;;4188:87:62;18349:345:67;4188:87:62;4286:25;4314:22;;;:14;:22;;;;;;;;;4346:58;;;;;;;18901:2:67;4346:58:62;;;18883:21:67;18940:2;18920:18;;;18913:30;18979:16;18959:18;;;18952:44;19013:18;;4346:58:62;18699:338:67;4346:58:62;4415:21;4449:15;;;:7;:15;;;;;;4467:5;;4439:25;;:7;:25;:::i;:::-;:33;;;;:::i;:::-;4415:57;-1:-1:-1;4482:22:62;4507:23;4415:57;4507:7;:23;:::i;:::-;4541:10;;:70;;;;;4565:10;4541:70;;;11709:34:67;4541:10:62;11779:15:67;;;11759:18;;;11752:43;11811:18;;;11804:34;;;4482:48:62;;-1:-1:-1;4541:10:62;;;:23;;11621:18:67;;4541:70:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;4621:10:62;;;;:23;4645:10;4657:15;4665:6;4657:7;:15::i;:::-;4621:67;;;;;;;;;;11658:42:67;11727:15;;;4621:67:62;;;11709:34:67;11779:15;;11759:18;;;11752:43;11811:18;;;11804:34;;;11621:18;;4621:67:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;4728:22:62;;;;:14;:22;;;;;:40;;4754:14;;4728:22;:40;;4754:14;;4728:40;:::i;:::-;;;;-1:-1:-1;;4779:24:62;4806:23;;;:15;:23;;;;;;;;4839:61;;;;;4873:10;4839:61;;;19479:74:67;19569:18;;;19562:34;;;4806:23:62;;;;;;;4839:33;;19452:18:67;;4839:61:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4915:55:62;;969:25:67;;;4950:10:62;;-1:-1:-1;4915:55:62;;;;-1:-1:-1;4915:55:62;;957:2:67;942:18;4915:55:62;;;;;;;4012:965;;;;3956:1021;;:::o;964:44::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2543:215:26:-;1531:13;:11;:13::i;:::-;2627:22:::1;::::0;::::1;2623:91;;2672:31;::::0;::::1;::::0;;2700:1:::1;2672:31;::::0;::::1;1966:74:67::0;1939:18;;2672:31:26::1;1820:226:67::0;2623:91:26::1;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;16138:241:37:-;16201:7;5799:16;;;:7;:16;;;;;;;;;16263:88;;16309:31;;;;;;;;969:25:67;;;942:18;;16309:31:37;823:177:67;14418:120:37;14498:33;14507:2;14511:7;14520:4;14526;14498:8;:33::i;8838:795::-;8924:7;5799:16;;;:7;:16;;;;;;;;;;;9035:18;;;9031:86;;9069:37;9086:4;9092;9098:7;9069:16;:37::i;:::-;9161:18;;;;9157:256;;9277:48;9294:1;9298:7;9315:1;9319:5;9277:8;:48::i;:::-;9368:15;;;;;;;:9;:15;;;;;:20;;;;;;9157:256;9427:16;;;;9423:107;;9487:13;;;;;;;:9;:13;;;;;:18;;9504:1;9487:18;;;9423:107;9540:16;;;;:7;:16;;;;;;:21;;;;;;;;;;;;;;9577:27;;9540:16;;9577:27;;;;;;;9622:4;8838:795;-1:-1:-1;;;;8838:795:37:o;9955:327::-;10022:16;;;10018:87;;10061:33;;;;;10091:1;10061:33;;;1966:74:67;1939:18;;10061:33:37;1820:226:67;10018:87:37;10114:21;10138:32;10146:2;10150:7;10167:1;10138:7;:32::i;:::-;10114:56;-1:-1:-1;10184:27:37;;;;10180:96;;10234:31;;;;;10262:1;10234:31;;;1966:74:67;1939:18;;10234:31:37;1820:226:67;1796:162:26;1710:6;;1855:23;1710:6;720:10:42;1855:23:26;1851:101;;1901:40;;;;;720:10:42;1901:40:26;;;1966:74:67;1939:18;;1901:40:26;1820:226:67;2912:187:26;3004:6;;;;3020:17;;;;;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;15591:312:37:-;15698:22;;;15694:91;;15743:31;;;;;1996:42:67;1984:55;;15743:31:37;;;1966:74:67;1939:18;;15743:31:37;1820:226:67;15694:91:37;15794:25;;;;;;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;:46;;;;;;;;;;;;;15855:41;;586::67;;;15855::37;;559:18:67;15855:41:37;;;;;;;15591:312;;;:::o;16918:782::-;17034:14;;;;:18;17030:664;;17072:71;;;;;:36;;;;;;:71;;720:10:42;;17123:4:37;;17129:7;;17138:4;;17072:71;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;17072:71:37;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;17068:616;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;17381:6;:13;17398:1;17381:18;17377:293;;17430:25;;;;;1996:42:67;1984:55;;17430:25:37;;;1966:74:67;1939:18;;17430:25:37;1820:226:67;17377:293:37;17622:6;17616:13;17607:6;17603:2;17599:15;17592:38;17068:616;17190:51;;;17200:41;17190:51;17186:130;;17272:25;;;;;1996:42:67;1984:55;;17272:25:37;;;1966:74:67;1939:18;;17272:25:37;1820:226:67;17186:130:37;17144:186;16918:782;;;;:::o;637:698:45:-;693:13;742:14;759:17;770:5;759:10;:17::i;:::-;779:1;759:21;742:38;;794:20;828:6;817:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;817:18:45;-1:-1:-1;794:41:45;-1:-1:-1;955:28:45;;;971:2;955:28;1010:282;1041:5;;1180:10;1175:2;1164:14;;1159:32;1041:5;1146:46;1236:2;1227:11;;;-1:-1:-1;1256:21:45;1010:282;1256:21;-1:-1:-1;1312:6:45;637:698;-1:-1:-1;;;637:698:45:o;14720:662:37:-;14880:9;:31;;;-1:-1:-1;14893:18:37;;;;;14880:31;14876:460;;;14927:13;14943:22;14957:7;14943:13;:22::i;:::-;14927:38;-1:-1:-1;15093:18:37;;;;;;;:35;;;15124:4;15115:13;;:5;:13;;;;15093:35;:69;;;;-1:-1:-1;4039:25:37;;;;4016:4;4039:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;15132:30;15093:69;15089:142;;;15189:27;;;;;1996:42:67;1984:55;;15189:27:37;;;1966:74:67;1939:18;;15189:27:37;1820:226:67;15089:142:37;15249:9;15245:81;;;15303:7;15299:2;15283:28;;15292:5;15283:28;;;;;;;;;;;;15245:81;14913:423;14876:460;-1:-1:-1;;15346:24:37;;;;:15;:24;;;;;:29;;;;;;;;;;;;;;;14720:662::o;7082:368::-;7194:38;7208:5;7215:7;7224;7194:13;:38::i;:::-;7189:255;;7252:19;;;7248:186;;7298:31;;;;;;;;969:25:67;;;942:18;;7298:31:37;823:177:67;7248:186:37;7375:44;;;;;19509:42:67;19497:55;;7375:44:37;;;19479:74:67;19569:18;;;19562:34;;;19452:18;;7375:44:37;19305:297:67;12214:916:50;12267:7;;12351:8;12342:17;;12338:103;;12388:8;12379:17;;;-1:-1:-1;12424:2:50;12414:12;12338:103;12467:8;12458:5;:17;12454:103;;12504:8;12495:17;;;-1:-1:-1;12540:2:50;12530:12;12454:103;12583:8;12574:5;:17;12570:103;;12620:8;12611:17;;;-1:-1:-1;12656:2:50;12646:12;12570:103;12699:7;12690:5;:16;12686:100;;12735:7;12726:16;;;-1:-1:-1;12770:1:50;12760:11;12686:100;12812:7;12803:5;:16;12799:100;;12848:7;12839:16;;;-1:-1:-1;12883:1:50;12873:11;12799:100;12925:7;12916:5;:16;12912:100;;12961:7;12952:16;;;-1:-1:-1;12996:1:50;12986:11;12912:100;13038:7;13029:5;:16;13025:66;;13075:1;13065:11;13117:6;12214:916;-1:-1:-1;;12214:916:50:o;6376:272:37:-;6479:4;6514:21;;;;;;;:127;;;6561:7;6552:16;;:5;:16;;;:52;;;-1:-1:-1;4039:25:37;;;;4016:4;4039:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;6572:32;6552:88;;;-1:-1:-1;6008:7:37;6034:24;;;:15;:24;;;;;;6608:32;;;;6034:24;;6608:32;6552:88;6495:146;6376:272;-1:-1:-1;;;;6376:272:37:o;-1:-1:-1:-;;;;;;;;:::o;14:177:67:-;99:66;92:5;88:78;81:5;78:89;68:117;;181:1;178;171:12;196:245;254:6;307:2;295:9;286:7;282:23;278:32;275:52;;;323:1;320;313:12;275:52;362:9;349:23;381:30;405:5;381:30;:::i;638:180::-;697:6;750:2;738:9;729:7;725:23;721:32;718:52;;;766:1;763;756:12;718:52;-1:-1:-1;789:23:67;;638:180;-1:-1:-1;638:180:67:o;1005:250::-;1090:1;1100:113;1114:6;1111:1;1108:13;1100:113;;;1190:11;;;1184:18;1171:11;;;1164:39;1136:2;1129:10;1100:113;;;-1:-1:-1;;1247:1:67;1229:16;;1222:27;1005:250::o;1260:330::-;1302:3;1340:5;1334:12;1367:6;1362:3;1355:19;1383:76;1452:6;1445:4;1440:3;1436:14;1429:4;1422:5;1418:16;1383:76;:::i;:::-;1504:2;1492:15;1509:66;1488:88;1479:98;;;;1579:4;1475:109;;1260:330;-1:-1:-1;;1260:330:67:o;1595:220::-;1744:2;1733:9;1726:21;1707:4;1764:45;1805:2;1794:9;1790:18;1782:6;1764:45;:::i;2051:154::-;2137:42;2130:5;2126:54;2119:5;2116:65;2106:93;;2195:1;2192;2185:12;2210:134;2278:20;;2307:31;2278:20;2307:31;:::i;:::-;2210:134;;;:::o;2349:315::-;2417:6;2425;2478:2;2466:9;2457:7;2453:23;2449:32;2446:52;;;2494:1;2491;2484:12;2446:52;2533:9;2520:23;2552:31;2577:5;2552:31;:::i;:::-;2602:5;2654:2;2639:18;;;;2626:32;;-1:-1:-1;;;2349:315:67:o;2669:456::-;2746:6;2754;2762;2815:2;2803:9;2794:7;2790:23;2786:32;2783:52;;;2831:1;2828;2821:12;2783:52;2870:9;2857:23;2889:31;2914:5;2889:31;:::i;:::-;2939:5;-1:-1:-1;2996:2:67;2981:18;;2968:32;3009:33;2968:32;3009:33;:::i;:::-;2669:456;;3061:7;;-1:-1:-1;;;3115:2:67;3100:18;;;;3087:32;;2669:456::o;3130:248::-;3198:6;3206;3259:2;3247:9;3238:7;3234:23;3230:32;3227:52;;;3275:1;3272;3265:12;3227:52;-1:-1:-1;;3298:23:67;;;3368:2;3353:18;;;3340:32;;-1:-1:-1;3130:248:67:o;3383:348::-;3435:8;3445:6;3499:3;3492:4;3484:6;3480:17;3476:27;3466:55;;3517:1;3514;3507:12;3466:55;-1:-1:-1;3540:20:67;;3583:18;3572:30;;3569:50;;;3615:1;3612;3605:12;3569:50;3652:4;3644:6;3640:17;3628:29;;3704:3;3697:4;3688:6;3680;3676:19;3672:30;3669:39;3666:59;;;3721:1;3718;3711:12;3666:59;3383:348;;;;;:::o;3736:184::-;3788:77;3785:1;3778:88;3885:4;3882:1;3875:15;3909:4;3906:1;3899:15;3925:334;3996:2;3990:9;4052:2;4042:13;;4057:66;4038:86;4026:99;;4155:18;4140:34;;4176:22;;;4137:62;4134:88;;;4202:18;;:::i;:::-;4238:2;4231:22;3925:334;;-1:-1:-1;3925:334:67:o;4264:787::-;4318:5;4371:3;4364:4;4356:6;4352:17;4348:27;4338:55;;4389:1;4386;4379:12;4338:55;4425:6;4412:20;4451:4;4474:18;4470:2;4467:26;4464:52;;;4496:18;;:::i;:::-;4542:2;4539:1;4535:10;4565:28;4589:2;4585;4581:11;4565:28;:::i;:::-;4627:15;;;4697;;;4693:24;;;4658:12;;;;4729:15;;;4726:35;;;4757:1;4754;4747:12;4726:35;4793:2;4785:6;4781:15;4770:26;;4805:217;4821:6;4816:3;4813:15;4805:217;;;4901:3;4888:17;4918:31;4943:5;4918:31;:::i;:::-;4962:18;;4838:12;;;;5000;;;;4805:217;;;5040:5;4264:787;-1:-1:-1;;;;;;;4264:787:67:o;5056:1339::-;5236:6;5244;5252;5260;5268;5276;5284;5292;5300;5308;5316:7;5370:3;5358:9;5349:7;5345:23;5341:33;5338:53;;;5387:1;5384;5377:12;5338:53;5410:18;5468:2;5456:9;5443:23;5440:31;5437:51;;;5484:1;5481;5474:12;5437:51;5523:76;5591:7;5578:9;5565:23;5554:9;5550:39;5523:76;:::i;:::-;5618:8;;-1:-1:-1;5645:8:67;-1:-1:-1;5696:2:67;5681:18;;5668:32;5665:40;-1:-1:-1;5662:60:67;;;5718:1;5715;5708:12;5662:60;5757:85;5834:7;5827:2;5816:9;5812:18;5799:32;5788:9;5784:48;5757:85;:::i;:::-;5861:8;;-1:-1:-1;5888:8:67;-1:-1:-1;5915:38:67;5949:2;5934:18;;5915:38;:::i;:::-;5905:48;;6002:2;5996;5985:9;5981:18;5968:32;5965:40;5962:60;;;6018:1;6015;6008:12;5962:60;;6041:87;6120:7;6113:2;6102:9;6098:18;6085:32;6074:9;6070:48;6041:87;:::i;:::-;5056:1339;;;;-1:-1:-1;5056:1339:67;;;;;;6031:97;;-1:-1:-1;;;;6175:3:67;6160:19;;6147:33;;6227:3;6212:19;;6199:33;;6279:3;6264:19;;6251:33;;-1:-1:-1;6331:3:67;6316:19;;6303:33;;-1:-1:-1;6384:3:67;6369:19;;;6356:33;;5056:1339::o;6400:247::-;6459:6;6512:2;6500:9;6491:7;6487:23;6483:32;6480:52;;;6528:1;6525;6518:12;6480:52;6567:9;6554:23;6586:31;6611:5;6586:31;:::i;6909:118::-;6995:5;6988:13;6981:21;6974:5;6971:32;6961:60;;7017:1;7014;7007:12;7032:382;7097:6;7105;7158:2;7146:9;7137:7;7133:23;7129:32;7126:52;;;7174:1;7171;7164:12;7126:52;7213:9;7200:23;7232:31;7257:5;7232:31;:::i;:::-;7282:5;-1:-1:-1;7339:2:67;7324:18;;7311:32;7352:30;7311:32;7352:30;:::i;:::-;7401:7;7391:17;;;7032:382;;;;;:::o;7419:1167::-;7514:6;7522;7530;7538;7591:3;7579:9;7570:7;7566:23;7562:33;7559:53;;;7608:1;7605;7598:12;7559:53;7647:9;7634:23;7666:31;7691:5;7666:31;:::i;:::-;7716:5;-1:-1:-1;7740:2:67;7779:18;;;7766:32;7807:33;7766:32;7807:33;:::i;:::-;7859:7;-1:-1:-1;7913:2:67;7898:18;;7885:32;;-1:-1:-1;7968:2:67;7953:18;;7940:32;7991:18;8021:14;;;8018:34;;;8048:1;8045;8038:12;8018:34;8086:6;8075:9;8071:22;8061:32;;8131:7;8124:4;8120:2;8116:13;8112:27;8102:55;;8153:1;8150;8143:12;8102:55;8189:2;8176:16;8211:2;8207;8204:10;8201:36;;;8217:18;;:::i;:::-;8259:112;8367:2;8298:66;8291:4;8287:2;8283:13;8279:86;8275:95;8259:112;:::i;:::-;8246:125;;8394:2;8387:5;8380:17;8434:7;8429:2;8424;8420;8416:11;8412:20;8409:33;8406:53;;;8455:1;8452;8445:12;8406:53;8510:2;8505;8501;8497:11;8492:2;8485:5;8481:14;8468:45;8554:1;8549:2;8544;8537:5;8533:14;8529:23;8522:34;;8575:5;8565:15;;;;;7419:1167;;;;;;;:::o;8591:388::-;8659:6;8667;8720:2;8708:9;8699:7;8695:23;8691:32;8688:52;;;8736:1;8733;8726:12;8688:52;8775:9;8762:23;8794:31;8819:5;8794:31;:::i;:::-;8844:5;-1:-1:-1;8901:2:67;8886:18;;8873:32;8914:33;8873:32;8914:33;:::i;9231:437::-;9310:1;9306:12;;;;9353;;;9374:61;;9428:4;9420:6;9416:17;9406:27;;9374:61;9481:2;9473:6;9470:14;9450:18;9447:38;9444:218;;9518:77;9515:1;9508:88;9619:4;9616:1;9609:15;9647:4;9644:1;9637:15;9444:218;;9231:437;;;:::o;10427:184::-;10497:6;10550:2;10538:9;10529:7;10525:23;10521:32;10518:52;;;10566:1;10563;10556:12;10518:52;-1:-1:-1;10589:16:67;;10427:184;-1:-1:-1;10427:184:67:o;10805:::-;10857:77;10854:1;10847:88;10954:4;10951:1;10944:15;10978:4;10975:1;10968:15;10994:274;11034:1;11060;11050:189;;11095:77;11092:1;11085:88;11196:4;11193:1;11186:15;11224:4;11221:1;11214:15;11050:189;-1:-1:-1;11253:9:67;;10994:274::o;11273:168::-;11346:9;;;11377;;11394:15;;;11388:22;;11374:37;11364:71;;11415:18;;:::i;11849:245::-;11916:6;11969:2;11957:9;11948:7;11944:23;11940:32;11937:52;;;11985:1;11982;11975:12;11937:52;12017:9;12011:16;12036:28;12058:5;12036:28;:::i;12099:195::-;12138:3;12169:66;12162:5;12159:77;12156:103;;12239:18;;:::i;:::-;-1:-1:-1;12286:1:67;12275:13;;12099:195::o;12299:184::-;12351:77;12348:1;12341:88;12448:4;12445:1;12438:15;12472:4;12469:1;12462:15;13647:251;13717:6;13770:2;13758:9;13749:7;13745:23;13741:32;13738:52;;;13786:1;13783;13776:12;13738:52;13818:9;13812:16;13837:31;13862:5;13837:31;:::i;14029:545::-;14131:2;14126:3;14123:11;14120:448;;;14167:1;14192:5;14188:2;14181:17;14237:4;14233:2;14223:19;14307:2;14295:10;14291:19;14288:1;14284:27;14278:4;14274:38;14343:4;14331:10;14328:20;14325:47;;;-1:-1:-1;14366:4:67;14325:47;14421:2;14416:3;14412:12;14409:1;14405:20;14399:4;14395:31;14385:41;;14476:82;14494:2;14487:5;14484:13;14476:82;;;14539:17;;;14520:1;14509:13;14476:82;;;14480:3;;;14029:545;;;:::o;14810:1325::-;14934:18;14929:3;14926:27;14923:53;;;14956:18;;:::i;:::-;14985:94;15075:3;15035:38;15067:4;15061:11;15035:38;:::i;:::-;15029:4;14985:94;:::i;:::-;15105:1;15130:2;15125:3;15122:11;15147:1;15142:735;;;;15921:1;15938:3;15935:93;;;-1:-1:-1;15994:19:67;;;15981:33;15935:93;14716:66;14707:1;14703:11;;;14699:84;14695:89;14685:100;14791:1;14787:11;;;14682:117;16041:78;;15115:1014;;15142:735;13976:1;13969:14;;;14013:4;14000:18;;15187:66;15178:76;;;15338:9;15360:229;15374:7;15371:1;15368:14;15360:229;;;15463:19;;;15450:33;15435:49;;15570:4;15555:20;;;;15523:1;15511:14;;;;15390:12;15360:229;;;15364:3;15617;15608:7;15605:16;15602:219;;;15737:66;15731:3;15725;15722:1;15718:11;15714:21;15710:94;15706:99;15693:9;15688:3;15684:19;15671:33;15667:139;15659:6;15652:155;15602:219;;;15864:1;15858:3;15855:1;15851:11;15847:19;15841:4;15834:33;15115:1014;;14810:1325;;;:::o;16140:645::-;16355:2;16344:9;16337:21;16394:6;16389:2;16378:9;16374:18;16367:34;16452:6;16444;16438:3;16427:9;16423:19;16410:49;16509:1;16503:3;16494:6;16483:9;16479:22;16475:32;16468:43;16318:4;16638:3;16568:66;16563:2;16555:6;16551:15;16547:88;16536:9;16532:104;16528:114;16520:122;;16692:42;16684:6;16680:55;16673:4;16662:9;16658:20;16651:85;16772:6;16767:2;16756:9;16752:18;16745:34;16140:645;;;;;;;:::o;16790:338::-;16977:42;16969:6;16965:55;16954:9;16947:74;17057:2;17052;17041:9;17037:18;17030:30;16928:4;17077:45;17118:2;17107:9;17103:18;17095:6;17077:45;:::i;17133:496::-;17312:3;17350:6;17344:13;17366:66;17425:6;17420:3;17413:4;17405:6;17401:17;17366:66;:::i;:::-;17495:13;;17454:16;;;;17517:70;17495:13;17454:16;17564:4;17552:17;;17517:70;:::i;:::-;17603:20;;17133:496;-1:-1:-1;;;;17133:496:67:o;19042:128::-;19109:9;;;19130:11;;;19127:37;;;19144:18;;:::i;19175:125::-;19240:9;;;19261:10;;;19258:36;;;19274:18;;:::i;19607:512::-;19801:4;19830:42;19911:2;19903:6;19899:15;19888:9;19881:34;19963:2;19955:6;19951:15;19946:2;19935:9;19931:18;19924:43;;20003:6;19998:2;19987:9;19983:18;19976:34;20046:3;20041:2;20030:9;20026:18;20019:31;20067:46;20108:3;20097:9;20093:19;20085:6;20067:46;:::i;:::-;20059:54;19607:512;-1:-1:-1;;;;;;19607:512:67:o;20124:249::-;20193:6;20246:2;20234:9;20225:7;20221:23;20217:32;20214:52;;;20262:1;20259;20252:12;20214:52;20294:9;20288:16;20313:30;20337:5;20313:30;:::i",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "_fundIdCounter()": "1ec3e6c4",
    "admFees(uint256)": "995c8472",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "closeInvestimentTimestamps(uint256)": "069af241",
    "createFund(string,string,address,address[],uint256,uint256,uint256,uint256,uint256)": "6c4f8442",
    "erc6551Implementation()": "b3dd12a2",
    "fundsAddresses(uint256)": "e7e1f1c7",
    "fundsAllowedTokens(uint256,uint256)": "6166cb93",
    "fundsNames(uint256)": "dae51d03",
    "fundsRegister()": "8d180195",
    "getApproved(uint256)": "081812fc",
    "initialAmounts(uint256)": "fb91fb42",
    "invest(uint256,uint256)": "d87aa643",
    "isApprovedForAll(address,address)": "e985e9c5",
    "name()": "06fdde03",
    "openInvestimentTimestamps(uint256)": "1c02225f",
    "openRedeemTimestamps(uint256)": "54d89c91",
    "owner()": "8da5cb5b",
    "ownerOf(uint256)": "6352211e",
    "perfFees(uint256)": "0d0a01cf",
    "quotaTokenImplementation()": "c2ae0e3e",
    "quotasAddresses(uint256)": "4835a6be",
    "redeemYield(uint256)": "258d3c33",
    "removeWhiteListedToken(address)": "b5541dd8",
    "renounceOwnership()": "715018a6",
    "safeTransferFrom(address,address,uint256)": "42842e0e",
    "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setWhiteListedToken(address)": "822dde8d",
    "stablecoin()": "e9cbd822",
    "supportsInterface(bytes4)": "01ffc9a7",
    "symbol()": "95d89b41",
    "tokenURI(uint256)": "c87b56dd",
    "transferFrom(address,address,uint256)": "23b872dd",
    "transferOwnership(address)": "f2fde38b",
    "whiteListedTokens(address)": "d3c26383"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_fundsRegister\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_erc6551Implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_erc20Implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_stablecoin\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"fundAddress\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"quotaTokenAddress\",\"type\":\"address\"}],\"name\":\"FundCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"fundAddress\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"investor\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"InvestimentMade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"fundAddress\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"investor\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"RedeemMade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"_fundIdCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"admFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"closeInvestimentTimestamps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"_allowedTokens\",\"type\":\"address[]\"},{\"internalType\":\"uint256\",\"name\":\"_admFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_perfFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openInvestiment\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_closeInvestiments\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_openRedeem\",\"type\":\"uint256\"}],\"name\":\"createFund\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc6551Implementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"fundsAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"fundsAllowedTokens\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"fundsNames\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fundsRegister\",\"outputs\":[{\"internalType\":\"contract IERC6551Registry\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"initialAmounts\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fundId\",\"type\":\"uint256\"}],\"name\":\"invest\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"openInvestimentTimestamps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"openRedeemTimestamps\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"perfFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"quotaTokenImplementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"quotasAddresses\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"fundId\",\"type\":\"uint256\"}],\"name\":\"redeemYield\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"removeWhiteListedToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"setWhiteListedToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stablecoin\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"whiteListedTokens\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in EIP-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/WhaleFinance.sol\":\"WhaleFinance\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol\":{\"keccak256\":\"0xa958c99f509dc410893b0f5bb154c6b53d1b9624dbf44bdb1b412d32b976962d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c1f5d5a34d12d7355abd7fb7e84ddb37126364b3ae6dd10f3923b3c3cdf32240\",\"dweb:/ipfs/QmYB72hzpvZxFq6VhkC71gccvCVV2RvjNm6LENV1asUMjc\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/interfaces/draft-IERC6093Upgradeable.sol\":{\"keccak256\":\"0x325fcc994c3b0ec9dc3462de33d73341f62e79f6694668008f397982798732ca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ef63b0daeac007015340c910798bff9a703d30cb2efb653d938f4610eeea59e\",\"dweb:/ipfs/QmSRtwJt3unadm8ZtWNn4Hh82fpVqJRpiy2hcXRGeFAN4G\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x388ea88b590f192f0b871b653afae74d98f51926e8165b4a08022028eb10be9f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2aae11f9ca0d2f314b23cc541b70be458c91d76b8a2c75d958d3e8a974dcdb17\",\"dweb:/ipfs/QmVNMGRTHFDA3jEKP26GZ2rv4Z7EZQDFiar9n8JgWEtnmu\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol\":{\"keccak256\":\"0xddf8164eb7cba1411e6cda1a46fd38090e2815879ca210323081bfb8e063bb18\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c98b499f48284b6eaef8b504a244166fcbbc2f10cfebd16baa75a12d83917eb1\",\"dweb:/ipfs/QmWFkaVrr3s43PoWYHtoDVKDkTDw1tqpcsCuV6Qz9NcVDJ\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/IERC20Upgradeable.sol\":{\"keccak256\":\"0xb54dd0ac9b78140da5637c93bc8406ea5032e578077313277e396ffd4cca3b48\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://dcabb39e96307298278e9befdb26fd9e0bfef752968f2fa14de7fa989dcd988d\",\"dweb:/ipfs/QmarwVEJpPzQE2CCAdHoY3VA3ouqaGLS89snmKuKQPvEDg\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/extensions/IERC20MetadataUpgradeable.sol\":{\"keccak256\":\"0xee1f023849f00ace109c92693b165a974038f8a4e87e35ca11b15ca7bbfdb6e6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://28ca3e6bc207bbaba30fa7f2d4979000865a992560c305969db6463ac8a960ec\",\"dweb:/ipfs/QmT6FCvRnDr1WzHVfvzftiAtr4KcKzwd2eE78wfskMTXod\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0x105602b0c2179ac822eedcb26ea88f2bbc462d2b85969567402d2c5d66d2485d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f965639ad3f54a3f5ae350ff7d240f9fddbd3554ab258aed27fc66cf9dd12e11\",\"dweb:/ipfs/QmUwGTuw7XUB8GbMSh6r9LTBmZGmcySrHxwVbE5H2NJc2Z\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0x748a00f78239996ed3edb1ae579ef20620696e71d63dd00ef51e76438ffafe32\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fe0d90148460ef16e23e917f9941e555aa2433a42f1118efc1dad028e211be46\",\"dweb:/ipfs/QmTeb8DACx8XWJVNhP2e12Q3pvpgr47rTExoFK2UjW3bgK\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x5cf735f5eac2ea8469cdf266e51027bebb762eb33886f09157afc8902e177119\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b9d9420ab10ec9a2e42cb934cadfe506aa446e8dbc49fa89f1f70e1d1e926c5a\",\"dweb:/ipfs/QmPKYUyeHpAN3YAkenrpSKnNZTaznS8gbkdAQqYZynCuwh\"]},\"lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0xf58d5eff35112a3a4d76ca56bcc1aea9ea0d0b41f8d83ab079c3abc80edb3d61\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c1c115a63c8e073a8c40b53c4d9f6d4a629dc2fd5b9b3794944fb1a8911d8cb8\",\"dweb:/ipfs/QmbsCSoGPQyuwL2ihh1qutiLxFcnn3ay2rxUoYy66oyPjB\"]},\"lib/openzeppelin-contracts/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0x0beb6efc1d7cf7d9442e9babf25084d46f6b8177465c2c8c1d8ea4887efa3a48\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e5c0e2644e59d14f6c2b1f5ee23227ca4906dbdb334d50d0f6c285248784ae7\",\"dweb:/ipfs/QmYmwDvicpawT9BiGTAzBC9W9LJbQDSAt339w8D7RvjAsg\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol\":{\"keccak256\":\"0x06d92aa5043365e8a833b4615125050824946653c3e5912d98bf31f028fda00e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a939fa2d72288f1c6f99b765809449ce6b50da520c501f887616fa212ac3bb16\",\"dweb:/ipfs/QmQpPZxCvagAp1BBADNvZbVs1YbKiTajguhguDUsckcJGX\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xcb809ab9a7b6ecf4dc603d387def93840b36508221c5228c692608c60870e264\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://37f02385dc02f7dfb4c2a34ecaacc6e94c30fca5751c64c0b83204455efacc5e\",\"dweb:/ipfs/QmXK6LQxhka3KKzKGxRMRpxGQPW4YomKpxeucifYcCRHWs\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x59613a2a99c3dc2279efa01fa7830ac8bebeb09cf08bee0e079808e060474490\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ce4079fe2d9c130f751b1d9e079382c2abc408f67b271fed31d3701431814b9\",\"dweb:/ipfs/QmT9SnpdmqmwuvyDFPuZPdiwXpnmgKXQ75wPi4zCVF9Zt1\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x128678ee3c594161a26eae9b27d21b934e79556ce866306133c790c22d34f38c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://10971d43d16db54afe5212a618c36569bd34e3e25a63be612cf13652f2424efa\",\"dweb:/ipfs/QmcsbVy4JBiamLWLMDrijhSW7CAZtyfh38prNuMq6geVT9\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x11978b1a63c34da7be9478e3ef9b010c77e3a6a3907271a9fbcaecea5e690c7c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://230dcb6f06c05bdd45777779db201a6bfdb491c0c78847c7200a54162f08f557\",\"dweb:/ipfs/QmbsVtCMwG4cEupL38UyBcZXgJ7SipqYZMgrir96aXJm5S\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0xc501b84f399c78405cba7cac0b9ce06583488c157af3806b084d712b349fb81b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7aeb263e32903ef93b888a628d8f56ddc8dcd85097daa75f6ae656d9c25c256b\",\"dweb:/ipfs/QmWWofk6bSdPe7rpV2KRJtfoJDzwFQmfmGF1GVkJ54MHJK\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x0bcce5cdcd2d9fa17dc0d191b423944f44a40119e0b8ee09a844a5086f51141a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0579234e7288fdf249ba9c5abb5dad856946b6e5d250e5db8129d1bc91e8695d\",\"dweb:/ipfs/QmTKZy1MajRDkb9jjTLcJh88w6BiqWQixUK32yZFEiUSmN\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x7e72f4a760bb695930d6dd0f3cf69fc7de7d7073ed16c05e27d2f32bb4579d16\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1386c5212058c09e13c77c203efa2194578d5d6a38753d8c9a4c2f24953f296b\",\"dweb:/ipfs/QmPFmRnxdKdQ6mQxbDBNBVBhJq2eGfBEvShzATdYqHWU9L\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0xf94e12c661651a6f70062449f3933bece6bc61901853affe01d507aa1ede591b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e85e152b7adddeb9f42f82d88c7544f6345f60b1738e738b8e3c805202addecd\",\"dweb:/ipfs/QmdWF9Ecj56gkbRqkxRvjY9zq6UDd91ekhBcVdXfQXTPjs\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0x867f642b41aad25a188292e639eb05540b8c04c1d1d5b108614912b6b48ed334\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://956711e2d66741c1eee26842d2a9b25401df78fba5e46a0558f523543b01c488\",\"dweb:/ipfs/QmUgj4gXE7oLW75yVhJxMRDq37X1t1xbt6DbQZBKqJQvUo\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xdbc33ea310e83250cca8ad26e935a8d50ea10e781ba64a31beb0ea2ec912c605\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://54cc15b73a5e92fd1ed78cb67504a534ab5879e11c0688ec10809128e1e00ac8\",\"dweb:/ipfs/QmPRtXeXmMyYt8J8u57HV6GQjuSevjE8gk5tMeyqXdkAzu\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x8fd6cd1578329513b152f795a6b7b232a11a230fb58168074e802b96dbb6552a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a10135835ae8f0f41644d141e1f35f5e69f63efc8cfb4db402998f515af76715\",\"dweb:/ipfs/Qmdzhd37HjdBBptEG9CPnqoMZNiUbtUJwU78DtmmFajLnD\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x7684ca45ad2adbf8f5d985c39e4bd4fb472a9ea7ab99bf2fe657a9fa8678f72b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e449a809ef554bdc466972d2b2d1bdb9e715ae84ca1d889e648a886cca9c3277\",\"dweb:/ipfs/QmPG7U7QzvwVPN18eWw9EW5WJmhqAr9jRTW9NRse4T1QHU\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xe9f6e61c1cb74b20b0f77828ad61faff9d993ec05ca813613f277c437ce8ab4e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51365ac19d4ed3bd7d77343f793968128c509e606611b328ae900684658053b3\",\"dweb:/ipfs/QmSXWiRwXdZyHVvyGis6zKBDm5nJehYJxMXfAyLdFiei1E\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xf66b7397bb70080f6f4ec77eecfda1814d04e47f70d55b0f22179619045f6835\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b70065eda5adfda82cdec1258c13a660dfe9a403bba7df7abc320ca04770ebc7\",\"dweb:/ipfs/QmbW11jKKvA5HUrAR5P4YoDdWJLEGGM9MZu64YqwgFwgNn\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x78806c6b7d659ea9fb95a67943da0260b5a38d69d2a36fade861b53a10e2432a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9a7c3804cdeb4e5bee5e15128fc8eeea07333191802ff1efd169ef34e06b7941\",\"dweb:/ipfs/QmPS2nwNPXHDExk6xd7xH136awG69gFpi9b4MZeCBRNBvn\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x4c3b5ecf2e0f2d466f6e12645709d1a884961b4b82c8f6b7fad7c83f6c52ae42\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1409caf33c143298e72b1b8f7e32badf0575bc7458a2f417acf0e6bbdd868359\",\"dweb:/ipfs/Qmcq8iWwCk5NjdeuxrVTg4FAPrPhbbkL8DdvUpYBFjYX2f\"]},\"src/QuotaToken.sol\":{\"keccak256\":\"0x5b2b3f592431ca16dfa8efb4e01839b980ddc6f93a85bd1b54e2959fc59b7538\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d0beb5ec4005faaf47a4522ea5dd621c026b9bfbbf46198f2373c22f157a2799\",\"dweb:/ipfs/QmXtSnkTBnRaV1hFUFhZ4tURVkyUdt1tDdpNrzkv5jqoDo\"]},\"src/WhaleFinance.sol\":{\"keccak256\":\"0xac7a8b2c882dc1bb6e2e3b04cd6d88e676f0728320bfb41d7d6a1141ec77ca4d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c96527eef4de3222bec67e3ec8c63fac869c458de3e7b0ee835bde0a8c5907c7\",\"dweb:/ipfs/QmNeL7xgfrbTb2YH3hcZMPUsoX43LJJj2VQkHBW4AmTCn8\"]},\"src/interface/IERC6551Registry.sol\":{\"keccak256\":\"0x3f9743c931db0bf287bd3ba762f1b2371af614e7eb3c2ce3318a49ed1a15411a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30fb28b4c7f4290600bec069c8b7cf3d3e41c0cc02f0c8c7bb4b37a3489a6d39\",\"dweb:/ipfs/QmPVpGADyuytD9TgN5THddUXjigz34YQALAsBNk8z6SNxG\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_fundsRegister",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_erc6551Implementation",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_erc20Implementation",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_stablecoin",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721IncorrectOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC721InsufficientApproval"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidApprover"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidOperator"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidReceiver"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidSender"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC721NonexistentToken"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableInvalidOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableUnauthorizedAccount"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "approved",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ApprovalForAll",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "fundAddress",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "quotaTokenAddress",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "FundCreated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "fundAddress",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "investor",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "InvestimentMade",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "previousOwner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipTransferred",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "fundAddress",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "investor",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RedeemMade",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "_fundIdCounter",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "admFees",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "closeInvestimentTimestamps",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbol",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "_allowedTokens",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "_admFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_perfFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_openInvestiment",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_closeInvestiments",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_openRedeem",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createFund",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "erc6551Implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "fundsAddresses",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "fundsAllowedTokens",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "fundsNames",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "fundsRegister",
          "outputs": [
            {
              "internalType": "contract IERC6551Registry",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "initialAmounts",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fundId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "invest"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "openInvestimentTimestamps",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "openRedeemTimestamps",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "perfFees",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "quotaTokenImplementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "quotasAddresses",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "fundId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeemYield"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_token",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeWhiteListedToken"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalForAll"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_token",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setWhiteListedToken"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "stablecoin",
          "outputs": [
            {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "whiteListedTokens",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "approve(address,uint256)": {
            "details": "See {IERC721-approve}."
          },
          "balanceOf(address)": {
            "details": "See {IERC721-balanceOf}."
          },
          "getApproved(uint256)": {
            "details": "See {IERC721-getApproved}."
          },
          "isApprovedForAll(address,address)": {
            "details": "See {IERC721-isApprovedForAll}."
          },
          "name()": {
            "details": "See {IERC721Metadata-name}."
          },
          "owner()": {
            "details": "Returns the address of the current owner."
          },
          "ownerOf(uint256)": {
            "details": "See {IERC721-ownerOf}."
          },
          "renounceOwnership()": {
            "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
          },
          "safeTransferFrom(address,address,uint256)": {
            "details": "See {IERC721-safeTransferFrom}."
          },
          "safeTransferFrom(address,address,uint256,bytes)": {
            "details": "See {IERC721-safeTransferFrom}."
          },
          "setApprovalForAll(address,bool)": {
            "details": "See {IERC721-setApprovalForAll}."
          },
          "supportsInterface(bytes4)": {
            "details": "See {IERC165-supportsInterface}."
          },
          "symbol()": {
            "details": "See {IERC721Metadata-symbol}."
          },
          "tokenURI(uint256)": {
            "details": "See {IERC721Metadata-tokenURI}."
          },
          "transferFrom(address,address,uint256)": {
            "details": "See {IERC721-transferFrom}."
          },
          "transferOwnership(address)": {
            "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        ":@openzeppelin/=lib/openzeppelin-contracts/",
        ":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        ":@upgradeable/=lib/openzeppelin-contracts-upgradeable/",
        ":ds-test/=lib/forge-std/lib/ds-test/src/",
        ":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        ":forge-std/=lib/forge-std/src/",
        ":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",
        ":openzeppelin-contracts/=lib/openzeppelin-contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 20000
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/WhaleFinance.sol": "WhaleFinance"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol": {
        "keccak256": "0xa958c99f509dc410893b0f5bb154c6b53d1b9624dbf44bdb1b412d32b976962d",
        "urls": [
          "bzz-raw://c1f5d5a34d12d7355abd7fb7e84ddb37126364b3ae6dd10f3923b3c3cdf32240",
          "dweb:/ipfs/QmYB72hzpvZxFq6VhkC71gccvCVV2RvjNm6LENV1asUMjc"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts-upgradeable/contracts/interfaces/draft-IERC6093Upgradeable.sol": {
        "keccak256": "0x325fcc994c3b0ec9dc3462de33d73341f62e79f6694668008f397982798732ca",
        "urls": [
          "bzz-raw://4ef63b0daeac007015340c910798bff9a703d30cb2efb653d938f4610eeea59e",
          "dweb:/ipfs/QmSRtwJt3unadm8ZtWNn4Hh82fpVqJRpiy2hcXRGeFAN4G"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol": {
        "keccak256": "0x388ea88b590f192f0b871b653afae74d98f51926e8165b4a08022028eb10be9f",
        "urls": [
          "bzz-raw://2aae11f9ca0d2f314b23cc541b70be458c91d76b8a2c75d958d3e8a974dcdb17",
          "dweb:/ipfs/QmVNMGRTHFDA3jEKP26GZ2rv4Z7EZQDFiar9n8JgWEtnmu"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol": {
        "keccak256": "0xddf8164eb7cba1411e6cda1a46fd38090e2815879ca210323081bfb8e063bb18",
        "urls": [
          "bzz-raw://c98b499f48284b6eaef8b504a244166fcbbc2f10cfebd16baa75a12d83917eb1",
          "dweb:/ipfs/QmWFkaVrr3s43PoWYHtoDVKDkTDw1tqpcsCuV6Qz9NcVDJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/IERC20Upgradeable.sol": {
        "keccak256": "0xb54dd0ac9b78140da5637c93bc8406ea5032e578077313277e396ffd4cca3b48",
        "urls": [
          "bzz-raw://dcabb39e96307298278e9befdb26fd9e0bfef752968f2fa14de7fa989dcd988d",
          "dweb:/ipfs/QmarwVEJpPzQE2CCAdHoY3VA3ouqaGLS89snmKuKQPvEDg"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/extensions/IERC20MetadataUpgradeable.sol": {
        "keccak256": "0xee1f023849f00ace109c92693b165a974038f8a4e87e35ca11b15ca7bbfdb6e6",
        "urls": [
          "bzz-raw://28ca3e6bc207bbaba30fa7f2d4979000865a992560c305969db6463ac8a960ec",
          "dweb:/ipfs/QmT6FCvRnDr1WzHVfvzftiAtr4KcKzwd2eE78wfskMTXod"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol": {
        "keccak256": "0x105602b0c2179ac822eedcb26ea88f2bbc462d2b85969567402d2c5d66d2485d",
        "urls": [
          "bzz-raw://f965639ad3f54a3f5ae350ff7d240f9fddbd3554ab258aed27fc66cf9dd12e11",
          "dweb:/ipfs/QmUwGTuw7XUB8GbMSh6r9LTBmZGmcySrHxwVbE5H2NJc2Z"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
        "keccak256": "0x748a00f78239996ed3edb1ae579ef20620696e71d63dd00ef51e76438ffafe32",
        "urls": [
          "bzz-raw://fe0d90148460ef16e23e917f9941e555aa2433a42f1118efc1dad028e211be46",
          "dweb:/ipfs/QmTeb8DACx8XWJVNhP2e12Q3pvpgr47rTExoFK2UjW3bgK"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
        "keccak256": "0x5cf735f5eac2ea8469cdf266e51027bebb762eb33886f09157afc8902e177119",
        "urls": [
          "bzz-raw://b9d9420ab10ec9a2e42cb934cadfe506aa446e8dbc49fa89f1f70e1d1e926c5a",
          "dweb:/ipfs/QmPKYUyeHpAN3YAkenrpSKnNZTaznS8gbkdAQqYZynCuwh"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Utils.sol": {
        "keccak256": "0xf58d5eff35112a3a4d76ca56bcc1aea9ea0d0b41f8d83ab079c3abc80edb3d61",
        "urls": [
          "bzz-raw://c1c115a63c8e073a8c40b53c4d9f6d4a629dc2fd5b9b3794944fb1a8911d8cb8",
          "dweb:/ipfs/QmbsCSoGPQyuwL2ihh1qutiLxFcnn3ay2rxUoYy66oyPjB"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/proxy/Proxy.sol": {
        "keccak256": "0x0beb6efc1d7cf7d9442e9babf25084d46f6b8177465c2c8c1d8ea4887efa3a48",
        "urls": [
          "bzz-raw://0e5c0e2644e59d14f6c2b1f5ee23227ca4906dbdb334d50d0f6c285248784ae7",
          "dweb:/ipfs/QmYmwDvicpawT9BiGTAzBC9W9LJbQDSAt339w8D7RvjAsg"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol": {
        "keccak256": "0x06d92aa5043365e8a833b4615125050824946653c3e5912d98bf31f028fda00e",
        "urls": [
          "bzz-raw://a939fa2d72288f1c6f99b765809449ce6b50da520c501f887616fa212ac3bb16",
          "dweb:/ipfs/QmQpPZxCvagAp1BBADNvZbVs1YbKiTajguhguDUsckcJGX"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol": {
        "keccak256": "0xcb809ab9a7b6ecf4dc603d387def93840b36508221c5228c692608c60870e264",
        "urls": [
          "bzz-raw://37f02385dc02f7dfb4c2a34ecaacc6e94c30fca5751c64c0b83204455efacc5e",
          "dweb:/ipfs/QmXK6LQxhka3KKzKGxRMRpxGQPW4YomKpxeucifYcCRHWs"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
        "keccak256": "0x59613a2a99c3dc2279efa01fa7830ac8bebeb09cf08bee0e079808e060474490",
        "urls": [
          "bzz-raw://1ce4079fe2d9c130f751b1d9e079382c2abc408f67b271fed31d3701431814b9",
          "dweb:/ipfs/QmT9SnpdmqmwuvyDFPuZPdiwXpnmgKXQ75wPi4zCVF9Zt1"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x128678ee3c594161a26eae9b27d21b934e79556ce866306133c790c22d34f38c",
        "urls": [
          "bzz-raw://10971d43d16db54afe5212a618c36569bd34e3e25a63be612cf13652f2424efa",
          "dweb:/ipfs/QmcsbVy4JBiamLWLMDrijhSW7CAZtyfh38prNuMq6geVT9"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0x11978b1a63c34da7be9478e3ef9b010c77e3a6a3907271a9fbcaecea5e690c7c",
        "urls": [
          "bzz-raw://230dcb6f06c05bdd45777779db201a6bfdb491c0c78847c7200a54162f08f557",
          "dweb:/ipfs/QmbsVtCMwG4cEupL38UyBcZXgJ7SipqYZMgrir96aXJm5S"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol": {
        "keccak256": "0xc501b84f399c78405cba7cac0b9ce06583488c157af3806b084d712b349fb81b",
        "urls": [
          "bzz-raw://7aeb263e32903ef93b888a628d8f56ddc8dcd85097daa75f6ae656d9c25c256b",
          "dweb:/ipfs/QmWWofk6bSdPe7rpV2KRJtfoJDzwFQmfmGF1GVkJ54MHJK"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol": {
        "keccak256": "0x0bcce5cdcd2d9fa17dc0d191b423944f44a40119e0b8ee09a844a5086f51141a",
        "urls": [
          "bzz-raw://0579234e7288fdf249ba9c5abb5dad856946b6e5d250e5db8129d1bc91e8695d",
          "dweb:/ipfs/QmTKZy1MajRDkb9jjTLcJh88w6BiqWQixUK32yZFEiUSmN"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol": {
        "keccak256": "0x7e72f4a760bb695930d6dd0f3cf69fc7de7d7073ed16c05e27d2f32bb4579d16",
        "urls": [
          "bzz-raw://1386c5212058c09e13c77c203efa2194578d5d6a38753d8c9a4c2f24953f296b",
          "dweb:/ipfs/QmPFmRnxdKdQ6mQxbDBNBVBhJq2eGfBEvShzATdYqHWU9L"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol": {
        "keccak256": "0xf94e12c661651a6f70062449f3933bece6bc61901853affe01d507aa1ede591b",
        "urls": [
          "bzz-raw://e85e152b7adddeb9f42f82d88c7544f6345f60b1738e738b8e3c805202addecd",
          "dweb:/ipfs/QmdWF9Ecj56gkbRqkxRvjY9zq6UDd91ekhBcVdXfQXTPjs"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0x867f642b41aad25a188292e639eb05540b8c04c1d1d5b108614912b6b48ed334",
        "urls": [
          "bzz-raw://956711e2d66741c1eee26842d2a9b25401df78fba5e46a0558f523543b01c488",
          "dweb:/ipfs/QmUgj4gXE7oLW75yVhJxMRDq37X1t1xbt6DbQZBKqJQvUo"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0xdbc33ea310e83250cca8ad26e935a8d50ea10e781ba64a31beb0ea2ec912c605",
        "urls": [
          "bzz-raw://54cc15b73a5e92fd1ed78cb67504a534ab5879e11c0688ec10809128e1e00ac8",
          "dweb:/ipfs/QmPRtXeXmMyYt8J8u57HV6GQjuSevjE8gk5tMeyqXdkAzu"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol": {
        "keccak256": "0x8fd6cd1578329513b152f795a6b7b232a11a230fb58168074e802b96dbb6552a",
        "urls": [
          "bzz-raw://a10135835ae8f0f41644d141e1f35f5e69f63efc8cfb4db402998f515af76715",
          "dweb:/ipfs/Qmdzhd37HjdBBptEG9CPnqoMZNiUbtUJwU78DtmmFajLnD"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
        "keccak256": "0x7684ca45ad2adbf8f5d985c39e4bd4fb472a9ea7ab99bf2fe657a9fa8678f72b",
        "urls": [
          "bzz-raw://e449a809ef554bdc466972d2b2d1bdb9e715ae84ca1d889e648a886cca9c3277",
          "dweb:/ipfs/QmPG7U7QzvwVPN18eWw9EW5WJmhqAr9jRTW9NRse4T1QHU"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0xe9f6e61c1cb74b20b0f77828ad61faff9d993ec05ca813613f277c437ce8ab4e",
        "urls": [
          "bzz-raw://51365ac19d4ed3bd7d77343f793968128c509e606611b328ae900684658053b3",
          "dweb:/ipfs/QmSXWiRwXdZyHVvyGis6zKBDm5nJehYJxMXfAyLdFiei1E"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0xf66b7397bb70080f6f4ec77eecfda1814d04e47f70d55b0f22179619045f6835",
        "urls": [
          "bzz-raw://b70065eda5adfda82cdec1258c13a660dfe9a403bba7df7abc320ca04770ebc7",
          "dweb:/ipfs/QmbW11jKKvA5HUrAR5P4YoDdWJLEGGM9MZu64YqwgFwgNn"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        "keccak256": "0x78806c6b7d659ea9fb95a67943da0260b5a38d69d2a36fade861b53a10e2432a",
        "urls": [
          "bzz-raw://9a7c3804cdeb4e5bee5e15128fc8eeea07333191802ff1efd169ef34e06b7941",
          "dweb:/ipfs/QmPS2nwNPXHDExk6xd7xH136awG69gFpi9b4MZeCBRNBvn"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0x4c3b5ecf2e0f2d466f6e12645709d1a884961b4b82c8f6b7fad7c83f6c52ae42",
        "urls": [
          "bzz-raw://1409caf33c143298e72b1b8f7e32badf0575bc7458a2f417acf0e6bbdd868359",
          "dweb:/ipfs/Qmcq8iWwCk5NjdeuxrVTg4FAPrPhbbkL8DdvUpYBFjYX2f"
        ],
        "license": "MIT"
      },
      "src/QuotaToken.sol": {
        "keccak256": "0x5b2b3f592431ca16dfa8efb4e01839b980ddc6f93a85bd1b54e2959fc59b7538",
        "urls": [
          "bzz-raw://d0beb5ec4005faaf47a4522ea5dd621c026b9bfbbf46198f2373c22f157a2799",
          "dweb:/ipfs/QmXtSnkTBnRaV1hFUFhZ4tURVkyUdt1tDdpNrzkv5jqoDo"
        ],
        "license": "MIT"
      },
      "src/WhaleFinance.sol": {
        "keccak256": "0xac7a8b2c882dc1bb6e2e3b04cd6d88e676f0728320bfb41d7d6a1141ec77ca4d",
        "urls": [
          "bzz-raw://c96527eef4de3222bec67e3ec8c63fac869c458de3e7b0ee835bde0a8c5907c7",
          "dweb:/ipfs/QmNeL7xgfrbTb2YH3hcZMPUsoX43LJJj2VQkHBW4AmTCn8"
        ],
        "license": "MIT"
      },
      "src/interface/IERC6551Registry.sol": {
        "keccak256": "0x3f9743c931db0bf287bd3ba762f1b2371af614e7eb3c2ce3318a49ed1a15411a",
        "urls": [
          "bzz-raw://30fb28b4c7f4290600bec069c8b7cf3d3e41c0cc02f0c8c7bb4b37a3489a6d39",
          "dweb:/ipfs/QmPVpGADyuytD9TgN5THddUXjigz34YQALAsBNk8z6SNxG"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/WhaleFinance.sol",
    "id": 50713,
    "exportedSymbols": {
      "BeaconProxy": [
        44929
      ],
      "Context": [
        47093
      ],
      "ContextUpgradeable": [
        44233
      ],
      "ERC165": [
        48034
      ],
      "ERC1967Utils": [
        44835
      ],
      "ERC20": [
        45542
      ],
      "ERC20Upgradeable": [
        44092
      ],
      "ERC721": [
        46655
      ],
      "IBeacon": [
        44939
      ],
      "IERC165": [
        48046
      ],
      "IERC20": [
        45620
      ],
      "IERC20Errors": [
        44437
      ],
      "IERC20ErrorsUpgradeable": [
        43127
      ],
      "IERC20Metadata": [
        45646
      ],
      "IERC20MetadataUpgradeable": [
        44196
      ],
      "IERC20Upgradeable": [
        44170
      ],
      "IERC6551Registry": [
        50806
      ],
      "IERC721": [
        46772
      ],
      "IERC721Errors": [
        44485
      ],
      "IERC721Metadata": [
        46818
      ],
      "IERC721Receiver": [
        46790
      ],
      "Initializable": [
        43476
      ],
      "Ownable": [
        44381
      ],
      "OwnableUpgradeable": [
        43085
      ],
      "Proxy": [
        44871
      ],
      "QuotaToken": [
        50031
      ],
      "Strings": [
        47561
      ],
      "WhaleFinance": [
        50712
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:5839:62",
    "nodes": [
      {
        "id": 50184,
        "nodeType": "PragmaDirective",
        "src": "32:23:62",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".9"
        ]
      },
      {
        "id": 50185,
        "nodeType": "ImportDirective",
        "src": "57:57:62",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 46656,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 50186,
        "nodeType": "ImportDirective",
        "src": "115:52:62",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 44382,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 50187,
        "nodeType": "ImportDirective",
        "src": "168:42:62",
        "nodes": [],
        "absolutePath": "src/interface/IERC6551Registry.sol",
        "file": "./interface/IERC6551Registry.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 50807,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 50188,
        "nodeType": "ImportDirective",
        "src": "211:62:62",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol",
        "file": "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 44930,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 50189,
        "nodeType": "ImportDirective",
        "src": "274:58:62",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol",
        "file": "@openzeppelin/contracts/proxy/beacon/IBeacon.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 44940,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 50190,
        "nodeType": "ImportDirective",
        "src": "333:56:62",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 45621,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 50191,
        "nodeType": "ImportDirective",
        "src": "390:55:62",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 45543,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 50192,
        "nodeType": "ImportDirective",
        "src": "446:62:62",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol",
        "file": "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 44930,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 50193,
        "nodeType": "ImportDirective",
        "src": "509:26:62",
        "nodes": [],
        "absolutePath": "src/QuotaToken.sol",
        "file": "./QuotaToken.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 50713,
        "sourceUnit": 50032,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 50712,
        "nodeType": "ContractDefinition",
        "src": "537:5334:62",
        "nodes": [
          {
            "id": 50199,
            "nodeType": "VariableDeclaration",
            "src": "630:29:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "1ec3e6c4",
            "mutability": "mutable",
            "name": "_fundIdCounter",
            "nameLocation": "645:14:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 50198,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "630:7:62",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "id": 50202,
            "nodeType": "VariableDeclaration",
            "src": "665:37:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "8d180195",
            "mutability": "mutable",
            "name": "fundsRegister",
            "nameLocation": "689:13:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC6551Registry_$50806",
              "typeString": "contract IERC6551Registry"
            },
            "typeName": {
              "id": 50201,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 50200,
                "name": "IERC6551Registry",
                "nameLocations": [
                  "665:16:62"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 50806,
                "src": "665:16:62"
              },
              "referencedDeclaration": 50806,
              "src": "665:16:62",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC6551Registry_$50806",
                "typeString": "contract IERC6551Registry"
              }
            },
            "visibility": "public"
          },
          {
            "id": 50204,
            "nodeType": "VariableDeclaration",
            "src": "708:36:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "b3dd12a2",
            "mutability": "mutable",
            "name": "erc6551Implementation",
            "nameLocation": "723:21:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 50203,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "708:7:62",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 50206,
            "nodeType": "VariableDeclaration",
            "src": "750:39:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "c2ae0e3e",
            "mutability": "mutable",
            "name": "quotaTokenImplementation",
            "nameLocation": "765:24:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 50205,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "750:7:62",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 50209,
            "nodeType": "VariableDeclaration",
            "src": "795:24:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "e9cbd822",
            "mutability": "mutable",
            "name": "stablecoin",
            "nameLocation": "809:10:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20_$45620",
              "typeString": "contract IERC20"
            },
            "typeName": {
              "id": 50208,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 50207,
                "name": "IERC20",
                "nameLocations": [
                  "795:6:62"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 45620,
                "src": "795:6:62"
              },
              "referencedDeclaration": 45620,
              "src": "795:6:62",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$45620",
                "typeString": "contract IERC20"
              }
            },
            "visibility": "public"
          },
          {
            "id": 50213,
            "nodeType": "VariableDeclaration",
            "src": "825:49:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "d3c26383",
            "mutability": "mutable",
            "name": "whiteListedTokens",
            "nameLocation": "857:17:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 50212,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 50210,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "833:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "825:24:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50211,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "844:4:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 50217,
            "nodeType": "VariableDeclaration",
            "src": "909:49:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "e7e1f1c7",
            "mutability": "mutable",
            "name": "fundsAddresses",
            "nameLocation": "944:14:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 50216,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 50214,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "917:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "909:27:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50215,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "928:7:62",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 50221,
            "nodeType": "VariableDeclaration",
            "src": "964:44:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "dae51d03",
            "mutability": "mutable",
            "name": "fundsNames",
            "nameLocation": "998:10:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 50220,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 50218,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "972:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "964:26:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50219,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "983:6:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 50225,
            "nodeType": "VariableDeclaration",
            "src": "1014:42:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "995c8472",
            "mutability": "mutable",
            "name": "admFees",
            "nameLocation": "1049:7:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 50224,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 50222,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1022:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1014:27:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50223,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1033:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 50229,
            "nodeType": "VariableDeclaration",
            "src": "1062:43:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "0d0a01cf",
            "mutability": "mutable",
            "name": "perfFees",
            "nameLocation": "1097:8:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 50228,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 50226,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1070:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1062:27:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50227,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1081:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 50233,
            "nodeType": "VariableDeclaration",
            "src": "1111:49:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "fb91fb42",
            "mutability": "mutable",
            "name": "initialAmounts",
            "nameLocation": "1146:14:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 50232,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 50230,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1119:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1111:27:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50231,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1130:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 50237,
            "nodeType": "VariableDeclaration",
            "src": "1175:60:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "1c02225f",
            "mutability": "mutable",
            "name": "openInvestimentTimestamps",
            "nameLocation": "1210:25:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 50236,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 50234,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1183:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1175:27:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50235,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1194:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 50241,
            "nodeType": "VariableDeclaration",
            "src": "1241:61:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "069af241",
            "mutability": "mutable",
            "name": "closeInvestimentTimestamps",
            "nameLocation": "1276:26:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 50240,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 50238,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1249:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1241:27:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50239,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1260:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 50245,
            "nodeType": "VariableDeclaration",
            "src": "1308:55:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "54d89c91",
            "mutability": "mutable",
            "name": "openRedeemTimestamps",
            "nameLocation": "1343:20:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 50244,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 50242,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1316:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1308:27:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50243,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1327:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 50250,
            "nodeType": "VariableDeclaration",
            "src": "1369:55:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "6166cb93",
            "mutability": "mutable",
            "name": "fundsAllowedTokens",
            "nameLocation": "1406:18:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_array$_t_address_$dyn_storage_$",
              "typeString": "mapping(uint256 => address[])"
            },
            "typeName": {
              "id": 50249,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 50246,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1377:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1369:29:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_array$_t_address_$dyn_storage_$",
                "typeString": "mapping(uint256 => address[])"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "baseType": {
                  "id": 50247,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1388:7:62",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "id": 50248,
                "nodeType": "ArrayTypeName",
                "src": "1388:9:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 50254,
            "nodeType": "VariableDeclaration",
            "src": "1430:50:62",
            "nodes": [],
            "constant": false,
            "functionSelector": "4835a6be",
            "mutability": "mutable",
            "name": "quotasAddresses",
            "nameLocation": "1465:15:62",
            "scope": 50712,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
              "typeString": "mapping(uint256 => address)"
            },
            "typeName": {
              "id": 50253,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 50251,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1438:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1430:27:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 50252,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1449:7:62",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 50260,
            "nodeType": "EventDefinition",
            "src": "1500:82:62",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "9de2be681a220396ec1518a4ecd6c853a760e34fb9174e9213d7aa5a8b12f379",
            "name": "FundCreated",
            "nameLocation": "1506:11:62",
            "parameters": {
              "id": 50259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50256,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "fundAddress",
                  "nameLocation": "1534:11:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50260,
                  "src": "1518:27:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50255,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1518:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50258,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "quotaTokenAddress",
                  "nameLocation": "1563:17:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50260,
                  "src": "1547:33:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50257,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1547:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1517:64:62"
            }
          },
          {
            "id": 50268,
            "nodeType": "EventDefinition",
            "src": "1587:93:62",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "15bcca398c35efcf80f9148394b3ff1b358089610b2e18b315a3a18050a50942",
            "name": "InvestimentMade",
            "nameLocation": "1593:15:62",
            "parameters": {
              "id": 50267,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50262,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "fundAddress",
                  "nameLocation": "1625:11:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50268,
                  "src": "1609:27:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50261,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1609:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50264,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "investor",
                  "nameLocation": "1654:8:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50268,
                  "src": "1638:24:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50263,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1638:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50266,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1672:6:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50268,
                  "src": "1664:14:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50265,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1664:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1608:71:62"
            }
          },
          {
            "id": 50276,
            "nodeType": "EventDefinition",
            "src": "1685:88:62",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "6c9b4e508889a1ad47d9f443fa4a922856051bb1cc015e2048740e560e0f46f1",
            "name": "RedeemMade",
            "nameLocation": "1691:10:62",
            "parameters": {
              "id": 50275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50270,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "fundAddress",
                  "nameLocation": "1718:11:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50276,
                  "src": "1702:27:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50269,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1702:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50272,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "investor",
                  "nameLocation": "1747:8:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50276,
                  "src": "1731:24:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50271,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1731:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50274,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1765:6:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50276,
                  "src": "1757:14:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50273,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1757:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1701:71:62"
            }
          },
          {
            "id": 50316,
            "nodeType": "FunctionDefinition",
            "src": "1779:418:62",
            "nodes": [],
            "body": {
              "id": 50315,
              "nodeType": "Block",
              "src": "1951:246:62",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 50299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 50295,
                      "name": "fundsRegister",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50202,
                      "src": "1961:13:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC6551Registry_$50806",
                        "typeString": "contract IERC6551Registry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 50297,
                          "name": "_fundsRegister",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50278,
                          "src": "1994:14:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 50296,
                        "name": "IERC6551Registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50806,
                        "src": "1977:16:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IERC6551Registry_$50806_$",
                          "typeString": "type(contract IERC6551Registry)"
                        }
                      },
                      "id": 50298,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1977:32:62",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC6551Registry_$50806",
                        "typeString": "contract IERC6551Registry"
                      }
                    },
                    "src": "1961:48:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC6551Registry_$50806",
                      "typeString": "contract IERC6551Registry"
                    }
                  },
                  "id": 50300,
                  "nodeType": "ExpressionStatement",
                  "src": "1961:48:62"
                },
                {
                  "expression": {
                    "id": 50303,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 50301,
                      "name": "erc6551Implementation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50204,
                      "src": "2019:21:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50302,
                      "name": "_erc6551Implementation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50280,
                      "src": "2043:22:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2019:46:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 50304,
                  "nodeType": "ExpressionStatement",
                  "src": "2019:46:62"
                },
                {
                  "expression": {
                    "id": 50309,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 50305,
                      "name": "stablecoin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50209,
                      "src": "2101:10:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$45620",
                        "typeString": "contract IERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 50307,
                          "name": "_stablecoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50284,
                          "src": "2121:11:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 50306,
                        "name": "IERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45620,
                        "src": "2114:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IERC20_$45620_$",
                          "typeString": "type(contract IERC20)"
                        }
                      },
                      "id": 50308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2114:19:62",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$45620",
                        "typeString": "contract IERC20"
                      }
                    },
                    "src": "2101:32:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$45620",
                      "typeString": "contract IERC20"
                    }
                  },
                  "id": 50310,
                  "nodeType": "ExpressionStatement",
                  "src": "2101:32:62"
                },
                {
                  "expression": {
                    "id": 50313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 50311,
                      "name": "quotaTokenImplementation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50206,
                      "src": "2143:24:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50312,
                      "name": "_erc20Implementation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50282,
                      "src": "2170:20:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2143:47:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 50314,
                  "nodeType": "ExpressionStatement",
                  "src": "2143:47:62"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 50287,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47083,
                      "src": "1906:10:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 50288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1906:12:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 50289,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 50286,
                  "name": "Ownable",
                  "nameLocations": [
                    "1898:7:62"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 44381,
                  "src": "1898:7:62"
                },
                "nodeType": "ModifierInvocation",
                "src": "1898:21:62"
              },
              {
                "arguments": [
                  {
                    "hexValue": "5768616c6546696e616e6365",
                    "id": 50291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1927:14:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_36d5dd5a4186d103fb1ce9b72a8b2d8dc5911f6937e75889ddd2c3eb6a256aec",
                      "typeString": "literal_string \"WhaleFinance\""
                    },
                    "value": "WhaleFinance"
                  },
                  {
                    "hexValue": "574649",
                    "id": 50292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1943:5:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_a90f0d197d4d9bfc62012217276183920e69c6beadea14224c52a486126dbdee",
                      "typeString": "literal_string \"WFI\""
                    },
                    "value": "WFI"
                  }
                ],
                "id": 50293,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 50290,
                  "name": "ERC721",
                  "nameLocations": [
                    "1920:6:62"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46655,
                  "src": "1920:6:62"
                },
                "nodeType": "ModifierInvocation",
                "src": "1920:29:62"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 50285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50278,
                  "mutability": "mutable",
                  "name": "_fundsRegister",
                  "nameLocation": "1799:14:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50316,
                  "src": "1791:22:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50277,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1791:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50280,
                  "mutability": "mutable",
                  "name": "_erc6551Implementation",
                  "nameLocation": "1823:22:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50316,
                  "src": "1815:30:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50279,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1815:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50282,
                  "mutability": "mutable",
                  "name": "_erc20Implementation",
                  "nameLocation": "1855:20:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50316,
                  "src": "1847:28:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50281,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1847:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50284,
                  "mutability": "mutable",
                  "name": "_stablecoin",
                  "nameLocation": "1885:11:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50316,
                  "src": "1877:19:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50283,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1877:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1790:107:62"
            },
            "returnParameters": {
              "id": 50294,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1951:0:62"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 50493,
            "nodeType": "FunctionDefinition",
            "src": "2203:1747:62",
            "nodes": [],
            "body": {
              "id": 50492,
              "nodeType": "Block",
              "src": "2492:1458:62",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    50341
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50341,
                      "mutability": "mutable",
                      "name": "fundId",
                      "nameLocation": "2519:6:62",
                      "nodeType": "VariableDeclaration",
                      "scope": 50492,
                      "src": "2511:14:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 50340,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2511:7:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50343,
                  "initialValue": {
                    "id": 50342,
                    "name": "_fundIdCounter",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 50199,
                    "src": "2528:14:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2511:31:62"
                },
                {
                  "expression": {
                    "id": 50345,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "2552:16:62",
                    "subExpression": {
                      "id": 50344,
                      "name": "_fundIdCounter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50199,
                      "src": "2552:14:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 50346,
                  "nodeType": "ExpressionStatement",
                  "src": "2552:16:62"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 50348,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50322,
                        "src": "2584:3:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50349,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50341,
                        "src": "2589:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50347,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46262,
                      "src": "2578:5:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 50350,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2578:18:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50351,
                  "nodeType": "ExpressionStatement",
                  "src": "2578:18:62"
                },
                {
                  "body": {
                    "id": 50384,
                    "nodeType": "Block",
                    "src": "2658:228:62",
                    "statements": [
                      {
                        "condition": {
                          "id": 50368,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "2675:37:62",
                          "subExpression": {
                            "baseExpression": {
                              "id": 50363,
                              "name": "whiteListedTokens",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50213,
                              "src": "2676:17:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 50367,
                            "indexExpression": {
                              "baseExpression": {
                                "id": 50364,
                                "name": "_allowedTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50325,
                                "src": "2694:14:62",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 50366,
                              "indexExpression": {
                                "id": 50365,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50353,
                                "src": "2709:1:62",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2694:17:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2676:36:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 50374,
                        "nodeType": "IfStatement",
                        "src": "2672:139:62",
                        "trueBody": {
                          "id": 50373,
                          "nodeType": "Block",
                          "src": "2713:98:62",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "596f7520747269656420746f2063726561746520612066756e6420776974682061206e6f6e2077686974656c697374656420746f6b656e",
                                    "id": 50370,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2738:57:62",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_96b58d1452f9fcc3bfc6279837543f35bca37cb4c068c866a34aa2f98ce60304",
                                      "typeString": "literal_string \"You tried to create a fund with a non whitelisted token\""
                                    },
                                    "value": "You tried to create a fund with a non whitelisted token"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_96b58d1452f9fcc3bfc6279837543f35bca37cb4c068c866a34aa2f98ce60304",
                                      "typeString": "literal_string \"You tried to create a fund with a non whitelisted token\""
                                    }
                                  ],
                                  "id": 50369,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    -19,
                                    -19
                                  ],
                                  "referencedDeclaration": -19,
                                  "src": "2731:6:62",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 50371,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2731:65:62",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 50372,
                              "nodeType": "ExpressionStatement",
                              "src": "2731:65:62"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "baseExpression": {
                                "id": 50379,
                                "name": "_allowedTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50325,
                                "src": "2857:14:62",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 50381,
                              "indexExpression": {
                                "id": 50380,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50353,
                                "src": "2872:1:62",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2857:17:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "baseExpression": {
                                "id": 50375,
                                "name": "fundsAllowedTokens",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50250,
                                "src": "2825:18:62",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_array$_t_address_$dyn_storage_$",
                                  "typeString": "mapping(uint256 => address[] storage ref)"
                                }
                              },
                              "id": 50377,
                              "indexExpression": {
                                "id": 50376,
                                "name": "fundId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50341,
                                "src": "2844:6:62",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2825:26:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 50378,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2852:4:62",
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "src": "2825:31:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                              "typeString": "function (address[] storage pointer,address)"
                            }
                          },
                          "id": 50382,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2825:50:62",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 50383,
                        "nodeType": "ExpressionStatement",
                        "src": "2825:50:62"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 50359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50356,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50353,
                      "src": "2626:1:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 50357,
                        "name": "_allowedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50325,
                        "src": "2630:14:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 50358,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2645:6:62",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2630:21:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2626:25:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50385,
                  "initializationExpression": {
                    "assignments": [
                      50353
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 50353,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "2619:1:62",
                        "nodeType": "VariableDeclaration",
                        "scope": 50385,
                        "src": "2611:9:62",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 50352,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2611:7:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 50355,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 50354,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2623:1:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2611:13:62"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 50361,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2653:3:62",
                      "subExpression": {
                        "id": 50360,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50353,
                        "src": "2653:1:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 50362,
                    "nodeType": "ExpressionStatement",
                    "src": "2653:3:62"
                  },
                  "nodeType": "ForStatement",
                  "src": "2607:279:62"
                },
                {
                  "assignments": [
                    50387
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50387,
                      "mutability": "mutable",
                      "name": "createdFundAddress",
                      "nameLocation": "2904:18:62",
                      "nodeType": "VariableDeclaration",
                      "scope": 50492,
                      "src": "2896:26:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 50386,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2896:7:62",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50404,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 50392,
                            "name": "erc6551Implementation",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50204,
                            "src": "2974:21:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 50391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2966:7:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 50390,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2966:7:62",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 50393,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2966:30:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 50394,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "3010:5:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 50395,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3016:7:62",
                        "memberName": "chainid",
                        "nodeType": "MemberAccess",
                        "src": "3010:13:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 50398,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "3045:4:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_WhaleFinance_$50712",
                              "typeString": "contract WhaleFinance"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_WhaleFinance_$50712",
                              "typeString": "contract WhaleFinance"
                            }
                          ],
                          "id": 50397,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3037:7:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 50396,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3037:7:62",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 50399,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3037:13:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50400,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50341,
                        "src": "3064:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 50401,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3084:1:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "hexValue": "",
                        "id": 50402,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3099:2:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "id": 50388,
                        "name": "fundsRegister",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50202,
                        "src": "2925:13:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC6551Registry_$50806",
                          "typeString": "contract IERC6551Registry"
                        }
                      },
                      "id": 50389,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2939:13:62",
                      "memberName": "createAccount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 50789,
                      "src": "2925:27:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_address_$",
                        "typeString": "function (address,uint256,address,uint256,uint256,bytes memory) external returns (address)"
                      }
                    },
                    "id": 50403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2925:186:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2896:215:62"
                },
                {
                  "expression": {
                    "id": 50409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 50405,
                        "name": "fundsAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50217,
                        "src": "3121:14:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 50407,
                      "indexExpression": {
                        "id": 50406,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50341,
                        "src": "3136:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3121:22:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50408,
                      "name": "createdFundAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50387,
                      "src": "3146:18:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3121:43:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 50410,
                  "nodeType": "ExpressionStatement",
                  "src": "3121:43:62"
                },
                {
                  "expression": {
                    "id": 50415,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 50411,
                        "name": "fundsNames",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50221,
                        "src": "3174:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 50413,
                      "indexExpression": {
                        "id": 50412,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50341,
                        "src": "3185:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3174:18:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50414,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50318,
                      "src": "3195:5:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_calldata_ptr",
                        "typeString": "string calldata"
                      }
                    },
                    "src": "3174:26:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 50416,
                  "nodeType": "ExpressionStatement",
                  "src": "3174:26:62"
                },
                {
                  "expression": {
                    "id": 50421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 50417,
                        "name": "admFees",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50225,
                        "src": "3210:7:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 50419,
                      "indexExpression": {
                        "id": 50418,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50341,
                        "src": "3218:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3210:15:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50420,
                      "name": "_admFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50327,
                      "src": "3228:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3210:25:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 50422,
                  "nodeType": "ExpressionStatement",
                  "src": "3210:25:62"
                },
                {
                  "expression": {
                    "id": 50427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 50423,
                        "name": "perfFees",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50229,
                        "src": "3298:8:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 50425,
                      "indexExpression": {
                        "id": 50424,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50341,
                        "src": "3307:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3298:16:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50426,
                      "name": "_perfFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50329,
                      "src": "3317:8:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3298:27:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 50428,
                  "nodeType": "ExpressionStatement",
                  "src": "3298:27:62"
                },
                {
                  "expression": {
                    "id": 50433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 50429,
                        "name": "openInvestimentTimestamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50237,
                        "src": "3388:25:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 50431,
                      "indexExpression": {
                        "id": 50430,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50341,
                        "src": "3414:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3388:33:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50432,
                      "name": "_openInvestiment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50331,
                      "src": "3424:16:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3388:52:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 50434,
                  "nodeType": "ExpressionStatement",
                  "src": "3388:52:62"
                },
                {
                  "expression": {
                    "id": 50439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 50435,
                        "name": "closeInvestimentTimestamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50241,
                        "src": "3450:26:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 50437,
                      "indexExpression": {
                        "id": 50436,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50341,
                        "src": "3477:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3450:34:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50438,
                      "name": "_closeInvestiments",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50333,
                      "src": "3487:18:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3450:55:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 50440,
                  "nodeType": "ExpressionStatement",
                  "src": "3450:55:62"
                },
                {
                  "expression": {
                    "id": 50445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 50441,
                        "name": "openRedeemTimestamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50245,
                        "src": "3515:20:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 50443,
                      "indexExpression": {
                        "id": 50442,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50341,
                        "src": "3536:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3515:28:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 50444,
                      "name": "_openRedeem",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50335,
                      "src": "3546:11:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3515:42:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 50446,
                  "nodeType": "ExpressionStatement",
                  "src": "3515:42:62"
                },
                {
                  "assignments": [
                    50449
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50449,
                      "mutability": "mutable",
                      "name": "newQuotaTokenAddress",
                      "nameLocation": "3579:20:62",
                      "nodeType": "VariableDeclaration",
                      "scope": 50492,
                      "src": "3567:32:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_BeaconProxy_$44929",
                        "typeString": "contract BeaconProxy"
                      },
                      "typeName": {
                        "id": 50448,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 50447,
                          "name": "BeaconProxy",
                          "nameLocations": [
                            "3567:11:62"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 44929,
                          "src": "3567:11:62"
                        },
                        "referencedDeclaration": 44929,
                        "src": "3567:11:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_BeaconProxy_$44929",
                          "typeString": "contract BeaconProxy"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50472,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 50453,
                        "name": "quotaTokenImplementation",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50206,
                        "src": "3618:24:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "hexValue": "30",
                                        "id": 50459,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3698:1:62",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "id": 50458,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "3690:7:62",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": {
                                        "id": 50457,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3690:7:62",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 50460,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3690:10:62",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 50456,
                                  "name": "QuotaToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 50031,
                                  "src": "3679:10:62",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_QuotaToken_$50031_$",
                                    "typeString": "type(contract QuotaToken)"
                                  }
                                },
                                "id": 50461,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3679:22:62",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_QuotaToken_$50031",
                                  "typeString": "contract QuotaToken"
                                }
                              },
                              "id": 50462,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3702:10:62",
                              "memberName": "initialize",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 49969,
                              "src": "3679:33:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_uint256_$returns$__$",
                                "typeString": "function (string memory,address,uint256) external"
                              }
                            },
                            "id": 50463,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3713:8:62",
                            "memberName": "selector",
                            "nodeType": "MemberAccess",
                            "src": "3679:42:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "id": 50464,
                            "name": "_symbol",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50320,
                            "src": "3735:7:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_calldata_ptr",
                              "typeString": "string calldata"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 50467,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3752:4:62",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_WhaleFinance_$50712",
                                  "typeString": "contract WhaleFinance"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_WhaleFinance_$50712",
                                  "typeString": "contract WhaleFinance"
                                }
                              ],
                              "id": 50466,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3744:7:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 50465,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3744:7:62",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 50468,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3744:13:62",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 50469,
                            "name": "_openInvestiment",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50331,
                            "src": "3759:16:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            {
                              "typeIdentifier": "t_string_calldata_ptr",
                              "typeString": "string calldata"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 50454,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "3656:3:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 50455,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3660:18:62",
                          "memberName": "encodeWithSelector",
                          "nodeType": "MemberAccess",
                          "src": "3656:22:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes4) pure returns (bytes memory)"
                          }
                        },
                        "id": 50470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3656:120:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 50452,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "3602:15:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_creation_payable$_t_address_$_t_bytes_memory_ptr_$returns$_t_contract$_BeaconProxy_$44929_$",
                        "typeString": "function (address,bytes memory) payable returns (contract BeaconProxy)"
                      },
                      "typeName": {
                        "id": 50451,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 50450,
                          "name": "BeaconProxy",
                          "nameLocations": [
                            "3606:11:62"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 44929,
                          "src": "3606:11:62"
                        },
                        "referencedDeclaration": 44929,
                        "src": "3606:11:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_BeaconProxy_$44929",
                          "typeString": "contract BeaconProxy"
                        }
                      }
                    },
                    "id": 50471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3602:175:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_BeaconProxy_$44929",
                      "typeString": "contract BeaconProxy"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3567:210:62"
                },
                {
                  "expression": {
                    "id": 50480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 50473,
                        "name": "quotasAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50254,
                        "src": "3788:15:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 50475,
                      "indexExpression": {
                        "id": 50474,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50341,
                        "src": "3804:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3788:23:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 50478,
                          "name": "newQuotaTokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50449,
                          "src": "3822:20:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_BeaconProxy_$44929",
                            "typeString": "contract BeaconProxy"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_BeaconProxy_$44929",
                            "typeString": "contract BeaconProxy"
                          }
                        ],
                        "id": 50477,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "3814:7:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 50476,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3814:7:62",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 50479,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3814:29:62",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3788:55:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 50481,
                  "nodeType": "ExpressionStatement",
                  "src": "3788:55:62"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 50483,
                        "name": "createdFundAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50387,
                        "src": "3870:18:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 50486,
                            "name": "newQuotaTokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50449,
                            "src": "3898:20:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_BeaconProxy_$44929",
                              "typeString": "contract BeaconProxy"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_BeaconProxy_$44929",
                              "typeString": "contract BeaconProxy"
                            }
                          ],
                          "id": 50485,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3890:7:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 50484,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3890:7:62",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 50487,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3890:29:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 50482,
                      "name": "FundCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50260,
                      "src": "3858:11:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 50488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3858:62:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50489,
                  "nodeType": "EmitStatement",
                  "src": "3853:67:62"
                },
                {
                  "expression": {
                    "id": 50490,
                    "name": "fundId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 50341,
                    "src": "3937:6:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 50339,
                  "id": 50491,
                  "nodeType": "Return",
                  "src": "3930:13:62"
                }
              ]
            },
            "functionSelector": "6c4f8442",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createFund",
            "nameLocation": "2212:10:62",
            "parameters": {
              "id": 50336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50318,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "2239:5:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50493,
                  "src": "2223:21:62",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 50317,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2223:6:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50320,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "2262:7:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50493,
                  "src": "2246:23:62",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 50319,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2246:6:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50322,
                  "mutability": "mutable",
                  "name": "_to",
                  "nameLocation": "2279:3:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50493,
                  "src": "2271:11:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50321,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2271:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50325,
                  "mutability": "mutable",
                  "name": "_allowedTokens",
                  "nameLocation": "2301:14:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50493,
                  "src": "2284:31:62",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 50323,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2284:7:62",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 50324,
                    "nodeType": "ArrayTypeName",
                    "src": "2284:9:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50327,
                  "mutability": "mutable",
                  "name": "_admFee",
                  "nameLocation": "2346:7:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50493,
                  "src": "2338:15:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50326,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2338:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50329,
                  "mutability": "mutable",
                  "name": "_perfFee",
                  "nameLocation": "2363:8:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50493,
                  "src": "2355:16:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50328,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2355:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50331,
                  "mutability": "mutable",
                  "name": "_openInvestiment",
                  "nameLocation": "2381:16:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50493,
                  "src": "2373:24:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50330,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2373:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50333,
                  "mutability": "mutable",
                  "name": "_closeInvestiments",
                  "nameLocation": "2407:18:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50493,
                  "src": "2399:26:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50332,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2399:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50335,
                  "mutability": "mutable",
                  "name": "_openRedeem",
                  "nameLocation": "2435:11:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50493,
                  "src": "2427:19:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50334,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2427:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2222:225:62"
            },
            "returnParameters": {
              "id": 50339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50338,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 50493,
                  "src": "2484:7:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50337,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2484:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2483:9:62"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 50608,
            "nodeType": "FunctionDefinition",
            "src": "3956:1021:62",
            "nodes": [],
            "body": {
              "id": 50607,
              "nodeType": "Block",
              "src": "4012:965:62",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 50503,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 50501,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50495,
                          "src": "4030:7:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 50502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4040:1:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4030:11:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f75206e65656420746f20696e76657374206d6f7265207468616e2030",
                        "id": 50504,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4043:32:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_17fb5ef0efbab4b4e0348711cf61fe6275c4396d90e99c3a0eff5dfd13b4d599",
                          "typeString": "literal_string \"You need to invest more than 0\""
                        },
                        "value": "You need to invest more than 0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_17fb5ef0efbab4b4e0348711cf61fe6275c4396d90e99c3a0eff5dfd13b4d599",
                          "typeString": "literal_string \"You need to invest more than 0\""
                        }
                      ],
                      "id": 50500,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4022:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 50505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4022:54:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50506,
                  "nodeType": "ExpressionStatement",
                  "src": "4022:54:62"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 50513,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 50508,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "4094:5:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 50509,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4100:9:62",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "4094:15:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 50510,
                            "name": "openInvestimentTimestamps",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50237,
                            "src": "4113:25:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 50512,
                          "indexExpression": {
                            "id": 50511,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50497,
                            "src": "4139:6:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4113:33:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4094:52:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e76657374696d656e74206973206e6f74206f70656e20796574",
                        "id": 50514,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4148:29:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c7a93eeef4fb1982d194bd10dc863dd782a38c0aa15337179024a4db8be314ed",
                          "typeString": "literal_string \"Investiment is not open yet\""
                        },
                        "value": "Investiment is not open yet"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c7a93eeef4fb1982d194bd10dc863dd782a38c0aa15337179024a4db8be314ed",
                          "typeString": "literal_string \"Investiment is not open yet\""
                        }
                      ],
                      "id": 50507,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4086:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 50515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4086:92:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50516,
                  "nodeType": "ExpressionStatement",
                  "src": "4086:92:62"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 50523,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 50518,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "4196:5:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 50519,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4202:9:62",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "4196:15:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 50520,
                            "name": "closeInvestimentTimestamps",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50241,
                            "src": "4215:26:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 50522,
                          "indexExpression": {
                            "id": 50521,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50497,
                            "src": "4242:6:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4215:34:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4196:53:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e76657374696d656e7420697320636c6f736564",
                        "id": 50524,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4251:23:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a8fa258916cc18c2319690d3c89edcb777c1a91023ebc579d8bc4b3aa21c7913",
                          "typeString": "literal_string \"Investiment is closed\""
                        },
                        "value": "Investiment is closed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a8fa258916cc18c2319690d3c89edcb777c1a91023ebc579d8bc4b3aa21c7913",
                          "typeString": "literal_string \"Investiment is closed\""
                        }
                      ],
                      "id": 50517,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4188:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 50525,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4188:87:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50526,
                  "nodeType": "ExpressionStatement",
                  "src": "4188:87:62"
                },
                {
                  "assignments": [
                    50528
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50528,
                      "mutability": "mutable",
                      "name": "fundTargetAddress",
                      "nameLocation": "4294:17:62",
                      "nodeType": "VariableDeclaration",
                      "scope": 50607,
                      "src": "4286:25:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 50527,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4286:7:62",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50532,
                  "initialValue": {
                    "baseExpression": {
                      "id": 50529,
                      "name": "fundsAddresses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50217,
                      "src": "4314:14:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 50531,
                    "indexExpression": {
                      "id": 50530,
                      "name": "fundId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50497,
                      "src": "4329:6:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4314:22:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4286:50:62"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 50539,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 50534,
                          "name": "fundTargetAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50528,
                          "src": "4354:17:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 50537,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4383:1:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 50536,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4375:7:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 50535,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "4375:7:62",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 50538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4375:10:62",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "4354:31:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "46756e64206e6f7420666f756e64",
                        "id": 50540,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4387:16:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f1fb44e9256173c84ec393a279d638d22bb2a70c28525f624f068eedf8dcb863",
                          "typeString": "literal_string \"Fund not found\""
                        },
                        "value": "Fund not found"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f1fb44e9256173c84ec393a279d638d22bb2a70c28525f624f068eedf8dcb863",
                          "typeString": "literal_string \"Fund not found\""
                        }
                      ],
                      "id": 50533,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4346:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 50541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4346:58:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50542,
                  "nodeType": "ExpressionStatement",
                  "src": "4346:58:62"
                },
                {
                  "assignments": [
                    50544
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50544,
                      "mutability": "mutable",
                      "name": "managerAdmFee",
                      "nameLocation": "4423:13:62",
                      "nodeType": "VariableDeclaration",
                      "scope": 50607,
                      "src": "4415:21:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 50543,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4415:7:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50552,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 50551,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 50549,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 50545,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50495,
                        "src": "4439:7:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "baseExpression": {
                          "id": 50546,
                          "name": "admFees",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50225,
                          "src": "4449:7:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 50548,
                        "indexExpression": {
                          "id": 50547,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50497,
                          "src": "4457:6:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4449:15:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4439:25:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "hexValue": "3130303030",
                      "id": 50550,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4467:5:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10000_by_1",
                        "typeString": "int_const 10000"
                      },
                      "value": "10000"
                    },
                    "src": "4439:33:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4415:57:62"
                },
                {
                  "assignments": [
                    50554
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50554,
                      "mutability": "mutable",
                      "name": "amountInvestor",
                      "nameLocation": "4490:14:62",
                      "nodeType": "VariableDeclaration",
                      "scope": 50607,
                      "src": "4482:22:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 50553,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4482:7:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50558,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 50557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 50555,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50495,
                      "src": "4507:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 50556,
                      "name": "managerAdmFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50544,
                      "src": "4517:13:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4507:23:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4482:48:62"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 50562,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "4565:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 50563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4569:6:62",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4565:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50564,
                        "name": "fundTargetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50528,
                        "src": "4577:17:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50565,
                        "name": "amountInvestor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50554,
                        "src": "4596:14:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 50559,
                        "name": "stablecoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50209,
                        "src": "4541:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$45620",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 50561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4552:12:62",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 45619,
                      "src": "4541:23:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 50566,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4541:70:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50567,
                  "nodeType": "ExpressionStatement",
                  "src": "4541:70:62"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 50571,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "4645:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 50572,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4649:6:62",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4645:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 50574,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50497,
                            "src": "4665:6:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 50573,
                          "name": "ownerOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45788,
                          "src": "4657:7:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                            "typeString": "function (uint256) view returns (address)"
                          }
                        },
                        "id": 50575,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4657:15:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50576,
                        "name": "managerAdmFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50544,
                        "src": "4674:13:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 50568,
                        "name": "stablecoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50209,
                        "src": "4621:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$45620",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 50570,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4632:12:62",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 45619,
                      "src": "4621:23:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 50577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4621:67:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50578,
                  "nodeType": "ExpressionStatement",
                  "src": "4621:67:62"
                },
                {
                  "expression": {
                    "id": 50583,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 50579,
                        "name": "initialAmounts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50233,
                        "src": "4728:14:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 50581,
                      "indexExpression": {
                        "id": 50580,
                        "name": "fundId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50497,
                        "src": "4743:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4728:22:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 50582,
                      "name": "amountInvestor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50554,
                      "src": "4754:14:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4728:40:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 50584,
                  "nodeType": "ExpressionStatement",
                  "src": "4728:40:62"
                },
                {
                  "assignments": [
                    50586
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50586,
                      "mutability": "mutable",
                      "name": "fundQuotaAddress",
                      "nameLocation": "4787:16:62",
                      "nodeType": "VariableDeclaration",
                      "scope": 50607,
                      "src": "4779:24:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 50585,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4779:7:62",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50590,
                  "initialValue": {
                    "baseExpression": {
                      "id": 50587,
                      "name": "quotasAddresses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50254,
                      "src": "4806:15:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 50589,
                    "indexExpression": {
                      "id": 50588,
                      "name": "fundId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50497,
                      "src": "4822:6:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4806:23:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4779:50:62"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 50595,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "4873:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 50596,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4877:6:62",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4873:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50597,
                        "name": "amountInvestor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50554,
                        "src": "4885:14:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 50592,
                            "name": "fundQuotaAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50586,
                            "src": "4850:16:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 50591,
                          "name": "QuotaToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50031,
                          "src": "4839:10:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_QuotaToken_$50031_$",
                            "typeString": "type(contract QuotaToken)"
                          }
                        },
                        "id": 50593,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4839:28:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_QuotaToken_$50031",
                          "typeString": "contract QuotaToken"
                        }
                      },
                      "id": 50594,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4868:4:62",
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 49990,
                      "src": "4839:33:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256) external"
                      }
                    },
                    "id": 50598,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4839:61:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50599,
                  "nodeType": "ExpressionStatement",
                  "src": "4839:61:62"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 50601,
                        "name": "fundTargetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50528,
                        "src": "4931:17:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 50602,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "4950:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 50603,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4954:6:62",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4950:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50604,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50495,
                        "src": "4962:7:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50600,
                      "name": "InvestimentMade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50268,
                      "src": "4915:15:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 50605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4915:55:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50606,
                  "nodeType": "EmitStatement",
                  "src": "4910:60:62"
                }
              ]
            },
            "functionSelector": "d87aa643",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "invest",
            "nameLocation": "3965:6:62",
            "parameters": {
              "id": 50498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50495,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "3980:7:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50608,
                  "src": "3972:15:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50494,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3972:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50497,
                  "mutability": "mutable",
                  "name": "fundId",
                  "nameLocation": "3997:6:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50608,
                  "src": "3989:14:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50496,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3989:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3971:33:62"
            },
            "returnParameters": {
              "id": 50499,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4012:0:62"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 50683,
            "nodeType": "FunctionDefinition",
            "src": "4983:642:62",
            "nodes": [],
            "body": {
              "id": 50682,
              "nodeType": "Block",
              "src": "5027:598:62",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 50619,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 50614,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "5045:5:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 50615,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5051:9:62",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "5045:15:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 50616,
                            "name": "openRedeemTimestamps",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50245,
                            "src": "5064:20:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 50618,
                          "indexExpression": {
                            "id": 50617,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50610,
                            "src": "5085:6:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5064:28:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5045:47:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "52656465656d206973206e6f74206f70656e20796574",
                        "id": 50620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5094:24:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_818f2fec1ce047f01f6111b45cb0f4ac7c2a49683f138b8aba5198a9f8d5a8a8",
                          "typeString": "literal_string \"Redeem is not open yet\""
                        },
                        "value": "Redeem is not open yet"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_818f2fec1ce047f01f6111b45cb0f4ac7c2a49683f138b8aba5198a9f8d5a8a8",
                          "typeString": "literal_string \"Redeem is not open yet\""
                        }
                      ],
                      "id": 50613,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5037:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 50621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5037:82:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50622,
                  "nodeType": "ExpressionStatement",
                  "src": "5037:82:62"
                },
                {
                  "assignments": [
                    50624
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50624,
                      "mutability": "mutable",
                      "name": "fundQuotaAddress",
                      "nameLocation": "5137:16:62",
                      "nodeType": "VariableDeclaration",
                      "scope": 50682,
                      "src": "5129:24:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 50623,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5129:7:62",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50628,
                  "initialValue": {
                    "baseExpression": {
                      "id": 50625,
                      "name": "quotasAddresses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50254,
                      "src": "5156:15:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                        "typeString": "mapping(uint256 => address)"
                      }
                    },
                    "id": 50627,
                    "indexExpression": {
                      "id": 50626,
                      "name": "fundId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50610,
                      "src": "5172:6:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "5156:23:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5129:50:62"
                },
                {
                  "assignments": [
                    50630
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50630,
                      "mutability": "mutable",
                      "name": "amountQuotas",
                      "nameLocation": "5197:12:62",
                      "nodeType": "VariableDeclaration",
                      "scope": 50682,
                      "src": "5189:20:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 50629,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5189:7:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50638,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 50635,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5251:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 50636,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5255:6:62",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5251:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 50632,
                            "name": "fundQuotaAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50624,
                            "src": "5223:16:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 50631,
                          "name": "QuotaToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50031,
                          "src": "5212:10:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_QuotaToken_$50031_$",
                            "typeString": "type(contract QuotaToken)"
                          }
                        },
                        "id": 50633,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5212:28:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_QuotaToken_$50031",
                          "typeString": "contract QuotaToken"
                        }
                      },
                      "id": 50634,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5241:9:62",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 43648,
                      "src": "5212:38:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 50637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5212:50:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5189:73:62"
                },
                {
                  "assignments": [
                    50640
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 50640,
                      "mutability": "mutable",
                      "name": "redeemableAmount",
                      "nameLocation": "5289:16:62",
                      "nodeType": "VariableDeclaration",
                      "scope": 50682,
                      "src": "5281:24:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 50639,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5281:7:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 50654,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 50653,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 50645,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 50641,
                            "name": "amountQuotas",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50630,
                            "src": "5309:12:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "baseExpression": {
                              "id": 50642,
                              "name": "initialAmounts",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50233,
                              "src": "5322:14:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 50644,
                            "indexExpression": {
                              "id": 50643,
                              "name": "fundId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 50610,
                              "src": "5337:6:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5322:22:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5309:35:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 50646,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "5308:37:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "arguments": [
                        {
                          "baseExpression": {
                            "id": 50649,
                            "name": "fundsAddresses",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50217,
                            "src": "5369:14:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                              "typeString": "mapping(uint256 => address)"
                            }
                          },
                          "id": 50651,
                          "indexExpression": {
                            "id": 50650,
                            "name": "fundId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50610,
                            "src": "5384:6:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5369:22:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "id": 50647,
                          "name": "stablecoin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50209,
                          "src": "5348:10:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$45620",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 50648,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5359:9:62",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 45577,
                        "src": "5348:20:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 50652,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5348:44:62",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5308:84:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5281:111:62"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 50658,
                          "name": "fundsAddresses",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50217,
                          "src": "5427:14:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 50660,
                        "indexExpression": {
                          "id": 50659,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50610,
                          "src": "5442:6:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5427:22:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 50661,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5451:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 50662,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5455:6:62",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5451:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50663,
                        "name": "redeemableAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50640,
                        "src": "5463:16:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 50655,
                        "name": "stablecoin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50209,
                        "src": "5403:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$45620",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 50657,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5414:12:62",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 45619,
                      "src": "5403:23:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 50664,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5403:77:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50665,
                  "nodeType": "ExpressionStatement",
                  "src": "5403:77:62"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 50670,
                        "name": "amountQuotas",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50630,
                        "src": "5525:12:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 50667,
                            "name": "fundQuotaAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 50624,
                            "src": "5502:16:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 50666,
                          "name": "QuotaToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50031,
                          "src": "5491:10:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_QuotaToken_$50031_$",
                            "typeString": "type(contract QuotaToken)"
                          }
                        },
                        "id": 50668,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5491:28:62",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_QuotaToken_$50031",
                          "typeString": "contract QuotaToken"
                        }
                      },
                      "id": 50669,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5520:4:62",
                      "memberName": "burn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 50010,
                      "src": "5491:33:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 50671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5491:47:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50672,
                  "nodeType": "ExpressionStatement",
                  "src": "5491:47:62"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 50674,
                          "name": "fundsAddresses",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50217,
                          "src": "5565:14:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 50676,
                        "indexExpression": {
                          "id": 50675,
                          "name": "fundId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 50610,
                          "src": "5580:6:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5565:22:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 50677,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5589:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 50678,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5593:6:62",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5589:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 50679,
                        "name": "redeemableAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50640,
                        "src": "5601:16:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50673,
                      "name": "RedeemMade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 50276,
                      "src": "5554:10:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 50680,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5554:64:62",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 50681,
                  "nodeType": "EmitStatement",
                  "src": "5549:69:62"
                }
              ]
            },
            "functionSelector": "258d3c33",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redeemYield",
            "nameLocation": "4992:11:62",
            "parameters": {
              "id": 50611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50610,
                  "mutability": "mutable",
                  "name": "fundId",
                  "nameLocation": "5012:6:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50683,
                  "src": "5004:14:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50609,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5004:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5003:16:62"
            },
            "returnParameters": {
              "id": 50612,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5027:0:62"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 50697,
            "nodeType": "FunctionDefinition",
            "src": "5631:111:62",
            "nodes": [],
            "body": {
              "id": 50696,
              "nodeType": "Block",
              "src": "5693:49:62",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 50694,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 50690,
                        "name": "whiteListedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50213,
                        "src": "5703:17:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 50692,
                      "indexExpression": {
                        "id": 50691,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50685,
                        "src": "5721:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5703:25:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 50693,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5731:4:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "5703:32:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50695,
                  "nodeType": "ExpressionStatement",
                  "src": "5703:32:62"
                }
              ]
            },
            "functionSelector": "822dde8d",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 50688,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 50687,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "5683:9:62"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 44292,
                  "src": "5683:9:62"
                },
                "nodeType": "ModifierInvocation",
                "src": "5683:9:62"
              }
            ],
            "name": "setWhiteListedToken",
            "nameLocation": "5640:19:62",
            "parameters": {
              "id": 50686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50685,
                  "mutability": "mutable",
                  "name": "_token",
                  "nameLocation": "5668:6:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50697,
                  "src": "5660:14:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50684,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5660:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5659:16:62"
            },
            "returnParameters": {
              "id": 50689,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5693:0:62"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 50711,
            "nodeType": "FunctionDefinition",
            "src": "5748:115:62",
            "nodes": [],
            "body": {
              "id": 50710,
              "nodeType": "Block",
              "src": "5813:50:62",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 50708,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 50704,
                        "name": "whiteListedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50213,
                        "src": "5823:17:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 50706,
                      "indexExpression": {
                        "id": 50705,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50699,
                        "src": "5841:6:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5823:25:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 50707,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5851:5:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "5823:33:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 50709,
                  "nodeType": "ExpressionStatement",
                  "src": "5823:33:62"
                }
              ]
            },
            "functionSelector": "b5541dd8",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 50702,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 50701,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "5803:9:62"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 44292,
                  "src": "5803:9:62"
                },
                "nodeType": "ModifierInvocation",
                "src": "5803:9:62"
              }
            ],
            "name": "removeWhiteListedToken",
            "nameLocation": "5757:22:62",
            "parameters": {
              "id": 50700,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50699,
                  "mutability": "mutable",
                  "name": "_token",
                  "nameLocation": "5788:6:62",
                  "nodeType": "VariableDeclaration",
                  "scope": 50711,
                  "src": "5780:14:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50698,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5780:7:62",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5779:16:62"
            },
            "returnParameters": {
              "id": 50703,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5813:0:62"
            },
            "scope": 50712,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 50194,
              "name": "ERC721",
              "nameLocations": [
                "562:6:62"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46655,
              "src": "562:6:62"
            },
            "id": 50195,
            "nodeType": "InheritanceSpecifier",
            "src": "562:6:62"
          },
          {
            "baseName": {
              "id": 50196,
              "name": "Ownable",
              "nameLocations": [
                "570:7:62"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 44381,
              "src": "570:7:62"
            },
            "id": 50197,
            "nodeType": "InheritanceSpecifier",
            "src": "570:7:62"
          }
        ],
        "canonicalName": "WhaleFinance",
        "contractDependencies": [
          44929
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          50712,
          44381,
          46655,
          44485,
          46818,
          46772,
          48034,
          48046,
          47093
        ],
        "name": "WhaleFinance",
        "nameLocation": "546:12:62",
        "scope": 50713,
        "usedErrors": [
          44247,
          44252,
          44443,
          44448,
          44457,
          44462,
          44467,
          44474,
          44479,
          44484
        ],
        "usedEvents": [
          44258,
          46671,
          46680,
          46689,
          50260,
          50268,
          50276
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 62
}


export const WhaleFinanceAbi = WhaleFinance["abi"]


