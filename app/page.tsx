import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contacts';

export default function Home() {
  return (
    <div className="drawer drawer-end">
      <label htmlFor="my-drawer"></label>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contacts />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
}
