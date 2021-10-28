const { ethers, upgrades } = require("hardhat");

async function main() {
	const Diadragons = await ethers.getContractFactory("Diadragons");
	console.log("Deploying Box...");
	const dia = await upgrades.deployProxy(
		Diadragons,
		[
			"https://gateway.pinata.cloud/ipfs/QmPA979Hansx9eiZ8F1XpCaR1WqWk53YxpP6hnkmQC5CSU",
		],
		{
			initializer: "setPreRevealURI",
		}
	);
	await dia.deployed();
	console.log("Box deployed to:", box.address);
}

main();
