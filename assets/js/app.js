const bar = document.querySelector(".loading__bar--inner");
const counterNumber = document.querySelector(".loading__counter--number");
let c = 0;

let interval = setInterval(() => {
  bar.style.width = c + "%";
  counterNumber.innerText = c + "%";
  c++;
  if (c === 101) {
    clearInterval(interval);
    gsap.to(".loading__bar", {
      duration: 1,
      rotate: "90deg",
      height: "0.5px",
      //left: "1000%",
      opacity: "0",
    });
    gsap.to(".loading__text,.loading__counter", {
      duration: 0.5,
      opacity: 0,
    });
    gsap.to(".loading__box", {
      duration: 1,
      height: "500px",
      borderRadius: "50%",
    });
    gsap.to(".loading__svg", {
      duration: 10,
      opacity: 1,
      rotate: "360deg",
    });
    gsap.to(".loading__box", {
      delay: 1,
      border: "none",
    });
    gsap.to(".loading", {
      delay: 1,
      duration: 2,
      zIndex: 1,
      background: "transparent",
      opacity: 0.5,
    });
    gsap.to(".loading__svg", {
      delay: 1,
      duration: 200,
      rotate: "720deg",
    });
    //Delays after reload
    gsap.to("header", {
      duration: 1.5,
      delay: 1,
      top: "20",
    });
    gsap.to(".socials", {
      duration: 1.5,
      delay: 1.7,
      bottom: "8rem",
    });
    gsap.to(".scrollDown", {
      duration: 1.5,
      delay: 2.1,
      bottom: "0.75rem",
    });
    gsap.to(".intro", {
      duration: 1,
      delay: 3.5,
      opacity: 1,
      scale: 1,
    });
  }
}, 20);
