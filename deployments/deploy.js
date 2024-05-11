async function main() {
    const HelloWorld = await ethers.getContractFactory("UniswapV2Router02");
    const hello_world = await HelloWorld.deploy("0xAf426c4cF1A91Cc56de2cAC48Fe589f34636a28A","0x4300000000000000000000000000000000000004");
    console.log("Contract Deployed to Address:", hello_world.address);
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
