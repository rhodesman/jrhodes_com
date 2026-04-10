import { useEffect, useState } from 'react';

// Returns true when the viewport is narrow enough that we want to show
// the "please rotate your phone" prompt. Matches the original v1.x
// behavior: threshold at 420px.
export function useRotatePrompt(threshold = 420): boolean {
  const [shouldRotate, setShouldRotate] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < threshold,
  );

  useEffect(() => {
    const onResize = () => setShouldRotate(window.innerWidth < threshold);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [threshold]);

  return shouldRotate;
}
