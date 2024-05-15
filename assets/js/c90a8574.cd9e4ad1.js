"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[49095],{36592:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=n(85893),o=n(11151);const i={},r=void 0,d={id:"okp4d_keys",title:"okp4d_keys",description:"okp4d keys",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_keys.md",sourceDirName:".",slug:"/okp4d_keys",permalink:"/commands/v6.0.0/okp4d_keys",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_init",permalink:"/commands/v6.0.0/okp4d_init"},next:{title:"okp4d_keys_add",permalink:"/commands/v6.0.0/okp4d_keys_add"}},a={},l=[{value:"okp4d keys",id:"okp4d-keys",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function p(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"okp4d-keys",children:"okp4d keys"}),"\n",(0,t.jsx)(s.p,{children:"Manage your application's keys"}),"\n",(0,t.jsx)(s.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.p,{children:"Keyring management commands. These keys may be in any format supported by the\nCometBFT crypto library and can be used by light-clients, full nodes, or any other application\nthat needs to sign with a private key."}),"\n",(0,t.jsx)(s.p,{children:"The keyring supports the following backends:"}),"\n",(0,t.jsx)(s.p,{children:"os          Uses the operating system's default credentials store.\nfile        Uses encrypted file-based keystore within the app's configuration directory.\nThis keyring will request a password each time it is accessed, which may occur\nmultiple times in a single command resulting in repeated password prompts.\nkwallet     Uses KDE Wallet Manager as a credentials management application.\npass        Uses the pass command line utility to store and retrieve keys.\ntest        Stores keys insecurely to disk. It does not prompt for a password to be unlocked\nand it should be use only for testing purposes."}),"\n",(0,t.jsxs)(s.p,{children:["kwallet and pass backends depend on external tools. Refer to their respective documentation for more\ninformation:\nKWallet     ",(0,t.jsx)(s.a,{href:"https://github.com/KDE/kwallet",children:"https://github.com/KDE/kwallet"}),"\npass        ",(0,t.jsx)(s.a,{href:"https://www.passwordstore.org/",children:"https://www.passwordstore.org/"})]}),"\n",(0,t.jsxs)(s.p,{children:["The pass backend requires GnuPG: ",(0,t.jsx)(s.a,{href:"https://gnupg.org/",children:"https://gnupg.org/"})]}),"\n",(0,t.jsx)(s.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'  -h, --help                     help for keys\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --output string            Output format (text|json) (default "text")\n'})}),"\n",(0,t.jsx)(s.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d",children:"okp4d"}),"\t - OKP4 Daemon \ud83d\udc79"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_add",children:"okp4d keys add"}),"\t - Add an encrypted private key (either newly generated or recovered), encrypt it, and save to <name> file"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_delete",children:"okp4d keys delete"}),"\t - Delete the given keys"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_export",children:"okp4d keys export"}),"\t - Export private keys"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_import",children:"okp4d keys import"}),"\t - Import private keys into the local keybase"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_import-hex",children:"okp4d keys import-hex"}),"\t - Import private keys into the local keybase"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_list",children:"okp4d keys list"}),"\t - List all keys"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_list-key-types",children:"okp4d keys list-key-types"}),"\t - List all key types"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_migrate",children:"okp4d keys migrate"}),"\t - Migrate keys from amino to proto serialization format"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_mnemonic",children:"okp4d keys mnemonic"}),"\t - Compute the bip39 mnemonic for some input entropy"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_parse",children:"okp4d keys parse"}),"\t - Parse address from hex to bech32 and vice versa"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_rename",children:"okp4d keys rename"}),"\t - Rename an existing key"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/commands/next/okp4d_keys_show",children:"okp4d keys show"}),"\t - Retrieve key information by name or address"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>r});var t=n(67294);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);