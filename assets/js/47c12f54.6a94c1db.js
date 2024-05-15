"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[61050],{37763:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=n(85893),i=n(11151);const r={},d="CW Storage",c={id:"cw-storage",title:"CW Storage",description:"Overview",source:"@site/contracts_versioned_docs/version-v1.0.0/cw-storage.md",sourceDirName:".",slug:"/cw-storage",permalink:"/contracts/v1.0.0/cw-storage",draft:!1,unlisted:!1,tags:[],version:"v1.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"CW Law Stone",permalink:"/contracts/v1.0.0/cw-law-stone"}},h={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Instantiate",id:"instantiate",level:3},{value:"Execute",id:"execute",level:3},{value:"Query",id:"query",level:3},{value:"InstantiateMsg",id:"instantiatemsg",level:2},{value:"ExecuteMsg",id:"executemsg",level:2},{value:"ExecuteMsg::StoreObject",id:"executemsgstoreobject",level:3},{value:"ExecuteMsg::ForgetObject",id:"executemsgforgetobject",level:3},{value:"ExecuteMsg::PinObject",id:"executemsgpinobject",level:3},{value:"ExecuteMsg::UnpinObject",id:"executemsgunpinobject",level:3},{value:"QueryMsg",id:"querymsg",level:2},{value:"QueryMsg::Bucket",id:"querymsgbucket",level:3},{value:"QueryMsg::Object",id:"querymsgobject",level:3},{value:"QueryMsg::Objects",id:"querymsgobjects",level:3},{value:"QueryMsg::ObjectData",id:"querymsgobjectdata",level:3},{value:"QueryMsg::ObjectPins",id:"querymsgobjectpins",level:3},{value:"Responses",id:"responses",level:2},{value:"bucket",id:"bucket",level:3},{value:"object",id:"object",level:3},{value:"object_data",id:"object_data",level:3},{value:"object_pins",id:"object_pins",level:3},{value:"objects",id:"objects",level:3},{value:"Definitions",id:"definitions",level:2},{value:"Binary",id:"binary",level:3},{value:"BucketLimits",id:"bucketlimits",level:3},{value:"ObjectResponse",id:"objectresponse",level:3},{value:"PageInfo",id:"pageinfo",level:3},{value:"PaginationConfig",id:"paginationconfig",level:3},{value:"Uint128",id:"uint128",level:3}];function o(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"cw-storage",children:"CW Storage"}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"cw-storage"})," smart contract enables the storage of arbitrary ",(0,t.jsx)(s.code,{children:"objects"})," in any ",(0,t.jsx)(s.a,{href:"https://cosmos.network/",children:"Cosmos blockchains"})," using the ",(0,t.jsx)(s.a,{href:"https://cosmwasm.com/",children:"CosmWasm"})," framework."]}),"\n",(0,t.jsxs)(s.p,{children:["This contract allows for storing ",(0,t.jsx)(s.code,{children:"objects"}),", pinning and unpinning ",(0,t.jsx)(s.code,{children:"objects"})," for a given sender address, and it also includes the ability to remove (forget) ",(0,t.jsx)(s.code,{children:"objects"})," if they are no longer pinned."]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(s.h3,{id:"instantiate",children:"Instantiate"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"cw-storage"})," can be instantiated as follows, refer to the schema for more information on limits and pagination configuration:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'okp4d tx wasm instantiate $CODE_ID \\\n    --label "my-storage" \\\n    --from $ADDR \\\n    --admin $ADMIN_ADDR \\\n    --gas 1000000 \\\n    --broadcast-mode block \\\n    \'{"bucket":"my-bucket","limits":{}, "pagination": {}}\'\n'})}),"\n",(0,t.jsx)(s.h3,{id:"execute",children:"Execute"}),"\n",(0,t.jsx)(s.p,{children:"We can store an object by providing its data in base64 encoded, we can pin the stored object to prevent it from being removed:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'okp4d tx wasm execute $CONTRACT_ADDR \\\n    --from $ADDR \\\n    --gas 1000000 \\\n    --broadcast-mode block \\\n    "{\\"store_object\\":{\\"data\\": \\"$(cat my-data | base64)\\",\\"pin\\":true}}"\n'})}),"\n",(0,t.jsx)(s.p,{children:"The object id is stable as it is a hash, we can't store an object twice."}),"\n",(0,t.jsx)(s.p,{children:"With the following commands we can pin and unpin existing objects:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'okp4d tx wasm execute $CONTRACT_ADDR \\\n    --from $ADDR \\\n    --gas 1000000 \\\n    --broadcast-mode block \\\n    "{\\"pin_object\\":{\\"id\\": \\"$OBJECT_ID\\"}}"\n\nokp4d tx wasm execute $CONTRACT_ADDR \\\n    --from $ADDR \\\n    --gas 1000000 \\\n    --broadcast-mode block \\\n    "{\\"unpin_object\\":{\\"id\\": \\"$OBJECT_ID\\"}}"\n'})}),"\n",(0,t.jsx)(s.p,{children:"And if an object is not pinned, or pinned by the sender of transaction, we can remove it:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'okp4d tx wasm execute $CONTRACT_ADDR \\\n    --from $ADDR \\\n    --gas 1000000 \\\n    --broadcast-mode block \\\n    "{\\"forget_object\\":{\\"id\\": \\"$OBJECT_ID\\"}}"\n'})}),"\n",(0,t.jsx)(s.h3,{id:"query",children:"Query"}),"\n",(0,t.jsx)(s.p,{children:"Query an object by its id:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'okp4d query wasm contract smart $CONTRACT_ADDR \\\n    "{\\"object\\": {\\"id\\": \\"$OBJECT_ID\\"}}"\n'})}),"\n",(0,t.jsx)(s.p,{children:"Or its data:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'okp4d query wasm contract smart $CONTRACT_ADDR \\\n    "{\\"object_data\\": {\\"id\\": \\"$OBJECT_ID\\"}}"\n'})}),"\n",(0,t.jsx)(s.p,{children:"We can also list the objects, eventually filtering on the object owner:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'okp4d query wasm contract smart $CONTRACT_ADDR \\\n    "{\\"objects\\": {\\"address\\": \\"okp41p8u47en82gmzfm259y6z93r9qe63l25dfwwng6\\"}}"\n'})}),"\n",(0,t.jsx)(s.p,{children:"And navigate in a cursor based pagination:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'okp4d query wasm contract smart $CONTRACT_ADDR \\\n    "{\\"objects\\": {\\"first\\": 5, \\"after\\": \\"23Y5t5DBe7DkPwfJo3Sd26Y8Z9epmtpA1FTpdG7DiG6MD8vPRTzzbQ9TccmyoBcePkPK6atUiqcAzJVo3TfYNBGY\\"}}"\n'})}),"\n",(0,t.jsx)(s.p,{children:"We can also query object pins with the same cursor based pagination:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'okp4d query wasm contract smart $CONTRACT_ADDR \\\n    "{\\"object_pins\\": {\\"id\\": \\"$OBJECT_ID\\", \\"first\\": 5, \\"after\\": \\"23Y5t5DBe7DkPwfJo3Sd26Y8Z9epmtpA1FTpdG7DiG6MD8vPRTzzbQ9TccmyoBcePkPK6atUiqcAzJVo3TfYNBGY\\"}}"\n'})}),"\n",(0,t.jsx)(s.h2,{id:"instantiatemsg",children:"InstantiateMsg"}),"\n",(0,t.jsx)(s.p,{children:"Instantiate messages"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"parameter"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"bucket"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),". The name of the bucket. The name could not be empty or contains whitespaces. If name contains whitespace, they will be removed."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"limits"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"#bucketlimits",children:"BucketLimits"})}),". The limits of the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"limits.max_object_pins"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of pins in the bucket for an object."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"limits.max_object_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum size of the objects in the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"limits.max_objects"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of objects in the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"limits.max_total_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum total size of the objects in the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"pagination"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"#paginationconfig",children:"PaginationConfig"})}),". The configuration for paginated query."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"pagination.default_page_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"integer|null"}),". The default number of elements in a page.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Shall be less or equal than ",(0,t.jsx)(s.code,{children:"max_page_size"}),". Default to '10' if not set."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"pagination.max_page_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"integer|null"}),". The maximum elements a page can contains.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Shall be less than ",(0,t.jsx)(s.code,{children:"u32::MAX - 1"}),". Default to '30' if not set."]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"executemsg",children:"ExecuteMsg"}),"\n",(0,t.jsx)(s.p,{children:"Execute messages"}),"\n",(0,t.jsx)(s.h3,{id:"executemsgstoreobject",children:"ExecuteMsg::StoreObject"}),"\n",(0,t.jsx)(s.p,{children:"StoreObject store an object to the bucket and make the sender the owner of the object. The object is referenced by the hash of its content and this value is returned. If the object is already stored, an error is returned. If pin is true, the object is pinned for the sender."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"parameter"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"store_object"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"object"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"store_object.data"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"store_object.pin"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"boolean"}),"."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"executemsgforgetobject",children:"ExecuteMsg::ForgetObject"}),"\n",(0,t.jsx)(s.p,{children:"ForgetObject first unpin the object from the bucket for the considered sender, then remove it from the storage if it is not pinned anymore. If the object is pinned for other senders, it is not removed from the storage and an error is returned. If the object is not pinned for the sender, this is a no-op."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"parameter"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"forget_object"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"object"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"forget_object.id"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),"."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"executemsgpinobject",children:"ExecuteMsg::PinObject"}),"\n",(0,t.jsx)(s.p,{children:"PinObject pins the object in the bucket for the considered sender. If the object is already pinned for the sender, this is a no-op. While an object is pinned, it cannot be removed from the storage."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"parameter"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"pin_object"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"object"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"pin_object.id"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),"."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"executemsgunpinobject",children:"ExecuteMsg::UnpinObject"}),"\n",(0,t.jsx)(s.p,{children:"UnpinObject unpins the object in the bucket for the considered sender. If the object is not pinned for the sender, this is a no-op. The object can be removed from the storage if it is not pinned anymore."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"parameter"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"unpin_object"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"object"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"unpin_object.id"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),"."]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"querymsg",children:"QueryMsg"}),"\n",(0,t.jsx)(s.p,{children:"Query messages"}),"\n",(0,t.jsx)(s.h3,{id:"querymsgbucket",children:"QueryMsg::Bucket"}),"\n",(0,t.jsx)(s.p,{children:"Bucket returns the bucket information."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"parameter"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"bucket"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"object"}),"."]})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"querymsgobject",children:"QueryMsg::Object"}),"\n",(0,t.jsx)(s.p,{children:"Object returns the object information with the given id."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"parameter"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"object"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"object"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"object.id"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),". The id of the object to get."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"querymsgobjects",children:"QueryMsg::Objects"}),"\n",(0,t.jsx)(s.p,{children:"Objects returns the list of objects in the bucket with support for pagination."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"parameter"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"objects"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"object"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"objects.address"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"string|null"}),". The owner of the objects to get."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"objects.after"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"string|null"}),". The point in the sequence to start returning objects."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"objects.first"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"integer|null"}),". The number of objects to return."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"querymsgobjectdata",children:"QueryMsg::ObjectData"}),"\n",(0,t.jsx)(s.p,{children:"ObjectData returns the content of the object with the given id."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"parameter"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"object_data"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"object"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"object_data.id"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),". The id of the object to get."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"querymsgobjectpins",children:"QueryMsg::ObjectPins"}),"\n",(0,t.jsx)(s.p,{children:"ObjectPins returns the list of addresses that pinned the object with the given id with support for pagination."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"parameter"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"object_pins"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"object"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"object_pins.after"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"string|null"}),". The point in the sequence to start returning pins."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"object_pins.first"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"integer|null"}),". The number of pins to return."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"object_pins.id"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),". The id of the object to get the pins for."]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsx)(s.h3,{id:"bucket",children:"bucket"}),"\n",(0,t.jsx)(s.p,{children:"BucketResponse is the response of the Bucket query."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"property"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"limits"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"#bucketlimits",children:"BucketLimits"})}),". The limits of the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"limits.max_object_pins"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of pins in the bucket for an object."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"limits.max_object_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum size of the objects in the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"limits.max_objects"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of objects in the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"limits.max_total_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum total size of the objects in the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"name"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),". The name of the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"pagination"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"#paginationconfig",children:"PaginationConfig"})}),". The configuration for paginated query."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"pagination.default_page_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"integer|null"}),". The default number of elements in a page.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Shall be less or equal than ",(0,t.jsx)(s.code,{children:"max_page_size"}),". Default to '10' if not set."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"pagination.max_page_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"integer|null"}),". The maximum elements a page can contains.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Shall be less than ",(0,t.jsx)(s.code,{children:"u32::MAX - 1"}),". Default to '30' if not set."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"object",children:"object"}),"\n",(0,t.jsx)(s.p,{children:"ObjectResponse is the response of the Object query."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"property"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"id"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),". The id of the object."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"is_pinned"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"boolean"}),". Tells if the object is pinned by at least one address."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"owner"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),". The owner of the object."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"size"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"})}),". The size of the object."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"object_data",children:"object_data"}),"\n",(0,t.jsx)(s.p,{children:"Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline."}),"\n",(0,t.jsxs)(s.p,{children:["This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>. See also <",(0,t.jsx)(s.a,{href:"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md",children:"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md"}),">."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.th,{children:"type"})})}),(0,t.jsx)(s.tbody,{children:(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"string"}),"."]})})})]}),"\n",(0,t.jsx)(s.h3,{id:"object_pins",children:"object_pins"}),"\n",(0,t.jsx)(s.p,{children:"ObjectPinsResponse is the response of the GetObjectPins query."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"property"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"data"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"Array<string>"}),". The list of addresses that pinned the object."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"page_info"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"#pageinfo",children:"PageInfo"})}),". The page information."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"page_info.cursor"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"string"}),". The cursor to the next page."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"page_info.has_next_page"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"boolean"}),". Tells if there is a next page."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"objects",children:"objects"}),"\n",(0,t.jsx)(s.p,{children:"ObjectsResponse is the response of the Objects query."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"property"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"data"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsxs)(s.strong,{children:["Array<",(0,t.jsx)(s.a,{href:"#objectresponse",children:"ObjectResponse"}),">"]}),". The list of objects in the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"page_info"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"#pageinfo",children:"PageInfo"})}),". The page information."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"page_info.cursor"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"string"}),". The cursor to the next page."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"page_info.has_next_page"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"boolean"}),". Tells if there is a next page."]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"definitions",children:"Definitions"}),"\n",(0,t.jsx)(s.h3,{id:"binary",children:"Binary"}),"\n",(0,t.jsx)(s.p,{children:"A string containing Base64-encoded data."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.th,{children:"type"})})}),(0,t.jsx)(s.tbody,{children:(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"string"}),"."]})})})]}),"\n",(0,t.jsx)(s.h3,{id:"bucketlimits",children:"BucketLimits"}),"\n",(0,t.jsx)(s.p,{children:"BucketLimits is the type of the limits of a bucket."}),"\n",(0,t.jsx)(s.p,{children:"The limits are optional and if not set, there is no limit."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"property"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"max_object_pins"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of pins in the bucket for an object."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"max_object_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum size of the objects in the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"max_objects"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum number of objects in the bucket."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"max_total_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"}),"|null"]}),". The maximum total size of the objects in the bucket."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"objectresponse",children:"ObjectResponse"}),"\n",(0,t.jsx)(s.p,{children:"ObjectResponse is the response of the Object query."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"property"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"id"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),". The id of the object."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"is_pinned"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"boolean"}),". Tells if the object is pinned by at least one address."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"owner"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),". The owner of the object."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"size"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"#uint128",children:"Uint128"})}),". The size of the object."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"pageinfo",children:"PageInfo"}),"\n",(0,t.jsx)(s.p,{children:"PageInfo is the page information returned for paginated queries."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"property"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"cursor"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"string"}),". The cursor to the next page."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"has_next_page"})}),(0,t.jsxs)(s.td,{children:["*(Required.) * ",(0,t.jsx)(s.strong,{children:"boolean"}),". Tells if there is a next page."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"paginationconfig",children:"PaginationConfig"}),"\n",(0,t.jsx)(s.p,{children:"PaginationConfig is the type carrying configuration for paginated queries."}),"\n",(0,t.jsx)(s.p,{children:"The fields are optional and if not set, there is a default configuration."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"property"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"default_page_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"integer|null"}),". The default number of elements in a page.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Shall be less or equal than ",(0,t.jsx)(s.code,{children:"max_page_size"}),". Default to '10' if not set."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"max_page_size"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"integer|null"}),". The maximum elements a page can contains.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Shall be less than ",(0,t.jsx)(s.code,{children:"u32::MAX - 1"}),". Default to '30' if not set."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"uint128",children:"Uint128"}),"\n",(0,t.jsx)(s.p,{children:"A string containing a 128-bit integer in decimal representation."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.th,{children:"type"})})}),(0,t.jsx)(s.tbody,{children:(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"string"}),"."]})})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["Rendered by ",(0,t.jsx)(s.a,{href:"https://fadroma.tech",children:"Fadroma"})," (",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/@fadroma/schema",children:"@fadroma/schema 1.1.0"}),") from ",(0,t.jsx)(s.code,{children:"cw-storage.json"})," (",(0,t.jsx)(s.code,{children:"056d39e83fadd8bd"}),")"]})})]})}function j(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>d});var t=n(67294);const i={},r=t.createContext(i);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);