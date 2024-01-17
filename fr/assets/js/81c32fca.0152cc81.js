"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[63562],{47727:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=s(85893),t=s(11151);const a={},r="Predicates documentation",d={id:"predicates",title:"predicates",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates/predicates.md",sourceDirName:".",slug:"/predicates",permalink:"/fr/predicates/predicates",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar"},c={},l=[{value:"bank_balances/2",id:"bank_balances2",level:2},{value:"bank_locked_balances/2",id:"bank_locked_balances2",level:2},{value:"bank_spendable_balances/2",id:"bank_spendable_balances2",level:2},{value:"bech32_address/2",id:"bech32_address2",level:2},{value:"block_height/1",id:"block_height1",level:2},{value:"block_time/1",id:"block_time1",level:2},{value:"chain_id/1",id:"chain_id1",level:2},{value:"crypto_data_hash/3",id:"crypto_data_hash3",level:2},{value:"did_components/2",id:"did_components2",level:2},{value:"ecdsa_verify/4",id:"ecdsa_verify4",level:2},{value:"eddsa_verify/4",id:"eddsa_verify4",level:2},{value:"hex_bytes/2",id:"hex_bytes2",level:2},{value:"json_prolog/2",id:"json_prolog2",level:2},{value:"open/4",id:"open4",level:2},{value:"read_string/3",id:"read_string3",level:2},{value:"source_file/1",id:"source_file1",level:2},{value:"string_bytes/3",id:"string_bytes3",level:2},{value:"uri_encoded/3",id:"uri_encoded3",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"predicates-documentation",children:"Predicates documentation"}),"\n",(0,i.jsx)(n.h2,{id:"bank_balances2",children:"bank_balances/2"}),"\n",(0,i.jsx)(n.p,{children:"bank_balances/2 is a predicate which unifies the given terms with the list of balances (coins) of the given account."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"bank_balances(?Account, ?Balances)\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Account represents the account address (in Bech32 format)."}),"\n",(0,i.jsx)(n.li,{children:"Balances represents the balances of the account as a list of pairs of coin denomination and amount."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Query the balances of the account.\n- bank_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', X).\n\n# Query the balances of all accounts. The result is a list of pairs of account address and balances.\n- bank_balances(X, Y).\n\n# Query the first balance of the given account by unifying the denomination and amount with the given terms.\n- bank_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', [-(D, A), _]).\n"})}),"\n",(0,i.jsx)(n.h2,{id:"bank_locked_balances2",children:"bank_locked_balances/2"}),"\n",(0,i.jsx)(n.p,{children:"bank_locked_balances/2 is a predicate which unifies the given terms with the list of locked coins of the given account."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"bank_locked_balances(?Account, ?Balances)\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Account represents the account address (in Bech32 format)."}),"\n",(0,i.jsx)(n.li,{children:"Balances represents the locked balances of the account as a list of pairs of coin denomination and amount."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Query the locked coins of the account.\n- bank_locked_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', X).\n\n# Query the locked balances of all accounts. The result is a list of pairs of account address and balances.\n- bank_locked_balances(X, Y).\n\n# Query the first locked balances of the given account by unifying the denomination and amount with the given terms.\n- bank_locked_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', [-(D, A), _]).\n"})}),"\n",(0,i.jsx)(n.h2,{id:"bank_spendable_balances2",children:"bank_spendable_balances/2"}),"\n",(0,i.jsx)(n.p,{children:"bank_spendable_balances/2 is a predicate which unifies the given terms with the list of spendable coins of the given account."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"bank_spendable_balances(?Account, ?Balances)\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Account represents the account address (in Bech32 format)."}),"\n",(0,i.jsx)(n.li,{children:"Balances represents the spendable balances of the account as a list of pairs of coin denomination and amount."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Query the spendable balances of the account.\n- bank_spendable_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', X).\n\n# Query the spendable balances of all accounts. The result is a list of pairs of account address and balances.\n- bank_spendable_balances(X, Y).\n\n# Query the first spendable balances of the given account by unifying the denomination and amount with the given terms.\n- bank_spendable_balances('okp41ffd5wx65l407yvm478cxzlgygw07h79sq0m3fm', [-(D, A), _]).\n"})}),"\n",(0,i.jsx)(n.h2,{id:"bech32_address2",children:"bech32_address/2"}),"\n",(0,i.jsxs)(n.p,{children:["bech32_address/2 is a predicate that convert a ",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/main/build/spec/addresses/bech32#hrp-table",children:"bech32"})," encoded string into ",(0,i.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Base64",children:"base64"})," bytes and give the address prefix, or convert a prefix (HRP) and ",(0,i.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Base64",children:"base64"})," encoded bytes to ",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/main/build/spec/addresses/bech32#hrp-table",children:"bech32"})," encoded string."]}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"bech32_address(-Address, +Bech32)\nbech32_address(+Address, -Bech32)\nbech32_address(+Address, +Bech32)\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Address is a pair of the HRP (Human-Readable Part) which holds the address prefix and a list of numbers ranging from 0 to 255 that represent the base64 encoded bech32 address string."}),"\n",(0,i.jsx)(n.li,{children:"Bech32 is an Atom or string representing the bech32 encoded string address"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Convert the given bech32 address into base64 encoded byte by unify the prefix of given address (Hrp) and the\nbase64 encoded value (Address).\n- bech32_address(-(Hrp, Address), 'okp415wn30a9z4uc692s0kkx5fp5d4qfr3ac7sj9dqn').\n\n# Convert the given pair of HRP and base64 encoded address byte by unify the Bech32 string encoded value.\n- bech32_address(-('okp4', [163,167,23,244,162,175,49,162,170,15,181,141,68,134,141,168,18,56,247,30]), Bech32).\n"})}),"\n",(0,i.jsx)(n.h2,{id:"block_height1",children:"block_height/1"}),"\n",(0,i.jsx)(n.p,{children:"block_height/1 is a predicate which unifies the given term with the current block height."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"block_height(?Height)\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Height represents the current chain height at the time of the query."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Query the current block height.\n- block_height(Height).\n"})}),"\n",(0,i.jsx)(n.h2,{id:"block_time1",children:"block_time/1"}),"\n",(0,i.jsx)(n.p,{children:"block_time/1 is a predicate which unifies the given term with the current block time."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"block_time(?Time)\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Time represents the current chain time at the time of the query."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Query the current block time.\n- block_time(Time).\n"})}),"\n",(0,i.jsx)(n.h2,{id:"chain_id1",children:"chain_id/1"}),"\n",(0,i.jsx)(n.p,{children:"chain_id/1 is a predicate which unifies the given term with the current chain ID. The signature is:"}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"chain_id(?ID)\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ID represents the current chain ID at the time of the query."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Query the current chain ID.\n- chain_id(ID).\n"})}),"\n",(0,i.jsx)(n.h2,{id:"crypto_data_hash3",children:"crypto_data_hash/3"}),"\n",(0,i.jsx)(n.p,{children:"crypto_data_hash/3 is a predicate that computes the Hash of the given Data using different algorithms."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"crypto_data_hash(+Data, -Hash, +Options) is det\ncrypto_data_hash(+Data, +Hash, +Options) is det\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data represents the data to be hashed, given as an atom, or code-list."}),"\n",(0,i.jsx)(n.li,{children:"Hash represents the Hashed value of Data, which can be given as an atom or a variable."}),"\n",(0,i.jsx)(n.li,{children:"Options are additional configurations for the hashing process. Supported options include: encoding(+Format) which specifies the encoding used for the Data, and algorithm(+Alg) which chooses the hashing algorithm among the supported ones (see below for details)."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For Format, the supported encodings are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"utf8 (default), the UTF-8 encoding represented as an atom."}),"\n",(0,i.jsx)(n.li,{children:"text, the plain text encoding represented as an atom."}),"\n",(0,i.jsx)(n.li,{children:"hex, the hexadecimal encoding represented as an atom."}),"\n",(0,i.jsx)(n.li,{children:"octet, the raw byte encoding depicted as a list of integers ranging from 0 to 255."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For Alg, the supported algorithms are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"sha256 (default): The SHA-256 algorithm."}),"\n",(0,i.jsx)(n.li,{children:"sha512: The SHA-512 algorithm."}),"\n",(0,i.jsx)(n.li,{children:"md5: (insecure) The MD5 algorithm."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Note: Due to the principles of the hash algorithm (pre-image resistance), this predicate can only compute the hash value from input data, and cannot compute the original input data from the hash value."}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Compute the SHA-256 hash of the given data and unify it with the given Hash.\n- crypto_data_hash('Hello OKP4', Hash).\n\n# Compute the SHA-256 hash of the given hexadecimal data and unify it with the given Hash.\n- crypto_data_hash('9b038f8ef6918cbb56040dfda401b56b...', Hash, encoding(hex)).\n\n# Compute the SHA-256 hash of the given hexadecimal data and unify it with the given Hash.\n- crypto_data_hash([127, ...], Hash, encoding(octet)).\n"})}),"\n",(0,i.jsx)(n.h2,{id:"did_components2",children:"did_components/2"}),"\n",(0,i.jsxs)(n.p,{children:["did_components/2 is a predicate which breaks down a DID into its components according to the ",(0,i.jsx)(n.a,{href:"https://w3c.github.io/did-core",children:"W3C DID"})," specification."]}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"did_components(+DID, -Components) is det\ndid_components(-DID, +Components) is det\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["DID represents DID URI, given as an Atom, compliant with ",(0,i.jsx)(n.a,{href:"https://w3c.github.io/did-core",children:"W3C DID"})," specification."]}),"\n",(0,i.jsxs)(n.li,{children:["Components is a compound Term in the format did(Method, ID, Path, Query, Fragment), aligned with the ",(0,i.jsx)(n.a,{href:"https://w3c.github.io/did-core/#did-syntax",children:"DID syntax"}),", where: Method is The method name, ID is The method-specific identifier, Path is the path component, Query is the query component and Fragment is The fragment component. For any component not present, its value will be null and thus will be left as an uninstantiated variable."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Decompose a DID into its components.\n- did_components('did:example:123456?versionId=1', did(Method, ID, Path, Query, Fragment)).\n\n# Reconstruct a DID from its components.\n- did_components(DID, did('example', '123456', _, 'versionId=1', _42)).\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ecdsa_verify4",children:"ecdsa_verify/4"}),"\n",(0,i.jsx)(n.p,{children:"ecdsa_verify/4 determines if a given signature is valid as per the ECDSA algorithm for the provided data, using the specified public key."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"ecdsa_verify(+PubKey, +Data, +Signature, +Options), which is semi-deterministic.\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"PubKey is the 33-byte compressed public key, as specified in section 4.3.6 of ANSI X9.62."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Data is the hash of the signed message, which can be either an atom or a list of bytes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Signature represents the ASN.1 encoded signature corresponding to the Data."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Options are additional configurations for the verification process. Supported options include: encoding(+Format) which specifies the encoding used for the data, and type(+Alg) which chooses the algorithm within the ECDSA family (see below for details)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For Format, the supported encodings are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"hex (default), the hexadecimal encoding represented as an atom."}),"\n",(0,i.jsx)(n.li,{children:"octet, the plain byte encoding depicted as a list of integers ranging from 0 to 255."}),"\n",(0,i.jsx)(n.li,{children:"text, the plain text encoding represented as an atom."}),"\n",(0,i.jsx)(n.li,{children:"utf8 (default), the UTF-8 encoding represented as an atom."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For Alg, the supported algorithms are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"secp256r1 (default): Also known as P-256 and prime256v1."}),"\n",(0,i.jsx)(n.li,{children:"secp256k1: The Koblitz elliptic curve used in Bitcoin's public-key cryptography."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Verify a signature for hexadecimal data using the ECDSA secp256r1 algorithm.\n- ecdsa_verify([127, ...], '9b038f8ef6918cbb56040dfda401b56b...', [23, 56, ...], encoding(hex))\n\n# Verify a signature for binary data using the ECDSA secp256k1 algorithm.\n- ecdsa_verify([127, ...], [56, 90, ..], [23, 56, ...], [encoding(octet), type(secp256k1)])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"eddsa_verify4",children:"eddsa_verify/4"}),"\n",(0,i.jsx)(n.p,{children:"eddsa_verify/4 determines if a given signature is valid as per the EdDSA algorithm for the provided data, using the specified public key."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"eddsa_verify(+PubKey, +Data, +Signature, +Options) is semi-det\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PubKey is the encoded public key as a list of bytes."}),"\n",(0,i.jsx)(n.li,{children:"Data is the message to verify, represented as either a hexadecimal atom or a list of bytes. It's important that the message isn't pre-hashed since the Ed25519 algorithm processes messages in two passes when signing."}),"\n",(0,i.jsx)(n.li,{children:"Signature represents the signature corresponding to the data, provided as a list of bytes."}),"\n",(0,i.jsx)(n.li,{children:"Options are additional configurations for the verification process. Supported options include: encoding(+Format) which specifies the encoding used for the Data, and type(+Alg) which chooses the algorithm within the EdDSA family (see below for details)."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For Format, the supported encodings are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"hex (default), the hexadecimal encoding represented as an atom."}),"\n",(0,i.jsx)(n.li,{children:"octet, the plain byte encoding depicted as a list of integers ranging from 0 to 255."}),"\n",(0,i.jsx)(n.li,{children:"text, the plain text encoding represented as an atom."}),"\n",(0,i.jsx)(n.li,{children:"utf8 (default), the UTF-8 encoding represented as an atom."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For Alg, the supported algorithms are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ed25519 (default): The EdDSA signature scheme using SHA-512 (SHA-2) and Curve25519."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Verify a signature for a given hexadecimal data.\n- eddsa_verify([127, ...], '9b038f8ef6918cbb56040dfda401b56b...', [23, 56, ...], [encoding(hex), type(ed25519)])\n\n# Verify a signature for binary data.\n- eddsa_verify([127, ...], [56, 90, ..], [23, 56, ...], [encoding(octet), type(ed25519)])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"hex_bytes2",children:"hex_bytes/2"}),"\n",(0,i.jsx)(n.p,{children:"hex_bytes/2 is a predicate that unifies hexadecimal encoded bytes to a list of bytes."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"hex_bytes(?Hex, ?Bytes) is det\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Hex is an Atom, string or list of characters in hexadecimal encoding."}),"\n",(0,i.jsx)(n.li,{children:"Bytes is the list of numbers between 0 and 255 that represent the sequence of bytes."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Convert hexadecimal atom to list of bytes.\n- hex_bytes('2c26b46b68ffc68ff99b453c1d3041341342d706483bfa0f98a5e886266e7ae', Bytes).\n"})}),"\n",(0,i.jsx)(n.h2,{id:"json_prolog2",children:"json_prolog/2"}),"\n",(0,i.jsx)(n.p,{children:"json_prolog/2 is a predicate that will unify a JSON string into prolog terms and vice versa."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"json_prolog(?Json, ?Term) is det\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Json is the string representation of the json"}),"\n",(0,i.jsx)(n.li,{children:"Term is an Atom that would be unified by the JSON representation as Prolog terms."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In addition, when passing Json and Term, this predicate return true if both result match."}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'# JSON conversion to Prolog.\n- json_prolog(\'{"foo": "bar"}\', json([foo-bar])).\n'})}),"\n",(0,i.jsx)(n.h2,{id:"open4",children:"open/4"}),"\n",(0,i.jsx)(n.p,{children:"open/4 is a predicate that unify a stream with a source sink on a virtual file system."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"open(+SourceSink, +Mode, ?Stream, +Options)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SourceSink is an atom representing the source or sink of the stream. The atom typically represents a resource that can be opened, such as a URI. The URI scheme determines the type of resource that is opened."}),"\n",(0,i.jsx)(n.li,{children:"Mode is an atom representing the mode of the stream (read, write, append)."}),"\n",(0,i.jsx)(n.li,{children:"Stream is the stream to be opened."}),"\n",(0,i.jsx)(n.li,{children:"Options is a list of options. No options are currently defined, so the list should be empty."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# open/4 a stream from a cosmwasm query.\n# The Stream should be read as a string with a read_string/3 predicate, and then closed with the close/1 predicate.\n- open('cosmwasm:okp4-objectarium:okp412kgx?query=%7B%22object_data%22%3A%7B%...4dd539e3%22%7D%7D', 'read', Stream, [])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"read_string3",children:"read_string/3"}),"\n",(0,i.jsx)(n.p,{children:"read_string/3 is a predicate that reads characters from the provided Stream and unifies them with String. Users can optionally specify a maximum length for reading; if the stream reaches this length, the reading stops. If Length remains unbound, the entire Stream is read, and upon completion, Length is unified with the count of characters read."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"read_string(+Stream, ?Length, -String) is det\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Stream is the input stream to read from."}),"\n",(0,i.jsx)(n.li,{children:"Length is the optional maximum number of characters to read from the Stream. If unbound, denotes the full length of Stream."}),"\n",(0,i.jsx)(n.li,{children:"String is the resultant string after reading from the Stream."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Given a file `foo.txt` that contains `Hello World`:\n\nfile_to_string(File, String, Length) :-\n\nopen(File, read, In),\nread_string(In, Length, String),\nclose(Stream).\n\n# It gives:\n?- file_to_string('path/file/foo.txt', String, Length).\n\nString = 'Hello World'\nLength = 11\n"})}),"\n",(0,i.jsx)(n.h2,{id:"source_file1",children:"source_file/1"}),"\n",(0,i.jsx)(n.p,{children:"source_file/1 is a predicate that unify the given term with the currently loaded source file."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"source_file(?File).\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"File represents a loaded source file."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Query all the loaded source files, in alphanumeric order.\n- source_file(File).\n\n# Query the given source file is loaded.\n- source_file('foo.pl').\n"})}),"\n",(0,i.jsx)(n.h2,{id:"string_bytes3",children:"string_bytes/3"}),"\n",(0,i.jsx)(n.p,{children:"string_bytes/3 is a predicate that unifies a string with a list of bytes, returning true when the (Unicode) String is represented by Bytes in Encoding."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"string_bytes(?String, ?Bytes, +Encoding)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"String is the string to convert to bytes. It can be an Atom, string or list of characters codes."}),"\n",(0,i.jsx)(n.li,{children:"Bytes is the list of numbers between 0 and 255 that represent the sequence of bytes."}),"\n",(0,i.jsx)(n.li,{children:"Encoding is the encoding to use for the conversion."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Encoding can be one of the following: - 'text' considers the string as a sequence of Unicode characters. - 'octet' considers the string as a sequence of bytes. - '<encoding>' considers the string as a sequence of characters in the given encoding."}),"\n",(0,i.jsx)(n.p,{children:"At least one of String or Bytes must be instantiated."}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Convert a string to a list of bytes.\n- string_bytes('Hello World', Bytes, octet).\n\n# Convert a list of bytes to a string.\n- string_bytes(String, [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100], octet).\n"})}),"\n",(0,i.jsx)(n.h2,{id:"uri_encoded3",children:"uri_encoded/3"}),"\n",(0,i.jsx)(n.p,{children:"uri_encoded/3 is a predicate that unifies the given URI component with the given encoded or decoded string."}),"\n",(0,i.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"uri_encoded(+Component, +Decoded, -Encoded)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Component represents the component of the URI to be escaped. It can be the atom query, fragment, path or segment."}),"\n",(0,i.jsx)(n.li,{children:"Decoded represents the decoded string to be escaped."}),"\n",(0,i.jsx)(n.li,{children:"Encoded represents the encoded string."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on URI encoding, refer to ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc3986#section-2.1",children:"RFC 3986"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'# Escape the given string to be used in the path component.\n- uri_encoded(path, "foo/bar", Encoded).\n\n# Unescape the given string to be used in the path component.\n- uri_encoded(path, Decoded, foo%2Fbar).\n'})})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var i=s(67294);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);