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
        var now = new Date();
        var diff = date - now;
        if (diff < 0) {
            return;
        }
        if (diff < 86400000) {
            var color = "red";
        } else if (diff < 172800000) {
            var color = "orange";
        } else if (diff < 259200000) {
            var color = "yellow";
        } else {
            var color = "green";
        }
        var text = element.name + " " + element.date;
        var importance = element.importance;
        var style = "color: " + color + "; font-size: " + (importance * 10) + "px";
        console.log("%c" + text, style);
    });
}