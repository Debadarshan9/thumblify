import { useEffect } from "react";
import Lenis from "lenis";

const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      smoothWheel: true,
      anchors: {
        offset: -100,
      },
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default LenisScroll;
