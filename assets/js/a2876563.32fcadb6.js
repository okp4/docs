"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[63525],{71984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(85893),s=t(11151);const o={},a=void 0,r={id:"okp4d_genesis_gentx",title:"okp4d_genesis_gentx",description:"okp4d genesis gentx",source:"@site/commands/okp4d_genesis_gentx.md",sourceDirName:".",slug:"/okp4d_genesis_gentx",permalink:"/commands/next/okp4d_genesis_gentx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_genesis_collect-gentxs",permalink:"/commands/next/okp4d_genesis_collect-gentxs"},next:{title:"okp4d_genesis_migrate",permalink:"/commands/next/okp4d_genesis_migrate"}},d={},c=[{value:"okp4d genesis gentx",id:"okp4d-genesis-gentx",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"okp4d-genesis-gentx",children:"okp4d genesis gentx"}),"\n",(0,i.jsx)(n.p,{children:"Generate a genesis tx carrying a self delegation"}),"\n",(0,i.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(n.p,{children:"Generate a genesis transaction that creates a validator with a self-delegation,\nthat is signed by the key in the Keyring referenced by a given name. A node ID and consensus\npubkey may optionally be provided. If they are omitted, they will be retrieved from the priv_validator.json\nfile. The following default parameters are included:"}),"\n",(0,i.jsx)(n.p,{children:"delegation amount:           100000000stake\ncommission rate:             0.1\ncommission max rate:         0.2\ncommission max change rate:  0.01\nminimum self delegation:     1"}),"\n",(0,i.jsxs)(n.p,{children:["Example:\n$ okp4d gentx my-key-name 1000000stake --home=/path/to/home/dir --keyring-backend=os --chain-id=test-chain-1 ",(0,i.jsx)(n.br,{}),"\n",'--moniker="myvalidator" ',(0,i.jsx)(n.br,{}),"\n","--commission-max-change-rate=0.01 ",(0,i.jsx)(n.br,{}),"\n","--commission-max-rate=1.0 ",(0,i.jsx)(n.br,{}),"\n","--commission-rate=0.07 ",(0,i.jsx)(n.br,{}),"\n",'--details="..." ',(0,i.jsx)(n.br,{}),"\n",'--security-contact="..." ',(0,i.jsx)(n.br,{}),"\n",'--website="..."']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"okp4d genesis gentx [key_name] [amount] [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  -a, --account-number uint                 The account number of the signing account (offline mode only)\n      --amount string                       Amount of coins to bond\n      --aux                                 Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string               Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string                     The network chain ID (default "okp4d")\n      --commission-max-change-rate string   The maximum commission change rate percentage (per day)\n      --commission-max-rate string          The maximum commission rate percentage\n      --commission-rate string              The initial commission rate percentage\n      --details string                      The validator\'s (optional) details\n      --dry-run                             ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string                  Fee granter grants fees for the transaction\n      --fee-payer string                    Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                         Fees to pay along with transaction; eg: 10uatom\n      --from string                         Name or address of private key with which to sign\n      --gas string                          gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float                adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string                   Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                       Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                                help for gentx\n      --home string                         The application home directory (default "/home/john/.okp4d")\n      --identity string                     The (optional) identity signature (ex. UPort or Keybase)\n      --ip string                           The node\'s public P2P IP (default "127.0.0.1")\n      --keyring-backend string              Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string                  The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                              Use a connected Ledger device\n      --min-self-delegation string          The minimum self delegation required on the validator\n      --moniker string                      The validator\'s (optional) moniker\n      --node string                         <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --node-id string                      The node\'s NodeID\n      --note string                         Note to add a description to the transaction (previously --memo)\n      --offline                             Offline mode (does not allow any online functionality)\n      --output-document string              Write the genesis transaction JSON document to the given file instead of the default location\n      --p2p-port uint                       The node\'s public P2P port (default 26656)\n      --pubkey string                       The validator\'s Protobuf JSON encoded public key\n      --security-contact string             The validator\'s (optional) security contact email\n  -s, --sequence uint                       The sequence number of the signing account (offline mode only)\n      --sign-mode string                    Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint                 Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                          Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --website string                      The validator\'s (optional) website\n  -y, --yes                                 Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/commands/next/okp4d_genesis",children:"okp4d genesis"}),"\t - Application's genesis-related subcommands"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(67294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);