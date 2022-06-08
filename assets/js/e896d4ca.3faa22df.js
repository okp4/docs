"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[706],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},c="Consensus : Tendermint",l={unversionedId:"whitepaper/okp4-blockchain-architecture/consensus",id:"whitepaper/okp4-blockchain-architecture/consensus",title:"Consensus : Tendermint",description:"In this section we briefly describe the Tendermint consensus protocol.",source:"@site/docs/whitepaper/okp4-blockchain-architecture/consensus.md",sourceDirName:"whitepaper/okp4-blockchain-architecture",slug:"/whitepaper/okp4-blockchain-architecture/consensus",permalink:"/docs/whitepaper/okp4-blockchain-architecture/consensus",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/whitepaper/okp4-blockchain-architecture/consensus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/whitepaper/okp4-blockchain-architecture/overview"},next:{title:"Canonical Modules",permalink:"/docs/whitepaper/okp4-blockchain-architecture/canonical-modules"}},p={},u=[{value:"Validators",id:"validators",level:3},{value:"Consensus",id:"consensus",level:3},{value:"Light Clients",id:"light-clients",level:3},{value:"Preventing Attacks",id:"preventing-attacks",level:3},{value:"ABCI (Application BlockChain Interface)",id:"abci-application-blockchain-interface",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"consensus--tendermint"},"Consensus : Tendermint"),(0,i.kt)("p",null,"In this section we briefly describe the Tendermint consensus protocol."),(0,i.kt)("h3",{id:"validators"},"Validators"),(0,i.kt)("p",null,"In classical Byzantine Fault-Tolerant (BFT) algorithms, each node has the same weight. In Tendermint, nodes have an amount of voting power, and are called validators. Validators participate in the consensus protocol by broadcasting cryptographic signatures, or votes, to agree upon the next block. According to our model, the voting power of each validator is determined by the amount of staking tokens bonded as collateral."),(0,i.kt)("h3",{id:"consensus"},"Consensus"),(0,i.kt)("p",null,"Tendermint is a partially synchronous BFT consensus protocol derived from the DLS consensus algorithm. It is notable for its simplicity, performance, and fork-accountability (the processes that caused the consensus to fail can be identified and punished according to the rules). The protocol requires a fixed know set of validators, where each validator is identified by their public key. Validators attempt to come to consensus on one block at a time, where a block is a list of transactions. Voting for consensus on a block proceeds in rounds. Each round has a round-leader, or proposer, who proposes a block. The validators then vote, in stages, on whether to accept the proposed block or move on to the next round. The proposer for a round is chosen deterministically from the ordered list of validators, in proportion to their voting power.\nTendermint's security derives from its use of optimal Byzantine fault-tolerance via super-majority (>2/3) voting power and a locking mechanism.\nTogether, they ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u22651/3 voting power must be Byzantine to cause a violation of safety, where more than two values are committed"),(0,i.kt)("li",{parentName:"ul"},"If any set of validators ever succeeds in violating safety, or even attemps to do so, they can be identified by the protocol. This includes both voting for conflicting blocks and broadcasting unjustified votes")),(0,i.kt)("p",null,"Despite its strong guarantees, Tendermint provides exceptional performance by providing thousands transactions per second, with commit latencies on the order of 1 to 2 seconds. Notably, performance of well over a thousand transactions per second is maintained even in harsh adversarial conditions, with validators crashing or broadcasting maliciously crafted votes."),(0,i.kt)("h3",{id:"light-clients"},"Light Clients"),(0,i.kt)("p",null,"The need to sync all block headers us eliminated in Tendermint PoS as the existence of an alternative chain (a fork) means \u22651/3 of bonded stake can be slashed. Of course, since slashing requires that someone share evidence of a fork, light clients should store any block-hash commits that it sees. Tendermint light clients need only to keep up with changes to the validator set, and then verify the >2/3 PreCommits in the latest block to determine the latest state and avoid long range attacks. Succinct light client proofs also enable IBC (Inter-Blockchain Communication)."),(0,i.kt)("h3",{id:"preventing-attacks"},"Preventing Attacks"),(0,i.kt)("p",null,"Tendermint has protective measures for preventing certain notable attacks, like long-range-nothing-at-stake double spends and censorship."),(0,i.kt)("h3",{id:"abci-application-blockchain-interface"},"ABCI (Application BlockChain Interface)"),(0,i.kt)("p",null,"Tendermint consensus algorithm is implemented in a program called Tendermint Core. Tendermint BFT connects to blockchain applications via the ABCI. ABCI in an interface that defines the boundary between the replication engine (the blockchain), and the state machine (the application). By using a socket protocol, we enable a consensus engine running in one process to manage an application state running in another."),(0,i.kt)("br",null),(0,i.kt)("p",null,"For more informations:\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/introduction/what-is-tendermint.html"},"https://docs.tendermint.com/master/introduction/what-is-tendermint.html")))}h.isMDXComponent=!0}}]);