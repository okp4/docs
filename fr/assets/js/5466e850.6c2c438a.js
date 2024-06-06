"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[3806],{33745:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>j,frontMatter:()=>l,metadata:()=>a,readingTime:()=>h,toc:()=>x});var s=i(85893),t=i(11151),r=i(34478),d=i(94285);const l={sidebar_position:2},o="Installation",a={id:"nodes/installation",title:"Installation",description:"You'll find below the available ways of getting the needed okp4d binary to start a node.",source:"@site/docs/nodes/installation.mdx",sourceDirName:"nodes",slug:"/nodes/installation",permalink:"/fr/nodes/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/axone-protocol/docs/edit/main/docs/nodes/installation.mdx",tags:[],version:"current",lastUpdatedAt:1715758321e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"nodes",previous:{title:"Introduction",permalink:"/fr/nodes/introduction"},next:{title:"Running a node",permalink:"/fr/nodes/run-node"}},c={},h=2,x=[{value:"Supported platforms",id:"supported-platforms",level:2},{value:"Release binary",id:"release-binary",level:2},{value:"Docker",id:"docker",level:2},{value:"Build from source",id:"build-from-source",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["You'll find below the available ways of getting the needed ",(0,s.jsx)(n.code,{children:"okp4d"})," binary to start a node."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-platforms",children:"Supported platforms"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"okp4d"})," currently supports the following builds."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Platform"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Arch"})}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:(0,s.jsx)(n.strong,{children:"Status"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Darwin"}),(0,s.jsx)(n.td,{children:"amd64"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Darwin"}),(0,s.jsx)(n.td,{children:"arm64"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Linux"}),(0,s.jsx)(n.td,{children:"amd64"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Linux"}),(0,s.jsx)(n.td,{children:"arm64"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Windows"}),(0,s.jsx)(n.td,{children:"amd64"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["\ufe0f\ud83d\udeab",(0,s.jsx)("br",{})," Not supported"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"release-binary",children:"Release binary"}),"\n",(0,s.jsxs)(n.p,{children:["You'll find the released binaries on the ",(0,s.jsx)(n.a,{href:"https://github.com/okp4/okp4d/releases",children:"GitHub repository"}),". These are statically linked builds, so be careful to choose the right binary for your system (i.e. ",(0,s.jsx)(n.code,{children:"linux/amd64"})," or ",(0,s.jsx)(n.code,{children:"linux/arm64"}),"). Checksums are also provided if you wish to verify the integrity of the download."]}),"\n",(0,s.jsxs)(n.p,{children:["To easily install ",(0,s.jsx)(n.code,{children:"okp4d"})," from a GitHub release you can use this ",(0,s.jsx)(n.a,{href:"https://github.com/jpillora/installer",children:"oneliner script"}),":"]}),"\n",(0,s.jsx)(d.Z,{language:"bash",children:(0,s.jsxs)(n.p,{children:["curl ",(0,s.jsx)(n.a,{href:"https://i.jpillora.com/okp4/okp4d@%7Bdata.axonedVersion%7D",children:"https://i.jpillora.com/okp4/okp4d@{data.axonedVersion}"}),"! | bash"]})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"By principle, take the time to verify the checksum manually."})}),"\n",(0,s.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"okp4d"})," binary can be invoked directly through the following docker image:"]}),"\n",(0,s.jsx)(d.Z,{language:"bash",children:(0,s.jsxs)(n.p,{children:["docker run -ti --rm okp4/okp4d:",r.N," --help"]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Build once, deploy anywhere"}),": The docker image is a multi-arch build supporting both ",(0,s.jsx)(n.code,{children:"amd64"})," and ",(0,s.jsx)(n.code,{children:"arm64"})," architectures."]})}),"\n",(0,s.jsx)(n.h2,{id:"build-from-source",children:"Build from source"}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"go"})," \u2014 OKP4 is built using ",(0,s.jsx)(n.a,{href:"https://go.dev/dl/",children:"Go"})," version 19+. Install ",(0,s.jsx)(n.code,{children:"Go"})," ",(0,s.jsx)(n.code,{children:"1.19+"})," following instructions from the ",(0,s.jsx)(n.a,{href:"https://golang.org/doc/install",children:"official Go documentation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"make"})," \u2014 the project comes with a convenient ",(0,s.jsx)(n.code,{children:"Makefile"})," so verify that ",(0,s.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Make",children:(0,s.jsx)(n.code,{children:"make"})})," is properly installed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"git"})," \u2014 in order to clone the project you need to have ",(0,s.jsx)(n.a,{href:"https://git-scm.com/",children:(0,s.jsx)(n.code,{children:"git"})})," installed."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(n.p,{children:["Clone the ",(0,s.jsx)(n.a,{href:"https://github.com/okp4/okp4d",children:"okp4/okp4d"})," repo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/okp4/okp4d\ncd okp4d\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"okp4d"})," using the provided ",(0,s.jsx)(n.code,{children:"Makefile"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make install\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can verify that everything is OK:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"okp4d version\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should get an output similar to:"}),"\n",(0,s.jsx)(d.Z,{language:"text",children:r.N})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},34478:e=>{e.exports={N:"v8.0.0"}}}]);