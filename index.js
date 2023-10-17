
function AgeCalculator() {
    let year = document.getElementById("years").value;
    let month = document.getElementById("months").value;
    let day = document.getElementById("days").value;

    let now = new Date();
    console.log(now)

    // difference

    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;

    //calculating the age

    if (yearDiff < 0) console.log("invalid date");
    else if (monthDiff > 0) {
        console.log(yearDiff);
    } else if (monthDiff === 0 && dateDiff >= 0) {
        console.log(yearDiff);
    } else {
        yearDiff = yearDiff - 1;
        if (monthDiff <= 0)
            if (dateDiff > 0) monthDiff = 12 + monthDiff;
            else monthDiff = 11 - monthDiff;
    }
    if (dateDiff < 0) {
        dateDiff = 30 + dateDiff;
        monthDiff -= 1;
    }

    //Replacing 

    let showYear = document.getElementById("dashY").innerHTML;
    let repY = showYear.replace(/- - /g,yearDiff);
    document.getElementById("dashY").innerHTML = repY;

    let showMonth = document.getElementById("dashM").innerHTML;
    let repM = showMonth.replace(/- - /g,monthDiff);
    document.getElementById("dashM").innerHTML = repM;

    let showDay = document.getElementById("dashD").innerHTML;
    let repD = showDay.replace(/- - /g,dateDiff);
    document.getElementById("dashD").innerHTML = repD;




}

