
function eventHandler(event){
    // event.stopPropagation();
    // event.preventDefault();
    let ul=document.getElementById("nav-menu-ul");
    console.log(ul);
    let child=ul.childNodes;
    console.log(child);
    child.forEach((e)=>{e.className=" ";});
    event.target.parentElement.className="active";
    menuHandler(event);
}
// function menuHandler(event){
//     let ham=document.getElementById("ham_menu");
//     let menu=document.getElementById("nav-menu-ul");
//     console.log(ham.className);
//     console.log(ham.classList);
//     if(ham.classList.contains("ham_open")){
//         ham.classList.replace("ham_open","ham_close");
//         menu.classList.add("active");
        
        
//     }else{
//         ham.classList.replace("ham_close","ham_open");
//         menu.classList.remove("active");
//     }
// }
function menuHandler(event){
    let ham=document.getElementById("ham_menu");
    let menu=document.getElementById("nav-menu-ul");
    ham.classList.toggle("active")
    menu.classList.toggle("active")
}
function pricing(event){
   let month = document.getElementById("month");
   let year = document.getElementById("year");
   if(!event.target.classList.contains("active") ){
       month.classList.toggle("active");
       year.classList.toggle("active");
   }
   pricingChangeHandler(event);
}
// function pricing(event){
//    let parent=document.getElementById("pricing_bottom_top");
//    let child=parent.childNodes;
//    console.log(child);
//    child.forEach((e)=>{e.className=" ";});
//    event.target.className="active";
// }
function pricingChangeHandler(event){
let pricingDetails1=document.getElementsByClassName("pricing_details1");
let pricingDetails2=document.getElementsByClassName("pricing_details2");
let pricingDetails3=document.getElementsByClassName("pricing_details3");
console.log(event);
if(event.target.id=="year"){
pricingDetails1[0].innerHTML="<h1>$240</h1><h3>/year</h3>";
pricingDetails2[0].innerHTML="<h1>$320</h1><h3>/year</h3>";
pricingDetails3[0].innerHTML="<h1>$400</h1><h3>/year</h3>";
}else{
pricingDetails1[0].innerHTML="<h1>$24</h1><h3>/mo</h3>";
pricingDetails2[0].innerHTML="<h1>$32</h1><h3>/mo</h3>";
pricingDetails3[0].innerHTML="<h1>$40</h1><h3>/mo</h3>";
}
}

function faqFun(e) {
    if(e.target.parentElement.offsetHeight == 80){
        e.target.parentElement.style.height = e.target.parentElement.scrollHeight+"px";
        e.target.classList.toggle("active")
        e.target.parentElement.style.border="0.5px solid #6b46c1be";
    }else{
        e.target.parentElement.style.height = 80+"px";
        e.target.classList.toggle("active")
        e.target.parentElement.style.border="0.5px solid hsla(0, 0%, 50%, 0.4)";
    }
}