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
});

back.addEventListener("click", () => {
    window.location.assign("index.html");
});
