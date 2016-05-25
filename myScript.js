// myScript.js 
function myTest() {
	// return a message
    var msg = "myScript.js";
    return msg;
}
// Get a formatted message
function getFormattedMessage(text1, text2) {
    // return date - function - message
    return new Date() + " - " + text1 + " - " + text2;
}
// Get Date
function getMyDate() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    document.write("Date : " + date);
    document.write("<br/>");
    document.write("Hour : " + h);
    document.write("<br/>");
    document.write("Min : " + m);
    document.write("<br/>");
    document.write("Sec : " + s);
}
// Not Implemented
function todo() {
    alert("Not yet implemented - Todo!");
}
// Get diff between 2 dates
function dateDiff(date1, date2){
    var diff = {}                           // Initialisation du retour
    var tmp = date2 - date1;
    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60;                    // Extraction du nombre de secondes
    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
    diff.min = tmp % 60;                    // Extraction du nombre de minutes
    tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
    diff.hour = tmp % 24;                   // Extraction du nombre d'heures
    tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
    diff.day = tmp;
    return diff;
}
// Get Hour/Min from Min
function getHM(min) {
    var diff = {}                           // Initialisation du retour
    var tmp = min;
    diff.min = tmp % 60;                    // Extraction du nombre de minutes
    tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
    diff.hour=tmp;
    return diff;
}
