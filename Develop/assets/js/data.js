document.addEventListener("DOMContentLoaded", function () {
    const surveyData = JSON.parse(localStorage.getItem("selfCareSurveyData")) || [];
    const back = document.getElementById("back");
    const dataContainer = document.getElementById("data-container");
if (back) {
    back.addEventListener("click", () => {
        window.location.assign("index.html");
    });
    } else {
        console.error("Back button not found.");
    }
    surveyData.forEach((entry, index) => {
        const formEntry = document.createElement("div");
        formEntry.innerHTML = `
            <h3>Entry ${index + 1}</h3>
            <p>Name: ${entry.name}</p>
            <p>Email: ${entry.email}</p>
            <p>Age: ${entry.age}</p>
            <p>Occupation: ${entry.occupation}</p>
            <p>Activities: ${entry.activities.join(", ")}</p>
            <p>Care Frequency: ${entry.careFrequency}</p>
            <p>Most Stressful Factor: ${entry.mostStress}</p>
            <p>Comment: ${entry.comment}</p>
        `;
        dataContainer.appendChild(formEntry);
    });
});

function prepareChartData() {
    // Retrieve data from localStorage
    let surveyData = JSON.parse(localStorage.getItem("selfCareSurveyData")) || [];

    // Compile chart for "mostStress" data
    const stressCounts = {};
    storedData.forEach((survey) => {
    
    const stressValue = survey.mostStress;
    stressCounts[stressValue] = (stressCounts[stressValue] || 0) + 1;
});
    const labels = Object.keys(stressCounts); // e.g., ["Work", "Family", "Health"]
    const data = Object.values(stressCounts); // e.g., [1, 2, 3]

    return { labels, data };
}

back.addEventListener("click", () => {
    window.location.assign("index.html");
});
