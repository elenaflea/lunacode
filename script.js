let square = document.getElementsByClassName('square');

for(let i = 0; i<square.length; i++){
  square[i].addEventListener('mouseenter', function(){
    this.classList.add("rubberBand");
    this.addEventListener("animationend", function(){
      this.classList.remove("rubberBand");
    }, false);
  })
}

window.onscroll = function() {
    myFunctionSticky()
};
let navbar = document.querySelector("#myNav");
let sticky = navbar.offsetTop;
function myFunctionSticky() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}


const stick1 = document.querySelector(".stick-1");
const stick2 = document.querySelector(".stick-2");
const stick3 = document.querySelector(".stick-3");

function myFunctionMobile() {
    let links = document.querySelector("#hidden");
    if (links.style.display == "block" && window.innerWidth <= 1370) {
        links.style.display = "none";

        stick1.classList.remove("open");
        stick1.classList.add("close");
        stick2.classList.remove("open");
        stick2.classList.add("close");
        stick3.classList.remove("open");
        stick3.classList.add("close");

    }
    else {
        links.style.display = "block";

        stick1.classList.remove("close");
        stick1.classList.add("open");
        stick2.classList.remove("close");
        stick2.classList.add("open");
        stick3.classList.remove("close");
        stick3.classList.add("open");
    }
};

function myFunctionMobilePlus() {
    let links = document.querySelector("#hidden");
    if (links.style.display == "block") {

        links.style.display = "none";

        stick1.classList.remove("open");
        stick1.classList.add("close");
        stick2.classList.remove("open");
        stick2.classList.add("close");
        stick3.classList.remove("open");
        stick3.classList.add("close");

    }
    else {
        links.style.display = "block";

        stick1.classList.remove("close");
        stick1.classList.add("open");
        stick2.classList.remove("close");
        stick2.classList.add("open");
        stick3.classList.remove("close");
        stick3.classList.add("open");

    }
};


let logo = document.querySelector("#logo");
let logoArray = [ "images/face3.svg", "images/face5.svg", "images/face8.svg", "images/face7.svg", "images/face6.svg", "images/face5.svg", "images/face4.svg"];
let b=0;
logo.addEventListener("mouseenter", ()=> { 
    b++;
        if (b>logoArray.length-1) {
            b=0
        }
    document.querySelector('#logo').src=logoArray[b];
});
logo.addEventListener("click", ()=> { 
    b++;
        if (b>logoArray.length-1) {
            b=0
        }
    document.querySelector('#logo').src=logoArray[b];
});


let TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrapp">'+this.txt+'</span>';

    let that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
    };

    window.onload = function() {
        let elements = document.querySelectorAll(".txt-rotate");
        for (let i=0; i<elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-rotate');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
    
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrapp { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
        };
    
        function flyBig() {

            let yHight = window.innerHeight;

            if (window.innerWidth <= 500) {
                gsap.fromTo(".flyOne",{ y:0}, {y:-yHight*10, duration:100, repeat:-1, ease: "none"});
            }
        
            else if (window.innerWidth <= 800) {
                gsap.fromTo(".flyOne",{ y:0}, {y:-yHight*3, duration:20, repeat:-1, ease: "none"});
            }
        
            else if (window.innerWidth <= 1030) {
                gsap.fromTo(".flyOne",{ y:0}, {y:-yHight*3, duration:20, repeat:-1, ease: "none"});
            }
        
            else if (window.innerWidth <= 1370) {
                gsap.fromTo(".flyOne",{ y:0}, {y:-yHight*3, duration:20, repeat:-1, ease: "none"});
            }
            else  { 
                gsap.fromTo(".flyOne",{ y:0}, {y:-yHight*3, duration:20, repeat:-1, ease: "none"});
            }
        
        }
        
        flyBig();




let modal = document.getElementById("myModal");
let btnMod = document.querySelector(".flyOne");
let span = document.getElementsByClassName("close")[0];


btnMod.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal ) {
        modal.style.display = "none";
    }
};





let ctt = document.querySelector("#ctt");
ctt.addEventListener("click", ()=>{
    let hiddenform = document.querySelector(".hiddenform");
    hiddenform.style.display = "block";
});

let fermer = document.querySelector("#fermer");
fermer.addEventListener("click", ()=>{
    let hiddenform = document.querySelector(".hiddenform");
    hiddenform.style.display = "none";
});

let ctt2 = document.querySelector("#ctt2");
ctt2.addEventListener("click", ()=>{
    let hiddenform2 = document.querySelector(".hiddenform2");
    hiddenform2.style.display = "block";
});

let fermer2 = document.querySelector("#fermer2");
fermer2.addEventListener("click", ()=>{
    let hiddenform2 = document.querySelector(".hiddenform2");
    hiddenform2.style.display = "none";
});

//document.querySelector("#year").innerHTML  = new Date().getFullYear();
