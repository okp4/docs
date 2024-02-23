"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[58322],{37718:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var a=e(85893),o=e(11151);const s={},c=void 0,i={id:"okp4d_tx_interchain-accounts_host_generate-packet-data",title:"okp4d_tx_interchain-accounts_host_generate-packet-data",description:"okp4d tx interchain-accounts host generate-packet-data",source:"@site/commands/okp4d_tx_interchain-accounts_host_generate-packet-data.md",sourceDirName:".",slug:"/okp4d_tx_interchain-accounts_host_generate-packet-data",permalink:"/commands/next/okp4d_tx_interchain-accounts_host_generate-packet-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_interchain-accounts_host",permalink:"/commands/next/okp4d_tx_interchain-accounts_host"},next:{title:"okp4d_tx_logic",permalink:"/commands/next/okp4d_tx_logic"}},d={},r=[{value:"okp4d tx interchain-accounts host generate-packet-data",id:"okp4d-tx-interchain-accounts-host-generate-packet-data",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function p(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"okp4d-tx-interchain-accounts-host-generate-packet-data",children:"okp4d tx interchain-accounts host generate-packet-data"}),"\n",(0,a.jsx)(t.p,{children:"Generates protobuf or proto3 JSON encoded ICA packet data."}),"\n",(0,a.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(t.p,{children:'generate-packet-data accepts a message string and serializes it (depending on the\nencoding parameter) using protobuf or proto3 JSON into packet data which is outputted to stdout.\nIt can be used in conjunction with send-tx which submits pre-built packet data containing messages\nto be executed on the host chain. The default encoding format is protobuf if none is specified;\notherwise the encoding flag can be used in combination with either "proto3" or "proto3json".'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"okp4d tx interchain-accounts host generate-packet-data [message] [flags]\n"})}),"\n",(0,a.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'okp4d tx interchain-accounts host generate-packet-data \'{\n    "@type":"/cosmos.bank.v1beta1.MsgSend",\n    "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n    "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",\n    "amount": [\n        {\n            "denom": "stake",\n            "amount": "1000"\n        }\n    ]\n}\' --memo memo --encoding proto3json\n\n\nokp4d tx interchain-accounts host generate-packet-data \'[{\n    "@type":"/cosmos.bank.v1beta1.MsgSend",\n    "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n    "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",\n    "amount": [\n        {\n            "denom": "stake",\n            "amount": "1000"\n        }\n    ]\n},\n{\n\t"@type": "/cosmos.staking.v1beta1.MsgDelegate",\n\t"delegator_address": "cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n\t"validator_address": "cosmosvaloper1qnk2n4nlkpw9xfqntladh74w6ujtulwnmxnh3k",\n\t"amount": {\n\t\t"denom": "stake",\n\t\t"amount": "1000"\n\t}\n}]\'\n'})}),"\n",(0,a.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"      --encoding string   optional encoding format of the messages in the interchain accounts packet data\n  -h, --help              help for generate-packet-data\n      --memo string       optional memo to be included in the interchain accounts packet data\n"})}),"\n",(0,a.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/commands/next/okp4d_tx_interchain-accounts_host",children:"okp4d tx interchain-accounts host"}),"\t - IBC interchain accounts host transaction subcommands"]}),"\n"]})]})}function h(n={}){const{wrapper:t}={...(0,o.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>i,a:()=>c});var a=e(67294);const o={},s=a.createContext(o);function c(n){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),a.createElement(s.Provider,{value:t},n.children)}}}]);