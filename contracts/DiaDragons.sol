// Contract based on https://docs.openzeppelin.com/contracts/3.x/erc721
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract DiaDragons is ERC721, ERC721Enumerable, Ownable {
    using SafeMath for uint256;
    using Strings for uint256;

    bool public _isSaleActive = false;
    uint256 public offsetIndex = 0;
    uint256 public offsetIndexBlock = 0;
    uint256 public revealTimeStamp = block.timestamp + (86400 * 7);

    // Constants
    uint256 public constant TIER1_PRICE = .070 ether;
    uint256 public constant TIER1_NUM_TOKENS = 1;
    uint256 public constant MAX_SUPPLY = 10000;
    string public POGGERS_PROVENANCE = "";

    string public baseURI;
    string public _preRevealURI;

    event SaleStarted();
    event SaleStopped();
    event TokenMinted(uint256 supply);

    constructor(string memory _initBaseURI) ERC721("DiaDragons", "SP") {
        setBaseURI(_initBaseURI);
    }

    function startSale() public onlyOwner {
        _isSaleActive = true;
        emit SaleStarted();
    }

    function pauseSale() public onlyOwner {
        _isSaleActive = false;
        emit SaleStopped();
    }

    function isSaleActive() public view returns (bool) {
        return _isSaleActive;
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }

    function getTotalSupply() public view returns (uint256) {
        return totalSupply();
    }

    function getDiaDragonsByOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 tokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](tokenCount);
        for (uint256 i; i < tokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }

        return tokenIds;
    }

    function mintDiaDragonTier1() public payable {
        require(_isSaleActive, "Sale must be active to mint DiaDragons");
        require(
            totalSupply().add(TIER1_NUM_TOKENS) <= MAX_SUPPLY,
            "Sale would exceed max supply"
        );
        require(TIER1_PRICE <= msg.value, "Not enough ether sent (<0.07 ETH)");
        _mintDiaDragons(TIER1_NUM_TOKENS, msg.sender);
        emit TokenMinted(totalSupply());
    }

    function reserveDiaDragons(uint256 numDiaDragons) public onlyOwner {
        require(
            totalSupply().add(numDiaDragons) <= MAX_SUPPLY,
            "Sale would exceed max supply"
        );
        _mintDiaDragons(numDiaDragons, msg.sender);
    }

    function airdropDiaDragon(uint256 numDiaDragons, address recipient)
        public
        onlyOwner
    {
        require(
            totalSupply().add(numDiaDragons) <= MAX_SUPPLY,
            "Sale would exceed max supply"
        );
        _mintDiaDragons(numDiaDragons, recipient);
        emit TokenMinted(totalSupply());
    }

    function airdropDiaDragonToMany(address[] memory recipients)
        external
        onlyOwner
    {
        require(
            totalSupply().add(recipients.length) <= MAX_SUPPLY,
            "Sale would exceed max supply"
        );
        for (uint256 i = 0; i < recipients.length; i++) {
            airdropDiaDragon(1, recipients[i]);
        }
    }

    function airdropThirteenthDiaDragon(address recipient) external onlyOwner {
        require(
            !_isSaleActive &&
                (totalSupply() >= MAX_SUPPLY ||
                    block.timestamp >= revealTimeStamp),
            "The 13th pogger will only be airdropped once the sale has concluded"
        );
        uint256 tokenId = totalSupply() + MAX_SUPPLY; // Disallow 13th pogger ids from 0-12000 range
        _safeMint(recipient, tokenId);
    }

    function _mintDiaDragons(uint256 numDiaDragons, address recipient)
        internal
    {
        uint256 supply = totalSupply();
        for (uint256 i = 0; i < numDiaDragons; i++) {
            _safeMint(recipient, supply + i);
        }

        if (
            offsetIndexBlock == 0 &&
            (totalSupply() >= MAX_SUPPLY || block.timestamp >= revealTimeStamp)
        ) {
            offsetIndexBlock = block.number;
        }
    }

    function setOffsetIndex() public {
        require(offsetIndex == 0, "Starting index has already been set");
        require(offsetIndexBlock != 0, "Starting index block must be set");

        if (block.number.sub(offsetIndexBlock) > 255) {
            offsetIndex = uint256(blockhash(block.number - 1)).mod(MAX_SUPPLY);
        } else {
            offsetIndex = uint256(blockhash(offsetIndexBlock)).mod(MAX_SUPPLY);
        }

        if (offsetIndex == 0) {
            offsetIndex = 1;
        }
    }

    function emergencySetOffsetIndexBlock() public onlyOwner {
        require(offsetIndex == 0, "Starting index is already set");
        offsetIndexBlock = block.number;
    }

    function setProvenanceHash(string memory provenanceHash)
        external
        onlyOwner
    {
        POGGERS_PROVENANCE = provenanceHash;
    }

    function setRevealTimestamp(uint256 newRevealTimeStamp) external onlyOwner {
        revealTimeStamp = newRevealTimeStamp;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function setPreRevealURI(string memory preRevealURI) external onlyOwner {
        _preRevealURI = preRevealURI;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();
        return string(abi.encodePacked(currentBaseURI, tokenId.toString()));
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
