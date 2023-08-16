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

export const fadeInBg = {
  visible: {
    opacity: 0.05,
    y:0,
    zIndex: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      bounce : 0.4,
    }
  },
  hidden: {
    opacity: 0,
    y:100,
  }
}

export const fadeInImg = {
  visible: {
    opacity: 1,
    x:0,
    transition: {
      delay: 1,
      duration: 1.5,
      type: 'spring',
      bounce : 0.4,
    }
  },
  hidden: {
    opacity: 0,
    x:100,
  }
}

export const fadeIn = {
  visible: {
    opacity: 1,
    y:0,
    transition: {
      duration: 1.5,
      type: 'spring',
      bounce : 0.4,
      staggerChildren: 0.5,
    }
  },
  hidden: {
    opacity: 0,
    y:100,
  }
}

export const fadeinChildren = {
  visible: { 
    opacity: 1,
    y:0,
  },
  hidden: {
    opacity: 0,
    y:100,
  }
}