"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[38531],{8137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(85893),i=n(11151);const r={sidebar_position:20},o="string_bytes/3",c={id:"string_bytes_3",title:"string_bytes_3",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates_versioned_docs/version-v7.1.0/string_bytes_3.md",sourceDirName:".",slug:"/string_bytes_3",permalink:"/predicates/string_bytes_3",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"source_file_1",permalink:"/predicates/source_file_1"},next:{title:"uri_encoded_3",permalink:"/predicates/uri_encoded_3"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"string_bytes3",children:"string_bytes/3"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"string_bytes/3"})," is a predicate that unifies a string with a list of bytes, returning true when the (Unicode) String is represented by Bytes in Encoding."]}),"\n",(0,s.jsx)(t.p,{children:"The signature is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"string_bytes(?String, ?Bytes, +Encoding)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Where:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"String is the string to convert to bytes. It can be an Atom, string or list of characters codes."}),"\n",(0,s.jsx)(t.li,{children:"Bytes is the list of numbers between 0 and 255 that represent the sequence of bytes."}),"\n",(0,s.jsx)(t.li,{children:"Encoding is the encoding to use for the conversion."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Encoding can be one of the following: - 'text' considers the string as a sequence of Unicode characters. - 'octet' considers the string as a sequence of bytes. - '<encoding>' considers the string as a sequence of characters in the given encoding."}),"\n",(0,s.jsx)(t.p,{children:"At least one of String or Bytes must be instantiated."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"# Convert a string to a list of bytes.\n- string_bytes('Hello World', Bytes, octet).\n\n# Convert a list of bytes to a string.\n- string_bytes(String, [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100], octet).\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(67294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);