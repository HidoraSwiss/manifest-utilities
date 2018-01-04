## [script] addEndpoint

Add an endpoint and get the associated public port in the manifest.

Use:

```yaml
onInstall:
  script:
    script: <url>
    params:
      nodeId: ${nodes.cp.first.id}
      port: 26000
      protocol: UDP
      name: Xonotic server
      text: Your Xonotic server is on
    type: js
```
