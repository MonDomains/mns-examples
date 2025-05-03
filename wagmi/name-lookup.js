import { monadTestnet } from 'viem/chains';
import { createConfig, http } from 'wagmi'
import { getEnsName as getMnsName } from '@wagmi/core'
 
const config = createConfig({
    chains: [monadTestnet],
    transports: {
      [monadTestnet.id]: http(), 
    },
});

// UniversalResolver contract address (mainnet or testnet) of the MNS. See: /overview/deployments page
const universalResolverAddress = "0x768be64B577caF84F7D64d0F8e6dc35Dc4737A65";
const address = await getMnsName(config, { 
    address: '0xd1b3Cf4B18D061EAF28ea7ad91bC01E43598e252',
    universalResolverAddress,
    chainId: monadTestnet.id,
});

console.log(address)
 