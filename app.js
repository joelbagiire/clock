var day = document.querySelector('.date')
var month = document.querySelector('.mon')
var year = document.querySelector('.yr')
var hours = document.querySelector('.hrs')
var minutes = document.querySelector('.mins')
var seconds = document.querySelector('.sec')
var pmAm = document.querySelector('.shrt')
var weekDay = document.querySelector('.date_day')
var  short = document.querySelector('#ds')

const date = new Date()
const dateDay = date.getDate()
const dateMonth = date.getMonth()
const dateYear = date.getFullYear()
const dateWeek = date.getDay()
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const dayName = ["SUNDAY","MONDAY","TUESDAY","WENSEDAY","THURSDAY","FRIDAY","SATURDAY"]
function shortName(){
    if(dateDay === 1){
      short.innerHTML = 'st'
    }else if(dateDay === 2){
        short.innerHTML = 'nd'
    }else if(dateDay === 3){
        short.innerHTML = 'rd'
    }else{
        short.innerHTML = 'th'
    }
}
function amPm(){
    if(timeHours > 12){
        pmAm.innerHTML = 'PM'
    }else{
        pmAm.innerHTML = 'AM'
    }
}
weekDay.innerHTML = dayName[dateWeek]
month.innerHTML = monthName[dateMonth]
day.innerHTML = dateDay
year.innerHTML = dateYear



const time = new Date()
const timeHours = time.getHours()
const timeMinutes = time.getMinutes()
const timeSeconds = time.getSeconds()


hours.innerHTML = timeHours
minutes.innerHTML = timeMinutes
seconds.innerHTML = timeSeconds


amPm()
shortName()
setInterval(() => {
  window.location.reload()
},1000)