"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[33982],{96210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(85893),a=t(11151);const s={},o=void 0,r={id:"axoned_tx_ibc_client_schedule-ibc-upgrade",title:"axoned_tx_ibc_client_schedule-ibc-upgrade",description:"axoned tx ibc client schedule-ibc-upgrade",source:"@site/commands/axoned_tx_ibc_client_schedule-ibc-upgrade.md",sourceDirName:".",slug:"/axoned_tx_ibc_client_schedule-ibc-upgrade",permalink:"/fr/commands/next/axoned_tx_ibc_client_schedule-ibc-upgrade",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_tx_ibc_client_recover-client",permalink:"/fr/commands/next/axoned_tx_ibc_client_recover-client"},next:{title:"axoned_tx_ibc_client_update",permalink:"/fr/commands/next/axoned_tx_ibc_client_update"}},c={},d=[{value:"axoned tx ibc client schedule-ibc-upgrade",id:"axoned-tx-ibc-client-schedule-ibc-upgrade",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"axoned-tx-ibc-client-schedule-ibc-upgrade",children:"axoned tx ibc client schedule-ibc-upgrade"}),"\n",(0,i.jsx)(n.p,{children:"Submit an IBC software upgrade proposal"}),"\n",(0,i.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(n.p,{children:"Please specify a unique name and height for the upgrade to take effect.\nThe client state specified is the upgraded client state representing the upgraded chain"}),"\n",(0,i.jsxs)(n.p,{children:['Example Upgraded Client State JSON:\n{\n"@type":"/ibc.lightclients.tendermint.v1.ClientState",\n"chain_id":"testchain1",\n"unbonding_period":"1814400s",\n"latest_height":{\n"revision_number":"0",\n"revision_height":"2"\n},\n"proof_specs":[\n{\n"leaf_spec":{\n"hash":"SHA256",\n"prehash_key":"NO_HASH",\n"prehash_value":"SHA256",\n"length":"VAR_PROTO",\n"prefix":"AA=="\n},\n"inner_spec":{\n"child_order":[\n0,\n1\n],\n"child_size":33,\n"min_prefix_length":4,\n"max_prefix_length":12,\n"empty_child"',":null",',\n"hash":"SHA256"\n},\n"max_depth":0,\n"min_depth":0\n},\n{\n"leaf_spec":{\n"hash":"SHA256",\n"prehash_key":"NO_HASH",\n"prehash_value":"SHA256",\n"length":"VAR_PROTO",\n"prefix":"AA=="\n},\n"inner_spec":{\n"child_order":[\n0,\n1\n],\n"child_size":32,\n"min_prefix_length":1,\n"max_prefix_length":1,\n"empty_child"',":null",',\n"hash":"SHA256"\n},\n"max_depth":0,\n"min_depth":0\n}\n],\n"upgrade_path":[\n"upgrade",\n"upgradedIBCState"\n]\n}']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"axoned tx ibc client schedule-ibc-upgrade [name] [height] [path/to/upgraded_client_state.json] [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --authority string         The address of the client module authority (defaults to gov)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --deposit string           The deposit to include with the governance proposal\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for schedule-ibc-upgrade\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --metadata string          The metadata to include with the governance proposal\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --summary string           The summary to include with the governance proposal\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --title string             The title to put on the governance proposal\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/fr/commands/next/axoned_tx_ibc_client",children:"axoned tx ibc client"}),"\t - IBC client transaction subcommands"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);