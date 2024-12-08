document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page

        // Retrieve data from the form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("number").value;
        const answer = document.getElementById("answer").value;
        const occupation = document.getElementById("occupation").value;
        const activities = Array.from(
            document.querySelectorAll('input[name="relax-activity"]:checked')
        ).map((input) => input.value);

        // Include "Other" activity if provided
        const otherActivity = document.getElementById("activity").value;
        if (otherActivity) {
            activities.push(otherActivity);
        }

        const careFrequency = document.querySelector(
            'input[name="care-frequency"]:checked'
        )?.value || "Not specified";
        const mostStress = document.getElementById("dropdown").value;
        const comment = document.getElementById("comment").value;

        // Create an object to store the new survey data
        const newSurveyData = {
            name,
            email,
            age,
            answer,
            occupation,
            activities,
            careFrequency,
            mostStress,
            comment,
        };

        // Initialize surveyDataArray from localStorage or as an empty array
        let surveyDataArray;
        try {
            const storedData = localStorage.getItem("selfCareSurveyData");
            surveyDataArray = storedData ? JSON.parse(storedData) : [];
            if (!Array.isArray(surveyDataArray)) {
                throw new Error("Data in localStorage is not an array.");
            }
        } catch (error) {
            console.error("Error parsing local storage data or invalid format:", error);
            surveyDataArray = []; // Reset to an empty array
        }

        // Add the new survey data to the array
        surveyDataArray.push(newSurveyData);

        // Save the updated array back to local storage
        try {
            localStorage.setItem("selfCareSurveyData", JSON.stringify(surveyDataArray));
            console.log("Updated survey data saved:", surveyDataArray);
        } catch (error) {
            console.error("Error saving data to local storage:", error);
        }

        // Provide feedback to the user
        alert("Survey data has been saved!");
        form.reset();
    });
});
