"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[69410],{75570:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(85893),s=n(11151);const i={},o=void 0,r={id:"okp4d_tx_wasm_instantiate",title:"okp4d_tx_wasm_instantiate",description:"okp4d tx wasm instantiate",source:"@site/commands_versioned_docs/version-v7.1.0/okp4d_tx_wasm_instantiate.md",sourceDirName:".",slug:"/okp4d_tx_wasm_instantiate",permalink:"/fr/commands/okp4d_tx_wasm_instantiate",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_wasm_grant_store-code",permalink:"/fr/commands/okp4d_tx_wasm_grant_store-code"},next:{title:"okp4d_tx_wasm_instantiate2",permalink:"/fr/commands/okp4d_tx_wasm_instantiate2"}},d={},c=[{value:"okp4d tx wasm instantiate",id:"okp4d-tx-wasm-instantiate",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(t){const e={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"okp4d-tx-wasm-instantiate",children:"okp4d tx wasm instantiate"}),"\n",(0,a.jsx)(e.p,{children:"Instantiate a wasm contract"}),"\n",(0,a.jsx)(e.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsxs)(e.p,{children:['Creates a new instance of an uploaded wasm code with the given \'constructor\' message.\nEach contract instance has a unique address assigned.\nExample:\n$ okp4d tx wasm instantiate 1 \'{"foo":"bar"}\' --admin="$(okp4d keys show mykey -a)" ',(0,a.jsx)(e.br,{}),"\n",'--from mykey --amount="100ustake" --label "local0.1.0"']}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"okp4d tx wasm instantiate [code_id_int64] [json_encoded_init_args] --label [text] --admin [address,optional] --amount [coins,optional]  [flags]\n"})}),"\n",(0,a.jsx)(e.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --admin string             Address or key name of an admin\n      --amount string            Coins to send to the contract during instantiation\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for instantiate\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --label string             A human-readable name for this contract in lists\n      --ledger                   Use a connected Ledger device\n      --no-admin                 You must set this explicitly if you don\'t want an admin\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,a.jsx)(e.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"/fr/commands/next/okp4d_tx_wasm",children:"okp4d tx wasm"}),"\t - Wasm transaction subcommands"]}),"\n"]})]})}function m(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);