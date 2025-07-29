import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
      <Image src={image} alt={title} width={400} height={250} />
      <div style={{ padding: '1rem' }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={link}>View Project</Link>
      </div>
    </div>
  );
}
