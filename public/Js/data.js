var date = [
    {
        "name": "test",
        "date": "2021-01-01 00:00:00",
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

        newElement.appendChild(date);

        var text = document.querySelector("#nekshor_style .text");
        text.appendChild(newElement);

    });
}

document.addEventListener("DOMContentLoaded", function () {
    nekshor_style();
});

setTimeout(() => {
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
}, 1000);