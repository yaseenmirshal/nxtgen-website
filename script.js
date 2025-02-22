gsap.registerPlugin(ScrollTrigger);
let revealAnimations = [];

// Scroll
const lenis = new Lenis({
  lerp: 0.07
});

lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

// Reveal
document.querySelectorAll('.reveal').forEach(text => {
  // Split text
  let splitText = new SplitType(text, {
    type: 'words'
  })

  // Animation
  const section = text.closest('section');
  gsap.from(splitText.words, {
    opacity: 0,
    ease: 'none',
    stagger: 1,
    duration: 5,
    scrollTrigger: {
      trigger: section,
      start: 'top top', 
      end: () => `+=${window.innerHeight * 5}px`,
      scrub: true,
      // markers: true,
      pin: true,
    }
  })
})



gsap.config({ trialWarn: false });
console.clear();
gsap.registerPlugin(ScrollTrigger, SplitText);
const split = new SplitText("p", { type: "lines" });

split.lines.forEach((target) => {
  gsap.to(target, {
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      markers: true,
      scrub: 1,
      start: "top center",
      end: "bottom center"
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

// Animate each text container
gsap.utils.toArray(".text-container").forEach((section, index) => {
    gsap.to(section, {
        opacity: 1,
        transform: "translateY(0px)",
        duration: 1.5,
        scrollTrigger: {
            trigger: section,
            start: "top 70%",  // Animation starts when 70% of the section is in view
            end: "top 30%",
            scrub: true, // Smooth transition
        }
    });

    // Fade out as user scrolls down
    gsap.to(section, {
        opacity: 0,
        transform: "translateY(-50px)",
        duration: 1.5,
        scrollTrigger: {
            trigger: section,
            start: "top 30%",
            end: "top 10%",
            scrub: true,
        }
    });
});
