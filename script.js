//data and time in the header
    var todayIs = document.querySelector('#currentDay');
    var todaysDate = moment().format('MMM DD YYYY');
    var currentHour = moment().format('hh:mm');
    todayIs.innerHTML = todaysDate + ' , ' + currentHour; 


//targetting the id 
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

//separating number in the id value
    var num09 = task09.id.match(/\d+/g)[0];
    var num10 = task10.id.match(/\d+/g)[0];
    var num11 = task11.id.match(/\d+/g)[0];
    var num12 = task12.id.match(/\d+/g)[0];
    var num13 = task13.id.match(/\d+/g)[0];
    var num14 = task14.id.match(/\d+/g)[0];
    var num15 = task15.id.match(/\d+/g)[0];
    var num16 = task16.id.match(/\d+/g)[0];
    var num17 = task17.id.match(/\d+/g)[0];
    var num18 = task18.id.match(/\d+/g)[0];
    var num19 = task19.id.match(/\d+/g)[0];
    var num20 = task20.id.match(/\d+/g)[0];
    var num21 = task21.id.match(/\d+/g)[0];

      
//setting the color according to current hour
        if(num09 < moment().hour()){
            task09.style.backgroundColor = '#B0E0E6'
        }
        if(num10 < moment().hour()){
            task10.style.backgroundColor = '#B0E0E6'
        }
        if(num11 < moment().hour()){
            task11.style.backgroundColor = '#B0E0E6'
        }
        if(num12 < moment().hour()){
            task12.style.backgroundColor = '#B0E0E6'
        }
        if(num13 < moment().hour()){
            task13.style.backgroundColor = '#B0E0E6'
        }
        if(num14 < moment().hour()){
            task14.style.backgroundColor = '#B0E0E6'
        }
        if(num15 < moment().hour()){
            task15.style.backgroundColor = '#B0E0E6'
        }
        if(num16 < moment().hour()){
            task16.style.backgroundColor = '#B0E0E6'
        }
        if(num17 < moment().hour()){
            task17.style.backgroundColor = '#B0E0E6'
        }
        if(num18 < moment().hour()){
            task18.style.backgroundColor = '#B0E0E6'
        }
        if(num19 < moment().hour()){
            task19.style.backgroundColor = '#B0E0E6'
        }
        if(num20 < moment().hour()){
            task20.style.backgroundColor = '#B0E0E6'
        }
        if(num21 < moment().hour()){
            task21.style.backgroundColor = '#B0E0E6'
        }

        if(num09 === moment().hour()){
            task09.style.backgroundColor = 'white'
        }
        if(num10 === moment().hour()){
            task10.style.backgroundColor = 'white'
        }
        if(num11 === moment().hour()){
            task11.style.backgroundColor = 'white'
        }
        if(num12 === moment().hour()){
            task12.style.backgroundColor = 'white'
        }
        if(num13 === moment().hour()){
            task13.style.backgroundColor = 'white'
        }
        if(num14 === moment().hour()){
            task14.style.backgroundColor = 'white'
        }
        if(num15 === moment().hour()){
            task15.style.backgroundColor = 'white'
        }
        if(num16 === moment().hour()){
            task16.style.backgroundColor = 'white'
        }
        if(num17 === moment().hour()){
            task17.style.backgroundColor = 'white'
        }
        if(num18 === moment().hour()){
            task18.style.backgroundColor = 'white'
        }
        if(num19 === moment().hour()){
            task19.style.backgroundColor = 'white'
        }
        if(num20 === moment().hour()){
            task20.style.backgroundColor = 'white'
        }
        if(num21 === moment().hour()){
            task21.style.backgroundColor = 'white'
        }

        if(num09 > moment().hour()){
            task09.style.backgroundColor = 'blue'
        }
        if(num10 > moment().hour()){
            task10.style.backgroundColor = 'blue'
        }
        if(num11 > moment().hour()){
            task11.style.backgroundColor = 'blue'
        }
        if(num12 > moment().hour()){
            task12.style.backgroundColor = 'blue'
        }
        if(num13 > moment().hour()){
            task13.style.backgroundColor = 'blue'
        }
        if(num14 > moment().hour()){
            task14.style.backgroundColor = 'blue'
        }
        if(num15 > moment().hour()){
            task15.style.backgroundColor = 'blue'
        }
        if(num16 > moment().hour()){
            task16.style.backgroundColor = 'blue'
        }
        if(num17 > moment().hour()){
            task17.style.backgroundColor = 'blue'
        }
        if(num18 > moment().hour()){
            task18.style.backgroundColor = 'blue'
        }
        if(num19 > moment().hour()){
            task19.style.backgroundColor = 'blue'
        }
        if(num20 > moment().hour()){
            task20.style.backgroundColor = 'blue'
        }
        if(num21 > moment().hour()){
            task21.style.backgroundColor = 'blue'
        }
 
