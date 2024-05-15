"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[93503],{36661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,readingTime:()=>l,toc:()=>c});var s=n(85893),r=n(11151);const o={sidebar_position:5},i="Validator Security Checklist",d={id:"nodes/security",title:"Validator Security Checklist",description:"Conduct a security checklist survey to go through the security measures of a validator",source:"@site/docs/nodes/security.md",sourceDirName:"nodes",slug:"/nodes/security",permalink:"/fr/nodes/security",draft:!1,unlisted:!1,editUrl:"https://github.com/axone-protocol/docs/edit/main/docs/nodes/security.md",tags:[],version:"current",lastUpdatedAt:1673521399e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"nodes",previous:{title:"Upgrade",permalink:"/fr/nodes/upgrade"},next:{title:"Join Testnet",permalink:"/fr/nodes/join-testnet"}},a={},l=7,c=[{value:"Conduct Survey on General Controls of Hosting Data Centre",id:"conduct-survey-on-general-controls-of-hosting-data-centre",level:2},{value:"Current Status of Node Setup",id:"current-status-of-node-setup",level:2},{value:"Backup",id:"backup",level:2},{value:"Alerting and monitoring",id:"alerting-and-monitoring",level:3},{value:"Simple setup using Grafana Cloud",id:"simple-setup-using-grafana-cloud",level:4},{value:"Sentry Nodes (DDOS Protection)",id:"sentry-nodes-ddos-protection",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"validator-security-checklist",children:"Validator Security Checklist"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Conduct a security checklist survey to go through the security measures of a validator"})}),"\n",(0,s.jsx)(t.h2,{id:"conduct-survey-on-general-controls-of-hosting-data-centre",children:"Conduct Survey on General Controls of Hosting Data Centre"}),"\n",(0,s.jsx)(t.p,{children:"Perform a survey on the hosting data centre, and compare your result with the best practice suggested below"}),"\n",(0,s.jsx)(t.p,{children:"For example, your hosting data centre should have following features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Controls Category"}),(0,s.jsx)(t.th,{children:"Description of Best Practice"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Data Center"}),(0,s.jsx)(t.td,{children:"Redundant Power"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Data Center"}),(0,s.jsx)(t.td,{children:"Redundant Cooling"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Data Center"}),(0,s.jsx)(t.td,{children:"Redundant Networking"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Data Center"}),(0,s.jsx)(t.td,{children:"Physical Cage/Gated Access"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Data Center"}),(0,s.jsx)(t.td,{children:"Remote Alerting Security Camera"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"current-status-of-node-setup",children:"Current Status of Node Setup"}),"\n",(0,s.jsx)(t.p,{children:"Perform a survey on your current status of node setup, and compare your result with the best practice suggested below"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Controls Category"}),(0,s.jsx)(t.th,{children:"Description of Best Practice"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"General System Security"}),(0,s.jsx)(t.td,{children:"Operating system appropriately patched. Kernel is updated to latest stable version. The node should be operated in x86_64 environment"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"General System Security"}),(0,s.jsx)(t.td,{children:"Auto-updates for operation system is configured. Toolkit for automatic upgrades exists (e.g. auter, yum-cron, dnf-automatic, unattended-upgrades)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"General System Security"}),(0,s.jsx)(t.td,{children:"Security framework enabled and enforcing. SELinux / AppArmor / Tomoyo / Grsecurity Enabled."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"General System Security"}),(0,s.jsx)(t.td,{children:"No insecure and unnecessary services Installed. (e.g. telnet, rsh, inetd, etc ...)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"General System Security"}),(0,s.jsx)(t.td,{children:"GRUB boot loader password is configured. Grub2 configured with password"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"General System Security"}),(0,s.jsx)(t.td,{children:"Only root permissions on core system files"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"File Directory Security"}),(0,s.jsxs)(t.td,{children:["Secure the directory ",(0,s.jsx)(t.code,{children:"~/.okp4d"})," to be accessible by owner only"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Binary Configuration"}),(0,s.jsxs)(t.td,{children:["Recommend the following settings in config.toml for both performance and security - For ",(0,s.jsx)(t.strong,{children:"sentry nodes"}),": ",(0,s.jsx)(t.code,{children:'max_num_inbound_peers = 500, max_num_outbound_peers = 50, flush_throttle_timeout = "300ms"'})," - For ",(0,s.jsx)(t.strong,{children:"validator node"}),": ",(0,s.jsx)(t.code,{children:'max_num_inbound_peers = 100, max_num_outbound_peers = 10, flush_throttle_timeout = "100ms"'})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Account Security & Remote Access"}),(0,s.jsx)(t.td,{children:"Following Password policies are enforced: No Blank Passwords; Weak Passwords Not Allowed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Account Security & Remote Access"}),(0,s.jsxs)(t.td,{children:["Following SSH configurations are enabled: PermitRootLogin: ",(0,s.jsx)(t.code,{children:"no"}),"; PasswordAuthentication ",(0,s.jsx)(t.code,{children:"no"}),"; ChallengeResponseAuthentication ",(0,s.jsx)(t.code,{children:"no"}),"; UsePAM ",(0,s.jsx)(t.code,{children:"yes"}),"; AllowUsers ",(0,s.jsx)(t.code,{children:"Necessary user only"}),"; AllowGroups ",(0,s.jsx)(t.code,{children:"Necessary group only"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Networking"}),(0,s.jsx)(t.td,{children:"Network throughput test using speedtest. Recommend to have at least 5 Mbps upload, 5 Mbps download)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Networking"}),(0,s.jsx)(t.td,{children:"Host-based (e.g. iptables) or cloud-based (e.g. AWS Security Group) firewall is enabled to protect all the involved nodes. Remote management ports (e.g. SSH - TCP 22) should only be exposed to selected IP instead of the internet. No overly permissive rules (e.g. wide range of allowed ports 1-65535) should be set. For internal communication channels between nodes, they should be set with specific source and destination addresses. For internet reachable nodes, set TCP 26656 to be the only incoming port, if possible."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Networking"}),(0,s.jsx)(t.td,{children:"Intrusion Detection / Prevention System (e.g. Fail2Ban, Snort, OSSEC) is installed and enforcing"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Networking"}),(0,s.jsx)(t.td,{children:"Setup sentry node architecture to protect validator node, and set firewall rules to restrict direct internet access to it."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Networking"}),(0,s.jsxs)(t.td,{children:["The Remote Procedure Call (RPC) provides sensitive operations and information that is not supposed to be exposed to the Internet. By default, RPC is on and allow connection from ",(0,s.jsx)(t.code,{children:"127.0.0.1"})," only. Please be extremely careful if you need to allow RPC from other IP addresses."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Redundancy"}),(0,s.jsx)(t.td,{children:"Hot standby node is setup with the same configuration as main node"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Redundancy"}),(0,s.jsx)(t.td,{children:"System monitoring and alerting is setup to alert owners on anomalies"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Key Management"}),(0,s.jsxs)(t.td,{children:["Setup ",(0,s.jsx)(t.a,{href:"/fr/nodes/kms",children:"Tendermint KMS"})," with HSM or equivalent online service, which should replace the static key file."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DDOS"}),(0,s.jsxs)(t.td,{children:["Setup validator in accordance with sentry architecture. Kindly refer to the setup ",(0,s.jsx)(t.a,{href:"https://docs.tendermint.com/master/nodes/validators.html#setting-up-a-validator",children:"instruction"})," and ",(0,s.jsx)(t.a,{href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454",children:"detailed description"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"backup",children:"Backup"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Learn how to backup your validator."})}),"\n",(0,s.jsxs)(t.p,{children:["It is ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"crucial"})})," to backup your validator's private key. It's the only way to restore your validator in the event of a disaster."]}),"\n",(0,s.jsx)(t.p,{children:"The validator private key is a Tendermint Key: a unique key used to sign consensus votes."}),"\n",(0,s.jsx)(t.p,{children:'To backup everything you need to restore your validator, note that if you are using the "software sign" (the default signing method of Tendermint), your Tendermint key is located at:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"~/.okp4d/config/priv_validator_key.json\n"})}),"\n",(0,s.jsx)(t.p,{children:"To see your validator's associated public key:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"okp4d tendermint show-validator\n"})}),"\n",(0,s.jsx)(t.p,{children:"To see your validator's associated bech32 address:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"okp4d tendermint show-address\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can also use hardware to store your Tendermint Key much more safely, such as ",(0,s.jsx)(t.a,{href:"https://developers.yubico.com/YubiHSM2/",children:"YubiHSM2"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"alerting-and-monitoring",children:"Alerting and monitoring"}),"\n",(0,s.jsx)(t.p,{children:"Alerting and monitoring is desirable as well - you are encouraged to explore solutions and find one that works for your setup. Prometheus is available out-of-the box, and there are a variety of open-source tools. Recommended reading:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Alerting:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Tenderduty: ",(0,s.jsx)(t.a,{href:"https://github.com/blockpane/tenderduty",children:"https://github.com/blockpane/tenderduty"})]}),"\n",(0,s.jsxs)(t.li,{children:["PANIC: ",(0,s.jsx)(t.a,{href:"https://github.com/SimplyVC/panic_cosmos",children:"https://github.com/SimplyVC/panic_cosmos"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Monitoring:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://medium.com/solar-labs-team/cosmos-how-to-monitoring-your-validator-892a46298722",children:"https://medium.com/solar-labs-team/cosmos-how-to-monitoring-your-validator-892a46298722"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://medium.com/simply-vc/cosmos-monitoring-and-alerting-for-validators-8e3f016c9567",children:"https://medium.com/simply-vc/cosmos-monitoring-and-alerting-for-validators-8e3f016c9567"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://chainflow.io/cosmos-validator-mission-control/",children:"https://chainflow.io/cosmos-validator-mission-control/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://medium.com/cypher-core/cosmos-how-to-set-up-your-own-network-monitoring-dashboard-fe49c63a8271",children:"https://medium.com/cypher-core/cosmos-how-to-set-up-your-own-network-monitoring-dashboard-fe49c63a8271"})}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"simple-setup-using-grafana-cloud",children:"Simple setup using Grafana Cloud"}),"\n",(0,s.jsxs)(t.p,{children:["Using only the raw metrics endpoint provided by ",(0,s.jsx)(t.code,{children:"okp4d"})," you can get a working dashboard and alerting setup using Grafana Cloud. This means you don't have to run Grafana on the instance."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["First, in ",(0,s.jsx)(t.code,{children:"config.toml"})," enable Prometheus. The default metrics port will be ",(0,s.jsx)(t.code,{children:"26660"})]}),"\n",(0,s.jsx)(t.li,{children:"Download Prometheus - this is needed to ship logs to Grafana Cloud."}),"\n",(0,s.jsxs)(t.li,{children:["Create a ",(0,s.jsx)(t.code,{children:"prometheus.yml"})," file with your ",(0,s.jsx)(t.a,{href:"https://grafana.com/docs/grafana-cloud/reference/create-api-key/",children:"Grafana Cloud credentials"})," in the Prometheus folder. You can get these via the Grafana UI. Click 'details' on the Prometheus card:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"global:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: cosmops\n    static_configs:\n    - targets: ['localhost:26660']\n      labels:\n        group: 'cosmops'\n\nremote_write:\n  - url: https://your-grafana-cloud-endpoint/api/prom/push\n    basic_auth:\n      username: ID_HERE\n      password: \"API KEY HERE\"\n"})}),"\n",(0,s.jsxs)(t.p,{children:["3. Set up a service file, with ",(0,s.jsx)(t.code,{children:"sudo nano /etc/systemd/system/prometheus.service"}),", replacing ",(0,s.jsx)(t.code,{children:"<your-user>"})," and ",(0,s.jsx)(t.code,{children:"<prometheus-folder>"})," with the location of Prometheus. This sets the Prometheus port to ",(0,s.jsx)(t.code,{children:"6666"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"[Unit]\nDescription=prometheus\nAfter=network-online.target\n\n[Service]\nUser=<your-user>\nExecStart=/home/<your-user>/<prometheus-folder>/prometheus --config.file=/home/<your-user>/<prometheus-folder>/prometheus.yml --web.listen-address=:6666 --storage.tsdb.path=/home/<your-user>/<prometheus-folder>/data\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\n/etc/systemd/system/prometheus.service\n"})}),"\n",(0,s.jsx)(t.p,{children:"4. Enable and start the service."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo -S systemctl daemon-reload\nsudo -S systemctl enable prometheus\nsudo systemctl start prometheus\n"})}),"\n",(0,s.jsx)(t.p,{children:"5. Import a dashboard to your Grafana. Search for 'Cosmos Validator' to find several options. You should see logs arriving in the dashboard after a couple of minutes."}),"\n",(0,s.jsx)(t.p,{children:"For more info:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://grafana.com/docs/grafana-cloud/quickstart/noagent_linuxnode/",children:"https://grafana.com/docs/grafana-cloud/quickstart/noagent_linuxnode/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://forum.cosmos.network/t/monitoring-alerting-for-your-validator/446/28",children:"https://forum.cosmos.network/t/monitoring-alerting-for-your-validator/446/28"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"sentry-nodes-ddos-protection",children:"Sentry Nodes (DDOS Protection)"}),"\n",(0,s.jsx)(t.p,{children:"Validators are responsible for ensuring that the network can sustain denial of service attacks."}),"\n",(0,s.jsx)(t.p,{children:"One recommended way to mitigate these risks is for validators to carefully structure their network topology in a so-called sentry node architecture."}),"\n",(0,s.jsx)(t.p,{children:"Validator nodes should only connect to full-nodes they trust because they operate them themselves or are run by other validators they know socially. A validator node will typically run in a data center. Most data centers provide direct links the networks of major cloud providers. The validator can use those links to connect to sentry nodes in the cloud. This shifts the burden of denial-of-service from the validator's node directly to its sentry nodes, and may require new sentry nodes be spun up or activated to mitigate attacks on existing ones."}),"\n",(0,s.jsx)(t.p,{children:"Sentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in private IP space, an internet based attacked cannot disturb them directly. This will ensure validator block proposals and votes always make it to the rest of the network."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Read more about Sentry Nodes on the ",(0,s.jsx)(t.a,{href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454",children:"forum"})]})}),"\n",(0,s.jsx)(t.p,{children:"To setup your sentry node architecture you can follow the instructions below:"}),"\n",(0,s.jsxs)(t.p,{children:["Validators nodes should edit their ",(0,s.jsx)(t.code,{children:"config.toml"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Comma separated list of nodes to keep persistent connections to\n# Do not add private peers to this list if you don't want them advertised\npersistent_peers =[list of sentry nodes]\n\n# Set true to enable the peer-exchange reactor\npex = false\n"})}),"\n",(0,s.jsx)(t.p,{children:"Sentry Nodes should edit their config.toml:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)\n# Example ID: 3e16af0cead27979e1fc3dac57d03df3c7a77acc@3.87.179.235:26656\n\nprivate_peer_ids = "node_ids_of_private_peers"\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);