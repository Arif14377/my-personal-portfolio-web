import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaComment, FaDownload } from 'react-icons/fa';
import { FaCode, FaBriefcase } from 'react-icons/fa';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  const skills = [
    "Go (Golang)", "JavaScript", "React", "Redux", "HTML", "CSS",
    "Gin", "RESTful API Development", "JWT Authentication", "Argon2 Password Hashing",
    "Middleware Implementation", "PostgreSQL", "Redis", "Docker", "Docker Compose",
    "CI/CD (GitHub Actions)", "Linux Server Environment", "Git", "Postman", "REST API Testing"
  ];

  const experiences = [
    { role: "Senior Fullstack Developer", company: "Tech Startup", period: "2023 — Sekarang", desc: "Membangun dan memelihara aplikasi web skala besar menggunakan React, Node.js, dan PostgreSQL. Memimpin tim pengembang dalam implementasi fitur baru." },
    { role: "Fullstack Developer", company: "Digital Agency", period: "2021 — 2023", desc: "Mengembangkan solusi web custom untuk berbagai klien. Fokus pada performa, aksesibilitas, dan pengalaman pengguna yang optimal." },
    { role: "Frontend Developer", company: "Software House", period: "2019 — 2021", desc: "Membangun antarmuka pengguna responsif dengan React dan TypeScript. Berkolaborasi dengan tim desain untuk implementasi UI/UX." },
  ];

  const PROJECTS = [
    {
      id: 1,
      title: "Analytics Dashboard",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1551288049-bbda30a04da1?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1551288049-bbda30a04da1?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=600"
      ],
      description: "Real-time analytics platform with interactive data visualization and reporting tools.",
      problem: "Client needed a way to visualize complex datasets from multiple sources in real-time without performance degradation.",
      solution: "Built a high-performance dashboard using React with virtualized rendering. Integrated 12+ API endpoints and reduced initial load time by 40%.",
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "D3.js", "Redis"],
      link: "https://example.com"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Fullstack Application",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600"
      ],
      description: "Sistem e-commerce berskala besar dengan manajemen inventaris otomatis dan integrasi pembayaran.",
      problem: "Sistem lama mengalami race condition saat stok menipis dan proses checkout yang lambat.",
      solution: "Mengimplementasikan locking mechanism pada database PostgreSQL dan integrasi Midtrans. Menggunakan Redis untuk caching produk populer.",
      stack: ["Next.js", "Go", "PostgreSQL", "Redis", "Stripe", "Docker"],
      link: "https://example.com"
    },
    {
      id: 3,
      title: "AI Content Generator",
      category: "SaaS Product",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=600"
      ],
      description: "Platform berbasis AI untuk membantu konten kreator membuat draf artikel dan caption media sosial secara otomatis.",
      problem: "Proses pembuatan konten manual memakan waktu terlalu lama bagi tim marketing.",
      solution: "Integrasi OpenAI API dengan prompt engineering yang dioptimasi. Membangun sistem antrian (Queue) menggunakan BullMQ untuk menangani request AI yang berat.",
      stack: ["React", "Node.js", "OpenAI", "BullMQ", "Tailwind CSS", "MongoDB"],
      link: "https://example.com"
    },
    {
      id: 4,
      title: "Fleet Management System",
      category: "Enterprise Solution",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1519003722824-192d992a605b?auto=format&fit=crop&q=80&w=600"
      ],
      description: "Aplikasi pelacakan logistik real-time untuk memantau pergerakan armada pengiriman barang.",
      problem: "Kesulitan memantau lokasi kurir secara akurat dan jadwal pengiriman yang sering bentrok.",
      solution: "Menggunakan Google Maps API untuk geofencing dan Socket.io untuk pengiriman data koordinat real-time dari aplikasi driver.",
      stack: ["React Native", "Express", "Socket.io", "PostgreSQL", "Google Maps SDK"],
      link: "https://example.com"
    },
    {
      id: 5,
      title: "Learning Management System",
      category: "EdTech",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
      ],
      description: "Platform kursus online dengan fitur video streaming, kuis interaktif, dan sertifikat otomatis.",
      problem: "Biaya hosting video yang mahal dan proteksi konten yang lemah terhadap pembajakan.",
      solution: "Integrasi AWS S3 dan CloudFront untuk pengiriman video yang efisien, serta sistem autentikasi JWT yang ketat.",
      stack: ["Next.js", "Prisma", "AWS S3", "CloudFront", "Framer Motion"],
      link: "https://example.com"
    },
    {
      id: 6,
      title: "Health Tech Booking",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1505751172107-573967a4f9c5?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1505751172107-573967a4f9c5?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
      ],
      description: "Aplikasi pemesanan jadwal dokter dan konsultasi medis secara virtual.",
      problem: "Antrean fisik yang tidak teratur dan kesulitan pasien dalam mencari jadwal dokter yang kosong.",
      solution: "Membangun sistem kalender sinkron yang menangani timezone berbeda dan fitur pengingat otomatis via WhatsApp API.",
      stack: ["React", "Golang", "MySQL", "Firebase", "Twilio"],
      link: "https://example.com"
    },
    {
      id: 7,
      title: "Fintech Wallet",
      category: "Financial Services",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e41?auto=format&fit=crop&q=80&w=600"
      ],
      description: "Dompet digital untuk transfer antar pengguna dan pembayaran tagihan rutin.",
      problem: "Keamanan transaksi dan integritas data saldo yang sangat kritikal.",
      solution: "Mengadopsi arsitektur microservices dan database transaction yang ketat untuk memastikan tidak ada kehilangan data saat terjadi kegagalan sistem.",
      stack: ["Vue.js", "NestJS", "PostgreSQL", "Kafka", "Kubernetes"],
      link: "https://example.com"
    }
  ];

  const projectsPerPage = 4;
  const totalPages = Math.ceil(PROJECTS.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = PROJECTS.slice(startIndex, startIndex + projectsPerPage);

  return (
    <>
      <Navbar />
      {/* Banner */}
      <section className="bg-slate-950 text-white pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto pt-50 grid md:grid-cols-2 gap-12 items-center">
      
          {/* Bagian Teks */}
          <div className="space-y-6">
            <span className="text-blue-400 font-semibold tracking-widest text-sm uppercase">
              Fullstack Web Developer
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              Arif Rahman
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Fullstack Web Developer dengan pengalaman membangun aplikasi web modern
              menggunakan <span className="text-blue-300 font-medium">React</span> dan
              <span className="text-blue-300 font-medium"> Go (Golang)</span>.
              Ahli dalam mengembangkan RESTful APIs, sistem autentikasi, dan aplikasi
              berbasis database menggunakan PostgreSQL dan Redis.
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
                    className="p-3 bg-slate-900 border border-slate-700 rounded-full text-gray-300 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <item.Icon size={20} />
                  </a>
                ))}
              </div>
              <a
                href="https://drive.google.com/file/d/1p0iX_Hb5knD2N0ouEIjtsFxyhI1W1xre/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/40 rounded-full text-blue-200 hover:text-white hover:border-blue-300 hover:bg-blue-500/20 transition-all duration-300"
              >
                <FaDownload size={16} />
                <span className="text-sm font-semibold">My Resume</span>
              </a>
            </div>
          </div>
          {/* Bagian Visual/Placeholder */}
          <div className="relative w-full h-87.5 bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src="/my-foto.png" alt="Profile Photo" className="w-full h-full object-cover rounded-2xl" />
          </div>
      
        </div>
      </section>

      {/* About Me */}
      <section id="about-me" className="bg-slate-950 text-white py-20 px-6 md:px-24">
        <div className="mb-12">
          <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Tentang Saya</h3>
          <h2 className="text-4xl font-extrabold">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-blue-400 text-2xl" />
              <h3 className="text-2xl font-bold">Skills & Technologies</h3>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Saya memiliki pengalaman luas dalam pengembangan web fullstack, dari membangun arsitektur backend yang solid hingga antarmuka pengguna yang intuitif dan responsif.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-md text-sm text-blue-300 hover:bg-blue-900/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaBriefcase className="text-blue-400 text-2xl" />
              <h3 className="text-2xl font-bold">Pengalaman Kerja</h3>
            </div>
            <div className="space-y-8 border-l-2 border-slate-800 ml-3">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-2.25 top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                  <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                  <div className="text-blue-400 text-sm font-medium mb-2">{exp.company} • {exp.period}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id='projects' className="bg-slate-950 text-white py-20 px-6 md:px-24 min-h-screen relative overflow-hidden">
        {/* Header */}
        <div className="mb-12">
          <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Projects</h3>
          <h2 className="text-4xl font-extrabold">Portfolio</h2>
        </div>
        
        {/* Grid Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-slate-800">
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
              className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
          <div className={`absolute right-0 top-0 h-full w-full md:w-170 bg-slate-900 shadow-2xl p-8 overflow-y-auto transform transition-transform duration-500 ease-out ${selectedProject ? 'translate-x-0' : 'translate-x-full'}`}>
            {selectedProject && (
              <div className="space-y-8">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-slate-800 rounded-full text-gray-400 hover:text-white"
                >
                  <FaTimes size={24} />
                </button>

                <div className="pt-8">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{selectedProject.category}</span>
                  <h2 className="text-3xl font-bold mt-2">{selectedProject.title}</h2>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-700">
                  <img src={selectedImage} alt="Detail" className="w-full" />
                </div>

                <div className="flex gap-2 mt-4 overflow-x-auto">
                  {selectedProject.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className={`w-16 h-16 object-cover rounded cursor-pointer border-2 transition-all ${selectedImage === img ? 'border-blue-500' : 'border-slate-600 hover:border-slate-500'}`}
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
                      <span key={s} className="px-3 py-1 bg-slate-800 text-blue-300 text-xs rounded-full border border-slate-700">{s}</span>
                    ))}
                  </div>
                </div>

                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition-all w-full justify-center"
                >
                  Live Demo <FaExternalLinkAlt size={14} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section id='contact' className="bg-slate-950 text-white py-20 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 p-10 md:p-14">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Siap wujudkan ide produk Anda?</h2>
                <p className="text-gray-300 leading-relaxed max-w-2xl">
                  Ceritakan kebutuhan Anda, saya bantu dari perencanaan hingga implementasi.
                  Respon cepat langsung via WhatsApp.
                </p>
              </div>
              <div className="flex md:justify-end">
                <a
                  href="https://wa.me/6282114715378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all w-full md:w-auto justify-center shadow-lg shadow-emerald-500/20"
                >
                  <FaComment size={18} />
                  Kontak via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-slate-400">
          © 2026 Arif. All rights reserved.
        </div>
      </footer>
    </>
    
  );
};

export default Home;
