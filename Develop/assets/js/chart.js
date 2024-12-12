document.addEventListener("DOMContentLoaded", function () {
    // Prepare the data
const { labels, data } = prepareChartData();
  
    // Get the canvas element
const ctx = document.getElementById("surveyChart").getContext("2d");
  
// Create the chart for Stressors
new Chart(ctx, {
    type: "doughnut",
    data: {
    labels: labels, // X-axis labels
    datasets: [
        {label: "Most Stressful Factors",
         data: data, // Y-axis values
         backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
         borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 205, 86, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(153, 102, 255, 1)",
            ],
         borderWidth: 1,},],
    },
    options: {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "top",
        },
    },
    scales: {
        y: {
            beginAtZero: true,
          },},},
        });
    // Create the chart for Activities
    new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels, // X-axis labels
      datasets: [
        {
          label: "Popular Activities",
          data: data, // Y-axis values
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 205, 86, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },},},
  });
  // Create the chart for Frequency
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels, // X-axis labels
      datasets: [
        {
          label: "Self-Care Frequency",
          data: data, // Y-axis values
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 205, 86, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },},},
  });
});  