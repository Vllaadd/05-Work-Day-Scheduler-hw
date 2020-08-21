//data and time in the header
var todayIs = document.querySelector('#currentDay');
var todaysDate = moment().format('MMM DD YYYY');
var currentHour = moment().format('hh:mm');
todayIs.innerHTML = todaysDate + ' , ' + currentHour; 


//textarea colored according to the hour 
var task9 = document.querySelector('#task9');
var task10 = document.querySelector('#task10');
var task11 = document.querySelector('#task11');
var task12 = document.querySelector('#task12');
var task13 = document.querySelector('#task13');
var task14 = document.querySelector('#task14');
var task15 = document.querySelector('#task15');
var task16 = document.querySelector('#task16');
var task17 = document.querySelector('#task17');
var task18 = document.querySelector('#task18');
var task19 = document.querySelector('#task19');
var task20 = document.querySelector('#task20');
var task21 = document.querySelector('#task21');

var userInputs = [task9, task10, task11, task12, task13, task14, task15, task16, task17, task18, task19, task20, task21];

var checkTime = function(){
    
    var currentHour = moment().format('H');

    for(var i = 0; i < userInputs.length; i++){
        if(userInputs[i] < currentHour){
            $(userInputs[i]).addClass('past');
        }
        if(userInputs[i] === currentHour){
            $(userInputs[i]).addClass('present');
        }
        if(userInputs[i] < currentHour){
            $(userInputs[i]).addClass('future');

        }
    }
}
setInterval(checkTime(), (1000 * 60) * 5);


    
        function saveTask(){
        localStorage.setItem(task20.value);
    }
    



// //save button
// var save9 = document.querySelector('#save9');
// var save10 = document.querySelector('#save10');
// var save11 = document.querySelector('#save11');
// var save12 = document.querySelector('#save12');
// var save13 = document.querySelector('#save13');
// var save14 = document.querySelector('#save14');
// var save15 = document.querySelector('#save15');
// var save16 = document.querySelector('#save16');
// var save17 = document.querySelector('#save17');
// var save18 = document.querySelector('#save18');
// var save19 = document.querySelector('#save19');
// var save20 = document.querySelector('#save20');
// var save21 = document.querySelector('#save21');

// //mark completed button
// var completed9 = document.querySelector('#completed9');
// var completed10 = document.querySelector('#completed10');
// var completed11 = document.querySelector('#completed11');
// var completed12 = document.querySelector('#completed12');
// var completed13 = document.querySelector('#completed13');
// var completed14 = document.querySelector('#completed13');
// var completed15 = document.querySelector('#completed15');
// var completed16 = document.querySelector('#completed16');
// var completed17 = document.querySelector('#completed17');
// var completed18 = document.querySelector('#completed18');
// var completed19 = document.querySelector('#completed19');
// var completed20 = document.querySelector('#completed20');
// var completed21 = document.querySelector('#completed21');


// var div9 = document.querySelector('#div9');
// var div10 = document.querySelector('#div10');
// var div11 = document.querySelector('#div11');
// var div12 = document.querySelector('#div12');
// var div13 = document.querySelector('#div13');
// var div14 = document.querySelector('#div14');
// var div15 = document.querySelector('#div15');
// var div16 = document.querySelector('#div16');
// var div17 = document.querySelector('#div17');
// var div18 = document.querySelector('#div18');
// var div19 = document.querySelector('#div19');
// var div20 = document.querySelector('#div20');
// var div21 = document.querySelector('#div21');


//save entries to the local storage (TRY THROUGH LOOP)
          //do all three local storage set, get and remove items



