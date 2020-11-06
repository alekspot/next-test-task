const TIMEOUT = 400;

export const getTransitionText = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: `translateY(-100%)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `translateY(0px)`,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
    transform: `translateY(100%)`,
  },
}

export const getTransitionImg = {
  entering: {
    height: '100%',
  },
  entered: {
    height: 0,  
  },
  exiting: {
    height: 0,
  },
}

export const getHoverTransitionBar = (distance) => ({
  entering: {
    width: '100%',
  },
  entered: {
    width: distance,
  },
  exiting: {
    width: '100%',
  },
})

export const getEndTransitionBar = (distance) => ({
  entering: {
    width: distance
  },
  entered: {
    width: '100%'
  },
  exiting: {
    width: '100%'
  },
})

export const fadeIn = {
  entering: {
    opacity: 0,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  }
}