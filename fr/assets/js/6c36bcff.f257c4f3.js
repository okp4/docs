"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[65296],{2706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(85893),o=n(11151);const s={},r=void 0,i={id:"axoned_tx_wasm_grant_contract",title:"axoned_tx_wasm_grant_contract",description:"axoned tx wasm grant contract",source:"@site/commands/axoned_tx_wasm_grant_contract.md",sourceDirName:".",slug:"/axoned_tx_wasm_grant_contract",permalink:"/fr/commands/next/axoned_tx_wasm_grant_contract",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_tx_wasm_grant",permalink:"/fr/commands/next/axoned_tx_wasm_grant"},next:{title:"axoned_tx_wasm_grant_store-code",permalink:"/fr/commands/next/axoned_tx_wasm_grant_store-code"}},c={},l=[{value:"axoned tx wasm grant contract",id:"axoned-tx-wasm-grant-contract",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"axoned-tx-wasm-grant-contract",children:"axoned tx wasm grant contract"}),"\n",(0,a.jsx)(t.p,{children:"Grant authorization to interact with a contract on behalf of you"}),"\n",(0,a.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(t.p,{children:"Grant authorization to an address.\nExamples:\n$ axoned tx grant contract <grantee_addr> execution <contract_addr> --allow-all-messages --max-calls 1 --no-token-transfer --expiration 1667979596"}),"\n",(0,a.jsx)(t.p,{children:"$ axoned tx grant contract <grantee_addr> execution <contract_addr> --allow-all-messages --max-funds 100000uwasm --expiration 1667979596"}),"\n",(0,a.jsx)(t.p,{children:"$ axoned tx grant contract <grantee_addr> execution <contract_addr> --allow-all-messages --max-calls 5 --max-funds 100000uwasm --expiration 1667979596"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'axoned tx wasm grant contract [grantee] [message_type="execution"|"migration"] [contract_addr_bech32] --allow-raw-msgs [msg1,msg2,...] --allow-msg-keys [key1,key2,...] --allow-all-messages [flags]\n'})}),"\n",(0,a.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --allow-all-messages       Allow all messages\n      --allow-msg-keys strings   Allowed msg keys\n      --allow-raw-msgs strings   Allowed raw msgs\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --expiration int           The Unix timestamp.\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for contract\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --max-calls uint           Maximal number of calls to the contract\n      --max-funds string         Maximal amount of tokens transferable to the contract.\n      --no-token-transfer        Don\'t allow token transfer\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,a.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/fr/commands/next/axoned_tx_wasm_grant",children:"axoned tx wasm grant"}),"\t - Grant a authz permission"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(67294);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);