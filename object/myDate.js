let myDate = function (day, month,year){
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function(){
        return this.day;
    }
    this.getMonth = function(){
        return this.month;
    }
    this.getYear = function(){
        return this.year;
    }
    this.toString = function(){
        return `${this.day} / ${this.month} / ${this.year}`
    }
    
    this.setDay = function(day) {
        this.day  = day;
    }
    this.setMonth = function(month) {
        this.month  = month;
    }
    this.setYear = function(year) {
        this.year  = year;
    }
    this.setDate = function(day,month,year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
};


let date = new myDate(2,2,2017);
// console.log(date);

let day = date.getDay(); // 2

let month = date.getMonth(); // 2

let year = date.getYear(); // 2007
alert(`${day}/${month}/${year}`);
alert(date.toString());
