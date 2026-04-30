import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaComment, FaDownload } from 'react-icons/fa';
import { FaCode, FaBriefcase } from 'react-icons/fa';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      // Kunci scroll pada body saat sidebar terbuka
      document.body.style.overflow = 'hidden';
      setSelectedImage(selectedProject.image);
    } else {
      // Kembalikan scroll saat sidebar ditutup
      document.body.style.overflow = 'unset';
      setSelectedImage(null);
    }

    // Cleanup function untuk memastikan scroll kembali normal jika komponen unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsLight(savedTheme === 'light');
      return;
    }
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setIsLight(prefersLight);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  const skills = [
    "Go (Golang)", "JavaScript", "React", "Redux", "Vite", "Tailwind CSS",
    "Gin", "RESTful API Development", "JWT Authentication", "Argon2 Password Hashing",
    "Middleware Implementation", "PostgreSQL", "Redis", "WebSocket", "Docker", "Docker Compose",
    "CI/CD (GitHub Actions)", "Linux Server Environment", "Git", "Swaggo", "REST API Testing"
  ];

  const experiences = [
    {
      role: "Backend Web Developer",
      company: "PT Nashta Global Utama",
      period: "Apr 2026 - May 2026",
      desc: "Mengembangkan Smart Links, URL shortener berperforma tinggi dengan analytics real-time berbasis Go, PostgreSQL, dan WebSocket."
    },
    {
      role: "Fullstack Web Developer",
      company: "Koda Tech Academy",
      period: "Des 2025 - Apr 2026",
      desc: "Membangun aplikasi fullstack menggunakan React dan Go, termasuk sistem autentikasi JWT, caching Redis, serta penerapan Clean Architecture."
    },
    {
      role: "Fullstack Web Developer (Bootcamp Projects)",
      company: "Koda Tech Academy",
      period: "Jan 2026 - Apr 2026",
      desc: "Mengembangkan proyek Coffee Shop Ecommerce dan Shorten (URL Shortener) dengan fitur end-to-end dari frontend, backend, database, hingga CI/CD."
    },
  ];

  const PROJECTS = [
    {
      id: 1,
      title: "Smart Links",
      category: "Backend & Analytics Platform",
      image: "https://images.unsplash.com/photo-1551288049-bbda30a04da1?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1551288049-bbda30a04da1?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600"
      ],
      description: "URL shortener dengan analytics real-time untuk memantau performa link dan perilaku pengunjung. Keterangan: fokus saya pada backend service, data processing, dan optimasi query analytics.",
      problem: "Dibutuhkan sistem short link bertrafik tinggi dengan pelacakan klik detail dan pembaruan analytics langsung.",
      solution: "Membangun REST API Go dengan Clean Architecture, indexing PostgreSQL untuk query time-series, serta update dashboard real-time via WebSocket.",
      stack: ["Go (Golang)", "PostgreSQL", "REST API", "WebSocket", "Clean Architecture", "Indexing"],
      link: "https://github.com/Arif14377"
    },
    {
      id: 2,
      title: "Coffee Shop Ecommerce",
      category: "Fullstack Application",
      image: "/coffee-shop-1.png",
      images: [
        "/coffee-shop-1.png",
        "/coffee-shop-auth.png",
        "/coffee-shop-order.png"
      ],
      description: "Aplikasi e-commerce fullstack dengan alur belanja lengkap dari autentikasi hingga checkout dan riwayat pesanan. Keterangan: proyek ini dikerjakan end-to-end untuk menguji integrasi frontend, backend, cache, dan CI/CD.",
      problem: "Membutuhkan arsitektur aplikasi yang maintainable, aman, dan tetap responsif saat beban data meningkat.",
      solution: "Mengimplementasikan backend Go (Gin) + frontend React, JWT auth + OTP, Argon2 hashing, Redis caching, Docker Compose, dan CI/CD GitHub Actions.",
      stack: ["React", "Redux", "Go (Golang)", "Gin", "PostgreSQL", "Redis", "JWT", "Argon2", "Docker Compose", "GitHub Actions"],
      link: "https://github.com/Arif14377"
    },
    {
      id: 3,
      title: "Shorten",
      category: "Fullstack URL Shortener",
      image: "/short-link-landing.png",
      images: [
        "/short-link-landing.png",
        "short-link-auth.png",
        "/short-link-create.png",
        "/short-link-dashboard.png",
        "/short-link-custom.png",
        "/short-link-profile.png",
        "/short-link-edit.png",
        "/short-link-404.png"
      ],
      description: "URL shortener fullstack dengan autentikasi, manajemen link personal, redirect publik, dan profile management. Keterangan: menekankan keamanan auth, validasi slug, serta caching Redis untuk performa listing link.",
      problem: "Perlu sistem short link yang aman, fleksibel (custom slug), dan cepat diakses user.",
      solution: "Membangun frontend React (Vite + Tailwind), backend Go (Gin), validasi slug, soft delete, Redis caching, serta upload foto profil multipart.",
      stack: ["React", "Vite", "Tailwind CSS", "Go (Golang)", "Gin", "PostgreSQL", "Redis", "JWT", "Argon2", "pgx"],
      link: "https://github.com/Arif14377"
    },
    {
      id: 4,
      title: "Coffee Shop Backend API (Express.js)",
      category: "Backend Application",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600"
      ],
      description: "Backend API Coffee Shop berbasis Express.js untuk autentikasi, katalog produk, cart, checkout, dan order history. Keterangan: desain endpoint dibuat interchangeable dengan implementasi Golang agar switching stack backend tetap mudah.",
      problem: "Diperlukan backend yang fleksibel untuk pembelajaran dan eksperimen stack tanpa mengubah kontrak API di sisi frontend.",
      solution: "Menerapkan struktur modular Express.js, standardisasi response format, JWT auth middleware, serta desain API contract yang konsisten agar dapat dipindahkan ke Go dengan perubahan minimal.",
      stack: ["Express.js", "Node.js", "PostgreSQL", "JWT", "REST API", "Redis", "Docker"],
      link: "https://github.com/Arif14377"
    },
  ];

  const projectsPerPage = 4;
  const totalPages = Math.ceil(PROJECTS.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = PROJECTS.slice(startIndex, startIndex + projectsPerPage);

  return (
    <>
      <div className={isLight ? 'light-theme' : ''}>
      <Navbar isLight={isLight} onToggleTheme={() => setIsLight((prev) => !prev)} />
      {/* Banner */}
      <section id="home" className="bg-[#0b0e11] text-white pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto pt-50 grid md:grid-cols-2 gap-12 items-center">
      
          {/* Bagian Teks */}
          <div className="space-y-6">
            <span className="text-amber-400 font-semibold tracking-widest text-sm uppercase">
              Fullstack Web Developer
            </span>
            <h1 className="hero-name text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              Arif Rahman
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Fullstack Web Developer dengan pengalaman membangun aplikasi web modern menggunakan
              <span className="text-amber-300 font-medium"> React</span> dan
              <span className="text-amber-300 font-medium"> Go (Golang)</span>.
              Berfokus pada backend development, RESTful API, autentikasi JWT, Redis caching,
              serta implementasi Clean Architecture untuk layanan web yang scalable.
            </p>
            {/* Ikon Sosial */}
            <div className="flex items-center justify-between gap-4 pt-4">
              <div className="flex gap-4">
                {[
                  { Icon: FaGithub, link: "https://www.github.com/Arif14377/" },
                  { Icon: FaLinkedin, link: "https://www.linkedin.com/arifrahman03/" },
                  { Icon: FaEnvelope, link: "mailto:arifrahman14377@gmail.com" },
                  { Icon: FaComment, link: "https://wa.me/6282114715378/" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="p-3 bg-neutral-900 border border-neutral-700 rounded-full text-gray-300 hover:text-amber-300 hover:border-amber-300 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <item.Icon size={20} />
                  </a>
                ))}
              </div>
              <a
                href="https://drive.google.com/file/d/1p0iX_Hb5knD2N0ouEIjtsFxyhI1W1xre/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 border border-amber-400/40 rounded-full text-amber-200 hover:text-white hover:border-amber-300 hover:bg-amber-400/20 transition-all duration-300"
              >
                <FaDownload size={16} />
                <span className="text-sm font-semibold">My Resume</span>
              </a>
            </div>
          </div>
          {/* Bagian Visual/Placeholder */}
          <div className="relative w-full h-87.5 bg-linear-to-br from-neutral-900 to-neutral-800 rounded-2xl border border-neutral-700 shadow-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src="/my-foto.png" alt="Profile Photo" className="w-full h-full object-cover rounded-2xl" />
          </div>
      
        </div>
      </section>

      {/* About Me */}
      <section id="about-me" className="bg-[#0b0e11] text-white py-20 px-6 md:px-24">
        <div className="mb-12">
          <h3 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-2">Tentang Saya</h3>
          <h2 className="text-4xl font-extrabold">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-amber-400 text-2xl" />
              <h3 className="text-2xl font-bold">Skills & Technologies</h3>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Saya berpengalaman mengembangkan aplikasi fullstack dari sisi frontend hingga backend, dengan fokus utama pada arsitektur backend yang maintainable, performa database, serta integrasi CI/CD.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-md text-sm text-amber-300 hover:bg-amber-500/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaBriefcase className="text-amber-400 text-2xl" />
              <h3 className="text-2xl font-bold">Pengalaman Kerja</h3>
            </div>
            <div className="space-y-8 border-l-2 border-neutral-800 ml-3">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-2.25 top-1.5 w-4 h-4 bg-amber-400 rounded-full border-4 border-[#0b0e11]"></div>
                  <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                  <div className="text-amber-400 text-sm font-medium mb-2">{exp.company} • {exp.period}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id='projects' className="bg-[#0b0e11] text-white py-20 px-6 md:px-24 min-h-screen relative overflow-hidden">
        {/* Header */}
        <div className="mb-12">
          <h3 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-2">Projects</h3>
          <h2 className="text-4xl font-extrabold">Portfolio</h2>
        </div>
        
        {/* Grid Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-neutral-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-1">{project.title}</h4>
                <p className="text-gray-500 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-lg hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === page
                    ? 'bg-amber-400 text-neutral-950'
                    : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-lg hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
            </button>
          </div>
        )}

        {/* Sidebar Detail Project */}
        <div className={`fixed inset-0 z-50 transition-visibility duration-300 ${selectedProject ? 'visible' : 'invisible'}`}>
          {/* Overlay Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${selectedProject ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Sidebar Content */}
          <div className={`absolute right-0 top-0 h-full w-full md:w-170 bg-neutral-900 shadow-2xl p-8 overflow-y-auto transform transition-transform duration-500 ease-out ${selectedProject ? 'translate-x-0' : 'translate-x-full'}`}>
            {selectedProject && (
              <div className="space-y-8">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-neutral-800 rounded-full text-gray-400 hover:text-white"
                >
                  <FaTimes size={24} />
                </button>

                <div className="pt-8">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">{selectedProject.category}</span>
                  <h2 className="text-3xl font-bold mt-2">{selectedProject.title}</h2>
                </div>

                <div className="rounded-xl overflow-hidden border border-neutral-700 aspect-video bg-neutral-800">
                  <img src={selectedImage} alt="Detail" className="w-full h-full object-cover" />
                </div>

                <div className="flex gap-2 mt-4 overflow-x-auto">
                  {selectedProject.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className={`w-16 h-16 object-cover rounded cursor-pointer border-2 transition-all ${selectedImage === img ? 'border-amber-400' : 'border-neutral-600 hover:border-neutral-500'}`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-xs font-bold text-gray-500 uppercase">Problem</h5>
                    <p className="text-gray-300">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-500 uppercase">Solution</h5>
                    <p className="text-gray-300">{selectedProject.solution}</p>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-gray-500 uppercase mb-3">Stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map(s => (
                      <span key={s} className="px-3 py-1 bg-neutral-800 text-amber-300 text-xs rounded-full border border-neutral-700">{s}</span>
                    ))}
                  </div>
                </div>

                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 px-6 py-3 rounded-lg font-bold transition-all w-full justify-center"
                >
                  Live Demo <FaExternalLinkAlt size={14} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section id='contact' className="bg-[#0b0e11] text-white py-20 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="contact-card relative overflow-hidden rounded-3xl border border-neutral-800 bg-linear-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-10 md:p-14">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-400/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-300/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Siap wujudkan ide produk Anda?</h2>
                <p className="text-gray-300 leading-relaxed max-w-2xl">
                  Jika kamu butuh Fullstack Web Developer untuk membangun API, sistem autentikasi, atau aplikasi berbasis Go dan React, saya siap bantu dari desain sampai implementasi.
                </p>
              </div>
              <div className="flex md:justify-end">
                <a
                  href="https://wa.me/6282114715378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-neutral-950 px-8 py-4 rounded-xl font-bold transition-all w-full md:w-auto justify-center shadow-lg shadow-amber-400/20"
                >
                  <FaComment size={18} />
                  Kontak via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-800/70 bg-[#0b0e11]">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-neutral-400">
          © 2026 Arif. All rights reserved.
        </div>
      </footer>
      </div>
    </>
    
  );
};

export default Home;
