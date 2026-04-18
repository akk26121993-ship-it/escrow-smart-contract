# 🔐 Escrow Smart Contract (Web3 Project)

A decentralized escrow system that enables secure, trustless payments between two parties using an arbiter.

---

## 🚀 Live Concept

In traditional freelancing:
- Client pays ❌ (risk of scam)
- Freelancer works ❌ (risk of non-payment)

This smart contract solves it:
- Funds are locked in contract 🔒
- Arbiter verifies work ✅
- Payment released automatically 💸

---

## 🧠 How It Works

1. **Payer** deploys contract with ETH
2. Funds are stored in the contract
3. **Arbiter** approves transaction
4. ETH is transferred to **Payee**

---

## 🛠 Tech Stack

- Solidity ^0.8.x
- Hardhat
- Ethers.js
- TypeScript
- Mocha + Chai (Testing)

---

## 📦 Features

- 🔒 Secure ETH locking
- 👨‍⚖️ Arbiter-based approval system
- 🚫 Unauthorized access protection
- ⚡ Instant fund transfer after approval
- 📢 Event emission for transaction tracking

---

## 🧪 Test Coverage

- ✔ Contract deployment validation  
- ✔ Access control (arbiter only)  
- ✔ ETH transfer correctness  

Run tests:
```bash
npx hardhat test
---------

## 🚀 Deployment

npx hardhat run scripts/deploy.ts
------------------------------------

## 📁 Project Structure

contracts/       # Smart contracts
scripts/         # Deployment scripts
test/            # Test cases
hardhat.config.ts
----------------------------------------

🌍 Real-World Use Cases
Freelance payments (Upwork-style)
Marketplace escrow (OLX, Fiverr)
Web3 service agreements
Trustless peer-to-peer transactions

------------------------------------------------

📌 Future Improvements

🌐 Frontend (React + MetaMask)
🌍 Deploy to Sepolia testnet
📊 Add UI transaction tracking
🔁 Multi-party escrow support

------------------------------------------

👨‍💻 Author

Ashok Kumar Sekar
https://github.com/akk26121993-ship-it


npx hardhat test
