import { normalize } from 'viem/ens'
import { createPublicClient, http } from 'viem'
import { monadTestnet } from 'viem/chains'
 
// UniversalResolver contract address (mainnet or testnet) of the MNS. See: /overview/deployments page
const universalResolverAddress = "0x768be64B577caF84F7D64d0F8e6dc35Dc4737A65"; 
const publicClient = createPublicClient({ 
  chain: monadTestnet,
  transport: http()
})

const getMnsName = publicClient.getEnsName;
const name = await getMnsName({
  address: "0xd1b3Cf4B18D061EAF28ea7ad91bC01E43598e252",
  universalResolverAddress
});

console.log(name)