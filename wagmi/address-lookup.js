import { monadTestnet } from 'viem/chains';
import { normalize } from 'viem/ens';
import { createConfig, http } from 'wagmi'
import { getEnsAddress as getMnsAddress } from '@wagmi/core'
 
const config = createConfig({
    chains: [monadTestnet],
    transports: {
      [monadTestnet.id]: http(), 
    },
});

// UniversalResolver contract address (mainnet or testnet) of the MNS. See: /overview/deployments page
const universalResolverAddress = "0x768be64B577caF84F7D64d0F8e6dc35Dc4737A65";
const address = await getMnsAddress(config, { 
    name: normalize('0xalice.mon'),
    universalResolverAddress,
    chainId: monadTestnet.id,
});

console.log(address)
 