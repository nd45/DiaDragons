async function main() {
	const DiaDragons = await ethers.getContractFactory("DiaDragons");

	// Start deployment, returning a promise that resolves to a contract object
	const dragons = await DiaDragons.deploy(
		"https://gateway.pinata.cloud/ipfs/Qmd8K6bJZSKdZ2MgN8NDBDWjqCRbiwziNDS19RApMk9KR5/"
	);
	console.log("Contract deployed to address:", dragons.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
