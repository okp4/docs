"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[53941],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,s(s({ref:e},p),{},{components:n})):a.createElement(f,s({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35574:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={},c=void 0,l={unversionedId:"okp4d_tx_wasm_submit-proposal_wasm-store",id:"okp4d_tx_wasm_submit-proposal_wasm-store",title:"okp4d_tx_wasm_submit-proposal_wasm-store",description:"okp4d tx wasm submit-proposal wasm-store",source:"@site/commands/okp4d_tx_wasm_submit-proposal_wasm-store.md",sourceDirName:".",slug:"/okp4d_tx_wasm_submit-proposal_wasm-store",permalink:"/commands/next/okp4d_tx_wasm_submit-proposal_wasm-store",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_wasm_submit-proposal_update-instantiate-config",permalink:"/commands/next/okp4d_tx_wasm_submit-proposal_update-instantiate-config"},next:{title:"okp4d_tx_wasm_update-instantiate-config",permalink:"/commands/next/okp4d_tx_wasm_update-instantiate-config"}},p={},u=[{value:"okp4d tx wasm submit-proposal wasm-store",id:"okp4d-tx-wasm-submit-proposal-wasm-store",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:u};function m(t){var e=t.components,n=(0,o.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"okp4d-tx-wasm-submit-proposal-wasm-store"},"okp4d tx wasm submit-proposal wasm-store"),(0,r.kt)("p",null,"Submit a wasm binary proposal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"okp4d tx wasm submit-proposal wasm-store [wasm file] --title [text] --summary [text] --authority [address] [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -a, --account-number uint                   The account number of the signing account (offline mode only)\n      --authority string                      The address of the governance account. Default is the sdk gov module account (default "okp410d07y265gmmuvt4z0w9aw880jnsr700jh7kd2g")\n      --aux                                   Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string                 Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string                       The network chain ID (default "okp4d")\n      --deposit string                        Deposit of proposal\n      --dry-run                               ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string                    Fee granter grants fees for the transaction\n      --fee-payer string                      Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                           Fees to pay along with transaction; eg: 10uatom\n      --from string                           Name or address of private key with which to sign\n      --gas string                            gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float                  adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string                     Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                         Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                                  help for wasm-store\n      --instantiate-anyof-addresses strings   Any of the addresses can instantiate a contract from the code, optional\n      --instantiate-everybody string          Everybody can instantiate a contract from the code, optional\n      --instantiate-nobody string             Nobody except the governance process can instantiate a contract from the code, optional\n      --instantiate-only-address string       Removed: use instantiate-anyof-addresses instead\n      --keyring-backend string                Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string                    The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                                Use a connected Ledger device\n      --node string                           &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string                           Note to add a description to the transaction (previously --memo)\n      --offline                               Offline mode (does not allow any online functionality)\n  -o, --output string                         Output format (text|json) (default "json")\n  -s, --sequence uint                         The sequence number of the signing account (offline mode only)\n      --sign-mode string                      Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --summary string                        Summary of proposal\n      --timeout-height uint                   Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                            Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --title string                          Title of proposal\n  -y, --yes                                   Skip tx broadcasting prompt confirmation\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal"},"okp4d tx wasm submit-proposal"),"\t - Submit a wasm proposal.")))}m.isMDXComponent=!0}}]);