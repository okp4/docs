"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[28483],{89393:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=s(85893),t=s(11151);const o={sidebar_position:16},a="open/4",i={id:"open_4",title:"open_4",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates_versioned_docs/version-v7.1.0/open_4.md",sourceDirName:".",slug:"/open_4",permalink:"/predicates/open_4",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"defaultSidebar",previous:{title:"json_prolog_2",permalink:"/predicates/json_prolog_2"},next:{title:"open_3",permalink:"/predicates/open_3"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Signature",id:"signature",level:2},{value:"Virtual File System \\(VFS\\)",id:"virtual-file-system-vfs",level:2},{value:"CosmWasm URI",id:"cosmwasm-uri",level:2},{value:"Examples",id:"examples",level:2},{value:"Open a resource for reading",id:"open-a-resource-for-reading",level:3},{value:"Open an existing resource and read its content",id:"open-an-existing-resource-and-read-its-content",level:3},{value:"Open an existing resource and read its content (base64-encoded)",id:"open-an-existing-resource-and-read-its-content-base64-encoded",level:3},{value:"Try to open a non-existing resource",id:"try-to-open-a-non-existing-resource",level:3},{value:"Try to open a resource for writing",id:"try-to-open-a-resource-for-writing",level:3},{value:"Try to open a resource for appending",id:"try-to-open-a-resource-for-appending",level:3},{value:"Pass incorrect options to open/4",id:"pass-incorrect-options-to-open4",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"open4",children:"open/4"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"open/4"})," is a predicate which opens a stream to a source or sink."]}),"\n",(0,r.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"open(+SourceSink, +Mode, -Stream, +Options)\n"})}),"\n",(0,r.jsx)(n.p,{children:"where:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SourceSink is an atom representing the source or sink of the stream, which is typically a URI."}),"\n",(0,r.jsx)(n.li,{children:'Mode is an atom representing the mode of the stream to be opened. It can be one of "read", "write", or "append".'}),"\n",(0,r.jsx)(n.li,{children:"Stream is the stream to be opened."}),"\n",(0,r.jsx)(n.li,{children:"Options is a list of options. No options are currently defined, so the list should be empty."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"open/4 gives True when SourceSink can be opened in Mode with the given Options."}),"\n",(0,r.jsx)(n.h2,{id:"virtual-file-system-vfs",children:"Virtual File System \\(VFS\\)"}),"\n",(0,r.jsx)(n.p,{children:"The logical module interprets on-chain Prolog programs, relying on a Virtual Machine that isolates execution from the external environment. Consequently, the open/4 predicate doesn't access the physical file system as one might expect. Instead, it operates with a Virtual File System (VFS), a conceptual layer that abstracts the file system. This abstraction offers a unified view across various storage systems, adhering to the constraints imposed by blockchain technology."}),"\n",(0,r.jsx)(n.p,{children:"This VFS extends the file concept to resources, which are identified by a Uniform Resource Identifier (URI). A URI specifies the access protocol for the resource, its path, and any necessary parameters."}),"\n",(0,r.jsx)(n.h2,{id:"cosmwasm-uri",children:"CosmWasm URI"}),"\n",(0,r.jsx)(n.p,{children:"The cosmwasm URI enables interaction with instantiated CosmWasm smart contract on the blockchain. The URI is used to query the smart contract and retrieve the response. The query is executed on the smart contract, and the response is returned as a stream. Query parameters are passed as part of the URI to customize the interaction with the smart contract."}),"\n",(0,r.jsx)(n.p,{children:"Its format is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"cosmwasm:{contract_name}:{contract_address}?query={contract_query}[&base64Decode={true|false}]\n"})}),"\n",(0,r.jsx)(n.p,{children:"where:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'{contract_name}: For informational purposes, indicates the name or type of the smart contract (e.g., "okp4-objectarium").'}),"\n",(0,r.jsx)(n.li,{children:"{contract_address}: Specifies the smart contract instance to query."}),"\n",(0,r.jsx)(n.li,{children:"{contract_query}: The query to be executed on the smart contract. It is a JSON object that specifies the query payload."}),"\n",(0,r.jsx)(n.li,{children:"base64Decode: (Optional) If true, the response is base64-decoded. Otherwise, the response is returned as is."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"open-a-resource-for-reading",children:"Open a resource for reading"}),"\n",(0,r.jsx)(n.p,{children:"This scenario showcases the procedure for accessing a resource stored within a CosmWasm smart contract for reading\npurposes and obtaining the stream's properties."}),"\n",(0,r.jsx)(n.p,{children:"Assuming the existence of a CosmWasm smart contract configured to store resources, we construct a URI to specifically\nidentify the smart contract and pinpoint the resource we aim to retrieve via a query message."}),"\n",(0,r.jsx)(n.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"}),' the CosmWasm smart contract "okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht" and the behavior:']}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'message: |\n  {\n    "object_data": {\n      "id": "4cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05"\n    }\n  }\nresponse: |\n  Hello, World!\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"})," the program:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prolog",children:"atomic_list_concat([], '').\natomic_list_concat([H|T], Atom) :-\n  atomic_list_concat(T, TAtom),\n  atom_concat(H, TAtom, Atom).\n\nresource_uri(Contract, Query, URI) :-\n  uri_encoded(query_value, Query, EncodedQuery),\n  atomic_list_concat(['cosmwasm:storage:', Contract, '?query=', EncodedQuery, '&base64Decode=false'], URI).\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prolog",children:'resource_uri(\n  \'okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht\',\n  \'{"object_data":{"id": "4cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05"}}\',\n  URI),\nopen(URI, read, _, []).\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'height: 42\ngas_used: 2228\nanswer:\n  has_more: false\n  variables: ["URI"]\n  results:\n  - substitutions:\n    - variable: URI\n      expression: "\'cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=%7B%22object_data%22%3A%7B%22id%22%3A%20%224cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05%22%7D%7D&base64Decode=false\'"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"open-an-existing-resource-and-read-its-content",children:"Open an existing resource and read its content"}),"\n",(0,r.jsx)(n.p,{children:"This scenario shows a more complex example of how to open an existing resource stored in a CosmWasm smart contract\nand read its content."}),"\n",(0,r.jsx)(n.p,{children:"The resource is opened for reading, and the content is read into a list of characters. Finally, the stream is closed."}),"\n",(0,r.jsx)(n.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"}),' the CosmWasm smart contract "okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht" and the behavior:']}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'message: |\n  {\n    "object_data": {\n      "id": "4cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05"\n    }\n  }\nresponse: |\n  Hello, World!\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"})," the program:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prolog",children:"read_resource(Resource, Chars) :-\n  open(Resource, read, Stream, []),\n  read_string(Stream, _, Chars),\n  close(Stream).\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prolog",children:"read_resource('cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=%7B%22object_data%22%3A%7B%22id%22%3A%20%224cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05%22%7D%7D&base64Decode=false', Chars).\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'height: 42\ngas_used: 2224\nanswer:\n  has_more: false\n  variables: ["Chars"]\n  results:\n  - substitutions:\n    - variable: Chars\n      expression: "\'Hello, World!\'"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"open-an-existing-resource-and-read-its-content-base64-encoded",children:"Open an existing resource and read its content (base64-encoded)"}),"\n",(0,r.jsxs)(n.p,{children:["This scenario is a variation of the previous one. The difference is that the smart contract returns a base64-encoded\nresponse. For this reason, we set the ",(0,r.jsx)(n.code,{children:"base64Decode"})," parameter to ",(0,r.jsx)(n.code,{children:"true"})," in the query (the default value is ",(0,r.jsx)(n.code,{children:"false"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"}),' the CosmWasm smart contract "okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht" and the behavior:']}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'message: |\n  {\n    "object_data": {\n      "id": "4cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05"\n    }\n  }\nresponse: |\n  "SGVsbG8sIFdvcmxkIQ=="\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"})," the program:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prolog",children:"read_resource(Resource, Chars) :-\n  open(Resource, read, Stream, []),\n  read_string(Stream, _, Chars),\n  close(Stream).\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prolog",children:"read_resource('cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=%7B%22object_data%22%3A%7B%22id%22%3A%20%224cbe36399aabfcc7158ee7a66cbfffa525bb0ceab33d1ff2cff08759fe0a9b05%22%7D%7D&base64Decode=true', Chars).\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'height: 42\ngas_used: 2224\nanswer:\n  has_more: false\n  variables: ["Chars"]\n  results:\n  - substitutions:\n    - variable: Chars\n      expression: "\'Hello, World!\'"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"try-to-open-a-non-existing-resource",children:"Try to open a non-existing resource"}),"\n",(0,r.jsx)(n.p,{children:"This scenario demonstrates the system's response to trying to open a non-existing resource."}),"\n",(0,r.jsx)(n.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prolog",children:"open('cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=foo', read, Stream, []).\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'height: 42\ngas_used: 2222\nanswer:\n  has_more: false\n  variables: ["Stream"]\n  results:\n  - error: "error(existence_error(source_sink,cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=foo),open/4)"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"try-to-open-a-resource-for-writing",children:"Try to open a resource for writing"}),"\n",(0,r.jsx)(n.p,{children:"This scenario demonstrates the system's response to opening a resource for writing, but the resource does not allow\nwriting. This is the case for resources hosted in smart contracts which are read-only."}),"\n",(0,r.jsx)(n.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prolog",children:"open('cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=foo', write, Stream, []).\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'height: 42\ngas_used: 2222\nanswer:\n  has_more: false\n  variables: ["Stream"]\n  results:\n  - error: "error(permission_error(input,stream,cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=foo),open/4)"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"try-to-open-a-resource-for-appending",children:"Try to open a resource for appending"}),"\n",(0,r.jsx)(n.p,{children:"This scenario demonstrates the system's response to opening a resource for appending, but the resource does not allow\nappending. This is the case for resources hosted in smart contracts which are read-only."}),"\n",(0,r.jsx)(n.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prolog",children:"open('cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=foo', write, Stream, []).\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'height: 42\ngas_used: 2222\nanswer:\n  has_more: false\n  variables: ["Stream"]\n  results:\n  - error: "error(permission_error(input,stream,cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=foo),open/4)"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"pass-incorrect-options-to-open4",children:"Pass incorrect options to open/4"}),"\n",(0,r.jsx)(n.p,{children:"This scenario demonstrates the system's response to opening a resource with incorrect options."}),"\n",(0,r.jsx)(n.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-prolog",children:"open('cosmwasm:storage:okp415ekvz3qdter33mdnk98v8whv5qdr53yusksnfgc08xd26fpdn3ts8gddht?query=foo', read, Stream, [non_existing_option]).\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'height: 42\ngas_used: 2222\nanswer:\n  has_more: false\n  variables: ["Stream"]\n  results:\n  - error: "error(domain_error(empty_list,[non_existing_option]),open/4)"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>a});var r=s(67294);const t={},o=r.createContext(t);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);