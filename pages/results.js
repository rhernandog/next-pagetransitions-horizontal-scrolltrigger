import { useRef } from "react";
import gsap from "gsap";

import { useIsomorphicLayoutEffect } from "../helpers/isomorphicEffect";

const Results = () => {
  const main = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={main}></div>
  );
};

export default Results;
