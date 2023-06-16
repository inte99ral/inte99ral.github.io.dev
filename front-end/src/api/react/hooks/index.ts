import { useRef, useEffect } from 'react';

export const useEffectAfterMount = (func: any, deps: any) => {
  const afterMount = useRef(false);

  useEffect(() => {
    if (afterMount.current) func();
    else afterMount.current = false;
  }, deps);
};
