"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[70691],{35773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(85893),o=n(11151);const s={},a=void 0,r={id:"okp4d_tx_multi-sign",title:"okp4d_tx_multi-sign",description:"okp4d tx multi-sign",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_tx_multi-sign.md",sourceDirName:".",slug:"/okp4d_tx_multi-sign",permalink:"/commands/v5.0.0/okp4d_tx_multi-sign",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_logic",permalink:"/commands/v5.0.0/okp4d_tx_logic"},next:{title:"okp4d_tx_sign-batch",permalink:"/commands/v5.0.0/okp4d_tx_sign-batch"}},d={},l=[{value:"okp4d tx multi-sign",id:"okp4d-tx-multi-sign",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"okp4d-tx-multi-sign",children:"okp4d tx multi-sign"}),"\n",(0,i.jsx)(t.p,{children:"Generate multisig signatures for transactions generated offline"}),"\n",(0,i.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Sign transactions created with the --generate-only flag that require multisig signatures."}),"\n",(0,i.jsx)(t.p,{children:"Read one or more signatures from one or more [signature] file, generate a multisig signature compliant to the\nmultisig key [name], and attach the key name to the transaction read from [file]."}),"\n",(0,i.jsx)(t.p,{children:"Example:\n$ okp4d tx multisign transaction.json k1k2k3 k1sig.json k2sig.json k3sig.json"}),"\n",(0,i.jsx)(t.p,{children:"If --signature-only flag is on, output a JSON representation\nof only the generated signature."}),"\n",(0,i.jsx)(t.p,{children:"If the --offline flag is on, the client will not reach out to an external node.\nAccount number or sequence number lookups are not performed so you must\nset these parameters manually."}),"\n",(0,i.jsx)(t.p,{children:"The current multisig implementation defaults to amino-json sign mode.\nThe SIGN_MODE_DIRECT sign mode is not supported.'"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"okp4d tx multi-sign [file] [name] [[signature]...] [flags]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --amino                    Generate Amino-encoded JSON suitable for submitting to the txs REST endpoint\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for multi-sign\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n      --output-document string   The document is written to the given file instead of STDOUT\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --signature-only           Print only the generated signature, then exit\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,i.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/commands/next/okp4d_tx",children:"okp4d tx"}),"\t - Transactions subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(67294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);