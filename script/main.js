// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      dataArr = Object.keys(data);
      dataArr.map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .querySelector(`[data-node-name*="${customData}"]`)
              .setAttribute("src", data[customData]);
          } else {
            document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
          }
        }

        

        // Check if the iteration is over
        // Run amimation if so
        if ( dataArr.length === dataArr.indexOf(customData) + 1 ) {
          animationTimeline();
        } 
      });
    });
};


function launchConfetti() {
  const colors = ["#ffb347", "#ff69b4", "#6ec6ff", "#81c784", "#fff176", "#f06292"];
  const confetti = document.querySelector('.confetti');
  confetti.innerHTML = '';
  for (let i = 0; i < 80; i++) {
    const div = document.createElement('div');
    div.className = 'confetti-piece';
    div.style.background = colors[Math.floor(Math.random() * colors.length)];
    div.style.left = Math.random() * 100 + 'vw';
    div.style.top = '-40px';
    confetti.appendChild(div);
    TweenMax.to(div, 2 + Math.random() * 2, {
      y: 100 + Math.random() * window.innerHeight,
      x: (Math.random() - 0.5) * 200,
      rotation: Math.random() * 720,
      ease: Power2.easeIn,
      delay: Math.random() * 0.5
    });
  }
}

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];
  // Try to autoplay when animation starts
const audio = document.getElementById("birthday-audio");
if (audio) {
  audio.currentTime = 0;
  audio.play().then(() => {
    document.getElementById("play-audio-btn").style.display = "none";
  }).catch(() => {});
}

// Also allow manual play with the button
document.getElementById("play-audio-btn").addEventListener("click", function() {
  const audio = document.getElementById("birthday-audio");
  if (audio) {
    audio.play();
  }
  this.style.display = "none"; // Hide button after playing
});


    
  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    // .from(
    //   ".dp",
    //   0.5,
    //   {
    //     scale: 3.5,
    //     opacity: 0,
    //     x: 25,
    //     y: -25,
    //     rotationZ: -45
    //   },
    //   "-=2"
    // )
    .from(
  ".dp",
  1,
  {
    scale: 0.2,
    opacity: 0,
    rotation: -30,
    y: -100,
    boxShadow: "0 0 0 0 #ffb347",
    ease: Bounce.easeOut
  },
  "-=2"
)
.to(
  ".dp",
  0.7,
  {
    rotation: 5,
    boxShadow: "0 0 40px 10px #ffb347",
    filter: "brightness(1.2)",
    ease: Power2.easeInOut
  },
  "-=0.5"
)
.to(
  ".dp",
  0.5,
  {
    rotation: 0,
    boxShadow: "0 0 0 0 #ffb347",
    filter: "brightness(1)",
    ease: Power2.easeOut
  }
)

.fromTo(
  ".crown",
  1.2,
  {
    opacity: 0,
    y: -100,
    scale: 0.5,
    rotation: -90
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    rotation: 0,
    ease: Bounce.easeOut
  },
  "-=0.8"
)

    .from(".hat", 0.5, {
      x: 2,
      y: 2,
      rotation: -18,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
  .from(
  ".beforeoutro p",
  1,
  ideaTextTrans
)
.to(
  ".beforeoutro p",
  1,
  {
    opacity: 0,
    y: 20
  },
  "+=5" 
)
.staggerFrom(
  ".nine p",
  1,
  ideaTextTrans,
  1.2
)
.add(() => {
  launchConfetti();
}, "+=0.2")
.add(() => {
  // Animate cartoon stars
  TweenMax.staggerTo(
    ".star",
    1.2,
    {
      opacity: 1,
      y: -80,
      rotation: 30,
      scale: 1.2,
      ease: Bounce.easeOut,
      repeat: 1,
      yoyo: true
    },
    0.3
  );
}, "+=0.5")
.to(
  ".last-smile",
  0.5,
  {
    rotation: 90
  },
  "+=1"
);

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
replyBtn.addEventListener("click", () => {
  tl.restart();
  const audio = document.getElementById("birthday-audio");
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }
});
};

// Run fetch and animation in sequence
fetchData();