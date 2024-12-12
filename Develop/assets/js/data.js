document.addEventListener("DOMContentLoaded", function () {
    const surveyData = JSON.parse(localStorage.getItem("selfCareSurveyData")) || [];
    const back = document.getElementById("backButton");
    const dataContainer = document.getElementById("data-container");

    if (back) {
    back.addEventListener("click", () => {
        window.location.assign("index.html");
    });
    } else {
        console.error("Back button not found.");
    }
    //surveyData.forEach((entry, index) => {
      //  const formEntry = document.createElement("div");
        //formEntry.classList.add("box");
        //formEntry.innerHTML = `
          //  <h3>Entry ${index + 1}</h3>
            //<p><strong>Name:</strong> ${entry.name}</p>
            //<p><strong>Email:</strong> ${entry.email}</p>
            //<p><strong>Age:</strong> ${entry.age}</p>
            //<p><strong>Occupation:</strong> ${entry.occupation}</p>
            //<p><strong>Activities:</strong> ${entry.activities.join(", ")}</p>
            //<p><strong>Care Frequency:</strong> ${entry.careFrequency}</p>
            //<p><strong>Most Stressful Factor:</strong> ${entry.mostStress}</p>
            //<p><strong>Comment:</strong> ${entry.comment || "No comment"}</p>
        //`;
        //dataContainer.appendChild(formEntry);
    });
//});

back.addEventListener("click", () => {
    window.location.assign("index.html");
});
