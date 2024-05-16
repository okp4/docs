"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[43705],{8816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(85893),i=t(11151);const a={},o=void 0,r={id:"okp4d_tx_simulate",title:"okp4d_tx_simulate",description:"okp4d tx simulate",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_tx_simulate.md",sourceDirName:".",slug:"/okp4d_tx_simulate",permalink:"/fr/commands/v6.0.0/okp4d_tx_simulate",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_sign",permalink:"/fr/commands/v6.0.0/okp4d_tx_sign"},next:{title:"okp4d_tx_slashing",permalink:"/fr/commands/v6.0.0/okp4d_tx_slashing"}},d={},l=[{value:"okp4d tx simulate",id:"okp4d-tx-simulate",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"okp4d-tx-simulate",children:"okp4d tx simulate"}),"\n",(0,s.jsx)(n.p,{children:"Simulate the gas usage of a transaction"}),"\n",(0,s.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.p,{children:"Simulate whether a transaction will be successful:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"if successful, the simulation result is printed, which includes the gas\nconsumption, message response data, and events emitted;"}),"\n",(0,s.jsx)(n.li,{children:"if unsuccessful, the error message is printed."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'The user must provide the path to a JSON-encoded unsigned transaction, typically\ngenerated by any transaction command with the --generate-only flag. It should\nlook like below. Note that the "signer_infos" and "signatures" fields are left\nempty; they will be auto-populated by dummy data for simulation purpose.'}),"\n",(0,s.jsx)(n.p,{children:'{\n"body": {\n"messages": [\n{\n"@type": "/cosmos.bank.v1beta1.MsgSend",\n"from_address": "cosmos1...",\n"to_address": "cosmos1...",\n"amount": [\n{\n"denom": "utoken",\n"amount": "12345"\n}\n]\n}\n],\n"memo": "",\n"timeout_height": "0",\n"extension_options": [],\n"non_critical_extension_options": []\n},\n"auth_info": {\n"signer_infos": [],\n"fee": {\n"amount": [],\n"gas_limit": "200000",\n"payer": "",\n"granter": ""\n},\n"tip": null\n},\n"signatures": []\n}'}),"\n",(0,s.jsx)(n.p,{children:"The --from flag is mandatory, as the signer account's correct sequence number is\nnecessary for simulation."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"okp4d tx simulate /path/to/unsigned-tx.json --from keyname [flags]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for simulate\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,s.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/fr/commands/v6.0.0/okp4d_tx",children:"okp4d tx"}),"\t - Transactions subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);