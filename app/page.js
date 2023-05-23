import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col scroll-smooth">
        <Navbar />
        <Hero />
        <div id="about" className="min-h-screen bg-secondary" />
        <div id="experience" className="min-h-screen bg-primary" />
        <div id="projects" className="min-h-screen bg-secondary" />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
}
