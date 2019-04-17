var diagramModule = {
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
    const createdDate = data["System.CreatedDate"];
    $("#LeadTime").data("CreatedDate", createdDate.toISOString());
    let now = new Date().toISOString();

    return diagramModule.DateDifferenceInDay(createdDate, now);
  },

  init: function() {
    console.log("Welcome diagramModule -- AppJs");
  }
};
