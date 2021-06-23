
function TimeConvert(TimeStamp) {
    var TimeObject = {}

    // Months array
    const months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Convert timestamp to milliseconds
    TimeObject.date = new Date(TimeStamp * 1000);

    // Year
    TimeObject.year = TimeObject.date.getFullYear();

    // Month
    TimeObject.month = months_arr[TimeObject.date.getMonth()];

    // Day
    TimeObject.day = TimeObject.date.getDate();

    // Hours
    TimeObject.hours = TimeObject.date.getHours();

    // Minutes
    TimeObject.minutes = "0" + TimeObject.date.getMinutes();

    // Seconds
    TimeObject.seconds = "0" + TimeObject.date.getSeconds();

    // Display date time in MM-dd-yyyy h:m:s format
    TimeObject.convdataTime = TimeObject.month + '-' + TimeObject.day + '-' + TimeObject.year + ' ' + TimeObject.hours + ':' + TimeObject.minutes.substr(-2) + ':' + TimeObject.seconds.substr(-2);


    return TimeObject;
}

export default TimeConvert;