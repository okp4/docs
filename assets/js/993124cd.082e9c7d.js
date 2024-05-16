"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[30778],{43636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(85893),s=t(11151);const a={},o=void 0,r={id:"okp4d_tx_sign",title:"okp4d_tx_sign",description:"okp4d tx sign",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_tx_sign.md",sourceDirName:".",slug:"/okp4d_tx_sign",permalink:"/commands/v5.0.0/okp4d_tx_sign",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_sign-batch",permalink:"/commands/v5.0.0/okp4d_tx_sign-batch"},next:{title:"okp4d_tx_slashing",permalink:"/commands/v5.0.0/okp4d_tx_slashing"}},l={},d=[{value:"okp4d tx sign",id:"okp4d-tx-sign",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"okp4d-tx-sign",children:"okp4d tx sign"}),"\n",(0,i.jsx)(n.p,{children:"Sign a transaction generated offline"}),"\n",(0,i.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(n.p,{children:"Sign a transaction created with the --generate-only flag.\nIt will read a transaction from [file], sign it, and print its JSON encoding."}),"\n",(0,i.jsx)(n.p,{children:"If the --signature-only flag is set, it will output the signature parts only."}),"\n",(0,i.jsx)(n.p,{children:"The --offline flag makes sure that the client will not reach out to full node.\nAs a result, the account and sequence number queries will not be performed and\nit is required to set such parameters manually. Note, invalid values will cause\nthe transaction to fail."}),"\n",(0,i.jsx)(n.p,{children:"The --multisig=<multisig_key> flag generates a signature on behalf of a multisig account\nkey. It implies --signature-only. Full multisig signed transactions may eventually\nbe generated via the 'multisign' command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"okp4d tx sign [file] [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --amino                    Generate Amino encoded JSON suitable for submiting to the txs REST endpoint\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for sign\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --multisig string          Address or key name of the multisig account on behalf of which the transaction shall be signed\n      --node string              <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n      --output-document string   The document will be written to the given file instead of STDOUT\n      --overwrite                Overwrite existing signatures with a new one. If disabled, new signature will be appended\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --signature-only           Print only the signatures\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/commands/v5.0.0/okp4d_tx",children:"okp4d tx"}),"\t - Transactions subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);