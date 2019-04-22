var webHook = {
  get: function() {
    result = {
      createdOn: new Date("2019/05/15").getTime(),
      startedOn: new Date("2019/05/25").getTime(),
      closedOn: new Date("2019/05/30").getTime(),
      leadTime: {
        timeago: "15 days"
      },
      cycleTime: {
        timeago: "5 days"
      }
    };
    app.data = result;
    //$.ajax({
    //Fake Address
    //   url: "https://localhost:5001/api/workitem",
    //   type: "GET",
    //   dataType: "json",
    //   success: function(result) {
    //     result = {
    //       createdOn: new Date("2019/05/15").getTime(),
    //       startedOn: new Date("2019/05/25").getTime(),
    //       closedOn: new Date("2019/05/30").getTime(),
    //       leadTime: {
    //         timeago: "lead time: 15 days"
    //       },
    //       cycleTime: {
    //         timeago: "cycle time: 5 days"
    //       }
    //     };
    //     app.data = result;
    //   }
    // });
  },

  init: function() {}
};
