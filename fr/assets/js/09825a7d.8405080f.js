"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[6825],{27953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=t(85893),o=t(11151);const i={},s=void 0,r={id:"axoned_tx_staking_cancel-unbond",title:"axoned_tx_staking_cancel-unbond",description:"axoned tx staking cancel-unbond",source:"@site/commands/axoned_tx_staking_cancel-unbond.md",sourceDirName:".",slug:"/axoned_tx_staking_cancel-unbond",permalink:"/fr/commands/next/axoned_tx_staking_cancel-unbond",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_tx_staking",permalink:"/fr/commands/next/axoned_tx_staking"},next:{title:"axoned_tx_staking_create-validator",permalink:"/fr/commands/next/axoned_tx_staking_create-validator"}},d={},c=[{value:"axoned tx staking cancel-unbond",id:"axoned-tx-staking-cancel-unbond",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"axoned-tx-staking-cancel-unbond",children:"axoned tx staking cancel-unbond"}),"\n",(0,a.jsx)(n.p,{children:"Cancel unbonding delegation and delegate back to the validator"}),"\n",(0,a.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(n.p,{children:"Cancel Unbonding Delegation and delegate back to the validator."}),"\n",(0,a.jsx)(n.p,{children:"Example:\n$ axoned tx staking cancel-unbond axonevaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj 100stake 2 --from mykey"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"axoned tx staking cancel-unbond [validator-addr] [amount] [creation-height] [flags]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"$ axoned tx staking cancel-unbond axonevaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj 100stake 2 --from mykey\n"})}),"\n",(0,a.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for cancel-unbond\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,a.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/fr/commands/next/axoned_tx_staking",children:"axoned tx staking"}),"\t - Staking transaction subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);