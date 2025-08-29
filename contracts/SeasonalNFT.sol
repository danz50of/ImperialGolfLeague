// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SeasonalNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;

    struct SeasonInfo {
        uint256 seasonYear;
        string seasonType; // "physical" or "digital"
        string playerName;
    }

    mapping(uint256 => SeasonInfo) public seasonMetadata;

    constructor(address initialOwner) ERC721("ImperialGolfSeason", "IGS") Ownable(initialOwner) {}

    function mintSeasonNFT(
        address to,
        string memory uri,
        uint256 seasonYear,
        string memory seasonType,
        string memory playerName
    ) public onlyOwner returns (uint256) {
        uint256 tokenId = _tokenIdCounter;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        seasonMetadata[tokenId] = SeasonInfo(seasonYear, seasonType, playerName);
        _tokenIdCounter += 1;

        return tokenId;
    }

    function batchMintSeasonNFT(
        address[] memory recipients,
        string[] memory uris,
        uint256 seasonYear,
        string memory seasonType,
        string[] memory playerNames
    ) public onlyOwner {
        require(
            recipients.length == uris.length && uris.length == playerNames.length,
            "Input arrays must match in length"
        );

        for (uint256 i = 0; i < recipients.length; i++) {
            mintSeasonNFT(recipients[i], uris[i], seasonYear, seasonType, playerNames[i]);
        }
    }

    function currentTokenId() external view returns (uint256) {
    if (_tokenIdCounter == 0) {
        return 0;
    }
    return _tokenIdCounter - 1;
}

    function getSeasonInfo(uint256 tokenId) external view returns (SeasonInfo memory) {
        address owner = ownerOf(tokenId); // will revert if token doesn't exist
        return seasonMetadata[tokenId];
    }
}