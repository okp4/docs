"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[95351],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=a,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={},c=void 0,l={unversionedId:"okp4d_tx_ibc-transfer_transfer",id:"okp4d_tx_ibc-transfer_transfer",title:"okp4d_tx_ibc-transfer_transfer",description:"okp4d tx ibc-transfer transfer",source:"@site/commands/okp4d_tx_ibc-transfer_transfer.md",sourceDirName:".",slug:"/okp4d_tx_ibc-transfer_transfer",permalink:"/commands/next/okp4d_tx_ibc-transfer_transfer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_ibc-transfer",permalink:"/commands/next/okp4d_tx_ibc-transfer"},next:{title:"okp4d_tx_ibc",permalink:"/commands/next/okp4d_tx_ibc"}},u={},d=[{value:"okp4d tx ibc-transfer transfer",id:"okp4d-tx-ibc-transfer-transfer",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"okp4d-tx-ibc-transfer-transfer"},"okp4d tx ibc-transfer transfer"),(0,o.kt)("p",null,"Transfer a fungible token through IBC"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,'Transfer a fungible token through IBC. Timeouts can be specified\nas absolute or relative using the "absolute-timeouts" flag. Timeout height can be set by passing in the height string\nin the form {revision}-{height} using the "packet-timeout-height" flag. Relative timeout height is added to the block\nheight queried from the latest consensus state corresponding to the counterparty channel. Relative timeout timestamp\nis added to the greater value of the local clock time and the block timestamp queried from the latest consensus state\ncorresponding to the counterparty channel. Any timeout set to 0 is disabled.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"okp4d tx ibc-transfer transfer [src-port] [src-channel] [receiver] [amount] [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"okp4d tx ibc-transfer transfer [src-port] [src-channel] [receiver] [amount]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --absolute-timeouts               Timeout flags are used as absolute timeouts.\n  -a, --account-number uint             The account number of the signing account (offline mode only)\n      --aux                             Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string           Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string                 The network chain ID (default "okp4d")\n      --dry-run                         ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string              Fee granter grants fees for the transaction\n      --fee-payer string                Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                     Fees to pay along with transaction; eg: 10uatom\n      --from string                     Name or address of private key with which to sign\n      --gas string                      gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float            adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string               Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                   Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                            help for transfer\n      --keyring-backend string          Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string              The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                          Use a connected Ledger device\n      --memo string                     Memo to be sent along with the packet.\n      --node string                     &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string                     Note to add a description to the transaction (previously --memo)\n      --offline                         Offline mode (does not allow any online functionality)\n  -o, --output string                   Output format (text|json) (default "json")\n      --packet-timeout-height string    Packet timeout block height. The timeout is disabled when set to 0-0. (default "0-1000")\n      --packet-timeout-timestamp uint   Packet timeout timestamp in nanoseconds from now. Default is 10 minutes. The timeout is disabled when set to 0. (default 600000000000)\n  -s, --sequence uint                   The sequence number of the signing account (offline mode only)\n      --sign-mode string                Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint             Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                      Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                             Skip tx broadcasting prompt confirmation\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_ibc-transfer"},"okp4d tx ibc-transfer"),"\t - IBC fungible token transfer transaction subcommands")))}p.isMDXComponent=!0}}]);