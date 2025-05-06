import { normalize } from 'viem/ens'
import { createPublicClient, http } from 'viem'
import { monadTestnet } from 'viem/chains'
 
// UniversalResolver contract address (mainnet or testnet) of the MNS. See: /overview/deployments page
const universalResolverAddress = "0x768be64B577caF84F7D64d0F8e6dc35Dc4737A65"; 
const publicClient = createPublicClient({ 
  chain: monadTestnet,
  transport: http()
})

const getMnsAvatar = publicClient.getEnsAvatar;
const avatar = await getMnsAvatar({
  name: normalize('0xalice.mon'),
  universalResolverAddress
});

console.log(avatar)