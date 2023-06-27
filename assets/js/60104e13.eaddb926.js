"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[37539],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},p=void 0,l={unversionedId:"okp4d_tx_gov_submit-legacy-proposal_ibc-upgrade",id:"okp4d_tx_gov_submit-legacy-proposal_ibc-upgrade",title:"okp4d_tx_gov_submit-legacy-proposal_ibc-upgrade",description:"okp4d tx gov submit-legacy-proposal ibc-upgrade",source:"@site/commands/okp4d_tx_gov_submit-legacy-proposal_ibc-upgrade.md",sourceDirName:".",slug:"/okp4d_tx_gov_submit-legacy-proposal_ibc-upgrade",permalink:"/commands/next/okp4d_tx_gov_submit-legacy-proposal_ibc-upgrade",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_gov_submit-legacy-proposal_cancel-software-upgrade",permalink:"/commands/next/okp4d_tx_gov_submit-legacy-proposal_cancel-software-upgrade"},next:{title:"okp4d_tx_gov_submit-legacy-proposal_param-change",permalink:"/commands/next/okp4d_tx_gov_submit-legacy-proposal_param-change"}},c={},d=[{value:"okp4d tx gov submit-legacy-proposal ibc-upgrade",id:"okp4d-tx-gov-submit-legacy-proposal-ibc-upgrade",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"okp4d-tx-gov-submit-legacy-proposal-ibc-upgrade"},"okp4d tx gov submit-legacy-proposal ibc-upgrade"),(0,o.kt)("p",null,"Submit an IBC upgrade proposal"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,'Submit an IBC client breaking upgrade proposal along with an initial deposit.\nThe client state specified is the upgraded client state representing the upgraded chain\nExample Upgraded Client State JSON:\n{\n"@type":"/ibc.lightclients.tendermint.v1.ClientState",\n"chain_id":"testchain1",\n"unbonding_period":"1814400s",\n"latest_height":{"revision_number":"0","revision_height":"2"},\n"proof_specs":[{"leaf_spec":{"hash":"SHA256","prehash_key":"NO_HASH","prehash_value":"SHA256","length":"VAR_PROTO","prefix":"AA=="},"inner_spec":{"child_order":',"[0,1]",',"child_size":33,"min_prefix_length":4,"max_prefix_length":12,"empty_child":null,"hash":"SHA256"},"max_depth":0,"min_depth":0},{"leaf_spec":{"hash":"SHA256","prehash_key":"NO_HASH","prehash_value":"SHA256","length":"VAR_PROTO","prefix":"AA=="},"inner_spec":{"child_order":',"[0,1]",',"child_size":32,"min_prefix_length":1,"max_prefix_length":1,"empty_child":null,"hash":"SHA256"},"max_depth":0,"min_depth":0}],\n"upgrade_path":','["upgrade","upgradedIBCState"]',",\n}"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"okp4d tx gov submit-legacy-proposal ibc-upgrade [name] [height] [path/to/upgraded_client_state.json] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --deposit string           deposit of proposal\n      --description string       description of proposal\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for ibc-upgrade\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --title string             title of proposal\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_gov_submit-legacy-proposal"},"okp4d tx gov submit-legacy-proposal"),"\t - Submit a legacy proposal along with an initial deposit")))}g.isMDXComponent=!0}}]);