var vssModule = {
  init: function() {
    console.log("welcome to vssModule !");
  },
  initialize: function() {
    VSS.init({
      explicitNotifyLoaded: true,
      usePlatformScripts: true
    });
    VSS.require(["TFS/WorkItemTracking/Services"], function(_WorkItemServices) {
      function getWorkItemFormService() {
        return _WorkItemServices.WorkItemFormService.getService();
      }

      VSS.register(VSS.getContribution().id, function() {
        return {
          onLoaded: function(args) {
            getWorkItemFormService().then(function(service) {
              service
                .getFieldValues([
                  "System.Id",
                  "System.CreatedDate",
                  "Microsoft.VSTS.Common.ClosedDate"
                ])
                .then(function(data) {
                  diagramModule.draw(data);
                });
            });
          }
        };
      });

      VSS.notifyLoadSucceeded();
    });
  }
};
