const package=document.querySelector("#package");
const packages=document.querySelector("#packages");
const icon=document.querySelector("#package i");
const dropdown=document.querySelector("#dropdown");
const PACKAGE= document.querySelector("#PACKAGE");
const text=document.querySelector(".text");
const logo=document.querySelector("#logo");
const imgs=document.querySelectorAll(".imgs");
const close=document.querySelector("#slider i");
const slider=document.querySelector("#slider");
const qs=document.querySelectorAll("#page10 .q");
const as=document.querySelectorAll(" #page10 .a");
const btns=document.querySelectorAll("#page10 i");
const boxs=document.querySelectorAll("#page3 #right_part #layer .logos");
const slide=document.querySelectorAll("#page8 #coontainer #imagebox .image");
const rightslider=document.querySelectorAll("#page9 .container #right #layer .layers");
const home=document.querySelector("#home");
const about=document.querySelector("#about");
const login=document.querySelector("#signup");

logo.addEventListener("click",()=>{
    location.replace(location.href);
})

packages.style.transition= "color .5s ease";
PACKAGE.addEventListener("mouseover",()=>{
    dropdown.classList.add("active");
    icon.style.transform= "translate(3px, 22px) rotate(180deg)";
    package.style.cursor= "pointer";
    packages.classList.add("active");
    packages.style.color= "rgb(211, 22, 22)";
})

PACKAGE.addEventListener("mouseout",()=>{
    dropdown.classList.remove("active");
    icon.style.transform= "translate(3px, 25px)";
    package.style.cursor= "default";
    packages.classList.remove("active");
    packages.style.color= "#fff";
})


var repeat = function(){
    var repeater1=()=>{
        setTimeout(function(){
            imgs[0].classList.remove("active22");
            imgs[1].classList.remove("original2");
            imgs[0].classList.add("active1");
            imgs[1].classList.add("active1");
            var delay1=()=>{
                setTimeout(function(){
                    imgs[0].classList.remove("active1");
                    imgs[0].classList.add("original1");
                    var repeater2=()=>{
                        setTimeout(function(){
                            imgs[1].classList.remove("active1");
                            imgs[0].classList.remove("original1");
                            imgs[1].classList.add("active21");
                            imgs[0].classList.add("active22");
                            var delay2=()=>{
                                setTimeout(function(){
                                    imgs[1].classList.remove("active21");
                                    imgs[1].classList.add("original2");
                                    repeater1();
                                },2000)
                            }
                            delay2();
                        },2000)
                    }
                    repeater2();
                },2000);
            }
            delay1();
        },2000);
    }
    repeater1();
}

repeat();

close.addEventListener("click",()=>{
    slider.style.height=0;
})

for(let i=0;i<11;i++){
    qs[i].addEventListener("click",()=>{
        const isActive = as[i].classList.contains("active2") || as[i].classList.contains("active3") || as[i].classList.contains("active4") || as[i].classList.contains("active5");

        as.forEach((a)=>{
            a.classList.remove("active2","active3","active4","active5");
        });

        btns.forEach((btn)=>{
            btn.classList.remove("active");
        });

        if(!isActive){
            if(i==0 || i==5 || i==6 || i==10){
                as[i].classList.add("active2");
            }
            else if(i==3){
                as[i].classList.add("active5");
            }
            else if(i==9){
                as[i].classList.add("active4");
            }
            else{
                as[i].classList.add("active3");
            }
            btns[i].classList.add("active");
        }
    });
}

var repeat1=()=>{
    const delay=(ms)=>new Promise(resolve=>setTimeout(resolve,ms));
    let position=0;
    const loop=async()=>{
        let j=0;
        for(let i=0;i<5;i++){
            position-=100;
            if(position<-500){
                position=0;
                j=1;
            }
            await delay(4000);
            for(let k=i;k<5;k++){
                boxs[k].style.transition=`transform ${0.5}s ease`;
                boxs[k].style.transform=`translateY(${position}%)`;
                boxs[k].style.opacity='1';
                if(position<-400){
                    for(let p=0;p<4;p++){
                        boxs[p].style.opacity='1';
                        boxs[p].style.transform=`translateY(${0}%)`;
                    }
                }
            }
            await delay(500);
            boxs[i].style.transform=`translateY(${100}%)`;
            boxs[i].style.opacity='0';
        }

    }
    loop();
}

repeat1();

var recursive=()=>{
    const call=(ms)=>new Promise(resolve=>setTimeout(resolve,ms));
    const func=async()=>{
        while(true){
            await call(22000);
            repeat1();
        }
    }
    func();
}

recursive();

const numberOfImages=8;
const duration=30;
for(let i=0;i<8;i++){
    const wait=(duration / numberOfImages) * (numberOfImages - (i + 1)) * -1;
    slide[i].style.animationDelay=`${wait}s`;
}

var repeat4=()=>{
    const delay4=(ms)=>new Promise(resolve=>setTimeout(resolve,ms));
    const func4=async()=>{
        while(true){
            let up=0;
            for(let j=0;j<9;j++){
                for(let i=0;i<9;i++){
                    rightslider[i].style.transition=`transform ${0.5}s ease`;
                    rightslider[i].style.transform=`translateY(${up}%)`;
                }
                await delay4(4000);
                up-=105;
            }
        }
    }
    func4();
}

repeat4();

about.addEventListener("click",()=>{
    window.location.href="about.html";
});

signup.addEventListener("click",()=>{
    window.location.href="login.html";
})
