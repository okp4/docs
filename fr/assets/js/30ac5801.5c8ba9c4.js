"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[92104],{36505:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var a=t(85893),o=t(11151);const s={},c=void 0,i={id:"okp4d_tx_interchain-accounts_host_generate-packet-data",title:"okp4d_tx_interchain-accounts_host_generate-packet-data",description:"okp4d tx interchain-accounts host generate-packet-data",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_tx_interchain-accounts_host_generate-packet-data.md",sourceDirName:".",slug:"/okp4d_tx_interchain-accounts_host_generate-packet-data",permalink:"/fr/commands/v6.0.0/okp4d_tx_interchain-accounts_host_generate-packet-data",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_interchain-accounts_host",permalink:"/fr/commands/v6.0.0/okp4d_tx_interchain-accounts_host"},next:{title:"okp4d_tx_logic",permalink:"/fr/commands/v6.0.0/okp4d_tx_logic"}},d={},r=[{value:"okp4d tx interchain-accounts host generate-packet-data",id:"okp4d-tx-interchain-accounts-host-generate-packet-data",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function p(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"okp4d-tx-interchain-accounts-host-generate-packet-data",children:"okp4d tx interchain-accounts host generate-packet-data"}),"\n",(0,a.jsx)(e.p,{children:"Generates protobuf or proto3 JSON encoded ICA packet data."}),"\n",(0,a.jsx)(e.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(e.p,{children:'generate-packet-data accepts a message string and serializes it (depending on the\nencoding parameter) using protobuf or proto3 JSON into packet data which is outputted to stdout.\nIt can be used in conjunction with send-tx which submits pre-built packet data containing messages\nto be executed on the host chain. The default encoding format is protobuf if none is specified;\notherwise the encoding flag can be used in combination with either "proto3" or "proto3json".'}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"okp4d tx interchain-accounts host generate-packet-data [message] [flags]\n"})}),"\n",(0,a.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'okp4d tx interchain-accounts host generate-packet-data \'{\n    "@type":"/cosmos.bank.v1beta1.MsgSend",\n    "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n    "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",\n    "amount": [\n        {\n            "denom": "stake",\n            "amount": "1000"\n        }\n    ]\n}\' --memo memo --encoding proto3json\n\n\nokp4d tx interchain-accounts host generate-packet-data \'[{\n    "@type":"/cosmos.bank.v1beta1.MsgSend",\n    "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n    "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",\n    "amount": [\n        {\n            "denom": "stake",\n            "amount": "1000"\n        }\n    ]\n},\n{\n\t"@type": "/cosmos.staking.v1beta1.MsgDelegate",\n\t"delegator_address": "cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n\t"validator_address": "cosmosvaloper1qnk2n4nlkpw9xfqntladh74w6ujtulwnmxnh3k",\n\t"amount": {\n\t\t"denom": "stake",\n\t\t"amount": "1000"\n\t}\n}]\'\n'})}),"\n",(0,a.jsx)(e.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"      --encoding string   optional encoding format of the messages in the interchain accounts packet data\n  -h, --help              help for generate-packet-data\n      --memo string       optional memo to be included in the interchain accounts packet data\n"})}),"\n",(0,a.jsx)(e.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"/fr/commands/next/okp4d_tx_interchain-accounts_host",children:"okp4d tx interchain-accounts host"}),"\t - IBC interchain accounts host transaction subcommands"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>c});var a=t(67294);const o={},s=a.createContext(o);function c(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);