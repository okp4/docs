"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[25280],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35635:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],c={},s=void 0,l={unversionedId:"okp4d_tx_gov_submit-legacy-proposal_clear-contract-admin",id:"okp4d_tx_gov_submit-legacy-proposal_clear-contract-admin",title:"okp4d_tx_gov_submit-legacy-proposal_clear-contract-admin",description:"okp4d tx gov submit-legacy-proposal clear-contract-admin",source:"@site/commands/okp4d_tx_gov_submit-legacy-proposal_clear-contract-admin.md",sourceDirName:".",slug:"/okp4d_tx_gov_submit-legacy-proposal_clear-contract-admin",permalink:"/commands/okp4d_tx_gov_submit-legacy-proposal_clear-contract-admin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_gov_submit-legacy-proposal_cancel-software-upgrade",permalink:"/commands/okp4d_tx_gov_submit-legacy-proposal_cancel-software-upgrade"},next:{title:"okp4d_tx_gov_submit-legacy-proposal_execute-contract",permalink:"/commands/okp4d_tx_gov_submit-legacy-proposal_execute-contract"}},p={},u=[{value:"okp4d tx gov submit-legacy-proposal clear-contract-admin",id:"okp4d-tx-gov-submit-legacy-proposal-clear-contract-admin",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"okp4d-tx-gov-submit-legacy-proposal-clear-contract-admin"},"okp4d tx gov submit-legacy-proposal clear-contract-admin"),(0,r.kt)("p",null,"Submit a clear admin for a contract to prevent further migrations proposal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"okp4d tx gov submit-legacy-proposal clear-contract-admin [contract_addr_bech32] [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --deposit string           Deposit of proposal\n      --description string       Description of proposal\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for clear-contract-admin\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --title string             Title of proposal\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal"},"okp4d tx gov submit-legacy-proposal"),"\t - Submit a legacy proposal along with an initial deposit")))}g.isMDXComponent=!0}}]);