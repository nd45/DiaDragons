async function main() {
    const DiaDragons = await ethers.getContractFactory("DiaDragons");
    
    // Start deployment, returning a promise that resolves to a contract object
    const test_poggers = await DiaDragons.deploy("https://gateway.pinata.cloud/ipfs/QmSsj9CZBAZRSvZkdRPer7SfxFfr3qvs3xmLjMiTg1TKag/");   
    console.log("Contract deployed to address:", test_poggers.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });