function bagpic() {
    //document.getElementById("pcil").innerHTML = "red";
    var sweets, text, sLen, i;

    sweets = ["Pencil cases", "Lunch bags", "Book Bags", "Satchels",];
    sLen = sweets.length;
    text = "<ul4>";
    for (i = 0; i < sLen; i++) {
        text += "<li>" + sweets[i] + "</li>";
    }
    text += "</ul4>";
    document.getElementById("bge").innerHTML = text;
}
