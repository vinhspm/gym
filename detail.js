let pId = +localStorage.getItem("selectedProgram");
let det = JSON.parse( localStorage.getItem("detail1") ) ; 
let video = document.getElementById("video");
let a ; 
for ( let i=0 ; i<det.length ; i++ ) {
    if(pId==det[i].id) {
        a = det[i] ; 
    }
}
console.log(a.id) ; 
if(a.sex==0) a.sex = "Male" ; 
if(a.sex==1) a.sex = "Female" ; 
if(a.sex==2) a.sex = "Both" ; 
let des=`<div style="font-weight:Bold" >Description: </div>`;
for(let i=0; i<a.des.length; i++){
    let b=`<div >- ${a.des[i]}<div>`
    des+=b;
}
let html = `
    <div class="col-8" style="background-color: #222533 ; padding-left:0.15cm ;padding-top: 0.15cm; padding-right: 0.15cm">
    <iframe width="100%" height="550px" src="${a.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="col-4" style="background-color: #222533; color:white; line-height : 1.25cm; ">
        
       <br><h2 style = "font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">WORKOUT DETAILS </h2>
        <hr>

        <div>
        <span style="font-weight:Bold"> Duration : </span> ${a.time} minutes. <br>
        <span style="font-weight:Bold">Calories burn : </span>${a.calo-20} - ${a.calo+20}. <br>
        <span style="font-weight:Bold">Gender :</span> ${a.sex} <br>
        
        ${des}
    </div>
`



video.innerHTML+=html ; 