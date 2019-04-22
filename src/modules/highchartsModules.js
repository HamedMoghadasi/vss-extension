var highchartsModule = {
  draw: function(diagramData) {
    Highcharts.chart("Container", {
      chart: {
        height: 150,
        type: "spline"
      },
      title: false,
      subtitle: false,
      xAxis: {
        type: "datetime",
        labels: {
          formatter: function() {
            return Highcharts.dateFormat("%d %b %Y", this.value);
          }
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 1,
        visible: false,
        title: {
          text: null
        },
        min: 0
      },
      time: {
        dateformat: "%Y-%m-%d"
      },
      tooltip: {
        headerFormat: "<b>{series.name}</b><br>",
        pointFormat: "{point.x:%Y-%m-%d}"
      },

      plotOptions: {
        spline: {
          marker: {
            enabled: true
          }
        },
        series: {
          lineWidth: 5
        }
      },
      exporting: { enabled: false },
      colors: ["#ef5661", "#6CF"],
      credits: {
        enabled: false
      },

      series: [
        {
          name: "Lead Time",
          data: [
            [new Date(diagramData.createdOn).getTime(), 0.2],
            [new Date(diagramData.closedOn).getTime(), 0.2]
          ]
        },
        {
          name: "Cycle Time",
          data: [
            [new Date(diagramData.startedOn).getTime(), 0.6],
            [new Date(diagramData.closedOn).getTime(), 0.6]
          ]
        }
      ]
    });
  }
};
