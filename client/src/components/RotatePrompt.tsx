import { useRotatePrompt } from '../hooks/useRotatePrompt';

export function RotatePrompt() {
  const shouldRotate = useRotatePrompt();
  return (
    <div className={`rotate-page${shouldRotate ? ' pleaseRotate' : ''}`}>
      <section />
    </div>
  );
}
