"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[11929],{20412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(85893),s=n(11151);const i={},o=void 0,r={id:"okp4d_tx_wasm_instantiate2",title:"okp4d_tx_wasm_instantiate2",description:"okp4d tx wasm instantiate2",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_tx_wasm_instantiate2.md",sourceDirName:".",slug:"/okp4d_tx_wasm_instantiate2",permalink:"/fr/commands/okp4d_tx_wasm_instantiate2",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_wasm_instantiate",permalink:"/fr/commands/okp4d_tx_wasm_instantiate"},next:{title:"okp4d_tx_wasm_migrate",permalink:"/fr/commands/okp4d_tx_wasm_migrate"}},d={},c=[{value:"okp4d tx wasm instantiate2",id:"okp4d-tx-wasm-instantiate2",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"okp4d-tx-wasm-instantiate2",children:"okp4d tx wasm instantiate2"}),"\n",(0,a.jsx)(t.p,{children:"Instantiate a wasm contract with predictable address"}),"\n",(0,a.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(t.p,{children:"Creates a new instance of an uploaded wasm code with the given 'constructor' message.\nEach contract instance has a unique address assigned. They are assigned automatically but in order to have predictable addresses\nfor special use cases, the given 'salt' argument and '--fix-msg' parameters can be used to generate a custom address."}),"\n",(0,a.jsxs)(t.p,{children:['Predictable address example (also see \'okp4d query wasm build-address -h\'):\n$ okp4d tx wasm instantiate2 1 \'{"foo":"bar"}\' $(echo -n "testing" | xxd -ps) --admin="$(okp4d keys show mykey -a)" ',(0,a.jsx)(t.br,{}),"\n",'--from mykey --amount="100ustake" --label "local0.1.0" ',(0,a.jsx)(t.br,{}),"\n","--fix-msg"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"okp4d tx wasm instantiate2 [code_id_int64] [json_encoded_init_args] [salt] --label [text] --admin [address,optional] --amount [coins,optional] --fix-msg [bool,optional] [flags]\n"})}),"\n",(0,a.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --admin string             Address or key name of an admin\n      --amount string            Coins to send to the contract during instantiation\n      --ascii                    ascii encoded salt\n      --aux                      Generate aux signer data instead of sending a tx\n      --b64                      base64 encoded salt\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --fix-msg                  An optional flag to include the json_encoded_init_args for the predictable address generation mode\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for instantiate2\n      --hex                      hex encoded salt\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --label string             A human-readable name for this contract in lists\n      --ledger                   Use a connected Ledger device\n      --no-admin                 You must set this explicitly if you don\'t want an admin\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,a.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/fr/commands/next/okp4d_tx_wasm",children:"okp4d tx wasm"}),"\t - Wasm transaction subcommands"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);