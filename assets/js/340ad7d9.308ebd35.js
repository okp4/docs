"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[19970],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73275:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},l=void 0,c={unversionedId:"okp4d_tx_wasm_grant",id:"okp4d_tx_wasm_grant",title:"okp4d_tx_wasm_grant",description:"okp4d tx wasm grant",source:"@site/commands/okp4d_tx_wasm_grant.md",sourceDirName:".",slug:"/okp4d_tx_wasm_grant",permalink:"/commands/okp4d_tx_wasm_grant",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_wasm_execute",permalink:"/commands/okp4d_tx_wasm_execute"},next:{title:"okp4d_tx_wasm_instantiate",permalink:"/commands/okp4d_tx_wasm_instantiate"}},d={},u=[{value:"okp4d tx wasm grant",id:"okp4d-tx-wasm-grant",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],m={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"okp4d-tx-wasm-grant"},"okp4d tx wasm grant"),(0,o.kt)("p",null,"Grant authorization to an address"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Grant authorization to an address.\nExamples:\n$ okp4d tx grant <grantee_addr> execution <contract_addr> --allow-all-messages --max-calls 1 --no-token-transfer --expiration 1667979596"),(0,o.kt)("p",null,"$ okp4d tx grant <grantee_addr> execution <contract_addr> --allow-all-messages --max-funds 100000uwasm --expiration 1667979596"),(0,o.kt)("p",null,"$ okp4d tx grant <grantee_addr> execution <contract_addr> --allow-all-messages --max-calls 5 --max-funds 100000uwasm --expiration 1667979596"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'okp4d tx wasm grant [grantee] [message_type="execution"|"migration"] [contract_addr_bech32] --allow-raw-msgs [msg1,msg2,...] --allow-msg-keys [key1,key2,...] --allow-all-messages [flags]\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --allow-all-messages       Allow all messages\n      --allow-msg-keys strings   Allowed msg keys\n      --allow-raw-msgs strings   Allowed raw msgs\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --expiration int           The Unix timestamp.\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for grant\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --max-calls uint           Maximal number of calls to the contract\n      --max-funds string         Maximal amount of tokens transferable to the contract.\n      --no-token-transfer        Don\'t allow token transfer\n      --node string              &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_wasm"},"okp4d tx wasm"),"\t - Wasm transaction subcommands")))}p.isMDXComponent=!0}}]);