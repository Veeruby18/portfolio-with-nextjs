import ProjectCard from '../components/ProjectCard';

export async function getStaticProps() {
  const projects = [
    { id: 1, title: 'Project One', description: 'Description...', image: '/images/project1.png', link: '#' },
    { id: 2, title: 'Project Two', description: 'Description...', image: '/images/project1.png', link: '#' }
  ];
  return { props: { projects } };
}

export default function Projects({ projects }) {
  return (
    <div style={{ display: 'grid', gap: '1rem', padding: '2rem' }}>
      {projects.map(p => (
        <ProjectCard key={p.id} {...p} />
      ))}
    </div>
  );
}
