// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Penguin is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("penguin", "pen") {}

    function mintNft(address receiver, uint256 _amt)
        external
        payable
        returns (uint256)
    {
        _tokenIds.increment();
        // check that the values match!
        require(msg.value == _amt, "invalid value");

        //! also check that the address and sender match : later

        uint256 newNftTokenId = _tokenIds.current();
        _safeMint(receiver, newNftTokenId);

        return newNftTokenId;
    }
}
