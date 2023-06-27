"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[9756],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40026:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],i={},l=void 0,p={unversionedId:"okp4d_tx_gov_submit-proposal",id:"okp4d_tx_gov_submit-proposal",title:"okp4d_tx_gov_submit-proposal",description:"okp4d tx gov submit-proposal",source:"@site/commands/okp4d_tx_gov_submit-proposal.md",sourceDirName:".",slug:"/okp4d_tx_gov_submit-proposal",permalink:"/commands/next/okp4d_tx_gov_submit-proposal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_gov_submit-legacy-proposal_update-client",permalink:"/commands/next/okp4d_tx_gov_submit-legacy-proposal_update-client"},next:{title:"okp4d_tx_gov_vote",permalink:"/commands/next/okp4d_tx_gov_vote"}},u={},c=[{value:"okp4d tx gov submit-proposal",id:"okp4d-tx-gov-submit-proposal",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"okp4d-tx-gov-submit-proposal"},"okp4d tx gov submit-proposal"),(0,r.kt)("p",null,"Submit a proposal along with some messages, metadata and deposit"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Submit a proposal along with some messages, metadata and deposit.\nThey should be defined in a JSON file."),(0,r.kt)("p",null,"Example:\n$ okp4d tx gov submit-proposal path/to/proposal.json"),(0,r.kt)("p",null,"Where proposal.json contains:"),(0,r.kt)("p",null,'{\n// array of proto-JSON-encoded sdk.Msgs\n"messages": [\n{\n"@type": "/cosmos.bank.v1beta1.MsgSend",\n"from_address": "cosmos1...",\n"to_address": "cosmos1...",\n"amount":','[{"denom": "stake","amount": "10"}]','\n}\n],\n// metadata can be any of base64 encoded, raw text, stringified json, IPFS link to json\n// see below for example metadata\n"metadata: "4pIMOgIGx1vZGU=",\n"deposit": "10stake"\n"title: "My proposal"\n"summary": "A short summary of my proposal"\n}'),(0,r.kt)("p",null,'metadata example:\n{\n"title": "",\n"authors": ','[""]',',\n"summary": "",\n"details": "",\n"proposal_forum_url": "",\n"vote_option_context": "",\n}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"okp4d tx gov submit-proposal [path/to/proposal.json] [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for submit-proposal\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_gov"},"okp4d tx gov"),"\t - Governance transactions subcommands")))}m.isMDXComponent=!0}}]);