let male = [
    { 
        id : 1,
        name: "Back Rehab and Core Conditioning Workout",
        img: ["/male/p1.png","/male/p1-1.png","/male/p1-2.png"],
        time: 23,
        sex: 0,
        calo : 120,
        video: "https://www.youtube.com/embed/8tMbLfQqRis",
        des : ["1 Set of 10 Exercises", "Intervals of 50 Sec On, 10 Sec Off"]
    },
    {
        id : 2,
        name: "Functional Upper Body Strength Workout",
        img: ["/male/p2.png","/male/p2-1.png","/male/p2-2.png"],
        time: 39,
        sex : 0,
        calo : 250,
        video : "https://www.youtube.com/embed/NEaXkXgLt8k",
        des : ["2 Sections of 4 Exercises" , "Intervals of 45 Sec on, 15 Sec rest/Prep"]
    },
    {
        id : 3,
        name: "Abs Workout",
        img: ["/male/p3.png","/male/p3-1.png","/male/p3-2.png"],
        time: 12,
        sex: 0,
        calo : 80,
        video : "https://www.youtube.com/embed/h8qNmVJ_jI8",
        des : ["2 Groups of 5 Exercises","50 Sec Active 10 Sec Rest", "One set per Exercise"]
    },
    {
        id : 4,
        name: " Core Strength",
        img: ["/male/p4.png","/male/p4-1.png","/male/p4-2.png"],
        time: 34,
        sex: 0,
        calo : 160,
        video : "https://www.youtube.com/embed/N5ViYeGJOCA",
        des : ["4 Groups; 2 Ecercises Each", "2 Sets per Exercise" , "Intervals of 45 Sec On, 15 Off"],
    },
    {
        id : 5,
        name: "Upper Body Strength",
        img: ["/male/p5.png","/male/p5-1.png","/male/p5-2.png"],
        time: 11,
        sex: 0,
        calo : 170,
        video: "https://www.youtube.com/embed/xRt4LSANIoU",
        des: ["10 different exercises", "45 sec on, 15 sec off"]
    },
    {
        id : 6,
        name: "Quick Upper Body Strength Without Weights",
        img: ["/male/p6.png","/male/p6-1.png","/male/p6-2.png"],
        time: 18,
        sex: 0,
        calo : 200,
        video: "https://www.youtube.com/embed/sYYjx_W7rUY",
        des: ["8 Exercises total", "Intervals of 45 On & 15 Off","2 Sets each in an AB,AB format"]
    },
    {
        id : 7,
        name: "HIIT Workout",
        img: ["/male/p7.png","/male/p7-1.png","/male/p7-2.png"],
        time: 16,
        sex: 0,
        calo : 100,
        video : "https://www.youtube.com/embed/0DSrudz6IVY",
        des : ["12 exercises","2 sets per exercise", "10 sec. on, 10 sec. rest"]
    },
    {
        id : 8,
        name: "Active Static Abs Workout",
        img: ["/male/p8.png","/male/p8-1.png","/male/p8-2.png"],
        time: 25,
        sex: 0,
        calo : 150,
        video: "https://www.youtube.com/embed/6OzGTeCc6J8",
        des: ["2 groups of 2 exercises","35 sec on, 10 sec off"]
    },
    {
        id : 9,
        name: "Weight Training for the Upper Body",
        img: ["/male/p9.png","/male/p9-1.png","/male/p9-2.png"],
        time: 38,
        sex: 0,
        calo : 400,
        video: "https://www.youtube.com/embed/PVitqFVJWjY",
        des: ["2 groups of 2 exercises", "2 sets of 10 reps" , "ABAB format"]
    },
    {
        id : 10,
        name: "Quick and Easy Pilates Toning and Flexibility Workout",
        img: ["/male/p10.png","/male/p10-1.png","/male/p10-2.png"],
        time: 17,
        sex: 0,
        calo : 50,
        video : "https://www.youtube.com/embed/0PXRL5RhNok",
        des: ["Free form routine", "Pilates for total body", "Random repetitions or time limit"]
    },
    {
        id : 11,
        name: "Cardio Workout",
        img: ["/male/p11.png","/male/p11-1.png","/male/p11-2.png"],
        time: 60,
        sex: 0,
        calo : 1000,
        video : "https://www.youtube.com/embed/WWylm909H_w",
        des: ["Insane Cardio Workout"]
    },
    {
        id : 12,
        name:"Six Pack Burn Out",
        img: ["/male/p12.png","/male/p12-1.png","/male/p12-2.png"],
        time: 17,
        sex: 0,
        calo : 130,
        video : "https://www.youtube.com/embed/v-KZ3R1f2Ps",
        des: ["2 groups of 2 exercises","2 sets per exercise","Tabata style:20 sec. active, 10sec. rest", "No extra between groups" ]
    },
    {   id : 13 ,
        name: 'Pilates Flow',
        img: ['female/female1-1.jpg','/female/female1-2.jpg','female/female1-3.jpg'],
        time: 14,
        sex: 1,
        calo: 80,
        video: 'https://www.youtube.com/embed/jBBE6kQ2hVk',
        des: ['Target: Butt and Thighs','Benefit: Toning, range of motion','Equipment: None'],
    },
    {   id : 14 ,
        name: 'Upper Body Workout',
        img: ['female/female2-1.jpg','/female/female2-2.jpg','female/female2-3.jpg'],
        des: ['Target: Arms, Upper Back, Chest','Equiment: Dumbbells','Warm UP & Cool Down not includedincluded'],
        time: 10,
        sex: 1,
        calo: 80,
        video: 'https://www.youtube.com/embed/oze91Sr-ZVI',
    },
    {   id : 15 ,
        name: 'Pilates & Cardio',
        img: ['/female/female3-1.jpg','/female/female3-2.jpg','/female/female3-3.jpg'],
        des: ['Focus: Light cardio, light toning/strength,circulation, ROM, relaxation','Warm up & Cool Down included','No equipment'],
        time: 31,
        sex: 1,
        calo: 200,
        video: 'https://www.youtube.com/embed/JnXMbE9tHlw',
    },
    {   id : 16 ,
        name: 'Low Impact Cardio Workout for Beginners',
        img: ['female/female4-1.jpg','/female/female4-2.jpg','female/female4-3.jpg'],
        des: ['Low Ipact','Total Body','No Equipment'],
        time: 11,
        sex: 1,
        calo: 70,
        video: 'https://www.youtube.com/embed/SibjPw9Khz4',
    },
    {   id : 17 ,
        name: 'Bodyweight Cardio Workout',
        img: ['female/female5-1.jpg','/female/female5-2.jpg','female/female5-3.jpg'],
        des: ['Benefit: Fat Burning, Toning & Endurance','Muscle Focus: Total Body','Warm Up/Cool Down not included'],
        time: 15,
        sex: 1,
        calo: 130,
        video: 'https://www.youtube.com/embed/tEjbdHeE25k',
    },
    {   id : 18 ,
        name: 'Energy Boosting Cardio Jumpstart',
        img: ['female/female6-1.jpg','/female/female6-2.jpg','female/female6-3.jpg'],
        des: ['No equipment','Low impact modifications provides'],
        time: 6,
        sex: 1,
        calo: 50,
        video: 'https://www.youtube.com/embed/4ugy0hEQ268',
    },
    {   id : 19 ,
        name: 'At Home Glute Workout',
        img: ['female/female7-1.jpg','/female/female7-2.jpg','female/female7-3.jpg'],
        des: ['Benefits: Burns fat, build lean muscle & shape','Warm up & Cool down not included','Equipment: Dumbbells'],
        time: 17,
        sex: 1,
        calo: 180,
        video: 'https://www.youtube.com/embed/kvHEqpwHoFo',
    },
    {   id : 20 ,
        name: 'Abs Workout: At Home Pilates Abs',
        img: ['female/female8-1.jpg','/female/female8-2.jpg','female/female8-3.jpg'],
        des: ['Target: Abs, obliques, lower back','No equipment','50 seconds on, 10 seconds rest'],
        time: 10,
        sex: 1,
        calo: 60,
        video: 'https://www.youtube.com/embed/0CQ7riVMNJc',
    },  
    {
        id : 21,
        name :"Abs Workout",
        img : ["/both/p1.png","/both/p1-1.png","/both/p1-2.png"],
        des : ["Target: Abs, obliques, lower back","No warm up/cool down"],
        time : 11,
        sex : 2,
        calo : 80,
        video : 'https://www.youtube.com/embed/0fxhP9LFhDw',
    },
    {
        id : 22 , 
        name : "Cardio and Butt and Thigh Workout",
        img : ["/both/p2.png","/both/p2-1.png","/both/p2-2.png"],
        des: ["Strategy: Intense cardio intervals", "Benefits: Burn fat, build muscle, tone"],
        time : 23,
        sex : 2,
        calo: 280,
        video: "https://www.youtube.com/embed/_Iujuo9fLhg",
    },
    {
        id: 23,
        name : "Ab Blasting Interval Workout",
        img : ["/both/p3.png","/both/p3-1.png","/both/p3-2.png"] , 
        des : ["Workout Structure: 3 groups of 4 exercises","Eqipment: Floor matt", "Warm Up/Cool Down: None"],
        time : 24,
        sex : 2,
        calo : 140,
        video: "https://www.youtube.com/embed/2Yk_z7CK6Ig",
    },
    {
        id: 24,
        name: "Shoulder Sculpting Workout",
        img : ["/both/p4.png","/both/p4-1.png","/both/p4-2.png"],
        des: ["Workout Structure: 3 Groups of 2 Exercises Each" , "Equipment: Dumbbells","Warmup/Cooldown: Not Included"],
        time: 18,
        sex: 2,
        calo: 180,
        video: "https://www.youtube.com/embed/FWShSllV9go",

    },
    {
        id: 25,
        name : "Upper Body HIIT Workout",
        img : ["/both/p5.png","/both/p5-1.png","/both/p5-2.png"],
        des :["4 Different Exercises","20 Seconds On; 10 Off x 4", "You Will Need: Dumbbels"],
        time: 8 , 
        sex : 2 , 
        calo : 50,
        video: "https://www.youtube.com/embed/VrSbzlkiGN0",
    },
    {
        id : 26,
        name: "Lower Body Toning Workout",
        img : ["/both/p6.png","/both/p6-1.png","/both/p6-2.png"],
        des : ["Equipment: Dumbbell, No Equipment", "Tabara Structure: 20 Seconds On, 10 Senconds Off x8"] , 
        time : 56 ,
        sex : 2,
        calo : 400,
        video: "https://www.youtube.com/embed/d7r8vir2aEg",
    }, 
    {
        id: 27,
        name: "HIIT Cardio Butt and Thigh Workout",
        img : ["/both/p7.png","/both/p7-1.png","/both/p7-2.png"],
        des :["Length: 37 Minutes","Strategy: HIIT and Lower Body Strength","Equipment: Optional dumbbells"] , 
        time: 38,
        sex : 2 , 
        calo : 320,
        video: "https://www.youtube.com/embed/dz1NQwHS3pU",
    },
    {
        id: 28,
        name: "Quick Sweat Cardio Burst",
        img : ["/both/p8.png","/both/p8-1.png","/both/p8-2.png"],
        des: [" 8 Bodyweight Cardio Intervals","45 Seconds On; 10 Seconds Active Rest","No Equipment"],
        time : 8,
        calo : 100,
        sex : 2,
        video : "https://www.youtube.com/embed/bYO8V-6IFs0"
    },
    {
        id: 29,
        name: 'Resistance Band Workout for Butt and Thighs',
        img: ['female/female9-1.jpg','female/female9-2.jpg','female/female9-3.jpg'],
        des: ['Optional bands or ankle weghts','Warm up & cool down not included'],
        time: 10,
        sex: 1,
        calo: 90,
        video: 'https://www.youtube.com/embed/udzyGtd20-8'
    },
    {
        id: 30,
        name: 'Fat Burning HIIT Workout',
        img: ['female/female10-2.jpg','female/female10-2.jpg','female/female10-3.jpg'],
        des: ['Benefits: Fat burning, boosting','Warm up included','No equipment '],
        time: 15,
        sex: 1,
        calo: 130,
        video: 'https://www.youtube.com/embed/F8rcu-ekUlE'
    },
    {
        id: 31,
        name: 'At Home Bodyweight Cardio Interval Workout',
        img: ['female/female11-1.jpg','female/female11-2.jpg','female/female11-3.jpg'],
        des: ['Quick warm up','1 minutes interval, group of 3','20s rest between each interval'],
        time: 14,
        sex: 1,
        calo: 130,
        video: 'https://www.youtube.com/embed/WUg5dP6W0cw'
    },
    {
        id: 32,
        name: 'Bikini Body Pilates',
        img: ['female/female12-1.jpg','female/female12-2.jpg','female/female12-3.jpg'],
        des: ['Focus: Abs, Thighs & Glutes','Warm Up & Cool Down not Inclued','No Equipment'],
        time: 27,
        sex: 1,
        calo: 140,
        video: 'https://www.youtube.com/embed/OjeveoQgp6I'
    },
    {
        id: 33,
        name: 'Burpee Madness',
        img: ['female/female13-3.jpg','female/female13-2.jpg','female/female13-3.jpg'],
        des: ['10 different kinds of burpees','10 reps each','25s rest between each'],
        time: 11,
        sex: 1,
        calo: 120,
        video: 'https://www.youtube.com/embed/ZiDrFSdI3yg'
    },
]
let vid = document.getElementById("abc");
function1(male);
function function1(arr) {
    vid.innerHTML = ""; 
    let html ; 
    for ( let i=0 ; i<arr.length ; i=i+2 ) {
        if(i+1==arr.length) {
        html = `
        <div class="row">   
                <div class="col-6 item">
                    <img src="${arr[i].img[0]}" width = "550cm " height = "320cm" alt="">
                    <div>
                    <span style="font-weight: bold;"> Program: </span>${arr[i].name}.<br>
                    <span style="font-weight: bold;"> Time: </span> ${arr[i].time} minutes.<br>
                    <span style="font-weight: bold;"> Calories burn: </span> ${arr[i].calo-20}-${arr[i].calo+20}.<br>
                      <div>  <button style="background-color:gray ; margin-left: 11.9cm;"  type="button" class="btn btn-primary" data-toggle="modal" onclick="funtion3('${arr[i].id}')">
              More >>
            </button> </div>
                    </div>
                </div> </div>
 `
    }
        else {
            html = `
            <div class="row">   
                <div class="col item" >
                    <img src="${arr[i].img[0]}" width = "550cm " height = "320cm" alt="">
                    <div>
                    <span style="font-weight: bold;"> Program: </span>${arr[i].name}.<br>
                    <span style="font-weight: bold;"> Time: </span> ${arr[i].time} minutes.<br>
                    <span style="font-weight: bold;"> Calories burn: </span> ${arr[i].calo-20}-${arr[i].calo+20}.<br>
                      <div>  <button style="background-color:gray ; margin-left: 11.9cm;"  type="button" class="btn btn-primary" data-toggle="modal" onclick="funtion3('${arr[i].id}')">
              More >>
            </button> </div>
                    </div>
                </div>
                <div class="col item1">
                    <img src="${arr[i+1].img[0]}" width = "550cm" height = "320cm" alt="">
                    <div>
                    <span style="font-weight: bold;"> Program: </span>${arr[i+1].name}.<br>
                    <span style="font-weight: bold;"> Time: </span> ${arr[i+1].time} minutes<br>
                    <span style="font-weight: bold;"> Calories burn: </span> ${arr[i+1].calo-20}-${arr[i+1].calo+20}.<br>
                    <div>  <button style="background-color:gray ; margin-left: 11.9cm;"  type="button" class="btn btn-primary" data-toggle="modal" onclick="funtion3('${arr[i+1].id}')">
              More >>
            </button> </div>
                    </div>
                </div>
            </div>
            
     `
        }
        vid.innerHTML+=html;
    }

}
    function filter() {
        vid.innerHTML = ""; 
        let filterArray = [];
        let calo = +document.getElementById("calo").value;
        let time = +document.getElementById("time").value;
        let sex =  +document.getElementById("sex").value;
        // ko nhập cả 3
        if( isNaN(calo) && isNaN(time) && isNaN(sex) ) {
            function1(male);
            return;
        }
        // chỉ nhập calo
        if( !isNaN(calo) && isNaN(time) && isNaN(sex) ) {
            filterArray = male.filter(function(value) {
                return (value.calo>=calo-20 && value.calo<=calo+20 );
            }
            )
            function1(filterArray);
            return;
        }
        // chỉ nhập sex
        if( isNaN(calo) && isNaN(time) && !isNaN(sex) ) {
            filterArray = male.filter(function(value) {
                return value.sex==sex;
            }
            )
            function1(filterArray);
            return;
        }
        // chỉ nhập time
        if( isNaN(calo) && !isNaN(time) && isNaN(sex) ) {
            filterArray = male.filter(function(value) {
                return value.time>=time-5 && value.time<=time+5;
            }
            )
            function1(filterArray);
            return;
        }
        // nhập calo và sex
        if( !isNaN(calo) && isNaN(time) && !isNaN(sex) ) {
            filterArray = male.filter(function(value) {
                return value.sex==sex && (value.calo>=calo-20 && value.calo<=calo+20 );
            }
            )
            function1(filterArray);
            return;
        }
        // calo và time
        if( !isNaN(calo ) && !isNaN(time) && isNaN(sex) ) {
            filterArray = male.filter(function(value) {
                return (value.time>=time-5 && value.time<=time+5) && (value.calo>=calo-20 && value.calo<=calo+20 );
            }
            )
            function1(filterArray);
            return;
        }
        // time và sex
        if( isNaN(calo) && !isNaN(time) && !isNaN(sex) ) {
            filterArray = male.filter(function(value) {
                return (value.time>=time-5 && value.time<=time+5) && value.sex==sex;
            }
            )
            function1(filterArray);
            return;
        }
        // nhập cả 3
        if( !isNaN(calo) && !isNaN(time) && !isNaN(sex) ) {
            filterArray = male.filter(function(value) {
                return (value.time>=time-5 && value.time<=time+5) && value.sex==sex && (value.calo>=calo-20 && value.calo<=calo+20);
            }
            )
            function1(filterArray);
            return;
        }
    }

