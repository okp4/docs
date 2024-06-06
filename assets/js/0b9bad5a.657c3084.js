"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[23305],{61493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(85893),a=t(11151);const i={},r=void 0,s={id:"axoned_tx_group_create-group-policy",title:"axoned_tx_group_create-group-policy",description:"axoned tx group create-group-policy",source:"@site/commands/axoned_tx_group_create-group-policy.md",sourceDirName:".",slug:"/axoned_tx_group_create-group-policy",permalink:"/commands/next/axoned_tx_group_create-group-policy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_tx_group",permalink:"/commands/next/axoned_tx_group"},next:{title:"axoned_tx_group_create-group-with-policy",permalink:"/commands/next/axoned_tx_group_create-group-with-policy"}},c={},d=[{value:"axoned tx group create-group-policy",id:"axoned-tx-group-create-group-policy",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"axoned-tx-group-create-group-policy",children:"axoned tx group create-group-policy"}),"\n",(0,o.jsx)(n.p,{children:"Create a group policy which is an account associated with a group and a decision policy. Note, the '--from' flag is ignored as it is implied from [admin]."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"axoned tx group create-group-policy [admin] [group-id] [metadata] [decision-policy-json-file] [flags]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\naxoned tx group create-group-policy [admin] [group-id] [metadata] policy.json\n\nwhere policy.json contains:\n\n{\n    "@type": "/cosmos.group.v1.ThresholdDecisionPolicy",\n    "threshold": "1",\n    "windows": {\n        "voting_period": "120h",\n        "min_execution_period": "0s"\n    }\n}\n\nHere, we can use percentage decision policy when needed, where 0 < percentage <= 1:\n\n{\n    "@type": "/cosmos.group.v1.PercentageDecisionPolicy",\n    "percentage": "0.5",\n    "windows": {\n        "voting_period": "120h",\n        "min_execution_period": "0s"\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for create-group-policy\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,o.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/commands/next/axoned_tx_group",children:"axoned tx group"}),"\t - Group transaction subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var o=t(67294);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);