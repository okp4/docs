"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[54257],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),y=o,m=c["".concat(d,".").concat(y)]||c[y]||u[y]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={},d=void 0,l={unversionedId:"okp4d_keys_add",id:"version-v5.0.0/okp4d_keys_add",title:"okp4d_keys_add",description:"okp4d keys add",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_keys_add.md",sourceDirName:".",slug:"/okp4d_keys_add",permalink:"/commands/okp4d_keys_add",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_keys",permalink:"/commands/okp4d_keys"},next:{title:"okp4d_keys_delete",permalink:"/commands/okp4d_keys_delete"}},p={},u=[{value:"okp4d keys add",id:"okp4d-keys-add",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:u};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okp4d-keys-add"},"okp4d keys add"),(0,i.kt)("p",null,"Add an encrypted private key (either newly generated or recovered), encrypt it, and save to ","<","name",">"," file"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Derive a new private key and encrypt to disk.\nOptionally specify a BIP39 mnemonic, a BIP39 passphrase to further secure the mnemonic,\nand a bip32 HD path to derive a specific account. The key will be stored under the given name\nand encrypted with the given password. The only input that is required is the encryption password."),(0,i.kt)("p",null,"If run with -i, it will prompt the user for BIP44 path, BIP39 mnemonic, and passphrase.\nThe flag --recover allows one to recover a key from a seed passphrase.\nIf run with --dry-run, a key would be generated (or recovered) but not stored to the\nlocal keystore.\nUse the --pubkey flag to add arbitrary public keys to the keystore for constructing\nmultisig transactions."),(0,i.kt)("p",null,"You can create and store a multisig key by passing the list of key names stored in a keyring\nand the minimum number of signatures required through --multisig-threshold. The keys are\nsorted by address, unless the flag --nosort is set.\nExample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'keys add mymultisig --multisig "keyname1,keyname2,keyname3" --multisig-threshold 2\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d keys add &lt;name&gt; [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --account uint32           Account number for HD derivation (less than equal 2147483647)\n      --coin-type uint32         coin type number for HD derivation (default 118)\n      --dry-run                  Perform action, but don't add key to local keystore\n      --hd-path string           Manual HD Path derivation (overrides BIP44 config)\n  -h, --help                     help for add\n      --index uint32             Address index number for HD derivation (less than equal 2147483647)\n  -i, --interactive              Interactively prompt user for BIP39 passphrase and mnemonic\n      --key-type string          Key signing algorithm to generate keys for (default \"secp256k1\")\n      --ledger                   Store a local reference to a private key on a Ledger device\n      --multisig strings         List of key names stored in keyring to construct a public legacy multisig key\n      --multisig-threshold int   K out of N required signatures. For use in conjunction with --multisig (default 1)\n      --no-backup                Don't print out seed phrase (if others are watching the terminal)\n      --nosort                   Keys passed to --multisig are taken in the order they're supplied\n      --pubkey string            Parse a public key in JSON format and saves key info to &lt;name&gt; file.\n      --recover                  Provide seed phrase to recover existing key instead of creating\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --home string              The application home directory (default "/home/john/.okp4d")\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --output string            Output format (text|json) (default "text")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/next/okp4d_keys"},"okp4d keys"),"\t - Manage your application's keys")))}y.isMDXComponent=!0}}]);