export const idleSVG = {
  visible: {
    y:[0, 20, 0],
    transition: {
      duration: 3,
      ease:'easeInOut',
      repeat: Infinity,
    }
  }
}

export const openNav = {
  visible: {
    opacity: 1,
    scale : 1 ,
    x : 0,
    y : 0,
    transition:{
      duration: 0.3,
      ease: 'easeInOut',
    }
  },
  hidden: {
    opacity: 0,
    scale : 0.5,
    x : 100,
    y : -100,
    transition:{
      duration: 0.3,
      ease: 'easeInOut',
    }
  },
  exit: {
    opacity: 0,
    scale : 0.5,
    x : 100,
    y : -100,
    transition:{
      duration: 0.3,
      ease: 'easeInOut',
    }
  },
}