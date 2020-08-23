//data and time in the header
    var todayIs = document.querySelector('#currentDay');
    var todaysDate = moment().format('MMM DD YYYY');
    var currentHour = moment().format('hh:mm');
    todayIs.innerHTML = todaysDate + ' , ' + currentHour; 


//textarea colored according to the hour 
    var task09 = document.querySelector('#task09');
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

    var userInputs = [task09, task10, task11, task12, task13, task14, task15, task16, task17, task18, task19, task20, task21];

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
    setInterval(checkTime(), (1000 * 60) * 5)


//targeting save buttons
        var save09 = document.querySelector('#save09');
        var save10 = document.querySelector('#save10');
        var save11 = document.querySelector('#save11');
        var save12 = document.querySelector('#save12');
        var save13 = document.querySelector('#save13');
        var save14 = document.querySelector('#save14');
        var save15 = document.querySelector('#save15');
        var save16 = document.querySelector('#save16');
        var save17 = document.querySelector('#save17');
        var save18 = document.querySelector('#save18');
        var save19 = document.querySelector('#save19');
        var save20 = document.querySelector('#save20');
        var save21 = document.querySelector('#save21');


 
//save the task button
            function saveTask09(){
                localStorage.setItem( 'task09' , task09.value);  
            }
            function saveTask10(){
                localStorage.setItem( 'task10' , task10.value);
            }
            function saveTask11(){
                localStorage.setItem( 'task11' , task11.value);
            }
            function saveTask12(){
                localStorage.setItem( 'task12' , task12.value);
            }
            function saveTask13(){
                localStorage.setItem( 'task13' , task13.value);
            }
            function saveTask14(){
                localStorage.setItem( 'task14' , task14.value);
            }
            function saveTask15(){
                localStorage.setItem( 'task15' , task15.value);
            }
            function saveTask16(){
                localStorage.setItem( 'task16' , task16.value);
            }
            function saveTask17(){
                localStorage.setItem( 'task17' , task17.value);
            }
            function saveTask18(){
                localStorage.setItem( 'task18' , task18.value);
            }
            function saveTask19(){
                localStorage.setItem( 'task19' , task19.value);
            }
            function saveTask20(){
                localStorage.setItem( 'task20' , task20.value);
            }
            function saveTask21(){
                localStorage.setItem( 'task21' , task21.value);
            }
            


//task completed button
            function markCompleted09(){
                localStorage.removeItem('task09');
                task09.style.backgroundColor = 'gray';
                task09 = "";

            }
            function markCompleted10(){
                localStorage.removeItem('task10');
                task10.style.backgroundColor = 'gray';
                task10 = "";
            }
            function markCompleted11(){
                localStorage.removeItem('task11');
                task11.style.backgroundColor = 'gray';
                task11 = "";
            }
            function markCompleted12(){
                localStorage.removeItem('task12');
                task12.style.backgroundColor = 'gray';
                task12.value = "";
            }
            function markCompleted13(){
                localStorage.removeItem('task13');
                task13.style.backgroundColor = 'gray';
                task13.value = "";
            }
            function markCompleted14(){
                localStorage.removeItem('task14');
                task14.style.backgroundColor = 'gray';
                task14.value = "";
            }
            function markCompleted15(){
                localStorage.removeItem('task15');
                task15.style.backgroundColor = 'gray';
                task15.value = "";
            }
            function markCompleted16(){
                localStorage.removeItem('task16');
                task16.style.backgroundColor = 'gray';
                task16.value = "";
            }
            function markCompleted17(){
                localStorage.removeItem('task17');
                task17.style.backgroundColor = 'gray';
                task17.value = "";
            }
            function markCompleted18(){
                localStorage.removeItem('task18');
                task18.style.backgroundColor = 'gray';
                task18.value = "";
            }
            function markCompleted19(){
                localStorage.removeItem('task19');
                task19.style.backgroundColor = 'gray';
                task19.value = "";
            }
            function markCompleted20(){
                localStorage.removeItem('task20');
                task20.style.backgroundColor = 'gray';
                task20.value = "";
            }
            function markCompleted21(){
                localStorage.removeItem('task21');
                task21.style.backgroundColor = 'gray';
                task21.value = "";
            }

   

//save entries to the local storage (TRY THROUGH LOOP)
          //do all three local storage set, get and remove items



