(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[19164],{44061:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=(a(29420),["components"]),s={sidebar_position:6},l="Leverage the ontology",p={unversionedId:"tutorials/ontology-1",id:"tutorials/ontology-1",title:"Leverage the ontology",description:"Tutorials overview",source:"@site/docs/tutorials/ontology-1.md",sourceDirName:"tutorials",slug:"/tutorials/ontology-1",permalink:"/tutorials/ontology-1",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/tutorials/ontology-1.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorials",previous:{title:"Manage rules with Prolog",permalink:"/tutorials/prolog-1"},next:{title:"Video Tuto #1 - Architecture",permalink:"/tutorials/nonos-tuto-1"}},c={},d=[{value:"Why use an ontology on the OKP4 blockchain?",id:"why-use-an-ontology-on-the-okp4-blockchain",level:2},{value:"What is the OKP4 protocol?",id:"what-is-the-okp4-protocol",level:3},{value:"What is an ontology?",id:"what-is-an-ontology",level:3},{value:"The OKP4 ontology",id:"the-okp4-ontology",level:3},{value:"<strong>Semantic data expression with RDF triples</strong>",id:"semantic-data-expression-with-rdf-triples",level:2},{value:"Creating meaningful relationships",id:"creating-meaningful-relationships",level:3},{value:"<strong>Turtle</strong>",id:"turtle",level:3},{value:"Express RDF data in an XML format: <strong>RDF/XML</strong>",id:"express-rdf-data-in-an-xml-format-rdfxml",level:3},{value:"Line-based, plain text format: N-Triples",id:"line-based-plain-text-format-n-triples",level:3},{value:"<strong>N-Triples with a graph name: N-Quads</strong>",id:"n-triples-with-a-graph-name-n-quads",level:3},{value:"Real-world examples: open datasets",id:"real-world-examples-open-datasets",level:3},{value:"Store and query RDF triples with the OKP4 blockchain",id:"store-and-query-rdf-triples-with-the-okp4-blockchain",level:2},{value:"The <code>cognitarium</code> smart contract",id:"the-cognitarium-smart-contract",level:3},{value:"<code>cognitarium</code> instantiation",id:"cognitarium-instantiation",level:3},{value:"Semantic data storing",id:"semantic-data-storing",level:3},{value:"Retrieve stored triples",id:"retrieve-stored-triples",level:3},{value:"Recap\u2019",id:"recap",level:2}],m={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"leverage-the-ontology"},"Leverage the ontology"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tutorials overview",src:a(10795).Z,width:"3168",height:"1192"})),(0,r.kt)("p",null,"This tutorial unveils the concept of ontology and figure out its crucial role in the OKP4 protocol."),(0,r.kt)("p",null,"An ontology describes knowledge. We can represent it as a graph that fixes the meaning of concepts and the relationships that unite them."),(0,r.kt)("p",null,"If you\u2019re looking to explore the various formats to encode ontologies and understand how a CosmWasm smart contract operates all the on-chain structured data within the OKP4 blockchain, you\u2019re on the right page. Prepare yourself for an enlightening adventure where the semantic web (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Semantic_Web"},"Web 3.0"),") meets the decentralized web (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Web3"},"Web3"),")!"),(0,r.kt)("h2",{id:"why-use-an-ontology-on-the-okp4-blockchain"},"Why use an ontology on the OKP4 blockchain?"),(0,r.kt)("h3",{id:"what-is-the-okp4-protocol"},"What is the OKP4 protocol?"),(0,r.kt)("p",null,"OKP4 is a decentralized protocol for off-chain digital resource sharing. The Cosmos-based blockchain allows anyone to define rules, intending to share any resource and create a new generation of applications on top of them without exposing the data and without the need to trust a party."),(0,r.kt)("p",null,"The shared resources information and all activity logs proceeded by the blockchain need to be stored in a structured, interoperable and highly extensible manner. But how can we declare and analyze the metadata related to the resources? That\u2019s where ontology comes in handy."),(0,r.kt)("h3",{id:"what-is-an-ontology"},"What is an ontology?"),(0,r.kt)("p",null,"An ontology is a data model describing a specific domain's concepts and relationships. It helps specify what entities exist, how they are related, and how they can be classified. It's a means of encapsulating knowledge about a domain in a structured, reusable format, both understandable by humans and manageable by machines."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/RDF/XML"},"RDF/XML"),", ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Turtle_(syntax)"},"Turtle"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/N-Triples"},"NTriples/NQuads")," are the most common file formats for expressing data, using ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Semantic_triple"},"semantic triples")," comprising a subject, predicate, and object."),(0,r.kt)("h3",{id:"the-okp4-ontology"},"The OKP4 ontology"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://ontology.okp4.space"},"OKP4 ontology")," describes and defines the different forms of vocabulary used in the OKP4 protocol in a standard and well-designed format. You notably should follow the OKP4 ontology to reference resources (services, datasets, \u2026) you want to share.  "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/ontology"},"the OKP4 ontology GitHub repository")," to get all ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/ontology/tree/main/src"},"the different OKP4 specifications")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/ontology/tree/main/example"},"some examples"),"."),(0,r.kt)("p",{parentName:"admonition"},"You can read ",(0,r.kt)("a",{parentName:"p",href:"https://blog.okp4.network/okp4-knowledge-sharing-through-ontology-driven-dataverse-a-new-approach-to-knowledge-description-f9b81d4484c8"},"this article about the OKP4 ontology")," from the blog to dig into the details.")),(0,r.kt)("h2",{id:"semantic-data-expression-with-rdf-triples"},(0,r.kt)("strong",{parentName:"h2"},"Semantic data expression with RDF triples")),(0,r.kt)("h3",{id:"creating-meaningful-relationships"},"Creating meaningful relationships"),(0,r.kt)("p",null,"In the realm of the semantic web, RDF (Resource Description Framework) is a common standard used to express these relationships."),(0,r.kt)("p",null,"RDF encodes information in triple structures. The basic structure of an RDF triple is subject-predicate-object, much like a simple sentence in the English language."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Subject"),": The subject is the entity or resource the statement is about. It's typically a URI (",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"Uniform Resource Identifier"),") which uniquely identifies a resource."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Predicate"),": The predicate (also called a property) is a specific aspect, characteristic, attribute, or relation that describes the subject. It's also typically a URI."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Object"),": The object is the value of the attribute defined by the predicate for the subject. It can be a URI or a literal (such as a string or a number) and may also include additional information such as a language tag or a datatype.")),(0,r.kt)("p",null,"In RDF, ",(0,r.kt)("strong",{parentName:"p"},"prefixes")," are used as a shorthand notation for long URIs to make the data more readable and less verbose. They're similar to namespaces in programming languages. For instance, instead of writing ",(0,r.kt)("inlineCode",{parentName:"p"},"http://www.w3.org/2001/XMLSchema#integer"),", you could declare a prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"xsd")," to represent the ",(0,r.kt)("inlineCode",{parentName:"p"},"http://www.w3.org/2001/XMLSchema#")," URI and then use ",(0,r.kt)("inlineCode",{parentName:"p"},"xsd:integer"),"."),(0,r.kt)("h3",{id:"turtle"},(0,r.kt)("strong",{parentName:"h3"},"Turtle")),(0,r.kt)("p",null,"Turtle (Terse RDF Triple Language) is a syntax that allows RDF to be completely written in a compact and natural text form, with abbreviations for common usage patterns and datatypes."),(0,r.kt)("p",null,"Here's an RDF triple written in Turtle format (",(0,r.kt)("inlineCode",{parentName:"p"},".ttl")," file):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-turtle"},'@prefix ex: <http://example.com/stuff/1.0/> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n\nex:Alice ex:hasAge "30"^^xsd:integer .\n')),(0,r.kt)("p",null,"In this example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ex:Alice"))," is the subject (using ",(0,r.kt)("inlineCode",{parentName:"li"},"ex")," as a prefix for the ",(0,r.kt)("inlineCode",{parentName:"li"},"http://example.com/stuff/1.0/")," URI)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ex:hasAge"))," is the predicate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},'"30"^^xsd:integer'))," is the object, a literal of datatype integer (using ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"xsd"))," as a prefix for the XML Schema Datatype namespace).")),(0,r.kt)("p",null,"In the Turtle syntax, the semicolon (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},";")),") is used as a shorthand to reduce verbosity when multiple predicates and objects have the same subject. It allows you to write multiple predicates and objects for the same subject without having to repeat the subject.\nThe comma (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},",")),") is used as a shorthand for reducing verbosity when the same subject and predicate have multiple objects."),(0,r.kt)("p",null,"Suppose we want to express that Alice is 30 years old person, and her email is ",(0,r.kt)("inlineCode",{parentName:"p"},"alice@example.com"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-turtle"},'@prefix ex: <http://example.com/stuff/1.0/> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n\nex:Alice a <http://www.w3.org/2002/07/owl#Person> ;\n         ex:hasAge "30"^^xsd:integer ;\n         ex:hasEmail "alice@example.com" .\n')),(0,r.kt)("p",null,'Note that the lowercase "a" is a special abbreviation for the RDF type property, which states that a resource is an instance of a particular class. This is essentially equivalent to ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>")),", and it's used to indicate the type of a resource."),(0,r.kt)("h3",{id:"express-rdf-data-in-an-xml-format-rdfxml"},"Express RDF data in an XML format: ",(0,r.kt)("strong",{parentName:"h3"},"RDF/XML")),(0,r.kt)("p",null,"Here's an XML file example of how you might express the facts about Alice in RDF/XML:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n         xmlns:ex="http://example.com/stuff/1.0/"\n         xmlns:xsd="http://www.w3.org/2001/XMLSchema#">\n  <rdf:Description rdf:about="http://example.com/stuff/1.0/Alice">\n    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Person"/>\n    <ex:hasAge rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">30</ex:hasAge>\n    <ex:hasEmail>alice@example.com</ex:hasEmail>    \n  </rdf:Description>\n</rdf:RDF>\n\n')),(0,r.kt)("h3",{id:"line-based-plain-text-format-n-triples"},"Line-based, plain text format: N-Triples"),(0,r.kt)("p",null,"Here's the same data represented with N-Triples (",(0,r.kt)("inlineCode",{parentName:"p"},".nt")," file):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ntriples"},'<http://example.com/stuff/1.0/Alice> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Person> .\n<http://example.com/stuff/1.0/Alice> <http://example.com/stuff/1.0/hasAge> "30"^^<http://www.w3.org/2001/XMLSchema#integer> .\n<http://example.com/stuff/1.0/Alice> <http://example.com/stuff/1.0/hasEmail> "alice@example.com" .\n')),(0,r.kt)("h3",{id:"n-triples-with-a-graph-name-n-quads"},(0,r.kt)("strong",{parentName:"h3"},"N-Triples with a graph name: N-Quads")),(0,r.kt)("p",null,"In addition to the subject, predicate, and object of a triple, N-Quads add a fourth component, the graph name. Here's the data represented as N-Quads (",(0,r.kt)("inlineCode",{parentName:"p"},".nq")," file):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nquads"},'<http://example.com/stuff/1.0/Alice> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Person> <http://example.org/mygraph> .\n<http://example.org/person/john> <http://example.org/stuff/1.0/hasAge> "25" <http://example.org/mygraph> .\n<http://example.com/stuff/1.0/Alice> <http://example.com/stuff/1.0/hasEmail> "alice@example.com" <http://example.com/mygraph> .\n')),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<http://example.org/mygraph>"))," is the name of the graph where the triples are stored."),(0,r.kt)("h3",{id:"real-world-examples-open-datasets"},"Real-world examples: open datasets"),(0,r.kt)("p",null,"Ontologies are widely used for open data. You can find out some file examples in the \u201cLinked data\u201d section of ",(0,r.kt)("a",{parentName:"p",href:"https://data.europa.eu/data/datasets"},"datasets referenced by the Publications Office of the European Union"),".  "),(0,r.kt)("h2",{id:"store-and-query-rdf-triples-with-the-okp4-blockchain"},"Store and query RDF triples with the OKP4 blockchain"),(0,r.kt)("h3",{id:"the-cognitarium-smart-contract"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"cognitarium")," smart contract"),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/contracts/tree/main/contracts/okp4-cognitarium"},(0,r.kt)("inlineCode",{parentName:"a"},"cognitarium")),"\xa0smart contract enables the usage of RDF graphs triples in any\xa0",(0,r.kt)("a",{parentName:"p",href:"https://cosmos.network/"},"Cosmos blockchains"),"\xa0(and therefore the OKP4 blockchain) using the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://cosmwasm.com/"},"CosmWasm"),"\xa0framework."),(0,r.kt)("p",null,"You can insert and query semantic data in Turtle, RDF/XML, N-Triples or N-Quads as well with an ",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium")," instance. Turtle is the default format."),(0,r.kt)("p",null,"You can query (",(0,r.kt)("inlineCode",{parentName:"p"},"select"),") any ",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium")," instance, but you can only insert data in one you instantiated."),(0,r.kt)("h3",{id:"cognitarium-instantiation"},(0,r.kt)("inlineCode",{parentName:"h3"},"cognitarium")," instantiation"),(0,r.kt)("p",null,"Let's create a new graph database to populate the ontology using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.okp4.network/tutorials/cli-1"},(0,r.kt)("inlineCode",{parentName:"a"},"okp4d")," CLI"),", with a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium"),"\xa0smart contract instantiation (",(0,r.kt)("inlineCode",{parentName:"p"},"CODE_ID = 7"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d tx wasm instantiate 7 \\\n--from okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \\\n--label "ontology-tutorial-ex-$(date +%s)" \\\n--admin okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \\\n--chain-id okp4-nemeton-1 \\\n--gas 1000000 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n"{}"\n')),(0,r.kt)("p",null,"Here the smart contract is instantiated with the wallet ",(0,r.kt)("inlineCode",{parentName:"p"},"okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5"),". Replace it with your own okp4 address!\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," parameter should also be unique, hence the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"date"),"."),(0,r.kt)("p",null,"You can specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"limits")," parameter. If ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," is provided (as above), the default values are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "limits": {\n          "max_byte_size": "340282366920938463463374607431768211455",\n          "max_insert_data_byte_size": "340282366920938463463374607431768211455",\n          "max_insert_data_triple_count": "340282366920938463463374607431768211455",\n          "max_query_limit": 30,\n          "max_query_variable_count": 30,\n          "max_triple_byte_size": "340282366920938463463374607431768211455",\n          "max_triple_count": "340282366920938463463374607431768211455"\n    }\n}\n')),(0,r.kt)("p",null,"For this tutorial, the instantiate transaction hash is ",(0,r.kt)("a",{parentName:"p",href:"https://explore.okp4.network/OKP4%20testnet/tx/E0985541A08D1DCCA4F362DE445E44FB26A3AB374F84F9335B3EFCF247F263DA"},"E0985541A08D1DCCA4F362DE445E44FB26A3AB374F84F9335B3EFCF247F263DA"),", which results in an ",(0,r.kt)("inlineCode",{parentName:"p"},"okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars")," contract address. Here is the CLI command to retrieve the resulting address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query tx E0985541A08D1DCCA4F362DE445E44FB26A3AB374F84F9335B3EFCF247F263DA \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--output json \\\n| jq \'.logs[0].events[] | select(.type == "instantiate").attributes[] | select(.key == "_contract_address").value\'\n')),(0,r.kt)("h3",{id:"semantic-data-storing"},"Semantic data storing"),(0,r.kt)("p",null,"You should execute an ",(0,r.kt)("inlineCode",{parentName:"p"},"InsertData")," message of a ",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium")," smart contract you instantiated to insert RDF triples. You have to provide as inputs the triples ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," base64 encoded and the ",(0,r.kt)("inlineCode",{parentName:"p"},"format"),", among:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"turtle"')," (default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rdf_xml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n_triples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n_quads"))),(0,r.kt)("p",null,"Let\u2019s reference in the OKP4 protocol a service with a Turtle file example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/ontology/blob/f5f3f641aa9ad30d0e86a741a375a3ee290e9893/example/rhizome/service/03230ce7-d8cb-410e-919e-19c480c1dd75.ttl"},"03230ce7-d8cb-410e-919e-19c480c1dd75.ttl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d tx wasm execute okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars \\\n--from okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \\\n--gas 10000000 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--chain-id okp4-nemeton-1 \\\n"{\\"insert_data\\":{\\"format\\": \\"turtle\\", \\"data\\": \\"$(cat 03230ce7-d8cb-410e-919e-19c480c1dd75.ttl | base64 | tr -d \'\\n\\r\')\\"}}"\n')),(0,r.kt)("p",null,"You have to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium")," smart contract address ",(0,r.kt)("inlineCode",{parentName:"p"},"okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars")," and set your okp4 wallet address (instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5"),") to make it work on your side."),(0,r.kt)("p",null,"Here is an insertion example with another format, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/contracts/blob/c9eec716247f96c885135c526eb548846ccdfb1a/contracts/okp4-cognitarium/testdata/sample.nq"},"sample.nq")," (NQuads) file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d tx wasm execute okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars \\\n--from okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \\\n--gas 10000000 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--chain-id okp4-nemeton-1 \\\n"{\\"insert_data\\":{\\"format\\": \\"n_quads\\", \\"data\\": \\"$(cat sample.nq | base64 | tr -d \'\\n\\r\')\\"}}"\n')),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"okp4d query txs")," and filter by ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm.action=insert")," event to get all data inserted in any cognitarium instances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"okp4d query txs \\\n--events 'wasm.action=insert' \\\n--chain-id okp4-nemeton-1 \\\n--node https://api.testnet.okp4.network:443/rpc --output json | jq \\\n'{total_count: .total_count, txs: [.txs[] | {task_id: 5, tx: .txhash, date: .timestamp, okp4_sender: .tx.body.messages[0].sender, task_data: { cognitarium_sc_addr: .tx.body.messages[0].contract, data: .tx.body.messages[0].msg.insert_data.data | @base64d  } }]}'\n")),(0,r.kt)("h3",{id:"retrieve-stored-triples"},"Retrieve stored triples"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," query on a ",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium")," instance enables you to fetch and filter the data. The ",(0,r.kt)("inlineCode",{parentName:"p"},"select.query")," JSON should contain the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefixes")," array: to declare a ",(0,r.kt)("inlineCode",{parentName:"li"},"prefix")," and its related ",(0,r.kt)("inlineCode",{parentName:"li"},"namespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"limit"),": the number of elements to return"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"where"),": filters and variable declarations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"select")," array: all ",(0,r.kt)("inlineCode",{parentName:"li"},"variable")," names you declared in ",(0,r.kt)("inlineCode",{parentName:"li"},"where")," you want to get")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"where")," should be an array of elements specifying triple filterings. You have to specify ",(0,r.kt)("inlineCode",{parentName:"p"},"subject"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"predicate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," as a ",(0,r.kt)("inlineCode",{parentName:"p"},"variable"),", or, alternatively, a ",(0,r.kt)("inlineCode",{parentName:"p"},"prefixed")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"full")," ",(0,r.kt)("inlineCode",{parentName:"p"},"named_node"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")," can also be a ",(0,r.kt)("inlineCode",{parentName:"p"},"simple")," ",(0,r.kt)("inlineCode",{parentName:"p"},"literal"),"."),(0,r.kt)("p",null,"Let\u2019s query the previously referenced service example, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/ontology/blob/f5f3f641aa9ad30d0e86a741a375a3ee290e9893/example/rhizome/service/03230ce7-d8cb-410e-919e-19c480c1dd75.ttl"},"03230ce7-d8cb-410e-919e-19c480c1dd75.ttl"),".\nHere is the JSON payload to get service ids with tag ",(0,r.kt)("inlineCode",{parentName:"p"},"stockage"),", as the service ",(0,r.kt)("inlineCode",{parentName:"p"},"03230ce7-d8cb-410e-919e-19c480c1dd75"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "select": {\n    "query": {\n      "prefixes": [\n        {\n          "prefix": "core",\n          "namespace": "https://ontology.okp4.space/core/"\n        }\n      ],\n      "select": [\n        {\n          "variable": "serviceId"\n        }\n      ],\n      "where": [\n        {\n          "simple": {\n            "triple_pattern": {\n              "subject": {\n                "variable": "serviceMetadataId"\n              },\n              "predicate": {\n                "node": {\n                  "named_node": {\n                    "full": "https://ontology.okp4.space/core/describes"\n                  }\n                }\n              },\n              "object": {\n                "variable": "serviceId"\n              }\n            }\n          }\n        },\n        {\n          "simple": {\n            "triple_pattern": {\n              "subject": {\n                "variable": "serviceMetadataId"\n              },\n              "predicate": {\n                "node": {\n                  "named_node": {\n                    "prefixed": "core:hasTag"\n                  }\n                }\n              },\n              "object": {\n                "literal": {\n                  "simple": "stockage"\n                }\n              }\n            }\n          }\n        }\n      ],\n      "limit": 2\n    }\n  }\n}\n')),(0,r.kt)("p",null,"We are trying to match these two triples:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-turtle"},'@prefix core: https://ontology.okp4.space/core/ .\n@prefix service: <https://ontology.okp4.space/dataverse/service/> .\n\nhttps://ontology.okp4.space/dataverse/service/metadata/be67f7df-ff02-47c8-b55f-865b387c68ca core:describes service:03230ce7-d8cb-410e-919e-19c480c1dd75 ;\ncore:hasTag "stockage" .\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://ontology.okp4.space/dataverse/service/metadata/be67f7df-ff02-47c8-b55f-865b387c68ca")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceMetadataId")," variable, ",(0,r.kt)("inlineCode",{parentName:"p"},"https://ontology.okp4.space/dataverse/service/03230ce7-d8cb-410e-919e-19c480c1dd75")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceId"),"."),(0,r.kt)("p",null,"To query the ",(0,r.kt)("inlineCode",{parentName:"p"},"cognitarium")," smart contract at address ",(0,r.kt)("inlineCode",{parentName:"p"},"okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars")," with the JSON payload above, you can use the CLI with the command as follows:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query wasm contract-state smart okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars \\\n--chain-id okp4-nemeton-1 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--output json \\\n\'{"select":{"query":{"prefixes":[{"prefix":"core","namespace":"https://ontology.okp4.space/core/"}],"select":[{"variable":"serviceId"}],"where":[{"simple":{"triple_pattern":{"subject":{"variable":"serviceMetadataId"},"predicate":{"node":{"named_node":{"full":"https://ontology.okp4.space/core/describes"}}},"object":{"variable":"serviceId"}}}},{"simple":{"triple_pattern":{"subject":{"variable":"serviceMetadataId"},"predicate":{"node":{"named_node":{"prefixed":"core:hasTag"}}},"object":{"literal":{"simple":"stockage"}}}}}],"limit":2}}}\' \\\n| jq \'.data.results.bindings\'\n\n: \'\n[\n  {\n    "serviceId": {\n      "type": "uri",\n      "value": {\n        "full": "https://ontology.okp4.space/dataverse/service/03230ce7-d8cb-410e-919e-19c480c1dd75"\n      }\n    }\n  }\n]\n\'\n')),(0,r.kt)("h2",{id:"recap"},"Recap\u2019"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We need to store data within the OKP4 blockchain to reference resources and their relationships with sharing rules, and service executions, among other pieces of information. The structuration is defined with an ontology."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"cognitarium")," smart contract enables the storage and query of semantic data, expressed with RDF triples (subject-predicate-object). It's a relevant solution for the needed ontology expressiveness."),(0,r.kt)("li",{parentName:"ul"},"Various formats exist for RDF triples; Turtle, RDF/XML, NTriples/NQuads are those supported.")),(0,r.kt)("p",null,"As you embark on your journey with OKP4, you're crafting the future of semantic web-enabled decentralized systems. And that is a frontier worth exploring!\nThe marriage between the blockchain with smart contract technology and ontology isn't just a fancy trend; it's a transformative union that paves the way for novel applications, greater efficiency, and unprecedented interoperability."))}h.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=11748},10795:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ontology-1-131e7500f33362293552ab6784bc9ecb.webp"}}]);