//save the task button
            function saveTask09(){
                localStorage.setItem( 'task09' , task09.value);  
                task09.style.backgroundColor = '#00FF00'
            }
            function saveTask10(){
                localStorage.setItem( 'task10' , task10.value);
                task10.style.backgroundColor = '#00FF00'
            }
            function saveTask11(){
                localStorage.setItem( 'task11' , task11.value);
                task11.style.backgroundColor = '#00FF00'
            }
            function saveTask12(){
                localStorage.setItem( 'task12' , task12.value);
                task12.style.backgroundColor = '#00FF00'
            }
            function saveTask13(){
                localStorage.setItem( 'task13' , task13.value);
                task13.style.backgroundColor = '#00FF00'
            }
            function saveTask14(){
                localStorage.setItem( 'task14' , task14.value);
                task14.style.backgroundColor = '#00FF00'
            }
            function saveTask15(){
                localStorage.setItem( 'task15' , task15.value);
                task15.style.backgroundColor = '#00FF00'
            }
            function saveTask16(){
                localStorage.setItem( 'task16' , task16.value);
                task16.style.backgroundColor = '#00FF00'
            }
            function saveTask17(){
                localStorage.setItem( 'task17' , task17.value);
                task17.style.backgroundColor = '#00FF00'
            }
            function saveTask18(){
                localStorage.setItem( 'task18' , task18.value);
                task18.style.backgroundColor = '#00FF00'
            }
            function saveTask19(){
                localStorage.setItem( 'task19' , task19.value);
                task19.style.backgroundColor = '#00FF00'
            }
            function saveTask20(){
                localStorage.setItem( 'task20' , task20.value);
                task20.style.backgroundColor = '#00FF00'
            }
            function saveTask21(){
                localStorage.setItem( 'task21' , task21.value);
                task21.style.backgroundColor = '#00FF00'
            }
            


//task completed button
            function markCompleted09(){
                localStorage.removeItem('task09');
                task09.style.backgroundColor = 'gray';

            }
            function markCompleted10(){
                localStorage.removeItem('task10');
                task10.style.backgroundColor = 'gray';
            }
            function markCompleted11(){
                localStorage.removeItem('task11');
                task11.style.backgroundColor = 'gray';
            }
            function markCompleted12(){
                localStorage.removeItem('task12');
                task12.style.backgroundColor = 'gray';
            }
            function markCompleted13(){
                localStorage.removeItem('task13');
                task13.style.backgroundColor = 'gray';
            }
            function markCompleted14(){
                localStorage.removeItem('task14');
                task14.style.backgroundColor = 'gray';
            }
            function markCompleted15(){
                localStorage.removeItem('task15');
                task15.style.backgroundColor = 'gray';
            }
            function markCompleted16(){
                localStorage.removeItem('task16');
                task16.style.backgroundColor = 'gray';
            }
            function markCompleted17(){
                localStorage.removeItem('task17');
                task17.style.backgroundColor = 'gray';
            }
            function markCompleted18(){
                localStorage.removeItem('task18');
                task18.style.backgroundColor = 'gray';
            }
            function markCompleted19(){
                localStorage.removeItem('task19');
                task19.style.backgroundColor = 'gray';
            }
            function markCompleted20(){
                localStorage.removeItem('task20');
                task20.style.backgroundColor = 'gray';
            }
            function markCompleted21(){
                localStorage.removeItem('task21');
                task21.style.backgroundColor = 'gray';
            }





