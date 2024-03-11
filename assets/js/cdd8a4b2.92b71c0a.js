"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[48427],{56103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>l,readingTime:()=>h,toc:()=>p});var a=n(85893),s=n(11151),o=n(34478),r=n(94285);const c={sidebar_position:3},i="Interactions with the CLI",l={id:"tutorials/cli-1",title:"Interactions with the CLI",description:"Axone with Keplr",source:"@site/docs/tutorials/cli-1.mdx",sourceDirName:"tutorials",slug:"/tutorials/cli-1",permalink:"/tutorials/cli-1",draft:!1,unlisted:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/tutorials/cli-1.mdx",tags:[],version:"current",lastUpdatedAt:1709885703,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorials",previous:{title:"Your first transaction",permalink:"/tutorials/keplr-1"},next:{title:"Explorer",permalink:"/tutorials/explorer-sc"}},d={},h=10,p=[{value:"Installing the Axone CLI",id:"installing-the-axone-cli",level:2},{value:"<code>okp4d</code> requirements",id:"okp4d-requirements",level:3},{value:"<code>okp4d</code> one-liner installer script",id:"okp4d-one-liner-installer-script",level:3},{value:"Build the <code>okp4d</code> CLI from source",id:"build-the-okp4d-cli-from-source",level:3},{value:"Get started with the Axone CLI",id:"get-started-with-the-axone-cli",level:2},{value:"Get a wallet by creating a new key pair",id:"get-a-wallet-by-creating-a-new-key-pair",level:3},{value:"Get your wallet address",id:"get-your-wallet-address",level:3},{value:"Check your wallet balance",id:"check-your-wallet-balance",level:3},{value:"Get the total supply of $AXON",id:"get-the-total-supply-of-axon",level:3},{value:"Send some $AXON to another wallet",id:"send-some-axon-to-another-wallet",level:3},{value:"Get transaction info from a <code>txhash</code>",id:"get-transaction-info-from-a-txhash",level:3},{value:"Blockchain mastery with advanced commands",id:"blockchain-mastery-with-advanced-commands",level:2},{value:"Get all transactions from a filter function",id:"get-all-transactions-from-a-filter-function",level:3},{value:"Smart contracts operations",id:"smart-contracts-operations",level:3},{value:"Smart contract instantiation",id:"smart-contract-instantiation",level:4},{value:"Smart contract execution",id:"smart-contract-execution",level:4},{value:"Smart contract query",id:"smart-contract-query",level:4},{value:"Analyze smart contracts activities",id:"analyze-smart-contracts-activities",level:4},{value:"Recap&#39;",id:"recap",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"interactions-with-the-cli",children:"Interactions with the CLI"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Axone with Keplr",src:n(32958).Z+"",width:"3168",height:"1192"})}),"\n",(0,a.jsx)(t.p,{children:"This guide will walk you through connecting with the Axone network using a Command Line Interface (CLI). Picture the CLI as a control panel, allowing you to tap into the pulsing core of Axone's advanced technology. Thanks to the CLI, you can query the chain, uncover deep insights, and execute transactions with a mere command line."}),"\n",(0,a.jsx)(t.p,{children:"Let's explore the core concepts of the Axone blockchain and list the most crucial commands. Have a comfortable seat, launch your favorite terminal shell, and prepare for an exhilarating adventure!"}),"\n",(0,a.jsx)(t.h2,{id:"installing-the-axone-cli",children:"Installing the Axone CLI"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"okp4d"})," is a text-based interface that allows users to interact with and query the Axone blockchain directly through commands typed in a terminal. The CLI serves as a tool for executing transactions and retrieving information from the blockchain."]}),"\n",(0,a.jsxs)(t.p,{children:["You'll need the ",(0,a.jsx)(t.a,{href:"https://github.com/okp4/okp4d",children:(0,a.jsx)(t.code,{children:"okp4d"})})," binary on your machine before we can start playing around with the CLI."]}),"\n",(0,a.jsxs)(t.h3,{id:"okp4d-requirements",children:[(0,a.jsx)(t.code,{children:"okp4d"})," requirements"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"You can install the CLI on your Mac or Linux distribution (arm64 & amd64), but there's no available Windows build yet."}),"\n",(0,a.jsxs)(t.li,{children:["Ensure that Go is installed on your machine. You can download it from ",(0,a.jsx)(t.a,{href:"https://golang.org/dl/",children:"Go's official website"})," if it isn't."]}),"\n"]}),"\n",(0,a.jsxs)(t.h3,{id:"okp4d-one-liner-installer-script",children:[(0,a.jsx)(t.code,{children:"okp4d"})," one-liner installer script"]}),"\n",(0,a.jsx)(r.Z,{language:"bash",children:(0,a.jsxs)(t.p,{children:["curl ",(0,a.jsx)(t.a,{href:"https://i.jpillora.com/okp4/okp4d@%7Bdata.okp4dVersion%7D",children:"https://i.jpillora.com/okp4/okp4d@{data.okp4dVersion}"}),"! | bash"]})}),"\n",(0,a.jsx)(t.p,{children:"Verify the installation:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"okp4d version\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Certain aspects, such as your computer's unique characteristics (particularly for Mac M1/M2 users), can occasionally cause issues. If the one-liner script fails, you should build from source, as explained below."})}),"\n",(0,a.jsxs)(t.h3,{id:"build-the-okp4d-cli-from-source",children:["Build the ",(0,a.jsx)(t.code,{children:"okp4d"})," CLI from source"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Clone the Axone repository from GitHub:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/okp4/okp4d.git && cd okp4d\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Make sure ",(0,a.jsx)(t.code,{children:"$GOPATH/bin"})," is set on the $PATH environment variable. You can add it like this:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"export PATH=${PATH}:`go env GOPATH`/bin\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:"Build and install:"}),"\n"]}),"\n",(0,a.jsx)(r.Z,{language:"bash",children:`git checkout ${o.k}\nmake install`}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsx)(t.li,{children:"Verify the installation:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"okp4d version\n"})}),"\n",(0,a.jsx)(t.h2,{id:"get-started-with-the-axone-cli",children:"Get started with the Axone CLI"}),"\n",(0,a.jsx)(t.p,{children:"Let's start with some essential notions and commands to get you up and running!"}),"\n",(0,a.jsx)(t.h3,{id:"get-a-wallet-by-creating-a-new-key-pair",children:"Get a wallet by creating a new key pair"}),"\n",(0,a.jsx)(t.p,{children:"A key pair is created to obtain a wallet in order to establish secure ownership and control over your cryptocurrency assets on the Axone blockchain. The key pair consists of two cryptographic keys: public and private keys."}),"\n",(0,a.jsx)(t.p,{children:"When creating a wallet, you're typically provided with a mnemonic consisting of 12, 24, or sometimes more words. This mnemonic acts as a human-readable representation of the underlying cryptographic information. It is easier to remember and write down than the complex numbers and characters representing the private key."}),"\n",(0,a.jsx)(t.p,{children:"The mnemonic serves as a backup mechanism for the wallet. You can regenerate the key pair by inputting the mnemonic into any compatible wallet software to recover access to your funds."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'# Import from a mnemonic. You can replace "mywallet" with another wallet name\nokp4d keys add --recover mywallet\n\n# Or create a new one. You can replace "mywallet" with another wallet name\nokp4d keys add mywallet\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"danger",children:(0,a.jsx)(t.p,{children:"If you create a new key pair, the terminal displays a list of 24 words. Store this mnemonic phrase in a safe place."})}),"\n",(0,a.jsx)(t.h3,{id:"get-your-wallet-address",children:"Get your wallet address"}),"\n",(0,a.jsx)(t.p,{children:"The public key is used to generate the wallet address. It functions similarly to a bank account number, allowing others to send funds to that address."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'# Replace "mywallet" with your wallet name\nokp4d keys show mywallet\n\n: \'\n- address: okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5\n  name: mywallet\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A5wBjmKRVyE5lwqRmCF0v7MNTqR1/vm8WkkoPLQR03JN"}\'\n  type: local\n\'\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Here the terminal returns ",(0,a.jsx)(t.code,{children:"okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5"})," as the Axone address."]}),"\n",(0,a.jsx)(t.h3,{id:"check-your-wallet-balance",children:"Check your wallet balance"}),"\n",(0,a.jsx)(t.p,{children:"A wallet balance refers to the amount of cryptocurrency or digital assets held in a specific wallet address. It represents the total value of funds that are available for spending or transferring from that particular wallet."}),"\n",(0,a.jsxs)(t.p,{children:["The following command indicates that ",(0,a.jsx)(t.code,{children:"okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5"})," Axone wallet holds 1 AXON (1 AXON = 1,000,000 uAXON)."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'okp4d query bank balances okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \\\n--node https://api.testnet.okp4.network:443/rpc\n\n: \'\nbalances:\n- amount: "1000000"\n  denom: uAXON\npagination:\n  next_key: null\n  total: "0"\n\'\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Provide your Axone address to the ",(0,a.jsx)(t.a,{href:"https://faucet.okp4.network/",children:"faucet"})," to receive 1 $AXON (test tokens)."]})}),"\n",(0,a.jsx)(t.h3,{id:"get-the-total-supply-of-axon",children:"Get the total supply of $AXON"}),"\n",(0,a.jsxs)(t.p,{children:["Wondering about the number of coins in circulation? Watch out for the inflation rate with the ",(0,a.jsx)(t.code,{children:"okp4d query bank total"})," command."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"okp4d query bank total \\\n--node https://api.testnet.okp4.network:443/rpc\n"})}),"\n",(0,a.jsx)(t.h3,{id:"send-some-axon-to-another-wallet",children:"Send some $AXON to another wallet"}),"\n",(0,a.jsxs)(t.p,{children:["Here is the command to send 0.5 AXON (",(0,a.jsx)(t.code,{children:"500000 uAXON"}),") from the wallet ",(0,a.jsx)(t.code,{children:"mywallet"})," you control to the wallet with the Axone address ",(0,a.jsx)(t.code,{children:"okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"okp4d tx bank send mywallet okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg \\\n500000uAXON \\\n--chain-id okp4-nemeton-1 --node https://api.testnet.okp4.network:443/rpc\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You should type ",(0,a.jsx)(t.code,{children:"y"})," to confirm the transaction. Then the terminal returns a ",(0,a.jsx)(t.code,{children:"txhash"}),", a unique identifier that helps track and verify the transaction on the Axone blockchain."]}),"\n",(0,a.jsxs)(t.h3,{id:"get-transaction-info-from-a-txhash",children:["Get transaction info from a ",(0,a.jsx)(t.code,{children:"txhash"})]}),"\n",(0,a.jsx)(t.p,{children:"A transaction hash, also AXONn as a transaction ID or TXID, is a string of alphanumeric characters generated by applying a hash function to the transaction data. The transaction hash serves as a digital fingerprint that uniquely identifies and tracks a specific transaction within the blockchain. It is commonly used to verify a transaction's status, details, and authenticity on the blockchain."}),"\n",(0,a.jsxs)(t.p,{children:["Let's analyze a transaction executed for the previous part of this tutorial, ",(0,a.jsx)(t.code,{children:"txhash = 4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'okp4d query tx 4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1 \\\n--node https://api.testnet.okp4.network:443/rpc\n\n: \'\n...\nbody:\n    extension_options: []\n    memo: ""\n    messages:\n    - "@type": /cosmos.bank.v1beta1.MsgSend\n      amount:\n      - amount: "500000"\n        denom: uAXON\n      from_address: okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5\n      to_address: okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg\n...\n\'\n'})}),"\n",(0,a.jsxs)(t.p,{children:["As a lot of data is returned, you can ask for a JSON output and use ",(0,a.jsx)(t.a,{href:"https://jqlang.github.io/jq/",children:"jq"})," to display only what you need:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'okp4d query tx 4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--output json | jq \'.tx.body.messages[0]\'\n\n: \'\n...\n{\n  "@type": "/cosmos.bank.v1beta1.MsgSend",\n  "from_address": "okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5",\n  "to_address": "okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg",\n  "amount": [\n    {\n      "denom": "uAXON",\n      "amount": "500000"\n    }\n  ]\n}\n\'\n'})}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["To install ",(0,a.jsx)(t.code,{children:"jq"})," on a Debian/Ubuntu system:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"sudo apt install -y jq\n"})}),(0,a.jsxs)(t.p,{children:["To install ",(0,a.jsx)(t.code,{children:"jq"})," on a Mac, using Homebrew:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"brew install jq\n"})})]}),"\n",(0,a.jsx)(t.h2,{id:"blockchain-mastery-with-advanced-commands",children:"Blockchain mastery with advanced commands"}),"\n",(0,a.jsx)(t.p,{children:"Are you now comfortable with the CLI? Let's go further so that the Axone blockchain no longer holds any secrets for you!"}),"\n",(0,a.jsx)(t.h3,{id:"get-all-transactions-from-a-filter-function",children:"Get all transactions from a filter function"}),"\n",(0,a.jsxs)(t.p,{children:["You can search for specific transactions and filter according to transaction event values with the ",(0,a.jsxs)(t.a,{href:"https://docs.okp4.network/commands/okp4d_query_txs",children:[(0,a.jsx)(t.code,{children:"okp4d query txs"})," command"]}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["For example, if we analyze the log events for the transaction ",(0,a.jsx)(t.code,{children:"txhash = 4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1"}),", we notice that we can have the ",(0,a.jsx)(t.code,{children:"recipient"}),", ",(0,a.jsx)(t.code,{children:"sender"})," and ",(0,a.jsx)(t.code,{children:"amount"})," from the event type ",(0,a.jsx)(t.code,{children:"transfer"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'okp4d query tx 4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--output json | jq \'.logs[0].events[] | select(.type == "transfer").attributes\'\n\n: \'\n[\n  {\n    "key": "recipient",\n    "value": "okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg"\n  },\n  {\n    "key": "sender",\n    "value": "okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5"\n  },\n  {\n    "key": "amount",\n    "value": "500000uAXON"\n  }\n]\n\'\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Thus we can get all transfer transactions where the recipient is ",(0,a.jsx)(t.code,{children:"okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg"})," and the amount is ",(0,a.jsx)(t.code,{children:"500000uAXON"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'okp4d query txs \\\n--events \'transfer.recipient=okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg&transfer.amount=500000uAXON\' \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--page 1 --limit 1000 \\\n--output json | jq \'{total_count: .total_count, txs: [.txs[] | {txhash: .txhash, date: .timestamp, txdata: .logs[0].events[] | select(.type == "transfer").attributes}]}\'\n\n: \'\n{\n  "total_count": "1",\n  "txs": [\n    {\n      "txhash": "4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1",\n      "date": "2023-06-18T13:34:23Z",\n      "txdata": [\n        {\n          "key": "recipient",\n          "value": "okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg"\n        },\n        {\n          "key": "sender",\n          "value": "okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5"\n        },\n        {\n          "key": "amount",\n          "value": "500000uAXON"\n        }\n      ]\n    }\n  ]\n}\n\'\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["Note the ",(0,a.jsx)(t.code,{children:"--page 1 --limit 1000"})," parameters to set the results pagination."]})}),"\n",(0,a.jsx)(t.h3,{id:"smart-contracts-operations",children:"Smart contracts operations"}),"\n",(0,a.jsxs)(t.p,{children:["A smart contract is a self-executing contract with the terms of the agreement directly written into code. It is stored and executed publicly on the blockchain, enabling decentralized and automated transactions, agreements, and functionalities. Axone uses the ",(0,a.jsx)(t.code,{children:"wasm"})," module to operate smart contracts."]}),"\n",(0,a.jsx)(t.h4,{id:"smart-contract-instantiation",children:"Smart contract instantiation"}),"\n",(0,a.jsxs)(t.p,{children:["Smart contract instantiation is creating and deploying a smart contract instance on the Axone (Cosmos-based) appchain. You must provide a ",(0,a.jsx)(t.code,{children:"CODE_ID"})," to specify which smart contract code you want to instantiate."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"CODE_ID"}),(0,a.jsx)(t.th,{children:"Smart contract"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"4"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/okp4/contracts/tree/main/contracts/okp4-objectarium",children:(0,a.jsx)(t.code,{children:"objectarium"})})}),(0,a.jsx)(t.td,{children:"Unstructured object storage"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/okp4/contracts/tree/main/contracts/okp4-law-stone",children:(0,a.jsx)(t.code,{children:"law-stone"})})}),(0,a.jsx)(t.td,{children:"Source of rules"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"7"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/okp4/contracts/tree/main/contracts/okp4-cognitarium",children:(0,a.jsx)(t.code,{children:"cognitarium"})})}),(0,a.jsx)(t.td,{children:"Structured object storage, ontology"})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["Let's create a new ",(0,a.jsx)(t.code,{children:"objectarium"})," instance. The ",(0,a.jsx)(t.a,{href:"https://github.com/okp4/contracts/blob/main/contracts/okp4-objectarium/src/msg.rs",children:"msg.rs"})," source file indicates we only need to provide a bucket name."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'okp4d tx wasm instantiate 4 \\\n--label "cli-tuto" \\\n--from okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \\\n--admin okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \\\n--gas 1000000 \\\n--chain-id okp4-nemeton-1 --node https://api.testnet.okp4.network:443/rpc \\\n\'{"bucket":"cli-tutorial-bucket"}\'\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["Replace ",(0,a.jsx)(t.code,{children:"okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5"})," with the Axone wallet you control!"]})}),"\n",(0,a.jsxs)(t.p,{children:["You get a new ",(0,a.jsx)(t.code,{children:"txhash"}),"; let's get the created smart contract address:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'okp4d query tx CB200354719B58A990A077337686CFAF64E95893037AF599DABC2E3B72297FD9 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--output json | jq \'.logs[0].events[] | select(.type == "instantiate").attributes[] | select(.key == "_contract_address").value\'\n\n# "okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85"\n'})}),"\n",(0,a.jsx)(t.h4,{id:"smart-contract-execution",children:"Smart contract execution"}),"\n",(0,a.jsx)(t.p,{children:"Once a smart contract is instantiated, it can be executed or triggered to perform specific actions or transactions. This can involve invoking functions within the contract's code, which may update data, transfer assets, or trigger other operations on the app chain."}),"\n",(0,a.jsxs)(t.p,{children:["Let's add a text object to the ",(0,a.jsx)(t.code,{children:"objectarium"})," instance we just created (address = ",(0,a.jsx)(t.code,{children:"okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85"}),"). The ",(0,a.jsx)(t.a,{href:"https://github.com/okp4/contracts/blob/main/contracts/okp4-objectarium/src/msg.rs",children:"msg.rs"})," source file indicates we can use the ",(0,a.jsx)(t.code,{children:"store_object"})," method with ",(0,a.jsx)(t.code,{children:"data"})," and ",(0,a.jsx)(t.code,{children:"pin"})," arguments."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'echo "Hello Axone Builders" > text-ex.txt && \\\nokp4d tx wasm execute okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85 \\\n--from mywallet \\\n--gas 1000000 \\\n--chain-id okp4-nemeton-1 --node https://api.testnet.okp4.network:443/rpc \\\n"{\\"store_object\\":{\\"data\\": \\"$(cat text-ex.txt | base64 | tr -d \'\\n\\r\')\\", \\"pin\\":true}}"\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["Replace ",(0,a.jsx)(t.code,{children:"mywallet"})," with the name of the Axone wallet you control!"]})}),"\n",(0,a.jsxs)(t.p,{children:["You get a new ",(0,a.jsx)(t.code,{children:"txhash"}),"; let's get the created object ",(0,a.jsx)(t.code,{children:"id"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'okp4d query tx F945A917D3B0E013FD0870B5CFDA23FB00ED8C985030D1C9DD262D71F4BCA50A \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--output json | jq \'.logs[0].events[].attributes[] | select(.key == "id").value\'\n\n# "71f9954abebbd23da1664914cd599f8039585fa3d81735b4abe20893abd32213"\n'})}),"\n",(0,a.jsx)(t.h4,{id:"smart-contract-query",children:"Smart contract query"}),"\n",(0,a.jsx)(t.p,{children:"A query gives the ability to retrieve data or information from a smart contract without modifying the state of the blockchain. Queries allow users or applications to fetch specific data or execute read-only functions from the smart contract to gather information."}),"\n",(0,a.jsxs)(t.p,{children:["Let's check the text is correctly stored on-chain, with an ",(0,a.jsx)(t.code,{children:"object_data"})," query to the ",(0,a.jsx)(t.code,{children:"objectarium"})," instance we just created (address = ",(0,a.jsx)(t.code,{children:"okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85"}),", id = ",(0,a.jsx)(t.code,{children:"71f9954abebbd23da1664914cd599f8039585fa3d81735b4abe20893abd32213"}),")."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'okp4d query wasm contract-state smart okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85 \\\n--output json \\\n--chain-id okp4-nemeton-1 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n"{\\"object_data\\": {\\"id\\":\\"71f9954abebbd23da1664914cd599f8039585fa3d81735b4abe20893abd32213\\"}}" \\\n| jq \'.data\' | tr -d \'"\' | base64 -d\n\n# Hello Axone Builders\n'})}),"\n",(0,a.jsx)(t.h4,{id:"analyze-smart-contracts-activities",children:"Analyze smart contracts activities"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Wondering how many ",(0,a.jsx)(t.code,{children:"law-stone"})," are instantiated, and for each instance what are its contract address, the Axone address of the creator, and the rules program?"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"okp4d query txs \\\n--events 'instantiate.code_id=5' \\\n--chain-id okp4-nemeton-1 \\\n--node https://api.testnet.okp4.network:443/rpc --output json | jq \\\n'{total_count: .total_count, txs: [.txs[] | {date: .timestamp, sc_addr: .logs[0].events[] | select (.type == \"instantiate\").attributes[0].value  , txdata: .tx.body.messages[0] | { sender: .sender, program: .msg.program }}]}'\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Did the wallet ",(0,a.jsx)(t.code,{children:"okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5"})," execute transactions to the smart contract ",(0,a.jsx)(t.code,{children:"okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85"}),"?"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"okp4d query txs \\\n--events 'message.sender=okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5&execute._contract_address=okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85' \\\n--chain-id okp4-nemeton-1 \\\n--node https://api.testnet.okp4.network:443/rpc --output json | jq \\\n'{total_count: .total_count, txs: [.txs[] | {date: .timestamp, wasm_action: [ .logs[0].events[] | select(.type == \"wasm\").attributes[] ] }]}'\n"})}),"\n",(0,a.jsx)(t.h2,{id:"recap",children:"Recap'"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The CLI allows you to communicate with the Axone blockchain"}),"\n",(0,a.jsxs)(t.li,{children:["To get started, you should install the ",(0,a.jsx)(t.code,{children:"okp4d"})," CLI and create (or import) a wallet"]}),"\n",(0,a.jsx)(t.li,{children:"Both native and smart contracts transactions are supported"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["We've just scratched the surface of what's possible with the Axone CLI! For a more detailed look at available commands, please check our full documentation at ",(0,a.jsx)(t.a,{href:"https://docs.okp4.network/commands/okp4d",children:"Axone Documentation"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Remember, the blockchain space moves quickly, and Axone is no exception. Stay in touch with our updates and feel free to join our active developer community. We're thrilled to have you on board!"})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},32958:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cli-a0313834b306f23f8280dc31999fd93f.webp"},34478:e=>{e.exports={k:"v7.0.1"}}}]);