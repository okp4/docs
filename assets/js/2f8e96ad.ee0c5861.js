"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[89626],{52844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(85893),o=n(11151);const i={},s=void 0,r={id:"okp4d_tx_staking_redelegate",title:"okp4d_tx_staking_redelegate",description:"okp4d tx staking redelegate",source:"@site/commands_versioned_docs/version-v7.0.0/okp4d_tx_staking_redelegate.md",sourceDirName:".",slug:"/okp4d_tx_staking_redelegate",permalink:"/commands/v7.0.0/okp4d_tx_staking_redelegate",draft:!1,unlisted:!1,tags:[],version:"v7.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_staking_edit-validator",permalink:"/commands/v7.0.0/okp4d_tx_staking_edit-validator"},next:{title:"okp4d_tx_staking_unbond",permalink:"/commands/v7.0.0/okp4d_tx_staking_unbond"}},d={},l=[{value:"okp4d tx staking redelegate",id:"okp4d-tx-staking-redelegate",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"okp4d-tx-staking-redelegate",children:"okp4d tx staking redelegate"}),"\n",(0,a.jsx)(t.p,{children:"Redelegate illiquid tokens from one validator to another"}),"\n",(0,a.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(t.p,{children:"Redelegate an amount of illiquid staking tokens from one validator to another."}),"\n",(0,a.jsx)(t.p,{children:"Example:\n$ okp4d tx staking redelegate cosmosvalopers1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj cosmosvalopers1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm 100stake --from mykey"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"okp4d tx staking redelegate [src-validator-addr] [dst-validator-addr] [amount] [flags]\n"})}),"\n",(0,a.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for redelegate\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,a.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/commands/v7.0.0/okp4d_tx_staking",children:"okp4d tx staking"}),"\t - Staking transaction subcommands"]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);