"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[35218],{48960:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>h,default:()=>f,frontMatter:()=>m,metadata:()=>d,nFloatFormat:()=>j,nIntFormat:()=>p,nPercentFormat:()=>g,readingTime:()=>x,toc:()=>N});var n=a(85893),t=a(11151),i=a(70599),l=(a(67294),a(66412));const r=[{id:"r",color:"hsl(331, 70%, 50%)",data:[...function*(){for(let s=.02;s<=1;s+=.02){const e=1/s*3;yield{x:s,y:e}}}()]}],c=s=>{let{caption:e,xLegend:a,yLegend:t,xFormat:r,yFormat:c,data:m}=s;const h=(0,l.p)();return(0,n.jsxs)("figure",{children:[(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("div",{className:"plot",style:{height:"380px",width:"570px",maxWidth:"100%"},children:(0,n.jsx)(i.fH,{data:m,margin:{top:20,right:20,bottom:50,left:80},lineWidth:3,curve:"linear",xScale:{type:"linear",min:"auto",max:"auto"},yScale:{type:"linear",min:"auto",max:"auto"},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:a,legendOffset:36,legendPosition:"middle",format:r},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:t,legendOffset:-60,legendPosition:"end",format:c},yFormat:c,xFormat:r,markers:[{axis:"x",legend:"target",lineStyle:{stroke:"#b0413e",strokeDasharray:"4 4",strokeWidth:1},textStyle:{fill:"#b0413e"},value:3}],enableGridX:!1,enableGridY:!1,pointSize:0,pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,useMesh:!0,theme:{textColor:h.plain.color,tooltip:{container:{background:h.plain.backgroundColor}}}})})}),(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("figcaption",{children:(0,n.jsx)("span",{className:"math math-inline",children:e})})})]})},m={sidebar_position:5},h="Token model",d={id:"whitepaper/token-model",title:"Token model",description:"Motivation",source:"@site/docs/whitepaper/token-model.mdx",sourceDirName:"whitepaper",slug:"/whitepaper/token-model",permalink:"/fr/whitepaper/token-model",draft:!1,unlisted:!1,editUrl:"https://github.com/axone-protocol/docs/edit/main/docs/whitepaper/token-model.mdx",tags:[],version:"current",lastUpdatedAt:1712045486e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"whitepaper",previous:{title:"Architecture",permalink:"/fr/whitepaper/architecture"},next:{title:"Roles",permalink:"/fr/whitepaper/roles"}},o={},x=4,p=new Intl.NumberFormat("en"),j=new Intl.NumberFormat("en",{minimumFractionDigits:2,maximumFractionDigits:2}),g=new Intl.NumberFormat("en",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}),N=[{value:"Motivation",id:"motivation",level:2},{value:"Mint",id:"mint",level:2},{value:"Inflation formula",id:"inflation-formula",level:3},{value:"Illustrative scenarios",id:"illustrative-scenarios",level:3},{value:"Burn",id:"burn",level:2},{value:"Workflow tax",id:"workflow-tax",level:3},{value:"Other payment tokens",id:"other-payment-tokens",level:3}];function u(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",mtext:"mtext",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,t.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"token-model",children:"Token model"}),"\n",(0,n.jsx)(e.h2,{id:"motivation",children:"Motivation"}),"\n",(0,n.jsx)(e.p,{children:"The AXONE Token Model aims to:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"secure the network by providing sufficient incentives for validators to participate and delegators to stake their tokens;"}),"\n",(0,n.jsx)(e.li,{children:"ensure low-cost participation for Providers and Consumers;"}),"\n",(0,n.jsx)(e.li,{children:"incentivize long-term token holding;"}),"\n",(0,n.jsx)(e.li,{children:"secure open-source funding & network maintenance."}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["One issue we've seen with many other layer-1 chains is that to secure the network, they define a high inflation parameter resulting in token selling pressure and unattractive price action. While this is not bad ",(0,n.jsx)(e.em,{children:"per se"})," for the holders who stake, the reflective nature of crypto assets is further exagerated to the downside when inflation is high during market downturns."]}),"\n",(0,n.jsxs)(e.p,{children:["One way to secure the network while limiting inflation is by providing rewards derived from network activity. Unlike Ethereum's ",(0,n.jsx)(e.a,{href:"https://eips.ethereum.org/EIPS/eip-1559",children:"EIP-1559"}),", which reduces inflation through fee burning, Axone introduces a tax on value-creating network activity: the workflows. As with VAT (value-added tax), a fraction of the workflow's price can be collected to secure the network while reducing selling pressure and even resulting in long-term $AXONE supply reduction."]}),"\n",(0,n.jsxs)(e.p,{children:["The two opposite forces that influence the AXONE token supply are (1) the bonded ratio (",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"\u03c1"}),(0,n.jsx)(e.mtext,{children:"bonded"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\rho_{\\text{bonded}}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"\u03c1"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord text mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"bonded"})})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),") which influences the inflation rate (",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mtext,{children:"inflation"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"r_{\\text{inflation}}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord text mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"inflation"})})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),"), and (2) the workflow tax which burns tokens."]}),"\n",(0,n.jsx)(e.h2,{id:"mint",children:"Mint"}),"\n",(0,n.jsx)(e.h3,{id:"inflation-formula",children:"Inflation formula"}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mtext,{children:"inflation"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"\u03c1"}),(0,n.jsx)(e.mtext,{children:"bonded"})]})]}),(0,n.jsx)(e.mo,{children:"\xd7"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mtext,{children:"inflation"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"r_{\\text{inflation}} = \\frac{1}{\\rho_{\\text{bonded}}} \\times c_{\\text{inflation}}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord text mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"inflation"})})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.2019em",verticalAlign:"-0.8804em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"\u03c1"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord text mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"bonded"})})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8804em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord text mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"inflation"})})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]})]})}),"\n",(0,n.jsx)(e.p,{children:"Where:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mtext,{children:"inflation"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"r_{\\text{inflation}}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord text mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"inflation"})})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," is the ",(0,n.jsx)(e.em,{children:"inflation rate"})," of $AXON, representing the rate at which new tokens are created and introduced into circulation."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"\u03c1"}),(0,n.jsx)(e.mtext,{children:"bonded"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\rho_{\\text{bonded}}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"\u03c1"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord text mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"bonded"})})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," is the ",(0,n.jsx)(e.em,{children:"bonded ratio"}),", i.e. the ratio between the number of tokens staked and the number of existing tokens. The higher the bonded ratio, the more tokens are needed to increase a validator's voting power, the harder it is for an attacker to reach ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(e.mn,{children:"3"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 / 3"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1/3"})]})})]})," or the network voting power. The inflation rate, and consequently the staking rewards, increase when the bonded ratio decreases. This would further incentivize token holders to stake their tokens."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mtext,{children:"inflation"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"c_{\\text{inflation}}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord text mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"inflation"})})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," is the ",(0,n.jsx)(e.em,{children:"inflation coefficient"}),", a constant factor that adjusts the influence of the bonded ratio on the inflation rate. The higher the parameter, the higher the inflation."]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"illustrative-scenarios",children:"Illustrative scenarios"}),"\n",(0,n.jsxs)(e.p,{children:["For example, by setting the inflation coefficient ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mtext,{children:"inflation"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"c_{\\text{inflation}}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord text mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"inflation"})})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," to 0.03, the resulting plot can be observed as follows:"]}),"\n",(0,n.jsx)(c,{caption:"Plot of yearly r_inflation = (1 / \u03c1_bonded) * 0.03",xLegend:"Bonded Ratio",yLegend:"Inflation (%)",xFormat:p.format,yFormat:p.format,data:r}),"\n",(0,n.jsx)(e.p,{children:"The yearly inflation rate described above doesn't take into consideration the burning mechanism from the workflow tax, which offsets the inflation."}),"\n",(0,n.jsx)(e.h2,{id:"burn",children:"Burn"}),"\n",(0,n.jsx)(e.h3,{id:"workflow-tax",children:"Workflow tax"}),"\n",(0,n.jsx)(e.p,{children:"For each workflow, whatever the application, consumers pay providers according to the business model defined on-chain. A tax is applied to the workflow's price. The tax percentage is a parameter defined by governance. When AXONE tokens are used by consumers, the tax is automatically burnt."}),"\n",(0,n.jsx)(e.p,{children:"This tax compensates for inflation. The higher the tax collected on workflows, the lower the overall inflation rate. Another indirect effect of that tax is to prevent fake volume on datasets and services, making volume a more robust reputation metric."}),"\n",(0,n.jsx)(e.h3,{id:"other-payment-tokens",children:"Other payment tokens"}),"\n",(0,n.jsxs)(e.p,{children:["Depending on the business model of the zone and of the invoked resources, consumers can pay for workflows using other ",(0,n.jsx)(e.code,{children:"cw-20"})," tokens, such as stablecoins like USDC. While providers will be paid with that payment token, and the same workflow tax will still apply. These payment tokens, instead of being immediately burnt, will be collected into a multisig pool, before getting used to buyback and burn AXONE tokens, using the best route for optimal liquidity. This creates additional buying pressure on the token, while also decreasing the overall supply."]})]})}function f(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(u,{...s})}):u(s)}}}]);