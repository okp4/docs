"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[22971],{62721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(85893),i=t(11151);const s={sidebar_position:18},a="read_string/3",o={id:"read_string_3",title:"read_string_3",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates_versioned_docs/version-v7.1.0/read_string_3.md",sourceDirName:".",slug:"/read_string_3",permalink:"/fr/predicates/v7.1.0/read_string_3",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"defaultSidebar",previous:{title:"open_3",permalink:"/fr/predicates/v7.1.0/open_3"},next:{title:"source_file_1",permalink:"/fr/predicates/v7.1.0/source_file_1"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"read_string3",children:"read_string/3"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"read_string/3"})," is a predicate that reads characters from the provided Stream and unifies them with String. Users can optionally specify a maximum length for reading; if the stream reaches this length, the reading stops. If Length remains unbound, the entire Stream is read, and upon completion, Length is unified with the count of characters read."]}),"\n",(0,r.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"read_string(+Stream, ?Length, -String) is det\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Stream is the input stream to read from."}),"\n",(0,r.jsx)(n.li,{children:"Length is the optional maximum number of characters to read from the Stream. If unbound, denotes the full length of Stream."}),"\n",(0,r.jsx)(n.li,{children:"String is the resultant string after reading from the Stream."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"# Given a file `foo.txt` that contains `Hello World`:\n\n file_to_string(File, String, Length) :-\n open(File, read, In),\n read_string(In, Length, String),\n close(Stream).\n\n# It gives:\n?- file_to_string('path/file/foo.txt', String, Length).\n\nString = 'Hello World'\nLength = 11\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);