(() => {
    // console.log("JS Fired");


    // GSAP
      gsap.from(".hero-content", {
    y: 50,
    opacity: 0,
    duration: 1.5
});

      gsap.to(".Hotspot", {
    scale: 1.2,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    stagger: 0.1
});

      gsap.fromTo(
        ".img-before-wrapper",
        {
            width: "0%"
        },
        {
            width: "50%",
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#xray",
                start: "top 70%"
            }
        }
    );

      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".features",
            start: "top 70%"
        }
    });




    // Variables
  const hotspots = document.querySelectorAll(".Hotspot");
  const infoBoxes = [
    {
      title: 'USB-C Charger',
      text: 'Provide power to the speakers built-in battery, allowing it to charge and operate.',
      image: 'images/charger-svgrepo-com.svg'
    },
    {
      title: 'Power Control',
      text: 'Quickly power the speaker On or Off.',
      image: 'images/power-button-svgrepo-com.svg'
    },
    {
      title: 'Volume Controls',
      text: 'Easily adjust your audio levels.',
      image: 'images/sound-loud-filled-svgrepo-com.svg'
    },
    {
      title: 'Play & Pause',
      text: 'Convenient playback controls at your fingertips.',
      image: 'images/play-pause-svgrepo-com.svg'
    },
    {
      title: 'Premium Woofer',
      text: 'Deep bass performance that brings every track to life.',
      image: 'images/woofer-svgrepo-com.svg'
    },
    {
      title: 'Precision Tweeter',
      text: 'Delivers crisp highs and detailed audio clarity.',
      image: 'images/tweeter-svgrepo-com.svg'
    },
  ]

  const features = document.querySelectorAll(".feature-card")
.forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            y: -10,
            duration: 0.3
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            y: 0,
            duration: 0.3
        });

    });

});

  const slider =
document.querySelector("#comparisonSlider");

const beforeContainer =
document.querySelector(".img-before-wrapper");

const sliderLine =
document.querySelector(".slider-line");

if (slider) {
    slider.addEventListener("input", () => {

        beforeContainer.style.width =
        `${slider.value}%`;

        sliderLine.style.left =
        `${slider.value}%`;

    });
}

  gsap.from(".spec-box", {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    scrollTrigger: {
        trigger: ".spec-box",
        start: "top 75%"
    }
});


  // ScrollTrigger
  ScrollTrigger.create({
    trigger: "#features",
    start: "top center",

    onEnter: () => {
        document
            .querySelector('a[href="#features"]')
            .classList.add("active");
    }
});

  // Functions

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index+2}`);

      // need to create title
      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;
      // need to create text
      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;
      // need to create image
      const imageElement = document.createElement('img');
      imageElement.src = infoBox.image;
      
      if (selected) {
    selected.appendChild(imageElement);
    selected.appendChild(titleElement);
    selected.appendChild(textElement);
      }
    });
  }
  loadInfo();

})();
