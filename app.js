gsap.registerPlugin(ScrollTrigger)


const firstLine = gsap.timeline({
    scrollTrigger: {
      trigger:'.line-one',
      pin: true,
      start: 'top top',
      scrub: true,
      markers: true
    }
  })
  
  firstLine
    .from('.line-one span', { y: '100vh', duration: 1, stagger: .2 })
    .to('.line-one', {background: 'yellow', duration: 1, delay: 1})
    .from('.sun', { x: '100vw',  duration: 1,})
    .to('.line-one span', { x: '-100vw', duration: 1.5, delay: 3})
    .to('.sun', {x: '-100vw', duration: 1.5}, '<' )
    .to('.line-one', {background: 'white', duration: 1}, '<')
  


    const secondLine = gsap.timeline({
        scrollTrigger: {
          trigger:'.line-two',
          pin: true,
          start: 'top top',
          scrub: true,
          markers: true
        }
      })

      secondLine.from('.line-two span',{scale: '100', duration: 1 })
      .to('.line-two span', {y: '-10vh', duration: .3, stagger: .2})


      const thirdLine = gsap.timeline({
        scrollTrigger: {
          trigger:'.line-three',
          pin: true,
          start: 'top top',
          scrub: true,
          markers: true
        }
      })

      thirdLine.from('.line-three span', {y: '100vh', duration: .3, stagger: .2})
      .to('.line-three span', {color: 'white', duration: .3})
      .to('.line-three',{backgroundPositionX:0, duration: .3}, '<')
      .from('.moon', {right: '-150px', duration: .3})



// YOUR CODE HERE