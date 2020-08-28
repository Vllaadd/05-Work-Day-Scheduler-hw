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

    


    var input09 = task09.id.split('task09')[1];
    var input10 = task10.id.split('task10')[1];
    var input11 = task11.id.split('task11')[1];
    var input12 = task12.id.split('task12')[1];
    var input13 = task13.id.split('task13')[1];
    var input14 = task14.id.split('task14')[1];
    var input15 = task15.id.split('task15')[1];
    var input16 = task16.id.split('task16')[1];
    var input17 = task17.id.split('task17')[1];
    var input18 = task18.id.split('task18')[1];
    var input19 = task19.id.split('task19')[1];
    var input20 = task20.id.split('task20')[1];
    var input21 = task21.id.split('task21')[1];

    

    var hourBlocks = [input09, input10, input11, input12, input13, input14, input15, input16, input17, input18, input19, input20, input21];

    for(var hours of hourBlocks){
        if(hours < moment().hour()){
            task09.style.backgroundColor = 'gray'
            task10.style.backgroundColor = 'gray'
            task11.style.backgroundColor = 'gray'
            task12.style.backgroundColor = 'gray'
            task13.style.backgroundColor = 'gray'
            task14.style.backgroundColor = 'gray'
            task15.style.backgroundColor = 'gray'
            task16.style.backgroundColor = 'gray'
            task17.style.backgroundColor = 'gray'
            task18.style.backgroundColor = 'gray'
            task19.style.backgroundColor = 'gray'
            task20.style.backgroundColor = 'gray'
            task21.style.backgroundColor = 'gray'
        }
        if(hours === moment().hour()){
            task09.style.backgroundColor = 'green'
            task10.style.backgroundColor = 'green'
            task11.style.backgroundColor = 'green'
            task12.style.backgroundColor = 'green'
            task13.style.backgroundColor = 'green'
            task14.style.backgroundColor = 'green'
            task15.style.backgroundColor = 'green'
            task16.style.backgroundColor = 'green'
            task17.style.backgroundColor = 'green'
            task18.style.backgroundColor = 'green'
            task19.style.backgroundColor = 'green'
            task20.style.backgroundColor = 'green'
            task21.style.backgroundColor = 'green'
        }
        if(hours > moment().hour()){
            task09.style.backgroundColor = 'blue'
            task10.style.backgroundColor = 'blue'
            task11.style.backgroundColor = 'blue'
            task12.style.backgroundColor = 'blue'
            task13.style.backgroundColor = 'blue'
            task14.style.backgroundColor = 'blue'
            task15.style.backgroundColor = 'blue'
            task16.style.backgroundColor = 'blue'
            task17.style.backgroundColor = 'blue'
            task18.style.backgroundColor = 'blue'
            task19.style.backgroundColor = 'blue'
            task20.style.backgroundColor = 'blue'
            task21.style.backgroundColor = 'blue'
        }
    }
      
        // if(input09 < moment().hour()){
        //     task09.style.backgroundColor = 'gray'
        // }
        // if(input10 < moment().hour()){
        //     task10.style.backgroundColor = 'gray'
        // }
        // if(input11 < moment().hour()){
        //     task11.style.backgroundColor = 'gray'
        // }
        // if(input12 < moment().hour()){
        //     task12.style.backgroundColor = 'gray'
        // }
        // if(input13 < moment().hour()){
        //     task13.style.backgroundColor = 'gray'
        // }
        // if(input14 < moment().hour()){
        //     task14.style.backgroundColor = 'gray'
        // }
        // if(input15 < moment().hour()){
        //     task15.style.backgroundColor = 'gray'
        // }
        // if(input16 < moment().hour()){
        //     task16.style.backgroundColor = 'gray'
        // }
        // if(input17 < moment().hour()){
        //     task17.style.backgroundColor = 'gray'
        // }
        // if(input18 < moment().hour()){
        //     task18.style.backgroundColor = 'gray'
        // }
        // if(input19 < moment().hour()){
        //     task19.style.backgroundColor = 'gray'
        // }
        // if(input20 < moment().hour()){
        //     task20.style.backgroundColor = 'gray'
        // }
        // if(input21 < moment().hour()){
        //     task21.style.backgroundColor = 'gray'
        // }

        // if(input09 === moment().hour()){
        //     task09.style.backgroundColor = 'green'
        // }
        // if(input10 === moment().hour()){
        //     task10.style.backgroundColor = 'green'
        // }
        // if(input11 === moment().hour()){
        //     task11.style.backgroundColor = 'green'
        // }
        // if(input12 === moment().hour()){
        //     task12.style.backgroundColor = 'green'
        // }
        // if(input13 === moment().hour()){
        //     task13.style.backgroundColor = 'green'
        // }
        // if(input14 === moment().hour()){
        //     task14.style.backgroundColor = 'green'
        // }
        // if(input15 === moment().hour()){
        //     task15.style.backgroundColor = 'green'
        // }
        // if(input16 === moment().hour()){
        //     task16.style.backgroundColor = 'green'
        // }
        // if(input17 === moment().hour()){
        //     task17.style.backgroundColor = 'green'
        // }
        // if(input18 === moment().hour()){
        //     task18.style.backgroundColor = 'green'
        // }
        // if(input19 === moment().hour()){
        //     task19.style.backgroundColor = 'green'
        // }
        // if(input20 === moment().hour()){
        //     task20.style.backgroundColor = 'green'
        // }
        // if(input21 === moment().hour()){
        //     task21.style.backgroundColor = 'green'
        // }

        // if(input09 > moment().hour()){
        //     task09.style.backgroundColor = 'blue'
        // }
        // if(input10 > moment().hour()){
        //     task10.style.backgroundColor = 'blue'
        // }
        // if(input11 > moment().hour()){
        //     task11.style.backgroundColor = 'blue'
        // }
        // if(input12 > moment().hour()){
        //     task12.style.backgroundColor = 'blue'
        // }
        // if(input13 > moment().hour()){
        //     task13.style.backgroundColor = 'blue'
        // }
        // if(input14 > moment().hour()){
        //     task14.style.backgroundColor = 'blue'
        // }
        // if(input15 > moment().hour()){
        //     task15.style.backgroundColor = 'blue'
        // }
        // if(input16 > moment().hour()){
        //     task16.style.backgroundColor = 'blue'
        // }
        // if(input17 > moment().hour()){
        //     task17.style.backgroundColor = 'blue'
        // }
        // if(input18 > moment().hour()){
        //     task18.style.backgroundColor = 'blue'
        // }
        // if(input19 > moment().hour()){
        //     task19.style.backgroundColor = 'blue'
        // }
        // if(input20 > moment().hour()){
        //     task20.style.backgroundColor = 'blue'
        // }
        // if(input21 > moment().hour()){
        //     task21.style.backgroundColor = 'blue'
        // }

   
   
   
   
   
