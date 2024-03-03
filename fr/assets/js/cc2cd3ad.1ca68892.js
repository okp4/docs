"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[31416],{90451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(85893),s=n(11151);const a={},o=void 0,r={id:"okp4d_tx_multisign-batch",title:"okp4d_tx_multisign-batch",description:"okp4d tx multisign-batch",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_tx_multisign-batch.md",sourceDirName:".",slug:"/okp4d_tx_multisign-batch",permalink:"/fr/commands/v6.0.0/okp4d_tx_multisign-batch",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_multi-sign",permalink:"/fr/commands/v6.0.0/okp4d_tx_multi-sign"},next:{title:"okp4d_tx_sign-batch",permalink:"/fr/commands/v6.0.0/okp4d_tx_sign-batch"}},c={},d=[{value:"okp4d tx multisign-batch",id:"okp4d-tx-multisign-batch",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"okp4d-tx-multisign-batch",children:"okp4d tx multisign-batch"}),"\n",(0,i.jsx)(t.p,{children:"Assemble multisig transactions in batch from batch signatures"}),"\n",(0,i.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Assemble a batch of multisig transactions generated by batch sign command."}),"\n",(0,i.jsx)(t.p,{children:"Read one or more signatures from one or more [signature] file, generate a multisig signature compliant to the\nmultisig key [name], and attach the key name to the transaction read from [file]."}),"\n",(0,i.jsx)(t.p,{children:"Example:\n$ okp4d tx multisign-batch transactions.json multisigk1k2k3 k1sigs.json k2sigs.json k3sig.json"}),"\n",(0,i.jsx)(t.p,{children:"The current multisig implementation defaults to amino-json sign mode.\nThe SIGN_MODE_DIRECT sign mode is not supported.'"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"okp4d tx multisign-batch [file] [name] [[signature-file]...] [flags]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for multisign-batch\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --multisig string          Address of the multisig account that the transaction signs on behalf of\n      --no-auto-increment        disable sequence auto increment\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n      --output-document string   The document is written to the given file instead of STDOUT\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,i.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/fr/commands/next/okp4d_tx",children:"okp4d tx"}),"\t - Transactions subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(67294);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);