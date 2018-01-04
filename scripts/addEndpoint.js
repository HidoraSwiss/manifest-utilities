import com.hivext.api.development.Scripting;

var resp = jelastic.env.control.AddEndpoint("${env.envName}", getParam("session"), getParam("nodeId"), getParam("port"), getParam('protocol', 'TCP'), getParam('name', 'Endpoint'));
if (resp.result != 0) return resp;

var url = "${env.domain}:" + resp.object.publicPort;

var scripting =  hivext.local.exp.wrapRequest(new Scripting({
    serverUrl : "http://" + window.location.host.replace("app", "appstore") + "/"
}));

return scripting.eval({
    script : "InstallApp",
    targetAppid : '${env.appid}',
    session: getParam("session"),
    manifest : {
        "jpsType" : "update",
        "application" : {
		"id": "sendEmail",
		"name": "${env.envName}",
		"success": {
		        "text": getParam("text", "Your server can be joined on ") + " " + url,
		        "email": getParam("text", "Your server can be joined on ") + " " + url
		}
	}
    }
});
