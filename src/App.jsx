import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';

function App() {
  

  return (
    <ConnectionProvider endpoint={'https://api.devnet.solana.com'}>
      <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
              <>
              <div className='min-h-screen flex flex-col justify-center items-center gap-10 bg-black text-white'>
                <h1 className='font-medium text-3xl'>ZApp</h1>
                <div className='flex gap-10'>
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                </div>
                <Airdrop />
              </div>
              </>
          </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}

export default App;
