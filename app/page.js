import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home" className="min-h-screen bg-primary" />
      <div id="about" className="min-h-screen bg-secondary" />
      <div id="experience" className="min-h-screen bg-primary" />
      <div id="projects" className="min-h-screen bg-secondary" />
    </>
  );
}
