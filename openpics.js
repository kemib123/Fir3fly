function pencilpic() {
    //document.getElementById("pcil").innerHTML = "red";
    var fruits, text, fLen, i;

    fruits = ["Pencil", "Crayons", "Markers", "Blue/Black pens",];
    fLen = fruits.length;
    text = "<ul>";
    for (i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("pcil").innerHTML = text;
}
