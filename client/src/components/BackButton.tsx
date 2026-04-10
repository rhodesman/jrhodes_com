type BackButtonProps = {
  hidden: boolean;
  onClick: () => void;
};

export function BackButton({ hidden, onClick }: BackButtonProps) {
  return (
    <button
      type="button"
      className={`back-btn${hidden ? ' hidden' : ''}`}
      onClick={onClick}
    >
      <i className="fa-solid fa-circle-left" />
    </button>
  );
}
