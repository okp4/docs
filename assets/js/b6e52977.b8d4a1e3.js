"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[12639],{99428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(85893),a=t(11151);const s={},i=void 0,r={id:"okp4d_tx_bank_send",title:"okp4d_tx_bank_send",description:"okp4d tx bank send",source:"@site/commands_versioned_docs/version-v7.1.0/okp4d_tx_bank_send.md",sourceDirName:".",slug:"/okp4d_tx_bank_send",permalink:"/commands/okp4d_tx_bank_send",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_bank_multi-send",permalink:"/commands/okp4d_tx_bank_multi-send"},next:{title:"okp4d_tx_broadcast",permalink:"/commands/okp4d_tx_broadcast"}},d={},c=[{value:"okp4d tx bank send",id:"okp4d-tx-bank-send",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"okp4d-tx-bank-send",children:"okp4d tx bank send"}),"\n",(0,o.jsx)(n.p,{children:"Send funds from one account to another."}),"\n",(0,o.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(n.p,{children:"Send funds from one account to another.\nNote, the '--from' flag is ignored as it is implied from [from_key_or_address].\nWhen using '--dry-run' a key name cannot be used, only a bech32 address."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"okp4d tx bank send [from_key_or_address] [to_address] [amount] [flags]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for send\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,o.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/commands/okp4d_tx_bank",children:"okp4d tx bank"}),"\t - Bank transaction subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(67294);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);