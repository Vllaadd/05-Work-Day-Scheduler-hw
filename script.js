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
    setInterval(checkTime(), (1000 * 60) * 5);


// //creating the key 
        var keyEl09 = document.querySelector('key09');
        var keyEl10 = document.querySelector('key10');
        var keyEl11 = document.querySelector('key11');
        var keyEl12 = document.querySelector('key12');
        var keyEl13 = document.querySelector('key13');
        var keyEl14 = document.querySelector('key14');
        var keyEl15 = document.querySelector('key15');
        var keyEl16 = document.querySelector('key16');
        var keyEl17 = document.querySelector('key17');
        var keyEl18 = document.querySelector('key18');
        var keyEl19 = document.querySelector('key19');
        var keyEl20 = document.querySelector('key20');
        var keyEl21 = document.querySelector('key21');


//save button
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


        
            function saveTask(){
                localStorage.setItem( 'key09' , task09.value);  
                localStorage.setItem( 'key10' , task10.value);
                localStorage.setItem( 'key11' , task11.value);
                localStorage.setItem( 'key12' , task12.value);
                localStorage.setItem( 'key13' , task13.value);
                localStorage.setItem( 'key14' , task14.value);
                localStorage.setItem( 'key15' , task15.value);
                localStorage.setItem( 'key16' , task16.value);
                localStorage.setItem( 'key17' , task17.value);
                localStorage.setItem( 'key18' , task18.value);
                localStorage.setItem( 'key19' , task19.value);
                localStorage.setItem( 'key20' , task20.value);
                localStorage.setItem( 'key21' , task21.value);
            }

    
              

            // var taskEl09 = localStorage.getItem('key09');
            // var taskEl10 = localStorage.getItem('key10');
            // var taskEl11 = localStorage.getItem('key11');
            // var taskEl12 = localStorage.getItem('key12');
            // var taskEl13 = localStorage.getItem('key13');
            // var taskEl14 = localStorage.getItem('key14');
            // var taskEl15 = localStorage.getItem('key15');
            // var taskEl16 = localStorage.getItem('key16');
            // var taskEl17 = localStorage.getItem('key17');
            // var taskEl18 = localStorage.getItem('key18');
            // var taskEl19 = localStorage.getItem('key19');
            // var taskEl20 = localStorage.getItem('key20');
            // var taskEl12 = localStorage.getItem('key21');

   




            function markCompleted(){
                localStorage.removeItem('key09' , task09);
                task09.style.backgroundColor = 'gray';
                task09.value = "";

            }
            // function markCompleted(){
            //     localStorage.removeItem('key10' , task10);
            //     task10.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }
            // function markCompleted(){
            //     localStorage.removeItem('key11' , task11.value);
            //     task11.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }
            // function markCompleted(){
            //     localStorage.removeItem('key12' , task12.value);
            //     task12.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }
            // function markCompleted(){
            //     localStorage.removeItem('key13' , task13.value);
            //     task13.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }
            // function markCompleted(){
            //     localStorage.removeItem('key14' , task14.value);
            //     task14.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }
            // function markCompleted(){
            //     localStorage.removeItem('key15' , task15.value);
            //     task15.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }
            // function markCompleted(){
            //     localStorage.removeItem('key16' , task16.value);
            //     task16.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }
            // function markCompleted(){
            //     localStorage.removeItem('key17' , task17.value);
            //     task17.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }
            // function markCompleted(){
            //     localStorage.removeItem('key18' , task18.value);
            //     task18.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }
            // function markCompleted(){
            //     localStorage.removeItem('key19' , task19.value);
            //     task19.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }
            // function markCompleted(){
            //     localStorage.removeItem('key20' , task20.value);
            //     task20.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }
            // function markCompleted(){
            //     localStorage.removeItem('key21' , task21.value);
            //     task21.style.backgroundColor = 'gray';
            //     task09.value = "";
            // }

   


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


// var div09 = document.querySelector('#div09');
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



