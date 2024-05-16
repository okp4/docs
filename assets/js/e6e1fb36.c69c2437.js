"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[73405],{38165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(85893),a=n(11151);const i={},o=void 0,r={id:"axoned_start",title:"axoned_start",description:"axoned start",source:"@site/commands/axoned_start.md",sourceDirName:".",slug:"/axoned_start",permalink:"/commands/next/axoned_start",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"axoned_snapshots_restore",permalink:"/commands/next/axoned_snapshots_restore"},next:{title:"axoned_status",permalink:"/commands/next/axoned_status"}},l={},d=[{value:"axoned start",id:"axoned-start",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"axoned-start",children:"axoned start"}),"\n",(0,s.jsx)(t.p,{children:"Run the full node"}),"\n",(0,s.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.p,{children:"Run the full node application with CometBFT in or out of process. By\ndefault, the application will run with CometBFT in process."}),"\n",(0,s.jsx)(t.p,{children:"Pruning options can be provided via the '--pruning' flag or alternatively with '--pruning-keep-recent', and\n'pruning-interval' together."}),"\n",(0,s.jsx)(t.p,{children:"For '--pruning' the options are as follows:"}),"\n",(0,s.jsx)(t.p,{children:"default: the last 362880 states are kept, pruning at 10 block intervals\nnothing: all historic states will be saved, nothing will be deleted (i.e. archiving node)\neverything: 2 latest states will be kept; pruning at 10 block intervals.\ncustom: allow pruning options to be manually specified through 'pruning-keep-recent', and 'pruning-interval'"}),"\n",(0,s.jsx)(t.p,{children:"Node halting configurations exist in the form of two flags: '--halt-height' and '--halt-time'. During\nthe ABCI Commit phase, the node will check if the current block height is greater than or equal to\nthe halt-height or if the current block time is greater than or equal to the halt-time. If so, the\nnode will attempt to gracefully shutdown and the block will not be committed. In addition, the node\nwill not be able to commit subsequent blocks."}),"\n",(0,s.jsx)(t.p,{children:"For profiling and benchmarking purposes, CPU profiling can be enabled via the '--cpu-profile' flag\nwhich accepts a path for the resulting pprof file."}),"\n",(0,s.jsx)(t.p,{children:"The node may be started in a 'query only' mode where only the gRPC and JSON HTTP\nAPI services are enabled via the 'grpc-only' flag. In this mode, CometBFT is\nbypassed and can be used when legacy queries are needed after an on-chain upgrade\nis performed. Note, when enabled, gRPC will also be automatically enabled."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"axoned start [flags]\n"})}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'      --abci string                                     specify abci transport (socket | grpc) (default "socket")\n      --address string                                  Listen address (default "tcp://127.0.0.1:26658")\n      --api.address string                              the API server address to listen on (default "tcp://localhost:1317")\n      --api.enable                                      Define if the API server should be enabled\n      --api.enabled-unsafe-cors                         Define if CORS should be enabled (unsafe - use it at your own risk)\n      --api.max-open-connections uint                   Define the number of maximum open connections (default 1000)\n      --api.rpc-max-body-bytes uint                     Define the CometBFT maximum request body (in bytes) (default 1000000)\n      --api.rpc-read-timeout uint                       Define the CometBFT RPC read timeout (in seconds) (default 10)\n      --api.rpc-write-timeout uint                      Define the CometBFT RPC write timeout (in seconds)\n      --api.swagger                                     Define if swagger documentation should automatically be registered (Note: the API must also be enabled)\n      --consensus.create_empty_blocks                   set this to false to only produce blocks when there are txs or when the AppHash changes (default true)\n      --consensus.create_empty_blocks_interval string   the possible interval between empty blocks (default "0s")\n      --consensus.double_sign_check_height int          how many blocks to look back to check existence of the node\'s consensus votes before joining consensus\n      --cpu-profile string                              Enable CPU profiling and write to the provided file\n      --db_backend string                               database backend: goleveldb | cleveldb | boltdb | rocksdb | badgerdb (default "goleveldb")\n      --db_dir string                                   database directory (default "data")\n      --genesis_hash bytesHex                           optional SHA-256 hash of the genesis file\n      --grpc-only                                       Start the node in gRPC query only mode (no CometBFT process is started)\n      --grpc-web.enable                                 Define if the gRPC-Web server should be enabled. (Note: gRPC must also be enabled) (default true)\n      --grpc.address string                             the gRPC server address to listen on (default "localhost:9090")\n      --grpc.enable                                     Define if the gRPC server should be enabled (default true)\n      --halt-height uint                                Block height at which to gracefully halt the chain and shutdown the node\n      --halt-time uint                                  Minimum block time (in Unix seconds) at which to gracefully halt the chain and shutdown the node\n  -h, --help                                            help for start\n      --home string                                     The application home directory (default "/home/john/.axoned")\n      --iavl-disable-fastnode                           Disable fast node for IAVL tree\n      --inter-block-cache                               Enable inter-block caching (default true)\n      --inv-check-period uint                           Assert registered invariants every N blocks\n      --mempool.max-txs int                             Sets MaxTx value for the app-side mempool\n      --min-retain-blocks uint                          Minimum block height offset during ABCI commit to prune CometBFT blocks\n      --minimum-gas-prices string                       Minimum gas prices to accept for transactions; Any fee in a tx must meet this minimum (e.g. 0.01photino;0.0001stake)\n      --moniker string                                  node name (default "my-machine")\n      --p2p.external-address string                     ip:port address to advertise to peers for them to dial\n      --p2p.laddr string                                node listen address. (0.0.0.0:0 means any interface, any port) (default "tcp://0.0.0.0:26656")\n      --p2p.persistent_peers string                     comma-delimited ID@host:port persistent peers\n      --p2p.pex                                         enable/disable Peer-Exchange (default true)\n      --p2p.private_peer_ids string                     comma-delimited private peer IDs\n      --p2p.seed_mode                                   enable/disable seed mode\n      --p2p.seeds string                                comma-delimited ID@host:port seed nodes\n      --p2p.unconditional_peer_ids string               comma-delimited IDs of unconditional peers\n      --priv_validator_laddr string                     socket address to listen on for connections from external priv_validator process\n      --proxy_app string                                proxy app address, or one of: \'kvstore\', \'persistent_kvstore\' or \'noop\' for local testing. (default "tcp://127.0.0.1:26658")\n      --pruning string                                  Pruning strategy (default|nothing|everything|custom) (default "default")\n      --pruning-interval uint                           Height interval at which pruned heights are removed from disk (ignored if pruning is not \'custom\')\n      --pruning-keep-recent uint                        Number of recent heights to keep on disk (ignored if pruning is not \'custom\')\n      --query-gas-limit uint                            Maximum gas a Rest/Grpc query can consume. Blank and 0 imply unbounded.\n      --rpc.grpc_laddr string                           GRPC listen address (BroadcastTx only). Port required\n      --rpc.laddr string                                RPC listen address. Port required (default "tcp://127.0.0.1:26657")\n      --rpc.pprof_laddr string                          pprof listen address (https://golang.org/pkg/net/http/pprof)\n      --rpc.unsafe                                      enabled unsafe rpc methods\n      --shutdown-grace duration                         On Shutdown, duration to wait for resource clean up\n      --state-sync.snapshot-interval uint               State sync snapshot interval\n      --state-sync.snapshot-keep-recent uint32          State sync snapshot to keep (default 2)\n      --trace                                           Provide full stack traces for errors in ABCI Log\n      --trace-store string                              Enable KVStore tracing to an output file\n      --transport string                                Transport protocol: socket, grpc (default "socket")\n      --unsafe-skip-upgrades ints                       Skip a set of upgrade heights to continue the old binary\n      --wasm.memory_cache_size uint32                   Sets the size in MiB (NOT bytes) of an in-memory cache for Wasm modules. Set to 0 to disable. (default 100)\n      --wasm.query_gas_limit uint                       Set the max gas that can be spent on executing a query with a Wasm contract (default 3000000)\n      --wasm.simulation_gas_limit string                Set the max gas that can be spent when executing a simulation TX\n      --wasm.skip_wasmvm_version_check                  Skip check that ensures that libwasmvm version (the Rust project) and wasmvm version (the Go project) match\n      --with-comet                                      Run abci app embedded in-process with CometBFT (default true)\n      --x-crisis-skip-assert-invariants                 Skip x/crisis invariants check on startup\n'})}),"\n",(0,s.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/commands/next/axoned",children:"axoned"}),"\t - Axone - Orchestration Layer for AI"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);