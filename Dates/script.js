// Date objects = Objects that contain values that reperesent dates and times. These date objects can be changed and formatted
// Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2024,0,1,2,3,4,5) //Mon Jan 01 2024 02:03:04 GMT+0800 (Philippine Standard Time)


// const date = new Date("2024-01-02T12:00:00Z") //Tue Jan 02 2024 20:00:00 GMT+0800 (Philippine Standard Time)


// const date = new Date();

//access the dateMethod
// const year = date.getFullYear();
// const month = date.getMonth()
// const day = date.getDate()
// const hour = date.getHours()
// const minute =date.getMinutes()
// const seconds = date.getSeconds()
// const dayOfWeek = date.getDay()
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(seconds);
// console.log(dayOfWeek);


// Manipulate the date method
// date.setFullYear(2020)
// date.setMonth(1)
// date.setDate(20)
// date.setHours(14)
// date.setMinutes(30)
// date.setSeconds(0)

// console.log(date)


// Comparation
const date1 = new Date("2023-12-31")
const date2 = new Date("2024-01-01")

if(date2 > date1){
    console.log("Happy new year")
}