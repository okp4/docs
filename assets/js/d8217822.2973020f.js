"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[91221],{90565:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=s(85893),n=s(11151);const r={},a="Dataverse",d={id:"okp4-dataverse",title:"Dataverse",description:"Overview",source:"@site/contracts/okp4-dataverse.md",sourceDirName:".",slug:"/okp4-dataverse",permalink:"/contracts/next/okp4-dataverse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Cognitarium",permalink:"/contracts/next/okp4-cognitarium"},next:{title:"Law Stone",permalink:"/contracts/next/okp4-law-stone"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Dataverse",id:"dataverse-1",level:2},{value:"Zones",id:"zones",level:2},{value:"Resources",id:"resources",level:2},{value:"Decentralized Identifiers (DID)",id:"decentralized-identifiers-did",level:2},{value:"Claims",id:"claims",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"InstantiateMsg",id:"instantiatemsg",level:2},{value:"ExecuteMsg",id:"executemsg",level:2},{value:"ExecuteMsg::SubmitClaims",id:"executemsgsubmitclaims",level:3},{value:"Format",id:"format",level:4},{value:"Preconditions",id:"preconditions",level:4},{value:"ExecuteMsg::RevokeClaims",id:"executemsgrevokeclaims",level:3},{value:"Preconditions:",id:"preconditions-1",level:4},{value:"QueryMsg",id:"querymsg",level:2},{value:"QueryMsg::Dataverse",id:"querymsgdataverse",level:3},{value:"Responses",id:"responses",level:2},{value:"dataverse",id:"dataverse-2",level:3},{value:"Definitions",id:"definitions",level:2},{value:"Binary",id:"binary",level:3},{value:"NQuads",id:"nquads",level:3},{value:"RdfFormat",id:"rdfformat",level:3},{value:"TripleStoreConfig",id:"triplestoreconfig",level:3},{value:"TripleStoreLimitsInput",id:"triplestorelimitsinput",level:3},{value:"Uint128",id:"uint128",level:3},{value:"Uint64",id:"uint64",level:3}];function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"dataverse",children:"Dataverse"}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"dataverse"})," smart contract is responsible for overseeing and managing the Dataverse."]}),"\n",(0,t.jsx)(i.h2,{id:"dataverse-1",children:"Dataverse"}),"\n",(0,t.jsx)(i.p,{children:"The Dataverse is an ever-expanding universe that encompasses a wide range of digital resources. These include datasets, data processing algorithms, ML algorithm, storage resources, computational resources, identity management solutions, orchestration engines, oracles, and many other resources recorded on the blockchain."}),"\n",(0,t.jsx)(i.p,{children:"When the smart contract is instantiated, it creates a Dataverse instance. This instance is separated and isolated from any pre-existing ones, and as many dataverse instances as required can be created."}),"\n",(0,t.jsx)(i.h2,{id:"zones",children:"Zones"}),"\n",(0,t.jsx)(i.p,{children:"Zones within the Dataverse represent distinct areas or domains where specific governance rules and policies are applied. These Zones are conceptual frameworks created to manage and organize resources under a unified set of regulations and permissions."}),"\n",(0,t.jsx)(i.p,{children:"Each Zone is defined by its unique identity and set of governing rules, which dictate how resources within it can be accessed, used, and shared. This approach allows for granular control over different segments of the Dataverse, catering to various requirements and use cases. By managing these Zones, the dataverse smart contract ensures that resources are utilized in compliance with the defined policies and consents, thereby maintaining order and integrity within the Dataverse."}),"\n",(0,t.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)(i.p,{children:"In the context of the Dataverse, Resources refer to a broad category of digital entities, which include Services and Digital Resources."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Digital Resources"}),": This category extends to various digital entities such as datasets, algorithms, machine learning models, and other digital assets. Like Services, Digital Resources are identified by a URI in conjunction with the Service responsible for their provision."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Services"}),": These are network-accessible functionalities like REST APIs, gRPC services, and other similar offerings. Each Service in the Dataverse is uniquely identified by its Uniform Resource Identifier (URI) and is associated with a specific Registrar responsible for its registration and management."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"decentralized-identifiers-did",children:"Decentralized Identifiers (DID)"}),"\n",(0,t.jsx)(i.p,{children:"Decentralized Identifiers (DID) are a foundational element in the Dataverse, serving as unique, persistent, and globally resolvable identifiers that are fully under the control of the DID subject, which could be an individual, organization, or a any kind of resource (dataset,\nalgorithm, nft, ML algorithm)."}),"\n",(0,t.jsx)(i.p,{children:"DIDs play a crucial role in the Dataverse by facilitating a trustable and interoperable identity mechanism. They enable the establishment of a verifiable and self-sovereign identity for resources, services, and entities within the ecosystem."}),"\n",(0,t.jsx)(i.h2,{id:"claims",children:"Claims"}),"\n",(0,t.jsx)(i.p,{children:"Claims in the Dataverse context are assertions or statements made about a Resource identified by a DID."}),"\n",(0,t.jsx)(i.p,{children:"Claims play a pivotal role in the governance framework of the Dataverse. By leveraging knowledge derived from verifiable credentials, the governances established by Zones can evaluate the fulfilment of specific rules and compliance. This evaluation is critical in ensuring that the resources within the Dataverse adhere to the established norms, policies, and requirements."}),"\n",(0,t.jsxs)(i.p,{children:["Claims are submitted in the form of ",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/vc-data-model/#presentations",children:"Verifiable Presentations (VPs)"}),", which are aggregations of one or more ",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/vc-data-model/#what-is-a-verifiable-credential",children:"Verifiable Credentials (VCs)"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(i.p,{children:["Given its role and status, this smart contract serves as the primary access point for the OKP4 protocol to manage all on-chain stored resources. To fulfill its tasks, the smart contract relies on other smart contracts within the OKP4 ecosystem. Notably, it uses the ",(0,t.jsx)(i.code,{children:"Cognitarium"})," smart contract for persisting the Dataverse representation in an ontological form and the ",(0,t.jsx)(i.code,{children:"Law Stone"})," smart contract to establish governance rules."]}),"\n",(0,t.jsx)(i.h2,{id:"instantiatemsg",children:"InstantiateMsg"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"InstantiateMsg"})," is used to initialize a new instance of the dataverse."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"parameter"}),(0,t.jsx)(i.th,{children:"description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"name"})}),(0,t.jsxs)(i.td,{children:["_(Required.) _ ",(0,t.jsx)(i.strong,{children:"string"}),". A unique name to identify the dataverse instance."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"triplestore_config"})}),(0,t.jsxs)(i.td,{children:["_(Required.) _ ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"#triplestoreconfig",children:"TripleStoreConfig"})}),". The configuration used to instantiate the triple store."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"triplestore_config.code_id"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"#uint64",children:"Uint64"})}),". The code id that will be used to instantiate the triple store contract in which to store dataverse semantic data. It must implement the cognitarium interface."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"triplestore_config.limits"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"#triplestorelimitsinput",children:"TripleStoreLimitsInput"})}),". Limitations regarding triple store usage."]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"executemsg",children:"ExecuteMsg"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"ExecuteMsg"})," defines the set of possible actions that can be performed on the dataverse."]}),"\n",(0,t.jsx)(i.p,{children:"This enum provides variants for registering services, datasets, and other operations related to the dataverse."}),"\n",(0,t.jsx)(i.h3,{id:"executemsgsubmitclaims",children:"ExecuteMsg::SubmitClaims"}),"\n",(0,t.jsx)(i.p,{children:"Submits new claims about a resource to the dataverse."}),"\n",(0,t.jsx)(i.p,{children:"The SubmitClaims message is a pivotal component in the dataverse, enabling entities to contribute new claims about various resources. A claim represents a statement made by an entity, referred to as the issuer, which could be a person, organization, or service. These claims pertain to a diverse range of resources, including digital resources, services, zones, or individuals, and are asserted as factual by the issuer."}),"\n",(0,t.jsx)(i.h4,{id:"format",children:"Format"}),"\n",(0,t.jsx)(i.p,{children:"Claims are injected into the dataverse through Verifiable Presentations (VPs). These presentations effectively amalgamate and showcase multiple credentials, thus providing a cohesive and comprehensive view of the assertions being made."}),"\n",(0,t.jsx)(i.p,{children:"While the data in a VP typically revolves around a common subject, it accommodates an unlimited number of subjects and issuers. This flexibility allows for a broad spectrum of claims to be represented."}),"\n",(0,t.jsx)(i.p,{children:"Primarily, the claims leverage the OKP4 ontology, which facilitates articulating assertions about widely acknowledged resources in the dataverse, including digital services, digital resources, zones, governance, and more."}),"\n",(0,t.jsx)(i.p,{children:"Additionally, other schemas may also be employed to supplement and enhance the validated knowledge contributed to these resources."}),"\n",(0,t.jsx)(i.h4,{id:"preconditions",children:"Preconditions"}),"\n",(0,t.jsx)(i.p,{children:"To maintain integrity and coherence in the dataverse, several preconditions are set for the submission of claims:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Format Requirement"}),": Claims must be encapsulated within Verifiable Presentations (VPs)."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Unique Identifier Mandate"}),": Each Verifiable Credential within the dataverse must possess a unique identifier."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Issuer Signature"}),": Claims must bear the issuer's signature. This signature must be verifiable, ensuring authenticity and credibility."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"parameter"}),(0,t.jsx)(i.th,{children:"description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"submit_claims"})}),(0,t.jsxs)(i.td,{children:["_(Required.) _ ",(0,t.jsx)(i.strong,{children:"object"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"submit_claims.format"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"#rdfformat",children:"RdfFormat"}),"|null"]}),". RDF format in which the metadata is represented. If not provided, the default format is ",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/n-quads/",children:"N-Quads"})," format."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"submit_claims.metadata"})}),(0,t.jsxs)(i.td,{children:["_(Required.) _ ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"#binary",children:"Binary"})}),". The serialized metadata intended for attachment. This metadata should adhere to the format specified in the ",(0,t.jsx)(i.code,{children:"format"})," field."]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"executemsgrevokeclaims",children:"ExecuteMsg::RevokeClaims"}),"\n",(0,t.jsx)(i.p,{children:"Revoke or withdraw a previously submitted claims."}),"\n",(0,t.jsx)(i.h4,{id:"preconditions-1",children:"Preconditions:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Identifier Existance"}),": The identifier of the claims must exist in the dataverse."]}),"\n"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"parameter"}),(0,t.jsx)(i.th,{children:"description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"revoke_claims"})}),(0,t.jsxs)(i.td,{children:["_(Required.) _ ",(0,t.jsx)(i.strong,{children:"object"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"revoke_claims.identifier"})}),(0,t.jsxs)(i.td,{children:["_(Required.) _ ",(0,t.jsx)(i.strong,{children:"string"}),". The unique identifier of the claims to be revoked."]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"querymsg",children:"QueryMsg"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"QueryMsg"})," defines the set of possible queries that can be made to retrieve information about the dataverse."]}),"\n",(0,t.jsx)(i.p,{children:"This enum provides variants for querying the dataverse's details and other related information."}),"\n",(0,t.jsx)(i.h3,{id:"querymsgdataverse",children:"QueryMsg::Dataverse"}),"\n",(0,t.jsx)(i.p,{children:"Retrieves information about the current dataverse instance."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"parameter"}),(0,t.jsx)(i.th,{children:"description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"dataverse"})}),(0,t.jsxs)(i.td,{children:["_(Required.) _ ",(0,t.jsx)(i.strong,{children:"object"}),"."]})]})})]}),"\n",(0,t.jsx)(i.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsx)(i.h3,{id:"dataverse-2",children:"dataverse"}),"\n",(0,t.jsx)(i.p,{children:"DataverseResponse is the response of the Dataverse query."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"property"}),(0,t.jsx)(i.th,{children:"description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"name"})}),(0,t.jsxs)(i.td,{children:["_(Required.) _ ",(0,t.jsx)(i.strong,{children:"string"}),". The name of the dataverse."]})]})})]}),"\n",(0,t.jsx)(i.h2,{id:"definitions",children:"Definitions"}),"\n",(0,t.jsx)(i.h3,{id:"binary",children:"Binary"}),"\n",(0,t.jsx)(i.p,{children:"A string containing Base64-encoded data."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsx)(i.tr,{children:(0,t.jsx)(i.th,{children:"type"})})}),(0,t.jsx)(i.tbody,{children:(0,t.jsx)(i.tr,{children:(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"string"}),"."]})})})]}),"\n",(0,t.jsx)(i.h3,{id:"nquads",children:"NQuads"}),"\n",(0,t.jsx)(i.p,{children:"N-Quads Format"}),"\n",(0,t.jsxs)(i.p,{children:["N-Quads is an extension of N-Triples to support RDF datasets by adding an optional fourth element to represent the graph name. See the ",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/n-quads/",children:"official N-Quads specification"}),"."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsx)(i.tr,{children:(0,t.jsx)(i.th,{children:"literal"})})}),(0,t.jsx)(i.tbody,{children:(0,t.jsx)(i.tr,{children:(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:'"n_quads"'})})})})]}),"\n",(0,t.jsx)(i.h3,{id:"rdfformat",children:"RdfFormat"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"RdfFormat"})," represents the various serialization formats for RDF (Resource Description Framework) data."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"variant"}),(0,t.jsx)(i.th,{children:"description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#nquads",children:"NQuads"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"string"}),": ",(0,t.jsx)(i.code,{children:"n_quads"}),". N-Quads Format",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"N-Quads is an extension of N-Triples to support RDF datasets by adding an optional fourth element to represent the graph name. See the ",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/n-quads/",children:"official N-Quads specification"}),"."]})]})})]}),"\n",(0,t.jsx)(i.h3,{id:"triplestoreconfig",children:"TripleStoreConfig"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"TripleStoreConfig"})," represents the configuration related to the management of the triple store."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"property"}),(0,t.jsx)(i.th,{children:"description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"code_id"})}),(0,t.jsxs)(i.td,{children:["_(Required.) _ ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"#uint64",children:"Uint64"})}),". The code id that will be used to instantiate the triple store contract in which to store dataverse semantic data. It must implement the cognitarium interface."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"limits"})}),(0,t.jsxs)(i.td,{children:["_(Required.) _ ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"#triplestorelimitsinput",children:"TripleStoreLimitsInput"})}),". Limitations regarding triple store usage."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"limits.max_byte_size"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of bytes the store can contain. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. Default to [Uint128::MAX] if not set, which can be considered as no limit."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"limits.max_insert_data_byte_size"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of bytes an insert data query can contain. Default to [Uint128::MAX] if not set, which can be considered as no limit."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"limits.max_insert_data_triple_count"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of triples an insert data query can contain (after parsing). Default to [Uint128::MAX] if not set, which can be considered as no limit."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"limits.max_query_limit"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"integer|null"}),". The maximum limit of a query, i.e. the maximum number of triples returned by a select query. Default to 30 if not set."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"limits.max_query_variable_count"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"integer|null"}),". The maximum number of variables a query can select. Default to 30 if not set."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"limits.max_triple_byte_size"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of bytes the store can contain for a single triple. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. The limit is used to prevent storing very large triples, especially literals. Default to [Uint128::MAX] if not set, which can be considered as no limit."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"limits.max_triple_count"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of triples the store can contain. Default to [Uint128::MAX] if not set, which can be considered as no limit."]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"triplestorelimitsinput",children:"TripleStoreLimitsInput"}),"\n",(0,t.jsx)(i.p,{children:"Contains requested limitations regarding store usages."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"property"}),(0,t.jsx)(i.th,{children:"description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"max_byte_size"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of bytes the store can contain. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. Default to [Uint128::MAX] if not set, which can be considered as no limit."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"max_insert_data_byte_size"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of bytes an insert data query can contain. Default to [Uint128::MAX] if not set, which can be considered as no limit."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"max_insert_data_triple_count"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of triples an insert data query can contain (after parsing). Default to [Uint128::MAX] if not set, which can be considered as no limit."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"max_query_limit"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"integer|null"}),". The maximum limit of a query, i.e. the maximum number of triples returned by a select query. Default to 30 if not set."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"max_query_variable_count"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"integer|null"}),". The maximum number of variables a query can select. Default to 30 if not set."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"max_triple_byte_size"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of bytes the store can contain for a single triple. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. The limit is used to prevent storing very large triples, especially literals. Default to [Uint128::MAX] if not set, which can be considered as no limit."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"max_triple_count"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of triples the store can contain. Default to [Uint128::MAX] if not set, which can be considered as no limit."]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"uint128",children:"Uint128"}),"\n",(0,t.jsx)(i.p,{children:"A string containing a 128-bit integer in decimal representation."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsx)(i.tr,{children:(0,t.jsx)(i.th,{children:"type"})})}),(0,t.jsx)(i.tbody,{children:(0,t.jsx)(i.tr,{children:(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"string"}),"."]})})})]}),"\n",(0,t.jsx)(i.h3,{id:"uint64",children:"Uint64"}),"\n",(0,t.jsx)(i.p,{children:"A thin wrapper around u64 that is using strings for JSON encoding/decoding, such that the full u64 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq."}),"\n",(0,t.jsx)(i.h1,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(i.p,{children:["Use ",(0,t.jsx)(i.code,{children:"from"})," to create instances of this and ",(0,t.jsx)(i.code,{children:"u64"})," to get the value out:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-#",metastring:"use cosmwasm_std::Uint64; let a = Uint64::from(42u64); assert_eq!(a.u64(), 42);",children:"\nlet b = Uint64::from(70u32); assert_eq!(b.u64(), 70); ```\n\n|type|\n|----|\n|**string**.|\n\n---\n\n*Rendered by [Fadroma](https://fadroma.tech) ([@fadroma/schema 1.1.0](https://www.npmjs.com/package/@fadroma/schema)) from `okp4-dataverse.json` (`f38b5aafa47fb333`)*\n"})})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,i,s)=>{s.d(i,{Z:()=>d,a:()=>a});var t=s(67294);const n={},r=t.createContext(n);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);