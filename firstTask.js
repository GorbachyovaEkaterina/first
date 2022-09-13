function getDaysToNewYear () {
    const date1 = new Date();
    var newYear = date1.getFullYear() + 1;
    const date2 = new Date(newYear, 0, 1);

    var diffInTime = date2.getTime() - date1.getTime(); 
    
    var remainSec = diffInTime/1000;

    var remainFullDays = Math.round(remainSec/(24*60*60));
    var sec = Math.floor(remainSec % 60);
    var min = Math.floor(remainSec / 60) % 60;
    var hour = Math.floor(remainSec / 60 / 60) % 24;

    var diff = remainFullDays + " дн. " + hour + " ч. " + min + " мин. " + sec + " сек.";

    return diff;
}



console.log("Осталось до Нового Года: ", getDaysToNewYear());