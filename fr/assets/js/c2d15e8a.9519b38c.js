"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[59820],{27560:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var o=a(85893),s=a(11151);const n={},r=void 0,i={id:"axoned_tx_wasm_submit-proposal_remove-code-upload-params-addresses",title:"axoned_tx_wasm_submit-proposal_remove-code-upload-params-addresses",description:"axoned tx wasm submit-proposal remove-code-upload-params-addresses",source:"@site/commands/axoned_tx_wasm_submit-proposal_remove-code-upload-params-addresses.md",sourceDirName:".",slug:"/axoned_tx_wasm_submit-proposal_remove-code-upload-params-addresses",permalink:"/fr/commands/next/axoned_tx_wasm_submit-proposal_remove-code-upload-params-addresses",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_tx_wasm_submit-proposal_pin-codes",permalink:"/fr/commands/next/axoned_tx_wasm_submit-proposal_pin-codes"},next:{title:"axoned_tx_wasm_submit-proposal_set-contract-admin",permalink:"/fr/commands/next/axoned_tx_wasm_submit-proposal_set-contract-admin"}},d={},l=[{value:"axoned tx wasm submit-proposal remove-code-upload-params-addresses",id:"axoned-tx-wasm-submit-proposal-remove-code-upload-params-addresses",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"axoned-tx-wasm-submit-proposal-remove-code-upload-params-addresses",children:"axoned tx wasm submit-proposal remove-code-upload-params-addresses"}),"\n",(0,o.jsx)(t.p,{children:"Submit a remove code upload params addresses proposal to remove addresses from code upload config params"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"axoned tx wasm submit-proposal remove-code-upload-params-addresses [addresses] --title [text] --summary [text] --authority [address] [flags]\n"})}),"\n",(0,o.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --authority string         The address of the governance account. Default is the sdk gov module account (default "axone10d07y265gmmuvt4z0w9aw880jnsr700jeyljzw")\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --deposit string           Deposit of proposal\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --expedite                 Expedite proposals have shorter voting period but require higher voting threshold\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for remove-code-upload-params-addresses\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --summary string           Summary of proposal\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --title string             Title of proposal\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,o.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/fr/commands/next/axoned_tx_wasm_submit-proposal",children:"axoned tx wasm submit-proposal"}),"\t - Submit a wasm proposal."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>r});var o=a(67294);const s={},n=o.createContext(s);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);