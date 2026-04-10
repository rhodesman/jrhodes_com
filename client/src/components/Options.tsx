import { projectColumns } from '../data/projects';

type OptionsProps = {
  hidden: boolean;
};

export function Options({ hidden }: OptionsProps) {
  return (
    <section
      id="options"
      className={`row justify-content-md-center${hidden ? ' hidden' : ''}`}
    >
      {projectColumns.map((column) => (
        <div key={column.key} className={`col-sm ${column.key}`}>
          <div className="list">
            <span>{column.title}</span>
            <div className="proj-list">
              <ul>
                {column.projects.map((project) => (
                  <li key={project.name}>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
