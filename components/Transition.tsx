import {TransitionGroup, Transition as ReactTransition} from "react-transition-group"
  const TIMEOUT = 400

  const Transition = ({ children, location, appear = false, config, className="", style={}}) => {
    
    return (
     <TransitionGroup>
        <ReactTransition
          appear={appear}
          key={location}
          timeout={{
            enter: TIMEOUT,
            exit: TIMEOUT,
          }}
        >
          {status => (
            <div className={className} style={{...style, ...config[status]}}>
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
  export default Transition