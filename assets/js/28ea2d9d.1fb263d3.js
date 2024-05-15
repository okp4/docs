"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[34239],{31810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(85893),a=n(11151);const o={},r=void 0,s={id:"okp4d_tx_distribution_withdraw-rewards",title:"okp4d_tx_distribution_withdraw-rewards",description:"okp4d tx distribution withdraw-rewards",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_tx_distribution_withdraw-rewards.md",sourceDirName:".",slug:"/okp4d_tx_distribution_withdraw-rewards",permalink:"/commands/v6.0.0/okp4d_tx_distribution_withdraw-rewards",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_distribution_withdraw-all-rewards",permalink:"/commands/v6.0.0/okp4d_tx_distribution_withdraw-all-rewards"},next:{title:"okp4d_tx_encode",permalink:"/commands/v6.0.0/okp4d_tx_encode"}},d={},l=[{value:"okp4d tx distribution withdraw-rewards",id:"okp4d-tx-distribution-withdraw-rewards",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"okp4d-tx-distribution-withdraw-rewards",children:"okp4d tx distribution withdraw-rewards"}),"\n",(0,i.jsx)(t.p,{children:"Withdraw rewards from a given delegation address, and optionally withdraw validator commission if the delegation address given is a validator operator"}),"\n",(0,i.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Withdraw rewards from a given delegation address,\nand optionally withdraw validator commission if the delegation address given is a validator operator."}),"\n",(0,i.jsx)(t.p,{children:"Example:\n$ okp4d tx distribution withdraw-rewards okp4valoper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj --from mykey\n$ okp4d tx distribution withdraw-rewards okp4valoper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj --from mykey --commission"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"okp4d tx distribution withdraw-rewards [validator-addr] [flags]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --commission               Withdraw the validator\'s commission in addition to the rewards\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for withdraw-rewards\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,i.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/commands/next/okp4d_tx_distribution",children:"okp4d tx distribution"}),"\t - Distribution transactions subcommands"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(67294);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);