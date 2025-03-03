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

        var jours_value = document.createElement("div");
        jours_value.classList.add("jours_value");
        jours_value.classList.add("dateTileValue");
        jours.appendChild(jours_value);

        var jours_text = document.createElement("div");
        jours_text.classList.add("jours_text");
        jours_text.classList.add("dateTileText");
        jours_text.innerHTML = "Jours";

        var heures = document.createElement("div");
        heures.classList.add("heures");
        heures.classList.add("dateTile");
        date.appendChild(heures);

        var heures_value = document.createElement("div");
        heures_value.classList.add("heures_value");
        heures_value.classList.add("dateTileValue");
        heures.appendChild(heures_value);

        var heures_text = document.createElement("div");
        heures_text.classList.add("heures_text");
        heures_text.classList.add("dateTileText");
        heures_text.innerHTML = "Heures";
        heures.appendChild(heures_text);

        var minutes = document.createElement("div");
        minutes.classList.add("minutes");
        minutes.classList.add("dateTile");
        date.appendChild(minutes);

        var minutes_value = document.createElement("div");
        minutes_value.classList.add("minutes_value");
        minutes_value.classList.add("dateTileValue");
        minutes.appendChild(minutes_value);

        var minutes_text = document.createElement("div");
        minutes_text.classList.add("minutes_text");
        minutes_text.classList.add("dateTileText");
        minutes_text.innerHTML = "Minutes";
        minutes.appendChild(minutes_text);

        var secondes = document.createElement("div");
        secondes.classList.add("secondes");
        secondes.classList.add("dateTile");
        date.appendChild(secondes);

        var secondes_value = document.createElement("div");
        secondes_value.classList.add("secondes_value");
        secondes_value.classList.add("dateTileValue");
        secondes.appendChild(secondes_value);

        var secondes_text = document.createElement("div");
        secondes_text.classList.add("secondes_text");
        secondes_text.classList.add("dateTileText");
        secondes_text.innerHTML = "Secondes";
        secondes.appendChild(secondes_text);

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

        element.querySelector(".jours_value").innerHTML = days;
        element.querySelector(".heures_value").innerHTML = hours;
        element.querySelector(".minutes_value").innerHTML = minutes;
        element.querySelector(".secondes_value").innerHTML = seconds;
    });
}

updateDate();

setInterval(() => {
    updateDate();
}, 500);