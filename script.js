// Emergency SOS
function emergencySOS() {
    alert(
        "EMERGENCY ALERT!\n\n" +
        "Please contact emergency services at 112 " +
        "if you need immediate assistance."
    );
}

// Vehicle Tracking Demo
function updateTracking() {
    const message = document.getElementById("tracking-message");

    message.innerText =
        "Vehicle information refreshed successfully!";

    message.style.color = "green";
}

// Incident Report
document.getElementById("reportForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const vehicle = document.getElementById("vehicle").value;
        const incident = document.getElementById("incident").value;
        const description =
            document.getElementById("description").value;

        const report = {
            passengerName: name,
            vehicleNumber: vehicle,
            incidentType: incident,
            details: description
        };

        console.log("Incident Report:", report);

        document.getElementById("report-message").innerText =
            "Your report has been received in this demo!";

        document.getElementById("report-message").style.color =
            "green";

        document.getElementById("reportForm").reset();
    }
);