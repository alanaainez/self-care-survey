document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page
        //console.log("Form submission started");

        // Retrieve data from the form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("number").value;
        const answer = document.getElementById("answer").value;
        const occupation = document.getElementById("occupation").value;
        const activities = Array.from(
            document.querySelectorAll('input[name="activity"]:checked')
        ).map((input) => input.value);

        //console.log("Name:", name, "Email:", email, "Age:", age);

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
        let surveyDataArray = JSON.parse(localStorage.getItem("selfCareSurveyData")) || [];
        surveyDataArray.push(newSurveyData);
        localStorage.setItem("selfCareSurveyData", JSON.stringify(surveyDataArray));

        //console.log("Data saved to local storage");

        // Redirect the user after submitting the survey
        redirectPage("./data.html"); // Replace with your actual data page URL

        //console.log("Redirection initiated");
    });
});
// Function to handle redirection
function redirectPage(url) {
    location.assign(url);
}