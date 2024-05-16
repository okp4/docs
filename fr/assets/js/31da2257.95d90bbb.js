"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[1784],{22981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(85893),i=n(11151);const a={},s=void 0,r={id:"okp4d_tx_encode",title:"okp4d_tx_encode",description:"okp4d tx encode",source:"@site/commands_versioned_docs/version-v7.1.0/okp4d_tx_encode.md",sourceDirName:".",slug:"/okp4d_tx_encode",permalink:"/fr/commands/okp4d_tx_encode",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_distribution_withdraw-rewards",permalink:"/fr/commands/okp4d_tx_distribution_withdraw-rewards"},next:{title:"okp4d_tx_evidence",permalink:"/fr/commands/okp4d_tx_evidence"}},d={},c=[{value:"okp4d tx encode",id:"okp4d-tx-encode",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"okp4d-tx-encode",children:"okp4d tx encode"}),"\n",(0,o.jsx)(t.p,{children:"Encode transactions generated offline"}),"\n",(0,o.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(t.p,{children:"Encode transactions created with the --generate-only flag or signed with the sign command.\nRead a transaction from <file>, serialize it to the Protobuf wire protocol, and output it as base64.\nIf you supply a dash (-) argument in place of an input filename, the command reads from standard input."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"okp4d tx encode [file] [flags]\n"})}),"\n",(0,o.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for encode\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,o.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/fr/commands/okp4d_tx",children:"okp4d tx"}),"\t - Transactions subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(67294);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);