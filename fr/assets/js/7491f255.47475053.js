"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[32358],{85989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(85893),r=t(11151);const s={sidebar_position:6},l="block_time/1",c={id:"block_time_1",title:"block_time_1",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates/block_time_1.md",sourceDirName:".",slug:"/block_time_1",permalink:"/fr/predicates/next/block_time_1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"block_height_1",permalink:"/fr/predicates/next/block_height_1"},next:{title:"chain_id_1",permalink:"/fr/predicates/next/chain_id_1"}},h={},a=[{value:"Description",id:"description",level:2},{value:"Signature",id:"signature",level:2},{value:"Examples",id:"examples",level:2},{value:"Retrieve the block time of the current block",id:"retrieve-the-block-time-of-the-current-block",level:3},{value:"Check that the block time is greater than a certain time",id:"check-that-the-block-time-is-greater-than-a-certain-time",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"block_time1",children:"block_time/1"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"block_time/1"})," is a predicate which unifies the given term with the current block time."]}),"\n",(0,i.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"block_time(?Time) is det\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Time represents the current chain time at the time of the query."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"retrieve-the-block-time-of-the-current-block",children:"Retrieve the block time of the current block"}),"\n",(0,i.jsx)(n.p,{children:"This scenario demonstrates how to retrieve the block time of the current block."}),"\n",(0,i.jsx)(n.p,{children:"Here's the steps of the scenario:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Given"})," a block with the following header:"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"key"}),(0,i.jsx)(n.th,{children:"value"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Time"}),(0,i.jsx)(n.td,{children:"1709550216"})]})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-prolog",children:"block_time(Time).\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"When"})," the query is run"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'height: 42\ngas_used: 2222\nanswer:\n  has_more: false\n  variables: ["Time"]\n  results:\n  - substitutions:\n    - variable: Time\n      expression: "1709550216"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"check-that-the-block-time-is-greater-than-a-certain-time",children:"Check that the block time is greater than a certain time"}),"\n",(0,i.jsxs)(n.p,{children:["This scenario demonstrates how to check that the block time is greater than 1709550216 seconds (Monday 4 March 2024 11:03:36 GMT)\nusing the ",(0,i.jsx)(n.code,{children:"block_time/1"})," predicate. This predicate is useful for governance which requires a certain block time to be\nreached before a certain action is taken."]}),"\n",(0,i.jsx)(n.p,{children:"Here's the steps of the scenario:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Given"})," a block with the following header:"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"key"}),(0,i.jsx)(n.th,{children:"value"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Time"}),(0,i.jsx)(n.td,{children:"1709550217"})]})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-prolog",children:"block_time(Time),\nTime > 1709550216.\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"When"})," the query is run"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'height: 42\ngas_used: 2223\nanswer:\n  has_more: false\n  variables: ["Time"]\n  results:\n  - substitutions:\n    - variable: Time\n      expression: "1709550217"\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var i=t(67294);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);