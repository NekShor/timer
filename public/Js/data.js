var date = [
    {
        "name": "Carnaval",
        "date": "2025-04-03 14:00:00",
        "importance": 1
    },
    {
        "name": "Espagna Gang",
        "date": "2025-05-06 09:55:00",
        "importance": 1
    }
]

function nekshor_style() {
    date.forEach(element => {
        var date = new Date(element.date);
        var newElement = document.createElement("div");
        newElement.classList.add("nekshor");
        newElement.setAttribute("data-importance", element.importance);

        var title = document.createElement("h1");
        title.innerHTML = element.name;
        newElement.appendChild(title);

        var date = document.createElement("p");
        date.setAttribute("data-date", element.date);
        date.classList.add("date");

        var jours = document.createElement("div");
        jours.classList.add("jours");
        jours.classList.add("dateTile");
        date.appendChild(jours);

        var heures = document.createElement("div");
        heures.classList.add("heures");
        heures.classList.add("dateTile");
        date.appendChild(heures);

        var minutes = document.createElement("div");
        minutes.classList.add("minutes");
        minutes.classList.add("dateTile");
        date.appendChild(minutes);

        var secondes = document.createElement("div");
        secondes.classList.add("secondes");
        secondes.classList.add("dateTile");
        date.appendChild(secondes);

        newElement.appendChild(date);

        var text = document.querySelector("#nekshor_style .text");
        text.appendChild(newElement);

    });
}

document.addEventListener("DOMContentLoaded", function () {
    nekshor_style();
});

function updateDate() {
    document.querySelectorAll(".date").forEach(element => {
        var date = new Date(element.getAttribute("data-date"));
        var now = new Date();
        var diff = date - now;
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor(diff / (1000 * 60 * 60) % 24);
        var minutes = Math.floor(diff / (1000 * 60) % 60);
        var seconds = Math.floor(diff / 1000 % 60);
        element.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
    });
}

updateDate();

setInterval(() => {
    updateDate();
}, 500);