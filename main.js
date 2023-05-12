
//////////////////////////////////////////////
const one = document.querySelector(".one ");
const one_ans = document.querySelector(".one .true");
const two = document.querySelector(".two");
const two_ans = document.querySelector(".two .true");
const three = document.querySelector(".three");
const three_ans = document.querySelector(".three .true");
const one_an = document.querySelector(".one .false");
const two_an = document.querySelector(".two .false");
const three_an = document.querySelector(".three .false");
one_ans.addEventListener("click" , ()=> {
    one.style.display = "none";
    two.style.display = "block";
})
two_ans.addEventListener("click" , ()=> {
    two.style.display = "none";
    three.style.display = "block";
})
let hh =  [20 ,100 , 200 , 400 , 700 , 0];
let mm = [30 ,50 , 30 , 200 , 0 , 300];
let uu;
let zz;
three_ans.addEventListener("click" , ()=> {
    let uu =hh[ Math.floor((Math.random() * hh.length))];
    let zz = mm[Math.floor((Math.random() * mm.length))];
    three_ans.style.position = "absolute";
    three_ans.style.top = `${uu}px`;
    three_ans.style.left = `${zz}px`;

})
one_an.addEventListener("click" , ()=> {
    fall.style.display= "grid";
    timer.style.display = "none";
    one.style.display = "none";
})
two_an.addEventListener("click" , ()=> {
    fall.style.display= "grid";
    timer.style.display = "none";
    two.style.display = "none";
})
three_an.addEventListener("click" , ()=> {
    fall.style.display= "grid";
    timer.style.display = "none";
    three.style.display = "none";
})


//////////////////////////////////////////////////

const timer = document.querySelector(".timer");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const fall = document.querySelector(".fall");

let time;
const time_out = function () {
    if((second.innerHTML) > 0){
        second.innerHTML  -= 1;
    }else {
        clearInterval(hi);
    }
    check();
};

const check = function () {
    if( second.innerHTML == 30) {
        timer.style.color = "red";
        console.log("hi");
    }
}
setInterval(time_out , 1000);

const kk = function () {
    if( second.innerHTML == 0) {
        timer.style.display = "none";
        three.style.display = "none";
        fall.style.display= "grid";
    }
}
setInterval(kk , 1000);
