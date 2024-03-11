"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[94246],{90334:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>d,readingTime:()=>p,toc:()=>m});var a=t(85893),n=t(11151),r=t(41756);const s=JSON.parse('{"quizTitle":"Test your knowledge!","nrOfQuestions":"4","questions":[{"question":"How does Verifiable Credential verification work?","questionType":"text","answerSelectionType":"single","answers":["By contacting the credit issuer directly.","By manually verifying its authenticity.","By cryptography to confirm its origin and integrity.","By using a centralized verification system."],"correctAnswer":"3","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"},{"question":"What is the difference between a Verifiable Credential and a Verifiable Presentation in the Axone protocol?","questionType":"text","answerSelectionType":"single","answers":["A Verifiable Credential is a set of claims, whereas a Verifiable Presentation is a set of Verifiable Credentials derivations registered in the protocol.","There is no significant difference between the two.","A Verifiable Credential is used for financial transactions, while a Verifiable Presentation is for personal data.","A Verifiable Credential is always public, while a Verifiable Presentation is always private."],"correctAnswer":"1","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"},{"question":"What best characterizes the Resource Governance VCs in Axone?","questionType":"text","answerSelectionType":"single","answers":["They act as registries for financial transactions.","They regulate and manage resources, defining how they are controlled, managed and interacted with.","They are digital copies of physical documents.","They serve as digital currency within the Axone ecosystem."],"correctAnswer":"2","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"},{"question":"What is the Self-Sovereign principle of resource governance in Axone?","questionType":"text","answerSelectionType":"single","answers":["Only the government entity can make claims on resources.","Any entity can make claims on a resource, with the exception of governance claims.","Claims can only be issued by verified and approved entities.","All claims are subject to verification by a central body."],"correctAnswer":"2","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"}]}');var o=t.t(s,2);const c={sidebar_position:2},l="Verifiable Claims Principles",d={id:"academy/part-2/verifiable-claims",title:"Verifiable Claims Principles",description:"Reading time:  min",source:"@site/docs/academy/part-2/verifiable-claims.mdx",sourceDirName:"academy/part-2",slug:"/academy/part-2/verifiable-claims",permalink:"/fr/academy/part-2/verifiable-claims",draft:!1,unlisted:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/academy/part-2/verifiable-claims.mdx",tags:[],version:"current",lastUpdatedAt:1709911643,formattedLastUpdatedAt:"8 mars 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"academy",previous:{title:"Decentralized identity",permalink:"/fr/academy/part-2/decentralized-identity"},next:{title:"Describe a resource",permalink:"/fr/academy/part-2/describe-resource"}},h={},p=6,m=[{value:"Verifiable Credentials and claims",id:"verifiable-credentials-and-claims",level:2},{value:"Example: Issuing a Digital Passport",id:"example-issuing-a-digital-passport",level:3},{value:"Verifiable claims in the Axone protocol",id:"verifiable-claims-in-the-axone-protocol",level:2},{value:"Resource materiality",id:"resource-materiality",level:3},{value:"Claim and revocation",id:"claim-and-revocation",level:3},{value:"Self-sovereign governance principles",id:"self-sovereign-governance-principles",level:4},{value:"Registration of Verifiable Presentation in the Axone Protocol",id:"registration-of-verifiable-presentation-in-the-axone-protocol",level:2}];function f(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"verifiable-claims-principles",children:"Verifiable Claims Principles"}),"\n",(0,a.jsxs)("i",{children:["Reading time: ",p," min"]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Verifiable Credentials"})," are a key concept in the world of digital identity, particularly in decentralized identity systems. A Verifiable Credential is a form of digital evidence that attests to information or a characteristic about a person, organization, or object. A trusted entity that issues these credentials is called the ",(0,a.jsx)(i.strong,{children:"Issuer"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"verifiable-credentials-and-claims",children:"Verifiable Credentials and claims"}),"\n",(0,a.jsx)(i.p,{children:"Commonly, a credential is a certificate, proof, or qualification of competence or authority issued to an entity (corporate or individual) by a third party with the authority or presumed competence to do so. It may be proof of authority, status, rights, privileges, or others, usually written. For example, a diploma is a credential issued to a graduate by a university. The diploma includes information such as the graduate's name, the issue date, the degree obtained, and the field of study. It also bears the signature of those in charge of the institution, such as the rector or dean. The diploma serves as official proof that the individual has completed a certain level of education."}),"\n",(0,a.jsx)(i.p,{children:'A credential may contain several claims. For example, a diploma contains the claims "I have a degree in Biology" and "My diploma was issued on 19/06/2023".'}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Verifiable Credentials"})," (VCs) can be digitally authenticated, meaning that the credential receiver can verify its origin and integrity without contacting the issuer directly. The holder of the Verifiable Credential can control how and to whom information is shared. For example, a person holds the VC for his degree, the Issuer of which is the university where he studied. When this person applies for a job, they can share this VC with the company to provide proof of their background and skills. The company does not need to contact the university to verify the authenticity of the VC."]}),"\n",(0,a.jsxs)(i.p,{children:["In the ",(0,a.jsx)(i.a,{href:"https://www.w3.org/TR/vc-data-model/",children:"W3C standard"}),", a credential is a set of one or more ",(0,a.jsx)(i.strong,{children:"claims"})," made by the same entity. Credentials include an identifier and metadata describing the credential's properties, such as the issuer, the expiry date and time, a representative image, a public key to use for verification purposes, the revocation mechanism, and so on. The issuer might sign the metadata. A verifiable credential is a set of tamper-evident claims and metadata that cryptographically prove who issued it."]}),"\n",(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,a.jsx)("img",{src:"/img/content/academy/verifiable-claims-1.webp",alt:"Verifiable claims W3C",style:{maxHeight:"340px"}})}),"\n",(0,a.jsxs)(i.admonition,{type:"info",children:[(0,a.jsxs)(i.p,{children:["A ",(0,a.jsx)(i.strong,{children:"claim"})," is an assertion made about a subject."]}),(0,a.jsxs)(i.p,{children:["A ",(0,a.jsx)(i.strong,{children:"credential"})," is a set of one or more claims made by an issuer."]}),(0,a.jsxs)(i.p,{children:["A ",(0,a.jsx)(i.strong,{children:"verifiable credential"})," is a tamper-evident credential with authorship that can be cryptographically verified. These verifiable credentials can be used to build verifiable presentations, which can also be cryptographically verified."]}),(0,a.jsxs)(i.p,{children:["A ",(0,a.jsx)(i.strong,{children:"verifiable presentation"})," is a tamper-evident presentation encoded in such a way that authorship of the data can be trusted after a process of cryptographic verification."]})]}),"\n",(0,a.jsx)(i.h3,{id:"example-issuing-a-digital-passport",children:"Example: Issuing a Digital Passport"}),"\n",(0,a.jsx)(i.p,{children:"A government authority issues a digital passport to a citizen."}),"\n",(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,a.jsx)("img",{src:"/img/content/academy/verifiable-claims-2.webp",alt:"Verifiable claims passport example",style:{maxHeight:"650px"}})}),"\n",(0,a.jsx)(i.p,{children:"Use when traveling :"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Airport Verification: When traveling, the passport holder presents their digital passport at the airport."}),"\n",(0,a.jsx)(i.li,{children:"Verifier (Customs): Customs officers use a system that verifies the passport's digital signature and metadata to confirm its authenticity."}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"The digital signature and metadata ensure enhanced security by preventing forgery and guaranteeing data integrity. Compliance with W3C standards facilitates fast, efficient data verification by verifiers."}),"\n",(0,a.jsx)(i.h2,{id:"verifiable-claims-in-the-axone-protocol",children:"Verifiable claims in the Axone protocol"}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.a,{href:"https://docs.okp4.network/academy/resources#ontology-how-its-represented-semantic-description",children:"Axone ontology"})," is used to describe the Dataverse. In the Dataverse, resources are identified by their DID. Resources are described by claims referenced in the ontology as Verifiable Presentations (VPs) whose subject is the resource's DID. In this way, each resource is described by a set of associated claims."]}),"\n",(0,a.jsx)(i.p,{children:"It's important to note that the existence of a resource is conditional on the presence of at least one relevant claim. In other words, although the universe of potential resources is infinite, a resource only becomes concrete and tangible when a corresponding claim is established."}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"This notion is analogous to that of cryptocurrency wallets. Although all addresses theoretically exist, they only take on practical significance (such as indicating a balance) when participating in a transaction."})}),"\n",(0,a.jsx)(i.p,{children:"Verifiable Credentials obey schemas that describe a particular aspect of a resource. Certain VCs apply depending on the nature of the resource. A VC describing an entity or organization does not apply to the same resource as a VC describing a dataset. This is why VCs are organized in schemas."}),"\n",(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,a.jsx)("img",{src:"/img/content/academy/verifiable-claims-3.webp",alt:"Verifiable claims attached to a resource",style:{maxHeight:"400px"}})}),"\n",(0,a.jsx)(i.h3,{id:"resource-materiality",children:"Resource materiality"}),"\n",(0,a.jsxs)(i.p,{children:["It has been established that the concrete existence of a resource depends on the presence of a claim concerning it. More specifically, ",(0,a.jsx)(i.strong,{children:"the Resource Governance VC ensures the existence of a resource in the protocol"}),": a resource or zone exists in the protocol only if governance is attached to it.\nThese VCs play a crucial role in regulating and managing resources. They define the parameters for controlling, managing, and interacting with the resource and thus regulate its use, sharing, and modification in the dataverse. These VCs guarantee order and compliance with established resource management standards."]}),"\n",(0,a.jsx)(i.h3,{id:"claim-and-revocation",children:"Claim and revocation"}),"\n",(0,a.jsx)(i.h4,{id:"self-sovereign-governance-principles",children:"Self-sovereign governance principles"}),"\n",(0,a.jsx)(i.p,{children:'Except from Governance credentials, resources are considered to be under "Self-Sovereign" management according to the following two principles:'}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Free Issuance of Claims"}),": In this framework, any entity (individual, organization, service, etc.) can issue claims on the resource concerned, ",(0,a.jsx)(i.strong,{children:"except for governance claims"}),", which are issued by the identities themselves."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Unilateral revocation of claims"}),": This principle stipulates that claims can only be revoked by the entity that issued them. This means that if Entity A issues a claim on the resource, only Entity A can revoke that claim. This principle is unalterable and remains independent of any intervention or modification by governance structures."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:'Self-sovereign governance is particularly well suited to environments where autonomy and decentralization are paramount, as is the case in the Axone dataverse. However, we must remain vigilant to the "gossip effect": given that any entity can issue credentials, there is a risk that unverified or inaccurate information will be disseminated. This phenomenon poses a significant challenge in balancing individual freedom and collective interest. Such dynamics need to be carefully considered when designing governance schemes in Zones.'}),"\n",(0,a.jsx)(i.h2,{id:"registration-of-verifiable-presentation-in-the-axone-protocol",children:"Registration of Verifiable Presentation in the Axone Protocol"}),"\n",(0,a.jsx)(i.p,{children:"Once the Issuer successfully issues the Verifiable Credentials (VCs) associated with a resource or a Zone to the Holder, the Registrant will record a Verifiable Presentation (VP) in the Axone blockchain. A VP consists of a set of VCs. The Registrant can be either the Holder or a third party."}),"\n",(0,a.jsx)(i.p,{children:"Recording VPs in the blockchain, rather than individual VCs, ensures the confidentiality of specific properties by only revealing a restricted set of properties on the public chain."}),"\n",(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,a.jsx)("img",{src:"/img/content/academy/verifiable-claims-4.webp",alt:"Verifiable presentation W3C",style:{maxHeight:"360px"}})}),"\n",(0,a.jsx)(r.Z,{quiz:o})]})}function u(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}}}]);