"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[98694],{1278:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=n(85893),a=n(11151);const s={},i=void 0,r={id:"okp4d_tx_wasm_submit-proposal_store-instantiate",title:"okp4d_tx_wasm_submit-proposal_store-instantiate",description:"okp4d tx wasm submit-proposal store-instantiate",source:"@site/commands_versioned_docs/version-v7.0.0/okp4d_tx_wasm_submit-proposal_store-instantiate.md",sourceDirName:".",slug:"/okp4d_tx_wasm_submit-proposal_store-instantiate",permalink:"/commands/okp4d_tx_wasm_submit-proposal_store-instantiate",draft:!1,unlisted:!1,tags:[],version:"v7.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_wasm_submit-proposal_set-contract-admin",permalink:"/commands/okp4d_tx_wasm_submit-proposal_set-contract-admin"},next:{title:"okp4d_tx_wasm_submit-proposal_store-migrate",permalink:"/commands/okp4d_tx_wasm_submit-proposal_store-migrate"}},d={},c=[{value:"okp4d tx wasm submit-proposal store-instantiate",id:"okp4d-tx-wasm-submit-proposal-store-instantiate",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"okp4d-tx-wasm-submit-proposal-store-instantiate",children:"okp4d tx wasm submit-proposal store-instantiate"}),"\n",(0,o.jsx)(e.p,{children:"Submit a store and instantiate wasm contract proposal"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"okp4d tx wasm submit-proposal store-instantiate [wasm file] [json_encoded_init_args] --authority [address] --label [text] --title [text] --summary [text]--unpin-code [unpin_code,optional] --source [source,optional] --builder [builder,optional] --code-hash [code_hash,optional] --admin [address,optional] --amount [coins,optional] [flags]\n"})}),"\n",(0,o.jsx)(e.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'  -a, --account-number uint                   The account number of the signing account (offline mode only)\n      --admin string                          Address or key name of an admin\n      --amount string                         Coins to send to the contract during instantiation\n      --authority string                      The address of the governance account. Default is the sdk gov module account (default "okp410d07y265gmmuvt4z0w9aw880jnsr700jh7kd2g")\n      --aux                                   Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string                 Transaction broadcasting mode (sync|async) (default "sync")\n      --builder string                        Builder is a valid docker image name with tag, such as "cosmwasm/workspace-optimizer:0.12.9"\n      --chain-id string                       The network chain ID\n      --code-hash bytesHex                    CodeHash is the sha256 hash of the wasm code\n      --code-source-url string                Code Source URL is a valid absolute HTTPS URI to the contract\'s source code,\n      --deposit string                        Deposit of proposal\n      --dry-run                               ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --expedite                              Expedite proposals have shorter voting period but require higher voting threshold\n      --fee-granter string                    Fee granter grants fees for the transaction\n      --fee-payer string                      Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                           Fees to pay along with transaction; eg: 10uatom\n      --from string                           Name or address of private key with which to sign\n      --gas string                            gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float                  adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string                     Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                         Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                                  help for store-instantiate\n      --instantiate-anyof-addresses strings   Any of the addresses can instantiate a contract from the code, optional\n      --instantiate-everybody string          Everybody can instantiate a contract from the code, optional\n      --instantiate-nobody string             Nobody except the governance process can instantiate a contract from the code, optional\n      --instantiate-only-address string       Removed: use instantiate-anyof-addresses instead\n      --keyring-backend string                Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string                    The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --label string                          A human-readable name for this contract in lists\n      --ledger                                Use a connected Ledger device\n      --no-admin                              You must set this explicitly if you don\'t want an admin\n      --node string                           <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string                           Note to add a description to the transaction (previously --memo)\n      --offline                               Offline mode (does not allow any online functionality)\n  -o, --output string                         Output format (text|json) (default "json")\n  -s, --sequence uint                         The sequence number of the signing account (offline mode only)\n      --sign-mode string                      Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --summary string                        Summary of proposal\n      --timeout-height uint                   Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                            Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --title string                          Title of proposal\n      --unpin-code                            Unpin code on upload, optional\n  -y, --yes                                   Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,o.jsx)(e.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/commands/next/okp4d_tx_wasm_submit-proposal",children:"okp4d tx wasm submit-proposal"}),"\t - Submit a wasm proposal."]}),"\n"]})]})}function p(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>i});var o=n(67294);const a={},s=o.createContext(a);function i(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);