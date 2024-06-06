"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[20853],{52735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(85893),s=n(11151);const a={},i=void 0,r={id:"okp4d_tx_gov_submit-proposal",title:"okp4d_tx_gov_submit-proposal",description:"okp4d tx gov submit-proposal",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_tx_gov_submit-proposal.md",sourceDirName:".",slug:"/okp4d_tx_gov_submit-proposal",permalink:"/commands/v6.0.0/okp4d_tx_gov_submit-proposal",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_gov_submit-legacy-proposal",permalink:"/commands/v6.0.0/okp4d_tx_gov_submit-legacy-proposal"},next:{title:"okp4d_tx_gov_vote",permalink:"/commands/v6.0.0/okp4d_tx_gov_vote"}},d={},l=[{value:"okp4d tx gov submit-proposal",id:"okp4d-tx-gov-submit-proposal",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"okp4d-tx-gov-submit-proposal",children:"okp4d tx gov submit-proposal"}),"\n",(0,o.jsx)(t.p,{children:"Submit a proposal along with some messages, metadata and deposit"}),"\n",(0,o.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(t.p,{children:"Submit a proposal along with some messages, metadata and deposit.\nThey should be defined in a JSON file."}),"\n",(0,o.jsx)(t.p,{children:"Example:\n$ okp4d tx gov submit-proposal path/to/proposal.json"}),"\n",(0,o.jsx)(t.p,{children:"Where proposal.json contains:"}),"\n",(0,o.jsx)(t.p,{children:'{\n// array of proto-JSON-encoded sdk.Msgs\n"messages": [\n{\n"@type": "/cosmos.bank.v1beta1.MsgSend",\n"from_address": "cosmos1...",\n"to_address": "cosmos1...",\n"amount":[{"denom": "stake","amount": "10"}]\n}\n],\n// metadata can be any of base64 encoded, raw text, stringified json, IPFS link to json\n// see below for example metadata\n"metadata": "4pIMOgIGx1vZGU=",\n"deposit": "10stake",\n"title": "My proposal",\n"summary": "A short summary of my proposal",\n"expedited": false\n}'}),"\n",(0,o.jsx)(t.p,{children:'metadata example:\n{\n"title": "",\n"authors": [""],\n"summary": "",\n"details": "",\n"proposal_forum_url": "",\n"vote_option_context": "",\n}'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"okp4d tx gov submit-proposal [path/to/proposal.json] [flags]\n"})}),"\n",(0,o.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for submit-proposal\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,o.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/commands/v6.0.0/okp4d_tx_gov",children:"okp4d tx gov"}),"\t - Governance transactions subcommands"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(67294);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);