"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[43626],{49696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=n(85893),a=n(11151);const s={},i=void 0,r={id:"axoned_tx_gov_submit-legacy-proposal",title:"axoned_tx_gov_submit-legacy-proposal",description:"axoned tx gov submit-legacy-proposal",source:"@site/commands/axoned_tx_gov_submit-legacy-proposal.md",sourceDirName:".",slug:"/axoned_tx_gov_submit-legacy-proposal",permalink:"/commands/next/axoned_tx_gov_submit-legacy-proposal",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_tx_gov_draft-proposal",permalink:"/commands/next/axoned_tx_gov_draft-proposal"},next:{title:"axoned_tx_gov_submit-proposal",permalink:"/commands/next/axoned_tx_gov_submit-proposal"}},l={},d=[{value:"axoned tx gov submit-legacy-proposal",id:"axoned-tx-gov-submit-legacy-proposal",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"axoned-tx-gov-submit-legacy-proposal",children:"axoned tx gov submit-legacy-proposal"}),"\n",(0,o.jsx)(t.p,{children:"Submit a legacy proposal along with an initial deposit"}),"\n",(0,o.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(t.p,{children:"Submit a legacy proposal along with an initial deposit.\nProposal title, description, type and deposit can be given directly or through a proposal JSON file."}),"\n",(0,o.jsx)(t.p,{children:'Example:\n$ axoned tx gov submit-legacy-proposal --proposal="path/to/proposal.json" --from mykey'}),"\n",(0,o.jsx)(t.p,{children:"Where proposal.json contains:"}),"\n",(0,o.jsx)(t.p,{children:'{\n"title": "Test Proposal",\n"description": "My awesome proposal",\n"type": "Text",\n"deposit": "10test"\n}'}),"\n",(0,o.jsx)(t.p,{children:"Which is equivalent to:"}),"\n",(0,o.jsx)(t.p,{children:'$ axoned tx gov submit-legacy-proposal --title="Test Proposal" --description="My awesome proposal" --type="Text" --deposit="10test" --from mykey'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"axoned tx gov submit-legacy-proposal [flags]\n"})}),"\n",(0,o.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --deposit string           The proposal deposit\n      --description string       The proposal description\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for submit-legacy-proposal\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n      --proposal string          Proposal file path (if this path is given, other proposal flags are ignored)\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --title string             The proposal title\n      --type string              The proposal Type\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,o.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/commands/next/axoned_tx_gov",children:"axoned tx gov"}),"\t - Governance transactions subcommands"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(67294);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);