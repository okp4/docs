"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[20447],{58341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var o=n(85893),s=n(11151);const a={},i=void 0,r={id:"okp4d_tx_group_submit-proposal",title:"okp4d_tx_group_submit-proposal",description:"okp4d tx group submit-proposal",source:"@site/commands_versioned_docs/version-v7.1.0/okp4d_tx_group_submit-proposal.md",sourceDirName:".",slug:"/okp4d_tx_group_submit-proposal",permalink:"/commands/okp4d_tx_group_submit-proposal",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_group_leave-group",permalink:"/commands/okp4d_tx_group_leave-group"},next:{title:"okp4d_tx_group_update-group-admin",permalink:"/commands/okp4d_tx_group_update-group-admin"}},d={},p=[{value:"okp4d tx group submit-proposal",id:"okp4d-tx-group-submit-proposal",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"okp4d-tx-group-submit-proposal",children:"okp4d tx group submit-proposal"}),"\n",(0,o.jsx)(t.p,{children:"Submit a new proposal"}),"\n",(0,o.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(t.p,{children:"Submit a new proposal.\nParameters:\nmsg_tx_json_file: path to json file with messages that will be executed if the proposal is accepted."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"okp4d tx group submit-proposal [proposal_json_file] [flags]\n"})}),"\n",(0,o.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'\nokp4d tx group submit-proposal path/to/proposal.json\n\t\n\tWhere proposal.json contains:\n\n{\n\t"group_policy_address": "cosmos1...",\n\t// array of proto-JSON-encoded sdk.Msgs\n\t"messages": [\n\t{\n\t\t"@type": "/cosmos.bank.v1beta1.MsgSend",\n\t\t"from_address": "cosmos1...",\n\t\t"to_address": "cosmos1...",\n\t\t"amount":[{"denom": "stake","amount": "10"}]\n\t}\n\t],\n\t// metadata can be any of base64 encoded, raw text, stringified json, IPFS link to json\n\t// see below for example metadata\n\t"metadata": "4pIMOgIGx1vZGU=", // base64-encoded metadata\n\t"title": "My proposal",\n\t"summary": "This is a proposal to send 10 stake to cosmos1...",\n\t"proposers": ["cosmos1...", "cosmos1..."],\n}\n\nmetadata example: \n{\n\t"title": "",\n\t"authors": [""],\n\t"summary": "",\n\t"details": "", \n\t"proposal_forum_url": "",\n\t"vote_option_context": "",\n} \n\n'})}),"\n",(0,o.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --exec string              Set to 1 to try to execute proposal immediately after creation (proposers signatures are considered as Yes votes)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for submit-proposal\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,o.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/commands/okp4d_tx_group",children:"okp4d tx group"}),"\t - Group transaction subcommands"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(67294);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);