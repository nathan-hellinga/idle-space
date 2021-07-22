import { useEffect, useRef } from 'react'

function useInterval(callback, delay=null) {
  const savedCallback = useRef(callback)
  const last = useRef(performance.now());
  const init = useRef(performance.now());

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return
    }

    const id = setInterval(() => {
      const now = performance.now();
      const time = (now - init.current) / 1000;
      const delta = (now - last.current) / 1000;

      savedCallback.current({time, delta})
      last.current = now;
    }, delay)

    return () => clearInterval(id)
  }, [delay])
}

export default useInterval