var app = {
  data: {},

  digram: {
    draw: function() {
      highchartsModule.draw(app.data);
    },
    information: {
      fill: function() {
        $("#Information").html(
          `<i>Lead time is <b>${
            app.data.leadTime.timeago
          } </b> and Cycle time is <b>${app.data.cycleTime.timeago}</b> </i>`
        );
      }
    }
  },

  init: function() {
    webHook.get();
  }
};
