"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[31946],{60496:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>r});var s=a(85893),t=a(11151);const c={sidebar_position:3},l="bank_spendable_balances/2",i={id:"bank_spendable_balances_2",title:"bank_spendable_balances_2",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates_versioned_docs/version-v7.0.0/bank_spendable_balances_2.md",sourceDirName:".",slug:"/bank_spendable_balances_2",permalink:"/fr/predicates/v7.0.0/bank_spendable_balances_2",draft:!1,unlisted:!1,tags:[],version:"v7.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"bank_locked_balances_2",permalink:"/fr/predicates/v7.0.0/bank_locked_balances_2"},next:{title:"bech32_address_2",permalink:"/fr/predicates/v7.0.0/bech32_address_2"}},o={},r=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bank_spendable_balances2",children:"bank_spendable_balances/2"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"bank_spendable_balances/2"})," is a predicate which unifies the given terms with the list of spendable coins of the given account."]}),"\n",(0,s.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"bank_spendable_balances(?Account, ?Balances)\n"})}),"\n",(0,s.jsx)(n.p,{children:"where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Account represents the account address (in Bech32 format)."}),"\n",(0,s.jsx)(n.li,{children:"Balances represents the spendable balances of the account as a list of pairs of coin denomination and amount."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"# Query the spendable balances of the account.\n- bank_spendable_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', X).\n\n# Query the spendable balances of all accounts. The result is a list of pairs of account address and balances.\n- bank_spendable_balances(X, Y).\n\n# Query the first spendable balances of the given account by unifying the denomination and amount with the given terms.\n- bank_spendable_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', [-(D, A), _]).\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>l});var s=a(67294);const t={},c=s.createContext(t);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);