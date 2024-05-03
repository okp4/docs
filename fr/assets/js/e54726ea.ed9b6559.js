"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[24688],{69986:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=n(85893),t=n(11151);const r={sidebar_position:10},a="ecdsa_verify/4",d={id:"ecdsa_verify_4",title:"ecdsa_verify_4",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates_versioned_docs/version-v7.0.0/ecdsa_verify_4.md",sourceDirName:".",slug:"/ecdsa_verify_4",permalink:"/fr/predicates/v7.0.0/ecdsa_verify_4",draft:!1,unlisted:!1,tags:[],version:"v7.0.0",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"did_components_2",permalink:"/fr/predicates/v7.0.0/did_components_2"},next:{title:"eddsa_verify_4",permalink:"/fr/predicates/v7.0.0/eddsa_verify_4"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"ecdsa_verify4",children:"ecdsa_verify/4"}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"ecdsa_verify/4"})," determines if a given signature is valid as per the ECDSA algorithm for the provided data, using the specified public key."]}),"\n",(0,s.jsx)(i.p,{children:"The signature is as follows:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-text",children:"ecdsa_verify(+PubKey, +Data, +Signature, +Options), which is semi-deterministic.\n"})}),"\n",(0,s.jsx)(i.p,{children:"Where:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"PubKey is the 33-byte compressed public key, as specified in section 4.3.6 of ANSI X9.62."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Data is the hash of the signed message, which can be either an atom or a list of bytes."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Signature represents the ASN.1 encoded signature corresponding to the Data."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Options are additional configurations for the verification process. Supported options include: encoding(+Format) which specifies the encoding used for the data, and type(+Alg) which chooses the algorithm within the ECDSA family (see below for details)."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"For Format, the supported encodings are:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"hex (default), the hexadecimal encoding represented as an atom."}),"\n",(0,s.jsx)(i.li,{children:"octet, the plain byte encoding depicted as a list of integers ranging from 0 to 255."}),"\n",(0,s.jsx)(i.li,{children:"text, the plain text encoding represented as an atom."}),"\n",(0,s.jsx)(i.li,{children:"utf8 (default), the UTF-8 encoding represented as an atom."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"For Alg, the supported algorithms are:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"secp256r1 (default): Also known as P-256 and prime256v1."}),"\n",(0,s.jsx)(i.li,{children:"secp256k1: The Koblitz elliptic curve used in Bitcoin's public-key cryptography."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-text",children:"# Verify a signature for hexadecimal data using the ECDSA secp256r1 algorithm.\n- ecdsa_verify([127, ...], '9b038f8ef6918cbb56040dfda401b56b...', [23, 56, ...], encoding(hex))\n\n# Verify a signature for binary data using the ECDSA secp256k1 algorithm.\n- ecdsa_verify([127, ...], [56, 90, ..], [23, 56, ...], [encoding(octet), type(secp256k1)])\n"})})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>a});var s=n(67294);const t={},r=s.createContext(t);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);