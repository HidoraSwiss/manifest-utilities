## [script] addEndpoint

Add an endpoint to a nodeId and send the associated public port by email.

Use:

```yaml
onInstall:
  script:
    script: https://raw.githubusercontent.com/HidoraSwiss/manifest-utilities/master/scripts/addEndpoint.js
    params:
      nodeId: ${nodes.cp.first.id}
      port: 26000
      protocol: UDP
      name: Xonotic server
      text: Your Xonotic server is on # Public address will be added at the end of the line
    type: js
```
