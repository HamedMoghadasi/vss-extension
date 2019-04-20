var diagramModule = {
  data: {},

  DateDifferenceInDay: function(firstDate, SecondDate) {
    dt1 = new Date(firstDate);
    dt2 = new Date(SecondDate);

    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  },

  calculateLeadTime: function(data) {
    let createdOn = data["System.CreatedDate"];
    let closedOn = data["Microsoft.VSTS.Common.ClosedDate"];

    if (closedOn === null) {
      closedOn = new Date();
    }

    let days = diagramModule.DateDifferenceInDay(
      createdOn,
      closedOn.toLocaleDateString()
    );

    return {
      createdOn: createdOn,
      closedOn: closedOn,
      days: days
    };
  },

  prepareDiagramData: function(data) {
    let leadTime = diagramModule.calculateLeadTime(data);
    let diagramData = {
      createdOn: leadTime.createdOn,
      // i don't have startedDate value yet, so temporary do as below
      startedOn: leadTime.closedOn - 7 * 24 * 60 * 60 * 1000,
      closedOn: leadTime.closedOn
    };
    return diagramData;
  },

  draw: function(data) {
    highchartsModule.draw(diagramModule.prepareDiagramData(data));
  },

  init: function() {}
};

var webHook = {
  get: function() {
    $.ajax({
      //Fake Address
      url: "https://localhost:5001/api/workitem",
      type: "GET",
      dataType: "json",
      success: function(result) {
        diagramModule.data = result;
      }
    });
  },

  init: function() {}
};
