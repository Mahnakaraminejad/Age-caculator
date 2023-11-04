
function AgeCalculator() {
    let year = document.getElementById("years").value;
    let month = document.getElementById("months").value;
    let day = document.getElementById("days").value;
    const error = document.getElementById("error");
    error.innerHTML = "";
    const error2 = document.getElementById("error2");
    error2.innerHTML = "";
    const error3 = document.getElementById("error3");
    error3.innerHTML = "";

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
    } 
    else {
        yearDiff = yearDiff - 1;
        if (monthDiff <= 0)
            if (dateDiff > 0) monthDiff = 12 + monthDiff;
            else monthDiff = 11 - monthDiff;
    }
    if (dateDiff < 0) {
        dateDiff = day - now.getDate();
        // dateDiff = 30 + dateDiff;
        // monthDiff -= 1;
    }

    // Error for Day
    try {
        if (day.trim() == "") throw "The field is required";
        day = Number(day);
        if (day > 30) throw "Must be a valid day";
    } catch (err) {
        error.innerHTML = err;
    }
    // Error for Month
    try {
        if (month.trim() == "") throw "The field is required";
        month = Number(month);
        if (month > 12) throw "Must be a valid month";
    } catch (err) {
        error2.innerHTML = err;
    }
    // Error for Year
    try {
        if (year.trim() == "") throw "The field is required";
        year = Number(year);
        let date = new Date();
        let now = date.getFullYear();
        if (year > now) throw "Must be in the past";
    } catch (err) {
        error3.innerHTML = err;
    }


    //Replacing 


    let showYear = document.getElementById("dashY").innerHTML;
    let repY = showYear.replace(/- - /g, yearDiff);
    document.getElementById("dashY").innerHTML = repY;

    let showMonth = document.getElementById("dashM").innerHTML;
    let repM = showMonth.replace(/- - /g, monthDiff);
    document.getElementById("dashM").innerHTML = repM;

    let showDay = document.getElementById("dashD").innerHTML;
    let repD = showDay.replace(/- - /g, dateDiff);
    document.getElementById("dashD").innerHTML = repD;
}

