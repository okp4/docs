"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[4672],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),u=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=u(a),d=r,g=k["".concat(m,".").concat(d)]||k[d]||s[d]||l;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},21669:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,p={unversionedId:"mint",id:"mint",title:"mint",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/modules/mint.md",sourceDirName:".",slug:"/mint",permalink:"/fr/modules/next/mint",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"logic",permalink:"/fr/modules/next/logic"},next:{title:"vesting",permalink:"/fr/modules/next/vesting"}},m={},u=[{value:"Function",id:"function",level:2},{value:"Calculation of Inflation",id:"calculation-of-inflation",level:2},{value:"Per-Block Token Generation",id:"per-block-token-generation",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"mint/v1beta1/mint.proto",id:"mintv1beta1mintproto",level:2},{value:"Minter",id:"minter",level:3},{value:"Params",id:"params",level:3},{value:"mint/v1beta1/genesis.proto",id:"mintv1beta1genesisproto",level:2},{value:"GenesisState",id:"genesisstate",level:3},{value:"mint/v1beta1/query.proto",id:"mintv1beta1queryproto",level:2},{value:"QueryAnnualProvisionsRequest",id:"queryannualprovisionsrequest",level:3},{value:"QueryAnnualProvisionsResponse",id:"queryannualprovisionsresponse",level:3},{value:"QueryInflationRequest",id:"queryinflationrequest",level:3},{value:"QueryInflationResponse",id:"queryinflationresponse",level:3},{value:"QueryParamsRequest",id:"queryparamsrequest",level:3},{value:"QueryParamsResponse",id:"queryparamsresponse",level:3},{value:"Query",id:"query",level:3},{value:"mint/v1beta1/tx.proto",id:"mintv1beta1txproto",level:2},{value:"MsgUpdateParams",id:"msgupdateparams",level:3},{value:"MsgUpdateParamsResponse",id:"msgupdateparamsresponse",level:3},{value:"Msg",id:"msg",level:3},{value:"Scalar Value Types",id:"scalar-value-types",level:2}],o={toc:u};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"protobuf-documentation"},"Protobuf Documentation"),(0,r.kt)("a",{name:"top"}),(0,r.kt)("h2",{id:"function"},"Function"),(0,r.kt)("p",null,"The Minting Module plays a crucial role in the blockchain ecosystem, tasked with regulating the issuance of tokens to\nvalidators. This ensures the network's ongoing stability and viability. The module operates consistently, adjusting\nkey parameters with each block to maintain a balanced token supply."),(0,r.kt)("h2",{id:"calculation-of-inflation"},"Calculation of Inflation"),(0,r.kt)("p",null,"The method for determining the inflation rate is outlined in the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.okp4.network/whitepaper/token-model"},"OKP4 Whitepaper - Token Model"),"."),(0,r.kt)("h2",{id:"per-block-token-generation"},"Per-Block Token Generation"),(0,r.kt)("p",null,"Given the annual inflation rate, the Minting Module calculates the exact amount of tokens to be generated for each\nblock, based on the total number of blocks in a year."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint/v1beta1/mint.proto"},"mint/v1beta1/mint.proto")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mint.v1beta1.Minter"},"Minter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mint.v1beta1.Params"},"Params")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint/v1beta1/genesis.proto"},"mint/v1beta1/genesis.proto")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mint.v1beta1.GenesisState"},"GenesisState")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint/v1beta1/query.proto"},"mint/v1beta1/query.proto")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryAnnualProvisionsRequest"},"QueryAnnualProvisionsRequest"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryAnnualProvisionsResponse"},"QueryAnnualProvisionsResponse"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryInflationRequest"},"QueryInflationRequest"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryInflationResponse"},"QueryInflationResponse"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryParamsRequest"},"QueryParamsRequest"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint.v1beta1.QueryParamsResponse"},"QueryParamsResponse"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint.v1beta1.Query"},"Query"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint/v1beta1/tx.proto"},"mint/v1beta1/tx.proto")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint.v1beta1.MsgUpdateParams"},"MsgUpdateParams"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint.v1beta1.MsgUpdateParamsResponse"},"MsgUpdateParamsResponse"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#mint.v1beta1.Msg"},"Msg"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#scalar-value-types"},"Scalar Value Types")))),(0,r.kt)("a",{name:"mint/v1beta1/mint.proto"}),(0,r.kt)("p",{align:"right"},(0,r.kt)("a",{href:"#top"},"Top")),(0,r.kt)("h2",{id:"mintv1beta1mintproto"},"mint/v1beta1/mint.proto"),(0,r.kt)("a",{name:"mint.v1beta1.Minter"}),(0,r.kt)("h3",{id:"minter"},"Minter"),(0,r.kt)("p",null,"Minter holds the state of minting within the blockchain."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inflation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#string"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Current annual inflation rate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"annual_provisions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#string"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Current annual anticipated provisions.")))),(0,r.kt)("a",{name:"mint.v1beta1.Params"}),(0,r.kt)("h3",{id:"params"},"Params"),(0,r.kt)("p",null,"Params defines the parameters for the mint module."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mint_denom")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#string"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Denomination of the coin to be minted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inflation_coef")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#string"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Annual inflation coefficient, influencing the inflation rate based on the bonded ratio. Values range from 0 to 1, with higher values indicating higher inflation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blocks_per_year")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#uint64"},"uint64")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Estimated number of blocks per year.")))),(0,r.kt)("a",{name:"mint/v1beta1/genesis.proto"}),(0,r.kt)("p",{align:"right"},(0,r.kt)("a",{href:"#top"},"Top")),(0,r.kt)("h2",{id:"mintv1beta1genesisproto"},"mint/v1beta1/genesis.proto"),(0,r.kt)("a",{name:"mint.v1beta1.GenesisState"}),(0,r.kt)("h3",{id:"genesisstate"},"GenesisState"),(0,r.kt)("p",null,"GenesisState defines the mint module's genesis state."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.Minter"},"Minter")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"minter is a space for holding current inflation information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.Params"},"Params")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"params defines all the parameters of the module.")))),(0,r.kt)("a",{name:"mint/v1beta1/query.proto"}),(0,r.kt)("p",{align:"right"},(0,r.kt)("a",{href:"#top"},"Top")),(0,r.kt)("h2",{id:"mintv1beta1queryproto"},"mint/v1beta1/query.proto"),(0,r.kt)("a",{name:"mint.v1beta1.QueryAnnualProvisionsRequest"}),(0,r.kt)("h3",{id:"queryannualprovisionsrequest"},"QueryAnnualProvisionsRequest"),(0,r.kt)("p",null,"QueryAnnualProvisionsRequest is the request type for the\nQuery/AnnualProvisions RPC method."),(0,r.kt)("a",{name:"mint.v1beta1.QueryAnnualProvisionsResponse"}),(0,r.kt)("h3",{id:"queryannualprovisionsresponse"},"QueryAnnualProvisionsResponse"),(0,r.kt)("p",null,"QueryAnnualProvisionsResponse is the response type for the\nQuery/AnnualProvisions RPC method."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"annual_provisions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#bytes"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"annual_provisions is the current minting annual provisions value.")))),(0,r.kt)("a",{name:"mint.v1beta1.QueryInflationRequest"}),(0,r.kt)("h3",{id:"queryinflationrequest"},"QueryInflationRequest"),(0,r.kt)("p",null,"QueryInflationRequest is the request type for the Query/Inflation RPC method."),(0,r.kt)("a",{name:"mint.v1beta1.QueryInflationResponse"}),(0,r.kt)("h3",{id:"queryinflationresponse"},"QueryInflationResponse"),(0,r.kt)("p",null,"QueryInflationResponse is the response type for the Query/Inflation RPC\nmethod."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inflation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#bytes"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"inflation is the current minting inflation value.")))),(0,r.kt)("a",{name:"mint.v1beta1.QueryParamsRequest"}),(0,r.kt)("h3",{id:"queryparamsrequest"},"QueryParamsRequest"),(0,r.kt)("p",null,"QueryParamsRequest is the request type for the Query/Params RPC method."),(0,r.kt)("a",{name:"mint.v1beta1.QueryParamsResponse"}),(0,r.kt)("h3",{id:"queryparamsresponse"},"QueryParamsResponse"),(0,r.kt)("p",null,"QueryParamsResponse is the response type for the Query/Params RPC method."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.Params"},"Params")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"params defines the parameters of the module.")))),(0,r.kt)("a",{name:"mint.v1beta1.Query"}),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("p",null,"Query provides defines the gRPC querier service."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Request Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Verb"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Params")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryParamsRequest"},"QueryParamsRequest")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryParamsResponse"},"QueryParamsResponse")),(0,r.kt)("td",{parentName:"tr",align:null},"Params returns the total set of minting parameters."),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/cosmos/mint/v1beta1/params")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Inflation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryInflationRequest"},"QueryInflationRequest")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryInflationResponse"},"QueryInflationResponse")),(0,r.kt)("td",{parentName:"tr",align:null},"Inflation returns the current minting inflation value."),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/cosmos/mint/v1beta1/inflation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AnnualProvisions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryAnnualProvisionsRequest"},"QueryAnnualProvisionsRequest")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.QueryAnnualProvisionsResponse"},"QueryAnnualProvisionsResponse")),(0,r.kt)("td",{parentName:"tr",align:null},"AnnualProvisions current minting annual provisions value."),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/cosmos/mint/v1beta1/annual_provisions")))),(0,r.kt)("a",{name:"mint/v1beta1/tx.proto"}),(0,r.kt)("p",{align:"right"},(0,r.kt)("a",{href:"#top"},"Top")),(0,r.kt)("h2",{id:"mintv1beta1txproto"},"mint/v1beta1/tx.proto"),(0,r.kt)("a",{name:"mint.v1beta1.MsgUpdateParams"}),(0,r.kt)("h3",{id:"msgupdateparams"},"MsgUpdateParams"),(0,r.kt)("p",null,"MsgUpdateParams is the Msg/UpdateParams request type."),(0,r.kt)("p",null,"Since: cosmos-sdk 0.47"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"authority")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#string"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"authority is the address that controls the module (defaults to x/gov unless overwritten).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.Params"},"Params")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"params defines the x/mint parameters to update.")))),(0,r.kt)("p",null,"NOTE: All parameters must be supplied. |"),(0,r.kt)("a",{name:"mint.v1beta1.MsgUpdateParamsResponse"}),(0,r.kt)("h3",{id:"msgupdateparamsresponse"},"MsgUpdateParamsResponse"),(0,r.kt)("p",null,"MsgUpdateParamsResponse defines the response structure for executing a\nMsgUpdateParams message."),(0,r.kt)("p",null,"Since: cosmos-sdk 0.47"),(0,r.kt)("a",{name:"mint.v1beta1.Msg"}),(0,r.kt)("h3",{id:"msg"},"Msg"),(0,r.kt)("p",null,"Msg defines the x/mint Msg service."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Request Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Verb"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UpdateParams")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.MsgUpdateParams"},"MsgUpdateParams")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mint.v1beta1.MsgUpdateParamsResponse"},"MsgUpdateParamsResponse")),(0,r.kt)("td",{parentName:"tr",align:null},"UpdateParams defines a governance operation for updating the x/mint module parameters. The authority is defaults to the x/gov module account."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Since: cosmos-sdk 0.47 | |"),(0,r.kt)("h2",{id:"scalar-value-types"},"Scalar Value Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},".proto Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"C++"),(0,r.kt)("th",{parentName:"tr",align:null},"Java"),(0,r.kt)("th",{parentName:"tr",align:null},"Python"),(0,r.kt)("th",{parentName:"tr",align:null},"Go"),(0,r.kt)("th",{parentName:"tr",align:null},"C#"),(0,r.kt)("th",{parentName:"tr",align:null},"PHP"),(0,r.kt)("th",{parentName:"tr",align:null},"Ruby"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"double"})," double"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float64"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"float"})," float"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float32"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"int32"})," int32"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint32 instead."),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"int64"})," int64"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint64 instead."),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"int/long"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"uint32"})," uint32"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding."),(0,r.kt)("td",{parentName:"tr",align:null},"uint32"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"int/long"),(0,r.kt)("td",{parentName:"tr",align:null},"uint32"),(0,r.kt)("td",{parentName:"tr",align:null},"uint"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"uint64"})," uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding."),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"int/long"),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"ulong"),(0,r.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"sint32"})," sint32"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s."),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"sint64"})," sint64"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s."),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"int/long"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"fixed32"})," fixed32"),(0,r.kt)("td",{parentName:"tr",align:null},"Always four bytes. More efficient than uint32 if values are often greater than 2^28."),(0,r.kt)("td",{parentName:"tr",align:null},"uint32"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"uint32"),(0,r.kt)("td",{parentName:"tr",align:null},"uint"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"fixed64"})," fixed64"),(0,r.kt)("td",{parentName:"tr",align:null},"Always eight bytes. More efficient than uint64 if values are often greater than 2^56."),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"int/long"),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"ulong"),(0,r.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"sfixed32"})," sfixed32"),(0,r.kt)("td",{parentName:"tr",align:null},"Always four bytes."),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Bignum or Fixnum (as required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"sfixed64"})," sfixed64"),(0,r.kt)("td",{parentName:"tr",align:null},"Always eight bytes."),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"int/long"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"integer/string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bignum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"bool"})," bool"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"TrueClass/FalseClass")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"string"})," string"),(0,r.kt)("td",{parentName:"tr",align:null},"A string must always contain UTF-8 encoded or 7-bit ASCII text."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"str/unicode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"String (UTF-8)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"bytes"})," bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"May contain any arbitrary sequence of bytes."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ByteString"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"[]byte"),(0,r.kt)("td",{parentName:"tr",align:null},"ByteString"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"String (ASCII-8BIT)")))))}s.isMDXComponent=!0}}]);