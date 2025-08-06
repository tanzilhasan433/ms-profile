export const flipVariants = {
  initial: {
    opacity: 0,
    rotateY: -90
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 5.8,
      ease: [0.68, -0.55, 0.265, 1.55] // smooth easing
    }
  },
  exit: {
    opacity: 0,
    rotateY: 90,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  },
          flipbook: {
            id: 'walk-cycle',
            path: 'frames/walk',
            filename: '%1d',
            extension: 'jpg',
            count: 86,
            speed: 0.5
        }
};
