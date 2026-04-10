import { useEffect, useRef, useState } from 'react';
import { BizCard } from './components/BizCard';
import { Options } from './components/Options';
import { BackButton } from './components/BackButton';
import { RotatePrompt } from './components/RotatePrompt';
import { newman, sysReady } from './lib/ansi';

type View = 'bizcard' | 'options';

export function App() {
  const [view, setView] = useState<View>('bizcard');
  // Count of "extra" back button clicks after the back button has already
  // hidden itself. Replicates the v1.x easter egg.
  const extraClicks = useRef(0);

  // Log the Jurassic Park system banner to the console on first mount.
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(sysReady);
  }, []);

  const showOptions = () => {
    if (view === 'bizcard') setView('options');
  };

  const handleBack = () => {
    if (view === 'options') {
      setView('bizcard');
      extraClicks.current = 0;
      return;
    }

    // The bizcard is already showing — the user is smashing the hidden back
    // button. Re-run the original Jurassic Park easter egg.
    extraClicks.current += 1;
    const f = extraClicks.current;
    if (f === 1) {
      // eslint-disable-next-line no-console
      console.log('> access security');
      // eslint-disable-next-line no-console
      console.log('access: PERMISSION DENIED.');
    } else if (f === 2) {
      // eslint-disable-next-line no-console
      console.log('> access security grid');
      // eslint-disable-next-line no-console
      console.log('access: PERMISSION DENIED.');
    } else {
      // eslint-disable-next-line no-console
      console.log('> access main security grid');
      // eslint-disable-next-line no-console
      console.log('access: PERMISSION DENIED....and....');
      const n = 34;
      for (let i = 0; i < n; i++) {
        const iteration = i;
        setTimeout(() => {
          // eslint-disable-next-line no-console
          console.log("YOU DIDN'T SAY THE MAGIC WORD!");
          // eslint-disable-next-line no-console
          console.log('\n');
          if (iteration === n - 1) {
            // eslint-disable-next-line no-console
            console.log(newman);
          }
        }, 150 * iteration);
      }
    }
  };

  return (
    <>
      <RotatePrompt />
      <div className="container">
        <BizCard hidden={view !== 'bizcard'} onClick={showOptions} />
        <Options hidden={view !== 'options'} />
        <BackButton hidden={view !== 'options'} onClick={handleBack} />
      </div>
    </>
  );
}