//    if(input09 === moment().hour()){
//        task09.style.backgroundColor = 'green'
//    }
//    if(input09 > moment().hour()){
//        task09.style.backgroundColor = 'brown'
//    }
//    if(input09 < moment().hour()){
//        task09.style.backgroundColor = 'blue'
//    }


    // var userInputs = [task09, task10, task11, task12, task13, task14, task15, task16, task17, task18, task19, task20, task21];

    // var checkTime = function(){
        
    //     var currentHour = moment().format('H');

    //     for(var i = 0; i < userInputs.length; i++){
    //         if(userInputs[i] < currentHour){
    //             $(userInputs[i]).addClass('past');
    //         }
    //         if(userInputs[i] === currentHour){
    //             $(userInputs[i]).addClass('present');
    //         }
    //         if(userInputs[i] < currentHour){
    //             $(userInputs[i]).addClass('future');

    //         }
    //     }
    // }
    // setInterval(checkTime(), (1000 * 60) * 5)


 
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
                task09.value = "";

            }
            function markCompleted10(){
                localStorage.removeItem('task10');
                task10.style.backgroundColor = 'gray';
                task10.value = "";
            }
            function markCompleted11(){
                localStorage.removeItem('task11');
                task11.style.backgroundColor = 'gray';
                task11.value = "";
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





