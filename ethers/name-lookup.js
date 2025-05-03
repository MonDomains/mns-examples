import {Network, EnsPlugin, JsonRpcProvider} from "ethers";

// Registry contract address (mainnet or testnet) of the MNS. See: /overview/deployments page
const mnsRegistry = "0x6442eC5c3CCDaF112d6B78F9189cD111d516fE1E";
const network = new Network("Monad Testnet", 10143);
const plugin = new EnsPlugin(mnsRegistry, network.chainId);
network.attachPlugin(plugin);
const provider = new JsonRpcProvider("https://testnet-rpc.monad.xyz", network);
const name = await provider.lookupAddress("0xd1b3Cf4B18D061EAF28ea7ad91bC01E43598e252");

console.log(name);

