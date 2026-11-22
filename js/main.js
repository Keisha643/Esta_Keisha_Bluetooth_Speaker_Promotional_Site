(() => {
    // console.log("JS Fired");

    //variables
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

  //functions

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index+1}`);

      // need to create title
      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;
      // need to create text
      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;
      // need to create image
      const imageElement = document.createElement('img');
      imageElement.src = infoBox.image;
      
      // append the title
      selected.appendChild(imageElement);
      selected.appendChild(titleElement);
      selected.appendChild(textElement);
      // append the image
    });
  }
  loadInfo();

})();
