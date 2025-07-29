export default function Footer() {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid #ccc' }}>
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  );
}
