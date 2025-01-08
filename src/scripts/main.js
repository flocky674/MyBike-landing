"use strict";

import { gsap } from "gsap/dist/gsap";

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#menu") {
    document.body.classList.add("page__body--with-menu");
  } else {
    document.body.classList.remove("page__body--with-menu");
  }
});

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const isSuccess = Math.random() > 0.15

  if (isSuccess) {
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
  } else {
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
  }

  form.reset();

  setTimeout(() => {
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
}, 3000);

});

document.addEventListener("DOMContentLoaded", () => {
  const counter3 = document.querySelector(".counter-3");

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");

      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }

  const finalDiv = document.createElement("div");
  finalDiv.className = "num";
  finalDiv.textContent = "0";
  counter3.appendChild(finalDiv);

  function animate(counter, duration, delay = 0) {
    const numHeight = counter.querySelector(".num").clientHeight;
    const totalDistance =
      (counter.querySelectorAll(".num").length - 1) * numHeight;

    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  }

  animate(counter3, 3);
  animate(document.querySelector(".counter-2"), 4);
  animate(document.querySelector(".counter-1"), 1.5, 3);
});

gsap.to(".digit", {
  top: "-150px",
  stagger: {
    amount: 0.15,
  },
  delay: 3,
  duration: 0.8,
  ease: "power4.inOut",
});

gsap.from(".preloader-1", {
  width: 0,
  duration: 4,
  ease: "power2.inOut",
});

gsap.from(".preloader-2", {
  width: 0,
  delay: 1.2,
  duration: 1.5,
  ease: "power2.inOut",
});

gsap.to(".preloader", {
  background: "none",
  delay: 4,
  duration: 0.1,
});

gsap.to(".preloader-1", {
  rotate: 90,
  y: -50,
  duration: 0.4,
  delay: 4,
});

gsap.to(
  ".preloader-2",
  {
    x: -75,
    y: 75,
    duration: 0.4,
  },
  "<"
);

gsap.to(".preloader", {
  scale: 40,
  duration: 0.8,
  delay: 4.5,
  ease: "power2.inOut",
});

gsap.to(".preloader", {
  rotate: 45,
  y: 500,
  x: 2000,
  duration: 0.8,
  delay: 4.5,
  ease: "power2.inOut",
});

gsap.to(".preloader-screen", {
  opacity: 0,
  duration: 0.4,
  delay: 4.9,
  ease: "power1.inOut",
});
