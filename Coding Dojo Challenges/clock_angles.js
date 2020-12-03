//Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, returns angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. Have the degree round up as a whole number (e.g. 38 instead of 37.632...)

//For input of 3600 secs (equivalent to 1:00:00), have it return "[30, 0, 0]" meaning the hour is 30 degrees, the minute and the second is 0 degree from noon.

//Similarly, clockHandAngles(10800) should return [90, 0, 0] as 10,800 seconds is equivalent to 3:00:00.

function clockHandAngles(seconds){
    var hour_hand = seconds/3600 % 12;
    console.log('hour hand is ', hour_hand);

    var minute_hand = seconds/60 % 60;
    console.log('minute hand is ', minute_hand);

    var second_hand = seconds % 60;
    console.log('second hand is ', second_hand);
    
    return Math.round[hour_hand*30, minute_hand*60, second_hand*60]
}