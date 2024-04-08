"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[54175],{30057:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,readingTime:()=>c,toc:()=>a});var i=s(85893),r=s(11151);const t={sidebar_position:8},o="Tendermint KMS",l={id:"nodes/kms",title:"Tendermint KMS",description:"Synopsis",source:"@site/docs/nodes/kms.md",sourceDirName:"nodes",slug:"/nodes/kms",permalink:"/fr/nodes/kms",draft:!1,unlisted:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/nodes/kms.md",tags:[],version:"current",lastUpdatedAt:1707385635e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"nodes",previous:{title:"Join Mainnet",permalink:"/fr/nodes/join-mainnet"},next:{title:"Tendermint KMS + Ledger",permalink:"/fr/nodes/kms_ledger"}},d={},c=2,a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Install Tendermint KMS onto the node",id:"install-tendermint-kms-onto-the-node",level:2},{value:"Compile from source code",id:"compile-from-source-code",level:3},{value:"Configuration",id:"configuration",level:2},{value:"YubiHSM",id:"yubihsm",level:3},{value:"Ledger Tendermint app",id:"ledger-tendermint-app",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tendermint-kms",children:"Tendermint KMS"}),"\n",(0,i.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(n.p,{children:"Set up a Key Management System for okp4"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/iqlusioninc/tmkms",children:"Tendermint KMS"})," is a Key Management Service (KMS) that allows separating key management from Tendermint nodes. In addition it provides other advantages such as:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Improved security and risk management policies"}),"\n",(0,i.jsx)(n.li,{children:"Unified API and support for various HSM (hardware security modules)"}),"\n",(0,i.jsx)(n.li,{children:"Double signing protection (software or hardware based)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It is recommended that the KMS service runs in a separate physical hosts."}),"\n",(0,i.jsx)(n.h2,{id:"install-tendermint-kms-onto-the-node",children:"Install Tendermint KMS onto the node"}),"\n",(0,i.jsx)(n.p,{children:"You will need the following prerequisites:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u2705 ",(0,i.jsx)(n.strong,{children:"Rust"})," (stable; ",(0,i.jsx)(n.strong,{children:"1.56+"}),"): ",(0,i.jsx)(n.a,{href:"https://rustup.rs/",children:"rustup"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u2705 ",(0,i.jsx)(n.strong,{children:"C compiler"}),": e.g. gcc, clang"]}),"\n",(0,i.jsxs)(n.li,{children:["\u2705 ",(0,i.jsx)(n.strong,{children:"pkg-config"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u2705 ",(0,i.jsx)(n.strong,{children:"libusb"})," (1.0+). Install instructions for common platforms","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u2705 Debian/Ubuntu"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\napt install libusb-1.0-0-dev\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u2705 RedHat/CentOS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\nyum install libusb1-devel\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u2705 macOS (Homebrew)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\nbrew install libusb\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"x86_64"})," architecture only:"]}),(0,i.jsxs)(n.p,{children:["Configure ",(0,i.jsx)(n.code,{children:"RUSTFLAGS"})," environment variable:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export RUSTFLAGS=-Ctarget-feature=+aes,+ssse3\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"We are ready to install KMS. There are 2 ways to do this: compile from source or install with Rusts cargo-install. We'll use the first option."}),"\n",(0,i.jsx)(n.h3,{id:"compile-from-source-code",children:"Compile from source code"}),"\n",(0,i.jsxs)(n.p,{children:["The following example adds ",(0,i.jsx)(n.code,{children:"--features=ledger"})," to enable Ledger  support.\n",(0,i.jsx)(n.code,{children:"tmkms"})," can be compiled directly from the git repository source code, using the following commands:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gh repo clone iqlusioninc/tmkms && cd tmkms\n[...]\ncargo build --release --features=ledger\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, substitute ",(0,i.jsx)(n.code,{children:"--features=yubihsm"})," to enable ",(0,i.jsx)(n.a,{href:"https://www.yubico.com/products/hardware-security-module/",children:"YubiHSM"})," support."]}),"\n",(0,i.jsxs)(n.p,{children:["If successful, it will produce the ",(0,i.jsx)(n.code,{children:"tmkms"})," executable located at: ",(0,i.jsx)(n.code,{children:"./target/release/tmkms"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"A KMS can be configured using the following HSMs"}),"\n",(0,i.jsx)(n.h3,{id:"yubihsm",children:"YubiHSM"}),"\n",(0,i.jsxs)(n.p,{children:["Detailed information on how to setup a KMS with ",(0,i.jsx)(n.a,{href:"https://www.yubico.com/products/hardware-security-module/",children:"YubiHSM 2"})," can be found ",(0,i.jsx)(n.a,{href:"https://github.com/iqlusioninc/tmkms/blob/master/README.yubihsm.md",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"ledger-tendermint-app",children:"Ledger Tendermint app"}),"\n",(0,i.jsxs)(n.p,{children:["Detailed information on how to setup a KMS with Ledger Tendermint App can be found ",(0,i.jsx)(n.a,{href:"/fr/nodes/kms_ledger",children:"here"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var i=s(67294);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);