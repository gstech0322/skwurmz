var NFT = artifacts.require("./Penguin.sol");

module.exports = function (deployer) {
  deployer.deploy(NFT);
};
