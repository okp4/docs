"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[11630],{86477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(85893),s=n(11151);const i={sidebar_position:10},o="current_output/1",l={id:"current_output_1",title:"current_output_1",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates_versioned_docs/version-v8.0.0/current_output_1.md",sourceDirName:".",slug:"/current_output_1",permalink:"/fr/predicates/current_output_1",draft:!1,unlisted:!1,tags:[],version:"v8.0.0",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"crypto_data_hash_3",permalink:"/fr/predicates/crypto_data_hash_3"},next:{title:"did_components_2",permalink:"/fr/predicates/did_components_2"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Signature",id:"signature",level:2},{value:"Examples",id:"examples",level:2},{value:"Write a char to the current output",id:"write-a-char-to-the-current-output",level:3},{value:"Write characters to the current output (without limit)",id:"write-characters-to-the-current-output-without-limit",level:3},{value:"Write characters to the current output (with limit)",id:"write-characters-to-the-current-output-with-limit",level:3},{value:"Write UTF-8 character to the current output (with limit)",id:"write-utf-8-character-to-the-current-output-with-limit",level:3}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"current_output1",children:"current_output/1"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"current_output/1"})," is a predicate that unifies the given term with the current output stream."]}),"\n",(0,r.jsx)(t.h2,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"current_output(-Stream) is det\n"})}),"\n",(0,r.jsx)(t.p,{children:"where:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Stream represents the current output stream."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This predicate connects to the default output stream available for user interactions, allowing the user to perform write operations."}),"\n",(0,r.jsx)(t.p,{children:"The outcome of the stream's content throughout the execution of a query is provided as a string within the user_output field in the query's response. However, it's important to note that the maximum length of the output is constrained by the max_query_output_size setting, meaning only the final max_query_output_size bytes (not characters) of the output are included in the response."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.h3,{id:"write-a-char-to-the-current-output",children:"Write a char to the current output"}),"\n",(0,r.jsx)(t.p,{children:"This scenario demonstrates how to write a character to the current output, and get the content in the response of the\nrequest."}),"\n",(0,r.jsx)(t.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the module configuration:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "limits": {\n    "max_user_output_size": "5"\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the program:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-prolog",children:"write_char_to_user_output(C) :-\n    current_output(UserStream), % get the current output stream\n    put_char(UserStream, C).    % write the char to the user stream\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-prolog",children:"write_char_to_user_output(x).\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"height: 42\ngas_used: 2241\nanswer:\n  has_more: false\n  variables:\n  results:\n  - substitutions:\nuser_output: |\n  x\n"})}),"\n",(0,r.jsx)(t.h3,{id:"write-characters-to-the-current-output-without-limit",children:"Write characters to the current output (without limit)"}),"\n",(0,r.jsx)(t.p,{children:"This scenario demonstrates how to write some characters to the current output, and get the content in the response of the\nrequest. This is helpful for debugging purposes."}),"\n",(0,r.jsx)(t.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the module configuration:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "limits": {\n    "max_user_output_size": "15"\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the program:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-prolog",children:"log_message(Message) :-\n    current_output(UserStream), % get the current output stream\n    write(UserStream, Message), % write the message to the user stream\n    put_char(UserStream, '\\n').\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-prolog",children:"log_message('Hello world!').\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"height: 42\ngas_used: 2248\nanswer:\n  has_more: false\n  variables:\n  results:\n  - substitutions:\nuser_output: |\n  Hello world!\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"write-characters-to-the-current-output-with-limit",children:"Write characters to the current output (with limit)"}),"\n",(0,r.jsx)(t.p,{children:"This scenario demonstrates the process of writing characters to the current user output, with a limit configured\nin the logic module. So if the message is longer than this limit, the output will be truncated."}),"\n",(0,r.jsx)(t.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the module configuration:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "limits": {\n    "max_user_output_size": "5"\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the program:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-prolog",children:"log_message(Message) :-\n    current_output(UserStream), % get the current output stream\n    write(UserStream, Message). % write the message to the user stream\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-prolog",children:"log_message('Hello world!').\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"height: 42\ngas_used: 2241\nanswer:\n  has_more: false\n  variables:\n  results:\n  - substitutions:\nuser_output: |\n  orld!\n"})}),"\n",(0,r.jsx)(t.h3,{id:"write-utf-8-character-to-the-current-output-with-limit",children:"Write UTF-8 character to the current output (with limit)"}),"\n",(0,r.jsx)(t.p,{children:"This scenario illustrates the impact of UTF-8 characters on output limits measured in bytes, not character count.\nCharacters such as emojis require more space; for example, the wizard emoji (\ud83e\uddd9) occupies 4 bytes, effectively counting\nas four units. As a result, the limit is reached more quickly with these characters, which means that the number of\ncharacters in the user output is less than expected."}),"\n",(0,r.jsx)(t.p,{children:"Here's the steps of the scenario:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the module configuration:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "limits": {\n    "max_user_output_size": "5"\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the program:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-prolog",children:"log_message([]).\nlog_message([H|T]) :-\n    current_output(UserStream),\n    put_char(UserStream, H),\n    log_message(T).\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-prolog",children:'log_message("Hello \ud83e\uddd9!").\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"When"})," the query is run"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'height: 42\ngas_used: 2255\nanswer:\n  has_more: false\n  variables:\n  results:\n  - substitutions:\nuser_output: "\ud83e\uddd9!"\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);