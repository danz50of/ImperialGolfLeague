// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AchievementNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;

    constructor(address initialOwner) ERC721("AchievementNFT", "IGL-ACHV") Ownable(initialOwner) {}

    function mintAchievement(address to, string memory uri) external onlyOwner returns (uint256) {
        uint256 tokenId = _tokenIdCounter;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _tokenIdCounter += 1;
        return tokenId;
    }

    function getNextTokenId() external view returns (uint256) {
        return _tokenIdCounter;
    }
}