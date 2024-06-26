## okp4d query logic ask

Execute the Ask RPC method

```
okp4d query logic ask [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for ask
      --no-indent          Do not indent JSON output
      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
      --program string     
      --query string       
```

### SEE ALSO

* [okp4d query logic](okp4d_query_logic.md)	 - Querying commands for the logic module
