let events = JSON.parse(localStorage.getItem("events")) || [];

function addEvent() {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (!title || !date || !time) {
        alert("Please fill all fields!");
        return;
    }

    events.push({ title, date, time });
    localStorage.setItem("events", JSON.stringify(events));

    displayEvents();
}

function displayEvents() {
    let list = document.getElementById("eventList");
    list.innerHTML = "";

    let today = new Date().toISOString().split("T")[0];

    events.forEach((event) => {
        let li = document.createElement("li");

        if (event.date === today) {
            li.style.background = "#ffeeba";
        }

        li.innerHTML = `
            <strong>${event.title}</strong><br>
            ${event.date} at ${event.time}
        `;

        list.appendChild(li);
    });
}

displayEvents();