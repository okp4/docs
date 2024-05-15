"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[84276],{7464:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=n(85893),a=n(11151);const s={},i=void 0,r={id:"okp4d_tx_wasm_submit-proposal_update-instantiate-config",title:"okp4d_tx_wasm_submit-proposal_update-instantiate-config",description:"okp4d tx wasm submit-proposal update-instantiate-config",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_tx_wasm_submit-proposal_update-instantiate-config.md",sourceDirName:".",slug:"/okp4d_tx_wasm_submit-proposal_update-instantiate-config",permalink:"/fr/commands/v6.0.0/okp4d_tx_wasm_submit-proposal_update-instantiate-config",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_wasm_submit-proposal_unpin-codes",permalink:"/fr/commands/v6.0.0/okp4d_tx_wasm_submit-proposal_unpin-codes"},next:{title:"okp4d_tx_wasm_submit-proposal_wasm-store",permalink:"/fr/commands/v6.0.0/okp4d_tx_wasm_submit-proposal_wasm-store"}},d={},p=[{value:"okp4d tx wasm submit-proposal update-instantiate-config",id:"okp4d-tx-wasm-submit-proposal-update-instantiate-config",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"okp4d-tx-wasm-submit-proposal-update-instantiate-config",children:"okp4d tx wasm submit-proposal update-instantiate-config"}),"\n",(0,o.jsx)(e.p,{children:"Submit an update instantiate config proposal."}),"\n",(0,o.jsx)(e.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(e.p,{children:"Submit an update instantiate config  proposal for multiple code ids."}),"\n",(0,o.jsxs)(e.p,{children:["Example:\n$ okp4d tx gov submit-proposal update-instantiate-config 1",":nobody"," 2",":everybody"," 3",":okp41l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm",",okp41vx8knpllrj7n963p9ttd80w47kpacrhuts497x"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"okp4d tx wasm submit-proposal update-instantiate-config [code-id:permission] --title [text] --summary [text] --authority [address] [flags]\n"})}),"\n",(0,o.jsx)(e.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --authority string         The address of the governance account. Default is the sdk gov module account (default "okp410d07y265gmmuvt4z0w9aw880jnsr700jh7kd2g")\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --deposit string           Deposit of proposal\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --expedite                 Expedite proposals have shorter voting period but require higher voting threshold\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for update-instantiate-config\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --summary string           Summary of proposal\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --title string             Title of proposal\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,o.jsx)(e.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/fr/commands/next/okp4d_tx_wasm_submit-proposal",children:"okp4d tx wasm submit-proposal"}),"\t - Submit a wasm proposal."]}),"\n"]})]})}function c(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>i});var o=n(67294);const a={},s=o.createContext(a);function i(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);