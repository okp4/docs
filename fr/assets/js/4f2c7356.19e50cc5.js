"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[18744],{27875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(85893),s=n(11151);const i={sidebar_position:9},r="crypto_data_hash/3",o={id:"crypto_data_hash_3",title:"crypto_data_hash_3",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates/crypto_data_hash_3.md",sourceDirName:".",slug:"/crypto_data_hash_3",permalink:"/fr/predicates/next/crypto_data_hash_3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"defaultSidebar",previous:{title:"consult_1",permalink:"/fr/predicates/next/consult_1"},next:{title:"current_output_1",permalink:"/fr/predicates/next/current_output_1"}},h={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"crypto_data_hash3",children:"crypto_data_hash/3"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"crypto_data_hash/3"})," is a predicate that computes the Hash of the given Data using different algorithms."]}),"\n",(0,a.jsx)(t.p,{children:"The signature is as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"crypto_data_hash(+Data, -Hash, +Options) is det\ncrypto_data_hash(+Data, +Hash, +Options) is det\n"})}),"\n",(0,a.jsx)(t.p,{children:"Where:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Data represents the data to be hashed, given as an atom, or code-list."}),"\n",(0,a.jsx)(t.li,{children:"Hash represents the Hashed value of Data, which can be given as an atom or a variable."}),"\n",(0,a.jsx)(t.li,{children:"Options are additional configurations for the hashing process. Supported options include: encoding(+Format) which specifies the encoding used for the Data, and algorithm(+Alg) which chooses the hashing algorithm among the supported ones (see below for details)."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For Format, the supported encodings are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"utf8 (default), the UTF-8 encoding represented as an atom."}),"\n",(0,a.jsx)(t.li,{children:"text, the plain text encoding represented as an atom."}),"\n",(0,a.jsx)(t.li,{children:"hex, the hexadecimal encoding represented as an atom."}),"\n",(0,a.jsx)(t.li,{children:"octet, the raw byte encoding depicted as a list of integers ranging from 0 to 255."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For Alg, the supported algorithms are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"sha256 (default): The SHA-256 algorithm."}),"\n",(0,a.jsx)(t.li,{children:"sha512: The SHA-512 algorithm."}),"\n",(0,a.jsx)(t.li,{children:"md5: (insecure) The MD5 algorithm."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Note: Due to the principles of the hash algorithm (pre-image resistance), this predicate can only compute the hash value from input data, and cannot compute the original input data from the hash value."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"# Compute the SHA-256 hash of the given data and unify it with the given Hash.\n- crypto_data_hash('Hello AXONE', Hash).\n\n# Compute the SHA-256 hash of the given hexadecimal data and unify it with the given Hash.\n- crypto_data_hash('9b038f8ef6918cbb56040dfda401b56b...', Hash, encoding(hex)).\n\n# Compute the SHA-256 hash of the given hexadecimal data and unify it with the given Hash.\n- crypto_data_hash([127, ...], Hash, encoding(octet)).\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(67294);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);