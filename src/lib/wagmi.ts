import { http, createConfig } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { coinbaseWallet, walletConnect, injected } from 'wagmi/connectors';

// Get project ID from environment variables or use a default one for development
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_WALLETCONNECT_PROJECT_ID';

// Configure chains
const chains = [base, baseSepolia] as const;

// Create wagmi config
export const config = createConfig({
  chains: chains,
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
  connectors: [
    injected({ target: 'metaMask' }),
    coinbaseWallet({
      appName: 'YieldBase',
      appLogoUrl: '/logo.png',
    }),
    walletConnect({ projectId }),
  ],
  ssr: true,
});

export { type Chain } from 'wagmi/chains';
