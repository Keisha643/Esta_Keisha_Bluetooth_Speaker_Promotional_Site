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
      title: 'Power On/Off Button',
      text: 'Turns the speaker on or off.',
      image: 'images/power-button-svgrepo-com.svg'
    },
    {
      title: 'Volume Up/Down Buttons',
      text: 'Increases and decreases the audio.',
      image: 'images/sound-loud-filled-svgrepo-com.svg'
    },
    {
      title: 'PLay/Pause Button',
      text: 'Controls audio playback.',
      image: 'images/play-pause-svgrepo-com.svg'
    },
    {
      title: 'Speaker Woofer',
      text: 'Reproduce low-frequency sounds (bass).',
      image: 'images/woofer-svgrepo-com.svg'
    },
    {
      title: 'Speaker Tweeter',
      text: 'Responsible for high-frequency sounds (crisp highs).',
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
