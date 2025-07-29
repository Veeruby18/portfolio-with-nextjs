export default function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows={5} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
