"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[83994],{9263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>h,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(85893),s=t(11151);const r={sidebar_position:5},h="block_height/1",l={id:"block_height_1",title:"block_height_1",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates/block_height_1.md",sourceDirName:".",slug:"/block_height_1",permalink:"/predicates/next/block_height_1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"bech32_address_2",permalink:"/predicates/next/bech32_address_2"},next:{title:"block_time_1",permalink:"/predicates/next/block_time_1"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Signature",id:"signature",level:2},{value:"Examples",id:"examples",level:2},{value:"Retrieve the block height of the current block",id:"retrieve-the-block-height-of-the-current-block",level:3},{value:"Check that the block height is greater than a certain value",id:"check-that-the-block-height-is-greater-than-a-certain-value",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"block_height1",children:"block_height/1"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"block_height/1"})," is a predicate which unifies the given term with the current block height."]}),"\n",(0,i.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"block_height(?Height) is det\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Height represents the current chain height at the time of the query."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"retrieve-the-block-height-of-the-current-block",children:"Retrieve the block height of the current block"}),"\n",(0,i.jsx)(n.p,{children:"This scenario demonstrates how to retrieve the block height of the current block."}),"\n",(0,i.jsx)(n.p,{children:"Here's the steps of the scenario:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Given"})," a block with the following header:"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"key"}),(0,i.jsx)(n.th,{children:"value"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Height"}),(0,i.jsx)(n.td,{children:"100"})]})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-prolog",children:"block_height(Height).\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"When"})," the query is run"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'height: 100\ngas_used: 2222\nanswer:\n  has_more: false\n  variables: ["Height"]\n  results:\n  - substitutions:\n    - variable: Height\n      expression: "100"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"check-that-the-block-height-is-greater-than-a-certain-value",children:"Check that the block height is greater than a certain value"}),"\n",(0,i.jsx)(n.p,{children:"This scenario demonstrates how to check that the block height is greater than 100. This predicate is useful for\ngovernance which requires a certain block height to be reached before a certain action is taken."}),"\n",(0,i.jsx)(n.p,{children:"Here's the steps of the scenario:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Given"})," a block with the following header:"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"key"}),(0,i.jsx)(n.th,{children:"value"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Height"}),(0,i.jsx)(n.td,{children:"101"})]})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-prolog",children:"block_height(Height),\nHeight > 100.\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"When"})," the query is run"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'height: 101\ngas_used: 2223\nanswer:\n  has_more: false\n  variables: ["Height"]\n  results:\n  - substitutions:\n    - variable: Height\n      expression: "101"\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>h});var i=t(67294);const s={},r=i.createContext(s);function h(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:h(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);