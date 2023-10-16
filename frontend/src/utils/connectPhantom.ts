import { PhantomProvider } from '../types/phantom';

export async function connectPhantom(): Promise<{ solanaProvider: PhantomProvider, address: string } | null> {
    if (!window.solana) {
      alert("You need to install Phantom!");
      return null;
    }
    
    try {
      const solanaProvider = window.solana;
      // Check if Phantom is connected
      if (!solanaProvider.isConnected) {
        await solanaProvider.connect();
      }
  
      // Assuming the publicKey would be null if not connected
      if (solanaProvider.publicKey) {
        const address = solanaProvider.publicKey.toString();
        return { solanaProvider, address };
      } else {
        alert("Phantom is not connected!");
        return null;
      }
    } catch (err) {
      console.error("Error connecting to Phantom", err);
      return null;
    }
  }

export const getPhantomProvider = (): PhantomProvider | undefined => {
    if ('phantom' in window) {
        const provider = (window as any).phantom?.solana;

        if (provider?.isPhantom) {
            return provider;
        }
    }

    window.open('https://phantom.app/', '_blank');
};