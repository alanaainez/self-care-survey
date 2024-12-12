const back = document.getElementById("backButton");

function prepareChartData() {
// Retrieve data from localStorage
const storedData = JSON.parse(localStorage.getItem("selfCareSurveyData")) || [];

// Variables for chart data
const stressLabels = [];
const stressValues = [];
const activityLabels = [];
const activityValues = [];
const frequencyLabels = ["Daily", "Weekly", "Monthly", "Rarely", "Annually"];
const frequencyValues = [0, 0, 0, 0, 0]; // Initialize counts for frequency categories

storedData.forEach((entry) => {
    // Process Stressors data
    if (!stressLabels.includes(entry["Most Stressful Factor"])) {
        stressLabels.push(entry["Most Stressful Factor"]);
        stressValues.push(1);
    } else {
        const index = stressLabels.indexOf(entry["Most Stressful Factor"]);
        stressValues[index]++;
    }

    // Process Activities data
    entry["Activities"].split(", ").forEach((activity) => {
        if (!activityLabels.includes(activity)) {
            activityLabels.push(activity);
            activityValues.push(1);
        } else {
            const index = activityLabels.indexOf(activity);
            activityValues[index]++;
        }
    });

    // Process Care Frequency data
    const frequencyIndex = frequencyLabels.indexOf(entry["Care Frequency"]);
    if (frequencyIndex !== -1) {
        frequencyValues[frequencyIndex]++;
    }
});

return {
    stressData: { labels: stressLabels, data: stressValues },
    activityData: { labels: activityLabels, data: activityValues },
    frequencyData: { labels: frequencyLabels, data: frequencyValues },
};
}

document.addEventListener("DOMContentLoaded", function () {
  // Prepare chart data from localStorage
  const { stressData, activityData, frequencyData } = prepareChartData();

  // Stressors Doughnut Chart
  const stressCtx = document.getElementById("stressChart").getContext("2d");
  new Chart(stressCtx, {
      type: "doughnut",
      data: {
          labels: stressData.labels,
          datasets: [
              {
                  data: stressData.data,
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
              },
          ],
      },
  });

  // Activities Pie Chart
  const activityCtx = document.getElementById("activityChart").getContext("2d");
  new Chart(activityCtx, {
      type: "pie",
      data: {
          labels: activityData.labels,
          datasets: [
              {
                  data: activityData.data,
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
              },
          ],
      },
  });

  // Frequency Bar Chart
  const frequencyCtx = document.getElementById("frequencyChart").getContext("2d");
  new Chart(frequencyCtx, {
      type: "bar",
      data: {
          labels: frequencyData.labels,
          datasets: [
              {
                  label: "Frequency",
                  data: frequencyData.data,
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
              },
          ],
      },
  });
});