function funtion3(i) {
    let sex; 
    if(male[i-1].sex==0) sex = "Male" ; 
    if(male[i-1].sex==1) sex = "Female";
    if (male[i-1].sex==2) sex = "Both";  
    let a = document.getElementById("minh");
    let b = document.getElementById("exampleModalLabel");
    b.innerHTML = "" ;
    a.innerHTML = "";
    b.innerHTML=`<p style="font-size: 0.75cm;">  ${male[i-1].name}. </p>`;
    let html = `
    <div class="container">
    <div class="row">
      <div class="col">
      <img src="${male[i-1].img[1]}" width="100%" height="100%" alt="">
      </div>
      <div class="col">
      <img src="${male[i-1].img[2]}" width="100%" height="100%" alt="">
      </div>
    </div>
    <div style="font-size: 0.55cm; padding-left: 2cm;"> <br>
        <p> - Calories burn: ${male[i-1].calo-20} - ${male[i-1].calo+20}. </p>
        <p> - Time: ${male[i-1].time} minutes. </p>
        <p> - Gender: ${sex}. </p>
        </div>
    `
    
    a.innerHTML+=html;
    document.getElementById('123').setAttribute('ref', i);
    $('#exampleModal').modal('show');
}
function saveChange(e){
    const id = e.target.getAttribute('ref');
    console.dir(id);
    localStorage.setItem("selectedProgram",id);
    localStorage.setItem("detail1",JSON.stringify(male)) ; 
    window.location.href = "detail.html";
}