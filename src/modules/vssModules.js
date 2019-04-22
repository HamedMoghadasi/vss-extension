var _vss = {
  initialize: function() {
    VSS.init({
      explicitNotifyLoaded: true,
      usePlatformScripts: true
    });
    VSS.require([""], function() {
      VSS.register(VSS.getContribution().id, function() {
        return {
          onLoaded: function(args) {
            app.init();
            app.digram.draw();
            app.digram.information.fill();
          }
        };
      });

      VSS.notifyLoadSucceeded();
    });
  }
};
