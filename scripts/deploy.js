async function main() {
	const Diadragons = await ethers.getContractFactory("Diadragons");

	// Start deployment, returning a promise that resolves to a contract object
	const dragons = await Diaragons.deploy();
	// https://gateway.pinata.cloud/ipfs/QmYnstK5FSEUUwndpWTTxEF1YSgPsRAJ2UWP9SAXFKSxhT/
	console.log("Contract deployed to address:", dragons.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
