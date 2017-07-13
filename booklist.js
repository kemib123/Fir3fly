function bookpic() {
    //document.getElementById("pcil").innerHTML = "red";
    var vegetables, text, vLen, i;

    vegetables = ["Binders", "Papers", "Textbooks", "Folders",];
    vLen = vegetables.length;
    text = "<ul>";
    for (i = 0; i < vLen; i++) {
        text += "<li>" + vegetables[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("bk").innerHTML = text;
}
