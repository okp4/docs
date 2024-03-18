"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[57169],{54509:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(85893),a=n(11151);const o={sidebar_position:8},t="consult/1",l={id:"consult_1",title:"consult_1",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates/consult_1.md",sourceDirName:".",slug:"/consult_1",permalink:"/predicates/next/consult_1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"chain_id_1",permalink:"/predicates/next/chain_id_1"},next:{title:"crypto_data_hash_3",permalink:"/predicates/next/crypto_data_hash_3"}},c={},i=[{value:"Description",id:"description",level:2},{value:"Signature",id:"signature",level:2},{value:"Examples",id:"examples",level:2},{value:"Consult a Prolog program",id:"consult-a-prolog-program",level:3},{value:"Consult a Prolog program which also consults another Prolog program",id:"consult-a-prolog-program-which-also-consults-another-prolog-program",level:3},{value:"Consult several Prolog programs",id:"consult-several-prolog-programs",level:3}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"consult1",children:"consult/1"}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"consult/1"})," is a predicate which read files as Prolog source code."]}),"\n",(0,r.jsx)(s.h2,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-text",children:"consult(+Files) is det\n"})}),"\n",(0,r.jsx)(s.p,{children:"where:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Files represents the source files to be loaded. It can be an atom or a list of atoms representing the source files."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The Files argument are typically URIs that point to the sources file to be loaded through the Virtual File System (VFS). Please refer to the open/4 predicate for more information about the VFS."}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.h3,{id:"consult-a-prolog-program",children:"Consult a Prolog program"}),"\n",(0,r.jsx)(s.p,{children:"This scenario demonstrates how to consult (load) a Prolog program from a CosmWasm smart contract."}),"\n",(0,r.jsx)(s.p,{children:"Assuming the existence of a CosmWasm smart contract configured to store a Prolog program, we construct a URI to specifically\nidentify this smart contract and pinpoint the Prolog program we want to consult via a query message."}),"\n",(0,r.jsx)(s.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Given"}),' the CosmWasm smart contract "okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht" and the behavior:']}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'message: |\n  {\n    "object_data": {\n      "id": "4cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05"\n    }\n  }\nresponse: |\n  hello("World!").\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Given"})," the program:"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-prolog",children:':-\n  uri_encoded(query_value, \'{"object_data":{"id": "4cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05"}}\', Query),\n  atom_concat(\'cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?base64Decode=false&query=\', Query, URI),\n  consult(URI).\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-prolog",children:"hello(Who).\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'has_more: false\nvariables: ["Who"]\nresults:\n- substitutions:\n  - variable: Who\n    expression: "[\'W\',o,r,l,d,!]"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"consult-a-prolog-program-which-also-consults-another-prolog-program",children:"Consult a Prolog program which also consults another Prolog program"}),"\n",(0,r.jsx)(s.p,{children:"This scenario demonstrates the capability of a Prolog program to consult another Prolog program. This is useful for\nmodularizing Prolog programs and reusing code."}),"\n",(0,r.jsx)(s.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Given"}),' the CosmWasm smart contract "okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht" and the behavior:']}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'message: |\n  {\n    "object_data": {\n      "id": "4cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05"\n    }\n  }\nresponse: |\n  :- consult(\'cosmwasm:storage:okp412ssv28mzr02jffvy4x39akrpky9ykfafzyjzmvgsqqdw78yjevpqgmqnmk?query=%7B%22object_data%22%3A%7B%22id%22%3A%20%225d3933430d0a12794fae719e0db87b6ec5f549b2%22%7D%7D&base64Decode=false\').\n  a.\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Given"}),' the CosmWasm smart contract "okp412ssv28mzr02jffvy4x39akrpky9ykfafzyjzmvgsqqdw78yjevpqgmqnmk" and the behavior:']}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'message: |\n  {\n    "object_data": {\n      "id": "5d3933430d0a12794fae719e0db87b6ec5f549b2"\n    }\n  }\nresponse: |\n  b.\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-prolog",children:"consult('cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=%7B%22object_data%22%3A%7B%22id%22%3A%20%224cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05%22%7D%7D&base64Decode=false'),\na, b.\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"When"})," the query is run (limited to 2 solutions)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"has_more: false\nvariables:\nresults:\n- substitutions:\n"})}),"\n",(0,r.jsx)(s.h3,{id:"consult-several-prolog-programs",children:"Consult several Prolog programs"}),"\n",(0,r.jsx)(s.p,{children:"This scenario demonstrates the consultation of several Prolog programs from different CosmWasm smart contracts."}),"\n",(0,r.jsx)(s.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Given"}),' the CosmWasm smart contract "okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht" and the behavior:']}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'message: |\n  {\n    "object_data": {\n      "id": "4cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05"\n    }\n  }\nresponse: |\n  program(a).\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Given"}),' the CosmWasm smart contract "okp412ssv28mzr02jffvy4x39akrpky9ykfafzyjzmvgsqqdw78yjevpqgmqnmk" and the behavior:']}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'message: |\n  {\n    "object_data": {\n      "id": "5d3933430d0a12794fae719e0db87b6ec5f549b2"\n    }\n  }\nresponse: |\n  program(b).\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Given"})," the program:"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-prolog",children:"  :- consult([\n    'cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=%7B%22object_data%22%3A%7B%22id%22%3A%20%224cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05%22%7D%7D&base64Decode=false',\n    'cosmwasm:storage:okp412ssv28mzr02jffvy4x39akrpky9ykfafzyjzmvgsqqdw78yjevpqgmqnmk?query=%7B%22object_data%22%3A%7B%22id%22%3A%20%225d3933430d0a12794fae719e0db87b6ec5f549b2%22%7D%7D&base64Decode=false'\n   ]).\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-prolog",children:"source_file(File).\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"When"})," the query is run (limited to 2 solutions)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'has_more: false\nvariables: ["File"]\nresults:\n- substitutions:\n  - variable: File\n    expression: "\'cosmwasm:storage:okp412ssv28mzr02jffvy4x39akrpky9ykfafzyjzmvgsqqdw78yjevpqgmqnmk?query=%7B%22object_data%22%3A%7B%22id%22%3A%20%225d3933430d0a12794fae719e0db87b6ec5f549b2%22%7D%7D&base64Decode=false\'"\n- substitutions:\n  - variable: File\n    expression: "\'cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=%7B%22object_data%22%3A%7B%22id%22%3A%20%224cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05%22%7D%7D&base64Decode=false\'"\n'})})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>t});var r=n(67294);const a={},o=r.createContext(a);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);