"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[72525],{83945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,readingTime:()=>c,toc:()=>h});var r=n(85893),o=n(11151);const s={sidebar_position:4},i="Explorer",a={id:"tutorials/explorer-sc",title:"Explorer",description:"OKP4 with Keplr",source:"@site/docs/tutorials/explorer-sc.md",sourceDirName:"tutorials",slug:"/tutorials/explorer-sc",permalink:"/fr/tutorials/explorer-sc",draft:!1,unlisted:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/tutorials/explorer-sc.md",tags:[],version:"current",lastUpdatedAt:1709230317,formattedLastUpdatedAt:"29 f\xe9vr. 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorials",previous:{title:"Interactions with the CLI",permalink:"/fr/tutorials/cli-1"},next:{title:"Manage rules with Prolog",permalink:"/fr/tutorials/prolog-1"}},l={},c=4,h=[{value:"What is the OKP4 Explorer?",id:"what-is-the-okp4-explorer",level:2},{value:"Transaction analysis with the OKP4 Explorer",id:"transaction-analysis-with-the-okp4-explorer",level:2},{value:"Recap&#39;",id:"recap",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"explorer",children:"Explorer"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"OKP4 with Keplr",src:n(18865).Z+"",width:"3168",height:"1192"})}),"\n",(0,r.jsx)(t.p,{children:"The ability to interact seamlessly with a blockchain is a crucial skill. Whether tracking transactions or executing smart contract messages, having the right tools at your disposal can make all the difference."}),"\n",(0,r.jsxs)(t.p,{children:["That's where the ",(0,r.jsx)(t.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet",children:"OKP4 Explorer"})," comes in. Are you ready to unpack its capabilities? Let's embark on a journey of exploration and discovery into the OKP4 blockchain ",(0,r.jsx)(t.strong,{children:"\ud83d\ude80"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"what-is-the-okp4-explorer",children:"What is the OKP4 Explorer?"}),"\n",(0,r.jsxs)(t.p,{children:["An OKP4 blockchain explorer, such as ",(0,r.jsx)(t.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet",children:"the OKP4 Explorer"}),", bridges users and the OKP4 network. It's essentially an intuitive interface that allows users to interact with the blockchain."]}),"\n",(0,r.jsx)(t.p,{children:"Think of an explorer as your personal guide to the OKP4 blockchain. It's more than just a viewing platform, you can:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Send transactions."}),"\n",(0,r.jsx)(t.li,{children:"Deploy and interact with CosmWasm smart contracts."}),"\n",(0,r.jsx)(t.li,{children:"Participate in governance."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Watch out for this ",(0,r.jsx)(t.a,{href:"https://github.com/okp4/awesome#-block-explorers",children:"list of OKP4 explorers"}),". Anyone can build his own OKP4 blockchain explorer. This means you can tailor an explorer to your specific needs: from your blockchain node, querying it for information and presenting the result in a user-friendly format."]}),"\n",(0,r.jsxs)(t.p,{children:["But while building your own explorer is possible, it requires significant time, resources, and technical expertise. Thus you can use ",(0,r.jsx)(t.a,{href:"https://github.com/okp4/ping-explorer",children:"the explorer from the OKP4 team"}),", a robust and user-friendly tool powered by ",(0,r.jsx)(t.a,{href:"https://ping.pub/",children:"ping.pub"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"transaction-analysis-with-the-okp4-explorer",children:"Transaction analysis with the OKP4 Explorer"}),"\n",(0,r.jsx)(t.p,{children:"A transaction on the blockchain is a record of some blockchain state change, like the transfer of tokens from one account to another or the execution of a smart contract."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet",children:"OKP4 Explorer"})," allows you to view and analyze these transactions in detail.\nSeveral transactions are validated in a block. You can check the last validated blocks via the ",(0,r.jsx)(t.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet/block",children:'"Blocks" menu'}),' . Click on the "Transactions tab" to get the transactions in recent blocks.']}),"\n",(0,r.jsx)(t.p,{children:"Before moving on to transactions with smart contracts, let's begin with a basic operation: a transfer of $KNOW tokens."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["You need to ",(0,r.jsx)(t.a,{href:"https://docs.okp4.network/tutorials/keplr-1",children:"set up a wallet with Keplr and own some $KNOW tokens"}),"."]})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Ensure to use the ",(0,r.jsx)(t.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet",children:"drunemeton testnet"})," and not the ",(0,r.jsx)(t.a,{href:"https://explore.okp4.network/OKP4%20devnet",children:"nemeton testnet"})," or the devnet."]}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Link your OKP4 account to the explorer."}),"\n",(0,r.jsx)(t.li,{children:'Click on the wallet button (upper on the right), "Connect wallet", "Keplr", "Connect" and then on "Approve".'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"You'll see your OKP4 wallet address if you click again on the wallet button. Click on it to copy the address."}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Now,you are ready to send $KNOW via the explorer interface :"}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'Click on the "Send" button from the Dashboard.'}),"\n",(0,r.jsxs)(t.li,{children:["Send a few $KNOW tokens to another OKP4 wallet, ",(0,r.jsx)(t.code,{children:"okp41wuxc2mzy0wp27cdcfnde3vz07eurpd7grfmq6n"})," as the recipient for example."]}),"\n",(0,r.jsx)(t.li,{children:'Click on "Send" and "Approve" to confirm the transfer.'}),"\n"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"/img/content/tutorials/explorermaj-1.webp"})}),"\n",(0,r.jsx)(t.p,{children:'Once completed, click on "View transaction".'}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:["Here are what the OKP4 Explorer shows us for ",(0,r.jsxs)(t.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet/tx/C131C3AFC90C92BCAC5044438D68984B842A481869B40CD831CC40AD1E983F2A",children:["the ",(0,r.jsx)(t.code,{children:"Send"})," transaction details"]}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Transaction Hash:"})," ",(0,r.jsx)(t.code,{children:"C131C3AFC90C92BCAC5044438D68984B842A481869B40CD831CC40AD1E983F2A"})," as a unique identifier, like a receipt that proves a transaction has occurred."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Height"}),": ",(0,r.jsx)(t.code,{children:"363073"})," is the block number in which the transaction has been validated."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Gas:"})," Computational effort limit to execute the transaction. Here the spent gas is ",(0,r.jsx)(t.code,{children:"71918"}),". The transaction would have failed if it needed more than ",(0,r.jsx)(t.code,{children:"200000"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Fees:"})," ",(0,r.jsx)(t.code,{children:"0.005 KNOW"})," paid to compensate for the computational effort. The more complex a transaction, the higher the gas and, consequently, the fee. Fees also help prevent spam transactions on the network."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"@type:"})," Each message type corresponds to a specific action on the blockchain. For example, a message with ",(0,r.jsx)(t.code,{children:"@type"})," set to ",(0,r.jsx)(t.code,{children:"/cosmos.bank.v1beta1.MsgSend"})," represents a token transfer operation, while a message with ",(0,r.jsx)(t.code,{children:"@type"})," set to ",(0,r.jsx)(t.code,{children:"/cosmos.staking.v1beta1.MsgDelegate"})," represents a delegation operation in the staking module."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"From and To Addresses:"})," Unique identifiers for accounts on the blockchain. Tokens are transferred from the sender's address ",(0,r.jsx)(t.code,{children:"okp41yxrseqc9weu6cm0gm85yu64x9xdf3k5z8nwknf"})," to the recipient's address ",(0,r.jsx)(t.code,{children:"okp41wuxc2mzy0wp27cdcfnde3vz07eurpd7grfmq6n"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Amount"}),": ",(0,r.jsx)(t.code,{children:"0.05 KNOW"})," sent"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"JSON:"})," Two main components (",(0,r.jsx)(t.code,{children:"tx"})," and ",(0,r.jsx)(t.code,{children:"tx_response"}),") which provide insights into the transaction, its execution status and related metadata."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:'You can also retrieve a transaction you executed by clicking the "Search" button upper on the right, providing your OKP4 address, and clicking "Confirm". Click on the hash in the "Transactions" section to get the details.'}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"/img/content/tutorials/explorer-2.webp"})}),"\n",(0,r.jsx)(t.p,{children:"If you have the transaction hash, you can also directly get transaction details by providing the hash in the Search modal."}),"\n",(0,r.jsx)(t.h2,{id:"recap",children:"Recap'"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"You can check any blockchain transaction details with an explorer."}),"\n",(0,r.jsx)(t.li,{children:"Transfer, delegation and governance operations are also possible with this type of user interface."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Explorers are powerful tools that allow you to interact with the OKP4 blockchain in a user-friendly way. So why wait? Start exploring the OKP4 network today!"})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},18865:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/explorer-0-9db9e1ac77c3cafa8e8507aa273d2232.webp"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);