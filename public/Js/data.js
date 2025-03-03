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
        newElement.innerHTML = element.name;
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