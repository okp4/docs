"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[91221],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(o,".").concat(c)]||u[c]||p[c]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={},l="Dataverse",s={unversionedId:"okp4-dataverse",id:"okp4-dataverse",title:"Dataverse",description:"Overview",source:"@site/contracts/okp4-dataverse.md",sourceDirName:".",slug:"/okp4-dataverse",permalink:"/fr/contracts/next/okp4-dataverse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Cognitarium",permalink:"/fr/contracts/next/okp4-cognitarium"},next:{title:"Law Stone",permalink:"/fr/contracts/next/okp4-law-stone"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Dataverse",id:"dataverse-1",level:2},{value:"Zones",id:"zones",level:2},{value:"Resources",id:"resources",level:2},{value:"Decentralized Identifiers (DID)",id:"decentralized-identifiers-did",level:2},{value:"Claims",id:"claims",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"InstantiateMsg",id:"instantiatemsg",level:2},{value:"ExecuteMsg",id:"executemsg",level:2},{value:"ExecuteMsg::SubmitClaims",id:"executemsgsubmitclaims",level:3},{value:"Format",id:"format",level:4},{value:"Preconditions",id:"preconditions",level:4},{value:"ExecuteMsg::RevokeClaims",id:"executemsgrevokeclaims",level:3},{value:"Preconditions:",id:"preconditions-1",level:4},{value:"QueryMsg",id:"querymsg",level:2},{value:"QueryMsg::Dataverse",id:"querymsgdataverse",level:3},{value:"Responses",id:"responses",level:2},{value:"dataverse",id:"dataverse-2",level:3},{value:"Definitions",id:"definitions",level:2},{value:"Binary",id:"binary",level:3},{value:"NQuads",id:"nquads",level:3},{value:"NTriples",id:"ntriples",level:3},{value:"RdfFormat",id:"rdfformat",level:3},{value:"RdfXml",id:"rdfxml",level:3},{value:"TripleStoreConfig",id:"triplestoreconfig",level:3},{value:"TripleStoreLimitsInput",id:"triplestorelimitsinput",level:3},{value:"Turtle",id:"turtle",level:3},{value:"Uint128",id:"uint128",level:3},{value:"Uint64",id:"uint64",level:3}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dataverse"},"Dataverse"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dataverse")," smart contract is responsible for overseeing and managing the Dataverse."),(0,r.kt)("h2",{id:"dataverse-1"},"Dataverse"),(0,r.kt)("p",null,"The Dataverse is an ever-expanding universe that encompasses a wide range of digital resources. These include datasets, data processing algorithms, ML algorithm, storage resources, computational resources, identity management solutions, orchestration engines, oracles, and many other resources recorded on the blockchain."),(0,r.kt)("p",null,"When the smart contract is instantiated, it creates a Dataverse instance. This instance is separated and isolated from any pre-existing ones, and as many dataverse instances as required can be created."),(0,r.kt)("h2",{id:"zones"},"Zones"),(0,r.kt)("p",null,"Zones within the Dataverse represent distinct areas or domains where specific governance rules and policies are applied. These Zones are conceptual frameworks created to manage and organize resources under a unified set of regulations and permissions."),(0,r.kt)("p",null,"Each Zone is defined by its unique identity and set of governing rules, which dictate how resources within it can be accessed, used, and shared. This approach allows for granular control over different segments of the Dataverse, catering to various requirements and use cases. By managing these Zones, the dataverse smart contract ensures that resources are utilized in compliance with the defined policies and consents, thereby maintaining order and integrity within the Dataverse."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,"In the context of the Dataverse, Resources refer to a broad category of digital entities, which include Services and Digital Resources."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Digital Resources"),": This category extends to various digital entities such as datasets, algorithms, machine learning models, and other digital assets. Like Services, Digital Resources are identified by a URI in conjunction with the Service responsible for their provision.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Services"),": These are network-accessible functionalities like REST APIs, gRPC services, and other similar offerings. Each Service in the Dataverse is uniquely identified by its Uniform Resource Identifier (URI) and is associated with a specific Registrar responsible for its registration and management."))),(0,r.kt)("h2",{id:"decentralized-identifiers-did"},"Decentralized Identifiers (DID)"),(0,r.kt)("p",null,"Decentralized Identifiers (DID) are a foundational element in the Dataverse, serving as unique, persistent, and globally resolvable identifiers that are fully under the control of the DID subject, which could be an individual, organization, or a any kind of resource (dataset,\nalgorithm, nft, ML algorithm)."),(0,r.kt)("p",null,"DIDs play a crucial role in the Dataverse by facilitating a trustable and interoperable identity mechanism. They enable the establishment of a verifiable and self-sovereign identity for resources, services, and entities within the ecosystem."),(0,r.kt)("h2",{id:"claims"},"Claims"),(0,r.kt)("p",null,"Claims in the Dataverse context are assertions or statements made about a Resource identified by a DID."),(0,r.kt)("p",null,"Claims play a pivotal role in the governance framework of the Dataverse. By leveraging knowledge derived from verifiable credentials, the governances established by Zones can evaluate the fulfilment of specific rules and compliance. This evaluation is critical in ensuring that the resources within the Dataverse adhere to the established norms, policies, and requirements."),(0,r.kt)("p",null,"Claims are submitted in the form of ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"Verifiable Presentations (VPs)"),", which are aggregations of one or more ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#what-is-a-verifiable-credential"},"Verifiable Credentials (VCs)"),"."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Given its role and status, this smart contract serves as the primary access point for the OKP4 protocol to manage all on-chain stored resources. To fulfill its tasks, the smart contract relies on other smart contracts within the OKP4 ecosystem. Notably, it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cognitarium")," smart contract for persisting the Dataverse representation in an ontological form and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Law Stone")," smart contract to establish governance rules."),(0,r.kt)("h2",{id:"instantiatemsg"},"InstantiateMsg"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"InstantiateMsg")," is used to initialize a new instance of the dataverse."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,r.kt)("strong",{parentName:"td"},"string"),". A unique name to identify the dataverse instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"triplestore_config")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#triplestoreconfig"},"TripleStoreConfig")),". The configuration used to instantiate the triple store.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"triplestore_config.code_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint64"},"Uint64")),". The code id that will be used to instantiate the triple store contract in which to store dataverse semantic data. It must implement the cognitarium interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"triplestore_config.limits")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#triplestorelimitsinput"},"TripleStoreLimitsInput")),". Limitations regarding triple store usage.")))),(0,r.kt)("h2",{id:"executemsg"},"ExecuteMsg"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," defines the set of possible actions that can be performed on the dataverse."),(0,r.kt)("p",null,"This enum provides variants for registering services, datasets, and other operations related to the dataverse."),(0,r.kt)("h3",{id:"executemsgsubmitclaims"},"ExecuteMsg::SubmitClaims"),(0,r.kt)("p",null,"Submits new claims about a resource to the dataverse."),(0,r.kt)("p",null,"The SubmitClaims message is a pivotal component in the dataverse, enabling entities to contribute new claims about various resources. A claim represents a statement made by an entity, referred to as the issuer, which could be a person, organization, or service. These claims pertain to a diverse range of resources, including digital resources, services, zones, or individuals, and are asserted as factual by the issuer."),(0,r.kt)("h4",{id:"format"},"Format"),(0,r.kt)("p",null,"Claims are injected into the dataverse through Verifiable Presentations (VPs). These presentations effectively amalgamate and showcase multiple credentials, thus providing a cohesive and comprehensive view of the assertions being made."),(0,r.kt)("p",null,"While the data in a VP typically revolves around a common subject, it accommodates an unlimited number of subjects and issuers. This flexibility allows for a broad spectrum of claims to be represented."),(0,r.kt)("p",null,"Primarily, the claims leverage the OKP4 ontology, which facilitates articulating assertions about widely acknowledged resources in the dataverse, including digital services, digital resources, zones, governance, and more."),(0,r.kt)("p",null,"Additionally, other schemas may also be employed to supplement and enhance the validated knowledge contributed to these resources."),(0,r.kt)("h4",{id:"preconditions"},"Preconditions"),(0,r.kt)("p",null,"To maintain integrity and coherence in the dataverse, several preconditions are set for the submission of claims:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Format Requirement"),": Claims must be encapsulated within Verifiable Presentations (VPs).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unique Identifier Mandate"),": Each Verifiable Credential within the dataverse must possess a unique identifier.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Issuer Signature"),": Claims must bear the issuer's signature. This signature must be verifiable, ensuring authenticity and credibility."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"submit_claims")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,r.kt)("strong",{parentName:"td"},"object"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"submit_claims.format")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#rdfformat"},"RdfFormat"),"|","null"),". RDF format in which the metadata is represented. If not provided, the default format is ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/turtle/"},"Turtle")," format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"submit_claims.metadata")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#binary"},"Binary")),". The serialized metadata intended for attachment. This metadata should adhere to the format specified in the ",(0,r.kt)("inlineCode",{parentName:"td"},"format")," field.")))),(0,r.kt)("h3",{id:"executemsgrevokeclaims"},"ExecuteMsg::RevokeClaims"),(0,r.kt)("p",null,"Revoke or withdraw a previously submitted claims."),(0,r.kt)("h4",{id:"preconditions-1"},"Preconditions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Identifier Existance"),": The identifier of the claims must exist in the dataverse.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"revoke_claims")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,r.kt)("strong",{parentName:"td"},"object"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"revoke_claims.identifier")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,r.kt)("strong",{parentName:"td"},"string"),". The unique identifier of the claims to be revoked.")))),(0,r.kt)("h2",{id:"querymsg"},"QueryMsg"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"QueryMsg")," defines the set of possible queries that can be made to retrieve information about the dataverse."),(0,r.kt)("p",null,"This enum provides variants for querying the dataverse's details and other related information."),(0,r.kt)("h3",{id:"querymsgdataverse"},"QueryMsg::Dataverse"),(0,r.kt)("p",null,"Retrieves information about the current dataverse instance."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dataverse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,r.kt)("strong",{parentName:"td"},"object"),".")))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("h3",{id:"dataverse-2"},"dataverse"),(0,r.kt)("p",null,"DataverseResponse is the response of the Dataverse query."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,r.kt)("strong",{parentName:"td"},"string"),". The name of the dataverse.")))),(0,r.kt)("h2",{id:"definitions"},"Definitions"),(0,r.kt)("h3",{id:"binary"},"Binary"),(0,r.kt)("p",null,"A string containing Base64-encoded data."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string"),".")))),(0,r.kt)("h3",{id:"nquads"},"NQuads"),(0,r.kt)("p",null,"N-Quads Format"),(0,r.kt)("p",null,"N-Quads is an extension of N-Triples to support RDF datasets by adding an optional fourth element to represent the graph name. See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/n-quads/"},"official N-Quads specification"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"literal"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"n_quads"'))))),(0,r.kt)("h3",{id:"ntriples"},"NTriples"),(0,r.kt)("p",null,"N-Triples Format"),(0,r.kt)("p",null,"N-Triples is a line-based, plain text format for encoding an RDF graph. Each line corresponds to a single RDF triple. See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/n-triples/"},"official N-Triples specification"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"literal"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"n_triples"'))))),(0,r.kt)("h3",{id:"rdfformat"},"RdfFormat"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RdfFormat")," represents the various serialization formats for RDF (Resource Description Framework) data."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"variant"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#rdfxml"},"RdfXml")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"rdf_xml"),". RDF/XML Format",(0,r.kt)("br",null),(0,r.kt)("br",null),"RDF/XML is a syntax to express RDF information in XML. See the ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/rdf-syntax-grammar/"},"official RDF/XML specification"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#turtle"},"Turtle")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"turtle"),". Turtle (Terse RDF Triple Language) Format",(0,r.kt)("br",null),(0,r.kt)("br",null),"Turtle is a textual format for representing RDF triples in a more compact and human-readable way compared to RDF/XML. See the ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/turtle/"},"official Turtle specification"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ntriples"},"NTriples")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"n_triples"),". N-Triples Format",(0,r.kt)("br",null),(0,r.kt)("br",null),"N-Triples is a line-based, plain text format for encoding an RDF graph. Each line corresponds to a single RDF triple. See the ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/n-triples/"},"official N-Triples specification"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#nquads"},"NQuads")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"n_quads"),". N-Quads Format",(0,r.kt)("br",null),(0,r.kt)("br",null),"N-Quads is an extension of N-Triples to support RDF datasets by adding an optional fourth element to represent the graph name. See the ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/n-quads/"},"official N-Quads specification"),".")))),(0,r.kt)("h3",{id:"rdfxml"},"RdfXml"),(0,r.kt)("p",null,"RDF/XML Format"),(0,r.kt)("p",null,"RDF/XML is a syntax to express RDF information in XML. See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/rdf-syntax-grammar/"},"official RDF/XML specification"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"literal"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"rdf_xml"'))))),(0,r.kt)("h3",{id:"triplestoreconfig"},"TripleStoreConfig"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TripleStoreConfig")," represents the configuration related to the management of the triple store."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint64"},"Uint64")),". The code id that will be used to instantiate the triple store contract in which to store dataverse semantic data. It must implement the cognitarium interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limits")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#triplestorelimitsinput"},"TripleStoreLimitsInput")),". Limitations regarding triple store usage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limits.max_byte_size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint128"},"Uint128"),"|","null"),". The maximum number of bytes the store can contain. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. Default to ","[Uint128::MAX]"," if not set, which can be considered as no limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limits.max_insert_data_byte_size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint128"},"Uint128"),"|","null"),". The maximum number of bytes an insert data query can contain. Default to ","[Uint128::MAX]"," if not set, which can be considered as no limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limits.max_insert_data_triple_count")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint128"},"Uint128"),"|","null"),". The maximum number of triples an insert data query can contain (after parsing). Default to ","[Uint128::MAX]"," if not set, which can be considered as no limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limits.max_query_limit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"integer","|","null"),". The maximum limit of a query, i.e. the maximum number of triples returned by a select query. Default to 30 if not set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limits.max_query_variable_count")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"integer","|","null"),". The maximum number of variables a query can select. Default to 30 if not set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limits.max_triple_byte_size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint128"},"Uint128"),"|","null"),". The maximum number of bytes the store can contain for a single triple. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. The limit is used to prevent storing very large triples, especially literals. Default to ","[Uint128::MAX]"," if not set, which can be considered as no limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limits.max_triple_count")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint128"},"Uint128"),"|","null"),". The maximum number of triples the store can contain. Default to ","[Uint128::MAX]"," if not set, which can be considered as no limit.")))),(0,r.kt)("h3",{id:"triplestorelimitsinput"},"TripleStoreLimitsInput"),(0,r.kt)("p",null,"Contains requested limitations regarding store usages."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_byte_size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint128"},"Uint128"),"|","null"),". The maximum number of bytes the store can contain. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. Default to ","[Uint128::MAX]"," if not set, which can be considered as no limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_insert_data_byte_size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint128"},"Uint128"),"|","null"),". The maximum number of bytes an insert data query can contain. Default to ","[Uint128::MAX]"," if not set, which can be considered as no limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_insert_data_triple_count")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint128"},"Uint128"),"|","null"),". The maximum number of triples an insert data query can contain (after parsing). Default to ","[Uint128::MAX]"," if not set, which can be considered as no limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_query_limit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"integer","|","null"),". The maximum limit of a query, i.e. the maximum number of triples returned by a select query. Default to 30 if not set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_query_variable_count")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"integer","|","null"),". The maximum number of variables a query can select. Default to 30 if not set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_triple_byte_size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint128"},"Uint128"),"|","null"),". The maximum number of bytes the store can contain for a single triple. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. The limit is used to prevent storing very large triples, especially literals. Default to ","[Uint128::MAX]"," if not set, which can be considered as no limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max_triple_count")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"#uint128"},"Uint128"),"|","null"),". The maximum number of triples the store can contain. Default to ","[Uint128::MAX]"," if not set, which can be considered as no limit.")))),(0,r.kt)("h3",{id:"turtle"},"Turtle"),(0,r.kt)("p",null,"Turtle (Terse RDF Triple Language) Format"),(0,r.kt)("p",null,"Turtle is a textual format for representing RDF triples in a more compact and human-readable way compared to RDF/XML. See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/turtle/"},"official Turtle specification"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"literal"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"turtle"'))))),(0,r.kt)("h3",{id:"uint128"},"Uint128"),(0,r.kt)("p",null,"A string containing a 128-bit integer in decimal representation."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string"),".")))),(0,r.kt)("h3",{id:"uint64"},"Uint64"),(0,r.kt)("p",null,"A thin wrapper around u64 that is using strings for JSON encoding/decoding, such that the full u64 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq."),(0,r.kt)("h1",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," to create instances of this and ",(0,r.kt)("inlineCode",{parentName:"p"},"u64")," to get the value out:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-#",metastring:"use cosmwasm_std::Uint64; let a = Uint64::from(42u64); assert_eq!(a.u64(), 42);",use:!0,"cosmwasm_std::Uint64;":!0,let:!0,a:!0,"":"","Uint64::from(42u64);":!0,"assert_eq!(a.u64(),":!0,"42);":!0},"\nlet b = Uint64::from(70u32); assert_eq!(b.u64(), 70); ```\n\n|type|\n|----|\n|**string**.|\n\n---\n\n*Rendered by [Fadroma](https://fadroma.tech) ([@fadroma/schema 1.1.0](https://www.npmjs.com/package/@fadroma/schema)) from `okp4-dataverse.json` (`2a5c7ef038c6b263`)*\n")))}p.isMDXComponent=!0}}]);