function prepareChartData() {
// Retrieve data from localStorage
const storedData = JSON.parse(localStorage.getItem("selfCareSurveyData")) || [];

// Variables for chart data
const stressLabels = [];
const stressValues = [];
const activityLabels = [];
const activityValues = [];
const frequencyLabels = ["Daily", "Weekly", "Biweekly", "Monthly", "Rarely", "Annually"];
const frequencyValues = [0, 0, 0, 0, 0, 0]; // Initialize counts for frequency categories

storedData.forEach((entry) => {
    // Stressors data
    if (entry.mostStress) {
      const stressIndex = stressLabels.indexOf(entry.mostStress);
      if (stressIndex === -1) {
          stressLabels.push(entry.mostStress);
          stressValues.push(1);
      } else {stressValues[stressIndex]++;}
  }

  // Activity data
  if (entry.activities) {
    entry.activities.forEach((activity) => {
        const activityIndex = activityLabels.indexOf(activity);
        if (activityIndex === -1) {
            activityLabels.push(activity);
            activityValues.push(1);
        } else {activityValues[activityIndex]++;}
    });
}

  // Frequency data
  if (entry.careFrequency) {
      const frequencyIndex = frequencyLabels.indexOf(entry.careFrequency);
      if (frequencyIndex !== -1) {
          frequencyValues[frequencyIndex]++;}
  }
});

// Return the prepared data
return {
  stress: { labels: stressLabels, values: stressValues },
  activity: { labels: activityLabels, values: activityValues },
  frequency: { labels: frequencyLabels, values: frequencyValues },
};
}

document.addEventListener("DOMContentLoaded", function () {
  // Prepare chart data from localStorage
  const { stress, activity, frequency } = prepareChartData();

  // Stressors Doughnut Chart
  const stressCtx = document.getElementById("stressChart").getContext("2d");
  new Chart(stressCtx, {
      type: "doughnut",
      data: {
          labels: stress.labels,
          datasets: [
              {
                  data: stress.values,
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF7F50", "#FF22AB", "#DFFF00",],
              },
          ],
      },
      options: {
        responsive: true,
        plugins: {
            legend: {position: "top",},
        },
    },
});

  // Activities Pie Chart
  const activityCtx = document.getElementById("activityChart").getContext("2d");
  new Chart(activityCtx, {
      type: "pie",
      data: {
          labels: activity.labels,
          datasets: [
              {
                  data: activity.values,
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", 
                    "#9966FF", "#FF7F50", "#FF22AB", "#DFFF00", 
                    "#00FF00", "#00FFFF", "#FFF8DC", "#FF0000", "#0000CD"],
              },
          ],
      },
      options: {
        responsive: true,
        plugins: {
            legend: {
                position: "right",
            },
        },
    },
});

  // Frequency Bar Chart
  const frequencyCtx = document.getElementById("frequencyChart").getContext("2d");
new Chart(frequencyCtx, {
    type: "bar",
    data: {
        labels: frequency.labels, // The categories of frequency (Daily, Weekly, etc.)
        datasets: [
            {
                label: "Frequency",
                data: frequency.values, // The count of occurrences for each frequency category
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF22AB"],
                borderColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF22AB"],
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true, 
                title: {
                    display: true,
                    text: "Frequency Categories",
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Count",
                },
            },
        },
        plugins: {
            legend: {display: true, position: "top",},
            tooltip: {enabled: true,},
            datalabels: {
                display: true, 
                color: "black", 
                align: "top", 
                font: {
                    weight: "bold",
                },
            },
        },
    },
});
});