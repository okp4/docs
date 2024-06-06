"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[43577],{54714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(85893),o=n(11151);const i={},s=void 0,r={id:"okp4d_tx_feegrant_grant",title:"okp4d_tx_feegrant_grant",description:"okp4d tx feegrant grant",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_tx_feegrant_grant.md",sourceDirName:".",slug:"/okp4d_tx_feegrant_grant",permalink:"/fr/commands/v6.0.0/okp4d_tx_feegrant_grant",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_feegrant",permalink:"/fr/commands/v6.0.0/okp4d_tx_feegrant"},next:{title:"okp4d_tx_feegrant_prune",permalink:"/fr/commands/v6.0.0/okp4d_tx_feegrant_prune"}},d={},c=[{value:"okp4d tx feegrant grant",id:"okp4d-tx-feegrant-grant",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"okp4d-tx-feegrant-grant",children:"okp4d tx feegrant grant"}),"\n",(0,a.jsx)(t.p,{children:"Grant Fee allowance to an address"}),"\n",(0,a.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(t.p,{children:"Grant authorization to pay fees from your address. Note, the '--from' flag is\nignored as it is implied from [granter]."}),"\n",(0,a.jsx)(t.p,{children:'Examples:\nokp4d tx feegrant grant cosmos1skjw... cosmos1skjw... --spend-limit 100stake --expiration 2022-01-30T15:04:05Z or\nokp4d tx feegrant grant cosmos1skjw... cosmos1skjw... --spend-limit 100stake --period 3600 --period-limit 10stake --expiration 2022-01-30T15:04:05Z or\nokp4d tx feegrant grant cosmos1skjw... cosmos1skjw... --spend-limit 100stake --expiration 2022-01-30T15:04:05Z\n--allowed-messages "/cosmos.gov.v1beta1.MsgSubmitProposal,/cosmos.gov.v1beta1.MsgVote"'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"okp4d tx feegrant grant [granter_key_or_address] [grantee] [flags]\n"})}),"\n",(0,a.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'  -a, --account-number uint        The account number of the signing account (offline mode only)\n      --allowed-messages strings   Set of allowed messages for fee allowance\n      --aux                        Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string      Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string            The network chain ID\n      --dry-run                    ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --expiration string          The RFC 3339 timestamp after which the grant expires for the user\n      --fee-granter string         Fee granter grants fees for the transaction\n      --fee-payer string           Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                Fees to pay along with transaction; eg: 10uatom\n      --from string                Name or address of private key with which to sign\n      --gas string                 gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float       adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string          Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only              Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                       help for grant\n      --keyring-backend string     Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string         The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                     Use a connected Ledger device\n      --node string                <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string                Note to add a description to the transaction (previously --memo)\n      --offline                    Offline mode (does not allow any online functionality)\n  -o, --output string              Output format (text|json) (default "json")\n      --period int                 period specifies the time duration(in seconds) in which period_limit coins can be spent before that allowance is reset (ex: 3600)\n      --period-limit string        period limit specifies the maximum number of coins that can be spent in the period\n  -s, --sequence uint              The sequence number of the signing account (offline mode only)\n      --sign-mode string           Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --spend-limit string         Spend limit specifies the max limit can be used, if not mentioned there is no limit\n      --timeout-height uint        Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                 Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                        Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,a.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/fr/commands/v6.0.0/okp4d_tx_feegrant",children:"okp4d tx feegrant"}),"\t - Feegrant transactions sub-commands"]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);