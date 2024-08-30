import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export default function RequestAirdrop() {
    const [amount, setAmount] = useState(0);

    const wallet = useWallet();
    const { connection } = useConnection();

    
    async function requestAirdrop() {
        // let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    return (
    <div>
        <br/><br/>
        <div className="flex gap-10">
            <input 
                className='bg-[#151515] p-4 text-xl rounded-md' 
                id="amount" 
                type="text" 
                placeholder="Amount" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />
            <button
                className="bg-blue-600 p-4 rounded-md " 
                onClick={requestAirdrop}
                >
                Request Airdrop</button>
        </div>
    </div>
    )
}