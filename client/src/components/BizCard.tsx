type BizCardProps = {
  hidden: boolean;
  onClick: () => void;
};

export function BizCard({ hidden, onClick }: BizCardProps) {
  return (
    <section
      id="bizcard"
      className={`row justify-content-md-center${hidden ? ' hidden' : ' active'}`}
      onClick={onClick}
    >
      <div className="col-sm">
        <span className="logo" />
      </div>
      <div className="col-sm">
        <div className="about-me">
          <h1>Jason Rhodes</h1>
          <ul>
            <li>UX Designer &amp; Developer</li>
            <li>Full Stack Developer</li>
            <li>Car Enthusiast</li>
            <li>Tech Nerd</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
