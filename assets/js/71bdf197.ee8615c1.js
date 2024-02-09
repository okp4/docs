"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[89687],{91228:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,readingTime:()=>c,toc:()=>h});var s=i(85893),n=i(11151);const r={sidebar_position:10},a="Describe a resource",o={id:"academy/describe-resource",title:"Describe a resource",description:"Reading time:  min",source:"@site/docs/academy/describe-resource.mdx",sourceDirName:"academy",slug:"/academy/describe-resource",permalink:"/academy/describe-resource",draft:!1,unlisted:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/academy/describe-resource.mdx",tags:[],version:"current",lastUpdatedAt:1707385635,formattedLastUpdatedAt:"Feb 8, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"academy",previous:{title:"Verifiable Claims Principles",permalink:"/academy/verifiable-claims"},next:{title:"Create the resource's governance",permalink:"/academy/resource-governance"}},d={},c=10,h=[{value:"Step 1: Create keys",id:"step-1-create-keys",level:2},{value:"Step 2: Create the credentials",id:"step-2-create-the-credentials",level:2},{value:"Description of the dataset",id:"description-of-the-dataset",level:3},{value:"Description of the service",id:"description-of-the-service",level:3},{value:"Step 3: Sign the credentials",id:"step-3-sign-the-credentials",level:2},{value:"Step 4: Register the credentials in the blockchain",id:"step-4-register-the-credentials-in-the-blockchain",level:2}];function l(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"describe-a-resource",children:"Describe a resource"}),"\n",(0,s.jsxs)("i",{children:["Reading time: ",c," min"]}),"\n",(0,s.jsx)(t.p,{children:"Now that you know what a DID and a Verifiable Credential are, and what they mean for the OKP4 protocol, let's put them into practice!"}),"\n",(0,s.jsx)(t.p,{children:"You're a digital resource provider and you want to share a dataset or a service. First, you need to describe your resource and register it in the Dataverse (i.e. in the OKP4 protocol)."}),"\n",(0,s.jsx)(t.p,{children:"Here are the 4 steps involved:"}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("img",{src:"/img/content/academy/describe-resource-1.webp",alt:"Steps to describe a resource in the Dataverse",style:{maxHeight:"340px"}})}),"\n",(0,s.jsx)(t.p,{children:"We'll take 2 examples in this tutorial:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The dataset ",(0,s.jsx)(t.a,{href:"https://data.lacity.org/Public-Safety/Crime-Data-from-2020-to-Present/2nrs-mtv8/about_data",children:"Crime Data from 2020 to Present"})]}),"\n",(0,s.jsxs)(t.li,{children:["The storage service ",(0,s.jsx)(t.a,{href:"https://ipfs.tech",children:"IPFS"})]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Prerequisite: ",(0,s.jsx)(t.a,{href:"https://docs.okp4.network/tutorials/cli-1#installing-the-okp4-cli",children:"Install the OKP4 CLI"})," to interact with the protocol."]})}),"\n",(0,s.jsx)(t.h2,{id:"step-1-create-keys",children:"Step 1: Create keys"}),"\n",(0,s.jsx)(t.p,{children:"As we saw previously, all entities are identified by a DID in the Dataverse. The first step consists of creating keys and related DID for the issuer of the credentials and the resource itself."}),"\n",(0,s.jsx)(t.p,{children:"The OKP4 Protocol can provide you keys (also called a wallet) and DID. A key pair is created to obtain a wallet to establish secure ownership and control over your assets on the OKP4 blockchain. The key pair consists of two cryptographic keys: public and private keys.\nWhen creating a wallet, you're typically provided with a mnemonic consisting of 12, 24, or sometimes more words. This mnemonic acts as a human-readable representation of the underlying cryptographic information. It is easier to remember and write down than the complex numbers and characters representing the private key.\nThe mnemonic serves as a backup mechanism for the wallet. You can regenerate the key pair by inputting the mnemonic into any compatible wallet software to recover access to your funds."}),"\n",(0,s.jsx)(t.p,{children:"Here, we don't create a wallet for cryptocurrency storage but for secure storage of identifiers: A wallet can securely store digital identifiers, such as proofs of identity, certificates, or other personal identification information."}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["A keyring is a secure software utility designed to store and manage credentials, such as passwords, cryptographic keys, and API tokens, in a centralized and encrypted form. ",(0,s.jsx)(t.code,{children:"--keyring-backend test"})," is a command parameter used to configure a keyring in test mode, which is helpful for development and testing but not for applications where private key security is a major concern. Be careful; this keyring is unsafe as the private keys are unencrypted on the file system."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'\u200b\u200b# Create a new key. Replace "crime-data-lapd" with another name\nokp4d keys add crime-data-lapd --keyring-backend test\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"If you create a new key pair, the terminal displays a list of 24 words. Store this mnemonic phrase in a safe place."})}),"\n",(0,s.jsxs)(t.p,{children:["Get the list of all your keys stored locally especially the new one. You can see that the DID related to this key is ",(0,s.jsx)(t.code,{children:"did:key:zQ3shRfADCmegmmKotqCjzDc9BHWDpbEzp9yMiN5RkJx88oP5"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'okp4d keys list --keyring-backend test\n\naddress: okp413e4exyqr5chxz5qlg2wpqr5ehmq90q2dgy753z\n  did: did:key:zQ3shRfADCmegmmKotqCjzDc9BHWDpbEzp9yMiN5RkJx88oP5\n  name: crime-data-lapd\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Aj8dI0OJWxTGM4gYd89cB8Qzi95DNxR/3F9DAPaNU0Mg"}\'\n  type: local\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can also use the command ",(0,s.jsx)(t.code,{children:"okp4d show"})," to directly find information about a particular wallet."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'# Replace "crime-data-lapd" with your wallet name\nokp4d keys show crime-data-lapd --keyring-backend test\n- address: okp413e4exyqr5chxz5qlg2wpqr5ehmq90q2dgy753z\n  name: crime-data-lapd\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Aj8dI0OJWxTGM4gYd89cB8Qzi95DNxR/3F9DAPaNU0Mg"}\'\n  type: local\n'})}),"\n",(0,s.jsx)(t.p,{children:"Reiterate the command to create a wallet to store the IPFS and Issuer's identities."}),"\n",(0,s.jsx)(t.p,{children:"So now we have the following information:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Crime dataset"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Name of the wallet"}),(0,s.jsx)(t.td,{children:"crime-data-lapd"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Public key"}),(0,s.jsx)(t.td,{children:"okp413e4exyqr5chxz5qlg2wpqr5ehmq90q2dgy753z"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DID"}),(0,s.jsxs)(t.td,{children:["did:key",":zQ3shRfADCmegmmKotqCjzDc9BHWDpbEzp9yMiN5RkJx88oP5"]})]})]})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"IPFS Storage"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Name of the wallet"}),(0,s.jsx)(t.td,{children:"digital-resource-ipfs"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Public key"}),(0,s.jsx)(t.td,{children:"okp41mlq7l9snuy9m0cznyrv3emn9wsndzle5v4j5q4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DID"}),(0,s.jsxs)(t.td,{children:["did:key",":zQ3shhb4SvzBRLbBonsvKb3WX6WoDeKWHpsXXXMhAJETqXAfB"]})]})]})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Issuer"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Name of the wallet"}),(0,s.jsx)(t.td,{children:"issuer-okp4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Public key"}),(0,s.jsx)(t.td,{children:"okp41ysl9yllv40kfygcdfqj7c9n2a5c5zpmgku8ufg"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DID"}),(0,s.jsxs)(t.td,{children:["did:key",":zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3"]})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"In the future, you will be able to use any key provider, such as Cheqd."})}),"\n",(0,s.jsx)(t.h2,{id:"step-2-create-the-credentials",children:"Step 2: Create the credentials"}),"\n",(0,s.jsxs)(t.p,{children:["Find the credential templates you need in the ",(0,s.jsx)(t.a,{href:"https://docs.okp4.network/ontology/schemas",children:"Ontology documentation"})," according to the nature of the resource you describe."]}),"\n",(0,s.jsxs)(t.p,{children:["For the dataset, instantiate the template ",(0,s.jsx)(t.a,{href:"https://github.com/okp4/ontology/blob/main/src/example/dataset/crime-dataset-description.jsonld",children:"credential-dataset-description"}),".",(0,s.jsx)(t.br,{}),"\n","For the service, instantiate the template ",(0,s.jsx)(t.a,{href:"https://github.com/okp4/ontology/blob/main/src/example/digital-service/ipfs-digital-service-description.jsonld",children:"credential-digital-service-description"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Would you like to describe your dataset with other properties? You can create your template of credentials. Don't directly add these properties in the DatasetDescriptionCredential as defined in the Ontology."})}),"\n",(0,s.jsx)(t.h3,{id:"description-of-the-dataset",children:"Description of the dataset"}),"\n",(0,s.jsxs)(t.p,{children:["Here are the following metadata of the dataset ",(0,s.jsx)(t.a,{href:"https://data.lacity.org/Public-Safety/Crime-Data-from-2020-to-Present/2nrs-mtv8/about_data",children:"Crime Data from 2020 to Present"}),":"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Title"}),(0,s.jsx)(t.th,{children:"Crime Data from 2020 to Present"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"This dataset reflects incidents of crime in the City of Los Angeles dating back to 2020. This data is transcribed from original crime reports that are typed on paper and therefore there may be some inaccuracies within the data. Some location fields with missing data are noted as (0\xb0, 0\xb0). Address fields are only provided to the nearest hundred block in order to maintain privacy. This data is as accurate as the data in the database."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Format"}),(0,s.jsx)(t.td,{children:"CSV"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Geographical coverage"}),(0,s.jsx)(t.td,{children:"USA"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Image"}),(0,s.jsx)(t.td,{children:"NA"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tags"}),(0,s.jsx)(t.td,{children:"Crime, Police, Los Angeles"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Temporal coverage"}),(0,s.jsx)(t.td,{children:"2020 to Present"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Topic"}),(0,s.jsx)(t.td,{children:"Security"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Let's fill in the template."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "@context": [\n        "https://www.w3.org/2018/credentials/v1",\n        "https://w3id.org/okp4/ontology/v$major/schema/credential/dataset/description/"\n    ],\n    "type": "VerifiableCredential",\n    "id": "https://w3id.org/okp4/ontology/v$major/schema/credential/dataset/description/d1120529-3242-4fa8-ac7c-a99abc3fc73e",\n    "credentialSubject": {\n        "id": "did:key:zQ3shRfADCmegmmKotqCjzDc9BHWDpbEzp9yMiN5RkJx88oP5",\n        "type": "DatasetDescriptionCredential",\n        "hasDescription": "This dataset reflects incidents of crime in the City of Los Angeles dating back to 2020. This data is transcribed from original crime reports that are typed on paper and therefore there may be some inaccuracies within the data. Some location fields with missing data are noted as (0\xb0, 0\xb0). Address fields are only provided to the nearest hundred block in order to maintain privacy. This data is as accurate as the data in the database.",\n        "hasFormat": "https://w3id.org/okp4/ontology/v$major/thesaurus/media-type/text_csv",\n        "hasGeoCoverage": "https://w3id.org/okp4/ontology/v$major/thesaurus/area-code/840",\n        "hasTag": [\n            "Crime",\n            "Police",\n            "Los Angeles"\n        ],\n        "hasTemporalCoverage": "2020-01-01T00:00:00.0000+01:00/2024-02-02T00:00:00.00000+01:00",\n        "hasTitle": "Crime Data from 2020 to Present",\n        "hasTopic": "https://w3id.org/okp4/ontology/v$major/thesaurus/topic/security"\n    },\n    "issuanceDate": "2024-02-02T09:45:43.475304+01:00",\n    "issuer": {\n        "id": "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3",\n        "name": "OKP4"\n    }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Fields to modify:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"id"})," (in @context): change the UUID at the end of the URI. You can generate a new UUID with this ",(0,s.jsx)(t.a,{href:"https://www.uuidgenerator.net",children:"tool"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"id"}),": copy the did",":key"," of the dataset"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasDescription"}),": fill in the description of the dataset"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasFormat"}),": select the format of your dataset in the ",(0,s.jsx)(t.a,{href:"https://github.com/okp4/ontology/blob/main/src/thesaurus/media-type.ttl",children:"Thesaurus Media Type"}),". Put the URI of the selected format in the jsonld."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasGeoCoverage"}),": select the geographical zone concerned by your dataset in the ",(0,s.jsx)(t.a,{href:"https://github.com/okp4/ontology/blob/main/src/thesaurus/area-code.ttl",children:"Thesaurus Area-code"}),". Put the URI of the selected zone in the jsonld."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasTag"}),": fill in a list of tags"]}),"\n",(0,s.jsx)(t.li,{children:"`hasTemporalCoverage': change the start and end date of the period concerned by your dataset"}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasTitle"}),": fill in the title of the dataset"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasTopic"}),": select the topic concerned by your dataset in the ",(0,s.jsx)(t.a,{href:"https://github.com/okp4/ontology/blob/main/src/thesaurus/topic.ttl",children:"Thesaurus Topic"}),". Put the URI of the selected topic in the jsonld."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"issuanceDate"}),": update the date for Today"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"id"})," (issuer): copy the did",":key"," of the issuer"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"name"}),": put the issuer's name (string)."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can remove some properties if they are not relevant to your dataset."}),"\n",(0,s.jsx)(t.h3,{id:"description-of-the-service",children:"Description of the service"}),"\n",(0,s.jsxs)(t.p,{children:["Here are the following metadata of the service ",(0,s.jsx)(t.a,{href:"https://ipfs.tech",children:"IPFS"}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Title"}),(0,s.jsx)(t.th,{children:"IPFS"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"IPFS is a decentralized protocol designed to facilitate the storage, sharing, and retrieval of files on a global scale."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Category"}),(0,s.jsx)(t.td,{children:"Storage"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Image"}),(0,s.jsx)(t.td,{children:"NA"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Publisher"}),(0,s.jsx)(t.td,{children:"OKP4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tags"}),(0,s.jsx)(t.td,{children:"Storage, Cloud, Peer-to-peer"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Webpage"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.ipfs.tech/",children:"https://docs.ipfs.tech/"})})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "@context": [\n        "https://www.w3.org/2018/credentials/v1",\n        "https://w3id.org/okp4/ontology/v$major/schema/credential/digital-service/description/"\n    ],\n    "type": "VerifiableCredential",\n    "id": "https://w3id.org/okp4/ontology/v$major/schema/credential/digital-service/description/72cab400-5bd6-4eb4-8605-a5ee8c1a45c9",\n    "credentialSubject": {\n        "id": "did:key:zQ3shhb4SvzBRLbBonsvKb3WX6WoDeKWHpsXXXMhAJETqXAfB",\n        "type": "DigitalServiceDescriptionCredential",\n        "hasCategory": "https://w3id.org/okp4/ontology/v$major/thesaurus/digital-service-category/Storage",\n        "hasDescription": "IPFS is a decentralized protocol designed to facilitate the storage, sharing, and retrieval of files on a global scale",\n        "hasPublisher": "IPFS",\n        "hasTag": [\n            "Storage",\n            "Peer-to-peer",\n            "Cloud"\n        ],\n        "hasTitle": "IPFS",\n        "hasWebpage": "https://docs.ipfs.tech/"\n    },\n    "issuanceDate": "2024-01-22T09:28:43.475304+01:00",\n    "issuer": {\n        "id": "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3",\n        "name": "OKP4"\n    }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Fields to modify:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"id"})," (in @context): change the UUID at the end of the URI. You can generate a new UUID with this ",(0,s.jsx)(t.a,{href:"https://www.uuidgenerator.net",children:"tool"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"id"}),": copy the did",":key"," of the digital service"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasCategory"}),": select the cateogry of your service in the ",(0,s.jsx)(t.a,{href:"https://github.com/okp4/ontology/blob/main/src/thesaurus/digital-service-category.ttl",children:"Thesaurus Digital Service Category"}),". Put the URI of the selected format in the jsonld."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasDescription"}),": fill in the description of the service"]}),"\n",(0,s.jsx)(t.li,{children:"`hasPublisher': fill in the name of the entity primarily responsible for making the Digital Service available"}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasTag"}),": fill in a list of tags"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasTitle"}),": fill in the title of the service"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasWebpage"}),": fill in the URL of the service's webpage"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"id"})," (issuer): copy the did",":key"," of the issuer"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"name"}),": put the issuer's name (string)."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"step-3-sign-the-credentials",children:"Step 3: Sign the credentials"}),"\n",(0,s.jsx)(t.p,{children:"Now that you have created the VCs, you will sign them."}),"\n",(0,s.jsx)(t.p,{children:"Signing a verifiable credential involves creating a digital signature using cryptographic techniques. This signature is unique to both the document (in this case, the credential) and the signer's private key, making it impossible to forge. The private key is kept secret by the signer, while the corresponding public key is made available for anyone wishing to verify the signature's authenticity."}),"\n",(0,s.jsx)(t.p,{children:"By signing the credential, any alteration to the credential's data after it has been signed will invalidate the signature. This ensures the data has not been tampered with and remains as it was when issued."}),"\n",(0,s.jsx)(t.p,{children:"To sign your VC, use this command:"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"The command is coming soon \ud83d\udd27"})}),"\n",(0,s.jsx)(t.p,{children:"You can see that there is a new field in the jsonld with the cryptographic proof."}),"\n",(0,s.jsx)(t.p,{children:"The VC is now in the hands of the Holder. Note that it is possible that the Issuer is also the Holder."}),"\n",(0,s.jsxs)(t.p,{children:["The OKP4 blockchain can only register VCs in N-Quads format. Then, you must convert the jsonld files in N-Quads. You can use this tool: ",(0,s.jsx)(t.a,{href:"https://transform.tools/jsonld-to-nquads",children:"https://transform.tools/jsonld-to-nquads"})," ."]}),"\n",(0,s.jsx)(t.h2,{id:"step-4-register-the-credentials-in-the-blockchain",children:"Step 4: Register the credentials in the blockchain"}),"\n",(0,s.jsx)(t.p,{children:"The final step is to register the VCs in the OKP4 blockchain by submitting them to the Dataverse smart contract. It's the role of the Registrant (who can be the Holder or another entity)."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Note that as you interact with the OKP4 blockchain, you must pay fees in $KNOW at each transaction."})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'# okp4d tx wasm execute $CONTRACT_ADDR \\ --from $MY_ADDR \\ --gas 10000000 \\ "{\\"submit_claims\\":{\\"metadata\\": \\"$(cat vc.nq | base64)\\"}}"\n'})}),"\n",(0,s.jsx)(t.p,{children:"With:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"CONTRACT_ADDR"})," : dataverse contract address (always the same)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"MY_ADDR"})," : registrant okp4 address"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"vc.nq"})," : name of the verifiable credential signed in RDF in N-Quads format"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The Protocol will check the signature and if the public key corresponds to the proof in the VC, the VC is registered in the smart contract (Cognitarium)."}),"\n",(0,s.jsxs)(t.p,{children:["The command returns the hash of the transaction. You can find more details of this transaction in the ",(0,s.jsx)(t.a,{href:"https://explore.okp4.network/",children:"Explorer"}),". Select the network (Currently Drunemeton-Testnet), click on the Search icon, and paste the transaction hash."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Remember, the Resource Governance VC ensures the existence of a resource in the protocol: a resource or zone exists in the protocol only if governance is attached to it. Let's do it on the next page."})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var s=i(67294);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);