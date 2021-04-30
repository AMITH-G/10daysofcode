//Simple age calculator for valid inputs
function agecalc(yr, mon, day) {
    var current = new Date();
    var age = current.getFullYear() - yr;
    if(age>0)
    {
        var now = current.getMonth() - mon + 1; 
        if (now < 0) 
        {
            --age;
        }
    else if (now === 0) 
        {
            var currday = now.getDate() - day;
            if (currday < 0) --age; 
        }
    console.log(age);
    }
    else
    console.log("Birth year exceeds the current year");
}
agecalc(2024,10,12);
agecalc(1999,08,25);