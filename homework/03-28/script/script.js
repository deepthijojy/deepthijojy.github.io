var barChartData = {
  labels: [
    "Strongly disagree",
    "Somewhat disagree",
    "Neither agree nor disagree",
    "Somewhat agree",
    "Strongly agree"
  ],
  datasets: [
    {
      label: "Female",
      backgroundColor: "pink",
      borderColor: "red",
      borderWidth: 1,
      data: [60, 62, 130, 269, 264]
    },
    {
      label: "Male",
      backgroundColor: "lightblue",
      borderColor: "blue",
      borderWidth: 1,
      data: [27, 51, 146, 239, 260]
    }
  ]
};

var chartOptions = {
  responsive: true,
  legend: {
    position: "top"
  },
  title: {
    display: true,
    text: "Chart.js Bar Chart"
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData,
    options: chartOptions
  });
};