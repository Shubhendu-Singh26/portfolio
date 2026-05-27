import React from "react";

const SKILLS = [
  // ---------- LANGUAGES ----------
  {
    id: "javascript",
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#F7DF1E" />
        <text x="50%" y="68%" textAnchor="middle" fontSize="48" fontWeight="700" fill="#000">JS</text>
      </svg>
    ),
  },
  {
    id: "java",
    name: "Java",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#5382A1" />
        <text x="50%" y="68%" textAnchor="middle" fontSize="36" fontWeight="700" fill="#fff">Java</text>
      </svg>
    ),
  },
  {
    id: "python",
    name: "Python",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#3776AB" d="M64 8c-10 0-18 8-18 18v12h36V26c0-10-8-18-18-18z"/>
        <path fill="#FFE873" d="M64 120c10 0 18-8 18-18v-12H46v12c0 10 8 18 18 18z"/>
      </svg>
    ),
  },

  // ---------- SEPARATE C ----------
  {
    id: "c_lang",
    name: "C",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#004482" />
        <text x="50%" y="68%" textAnchor="middle" fontSize="40" fontWeight="700" fill="#fff">C</text>
      </svg>
    ),
  },

  // ---------- SEPARATE C++ ----------
  {
    id: "cpp_lang",
    name: "C++",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#00599C" />
        <text x="50%" y="68%" textAnchor="middle" fontSize="32" fontWeight="700" fill="#fff">C++</text>
      </svg>
    ),
  },

  {
    id: "html",
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#E44D26" d="M3 2l1.7 19.2L12 22l7.3-0.8L21 2H3z"/>
        <path fill="#fff" d="M7 8h10l-.5 6-4.5 2-4.5-2L7 8z"/>
      </svg>
    ),
  },
  {
    id: "css",
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12">
        <path fill="#1572B6" d="M3 2h18l-1.7 19.2L12 22 4.7 21.2 3 2z"/>
        <path fill="#fff" d="M7 8h10l-.6 6-4.4 2-4.4-2L7 8z"/>
      </svg>
    ),
  },
  {
    id: "sql",
    name: "SQL",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#2D6A9F" />
        <text x="50%" y="64%" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff">SQL</text>
      </svg>
    ),
  },

  // ---------- DEV TOOLS ----------
  {
    id: "vscode",
    name: "VS Code",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#007ACC" />
        <text x="50%" y="68%" textAnchor="middle" fontSize="26" fontWeight="700" fill="#fff">VS</text>
      </svg>
    ),
  },
  {
    id: "eclipse",
    name: "Eclipse",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <circle cx="64" cy="56" r="36" fill="#2C2F33" />
        <text x="50%" y="78%" textAnchor="middle" fontSize="14" fill="#fff">Eclipse</text>
      </svg>
    ),
  },
  {
    id: "androidstudio",
    name: "Android Studio",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#3DDC84" />
        <text x="50%" y="66%" textAnchor="middle" fontSize="18" fontWeight="700" fill="#002B36">
          Android
        </text>
      </svg>
    ),
  },

  // ---------- TECHNOLOGIES ----------
  {
    id: "react",
    name: "React.js",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <g fill="none" stroke="#61DAFB" strokeWidth="6">
          <ellipse cx="64" cy="64" rx="46" ry="18" />
          <ellipse cx="64" cy="64" rx="46" ry="18" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="46" ry="18" transform="rotate(120 64 64)" />
        </g>
        <circle cx="64" cy="64" r="10" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    id: "node",
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#3C873A" d="M64 4c33 0 60 27 60 60s-27 60-60 60S4 97 4 64 31 4 64 4z"/>
        <path fill="#fff" d="M48 88l32-16V56L48 72v16z"/>
      </svg>
    ),
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#7952B3" />
        <text x="50%" y="64%" textAnchor="middle" fontSize="32" fontWeight="700" fill="#fff">B</text>
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <path fill="#06B6D4" d="M24 34c-5.3 0-9.6-3-12-7 2.4-4 6.8-7 12-7 8.3 0 12 7 12 7-3.6 6.5-8.7 7-12 7z"/>
        <path fill="#0EA5A4" d="M24 18c-5.3 0-9.6-3-12-7 2.4-4 6.8-7 12-7 8.3 0 12 7 12 7-3.6 6.5-8.7 7-12 7z"/>
      </svg>
    ),
  },
  {
    id: "huggingface",
    name: "Hugging Face API",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" rx="10" fill="#FF6E00" />
        <text x="50%" y="68%" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff">HF</text>
      </svg>
    ),
  },
  {
    id: "github",
    name: "GitHub",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <circle cx="64" cy="64" r="60" fill="#0B0D0F" />
        <path
          d="M64 12c-29 0-52 23-52 52 0 23 15 42 36 49 3 1 4-1 4-3v-11c-14 3-17-6-17-6-2-5-6-7-6-7-5-4 1-4 1-4 6 1 9 6 9 6 5 9 13 6 16 5 1-4 3-6 6-8-11-1-22-6-22-25 0-6 2-11 5-16-1-1-6-9 0-19 0 0 5-1 18 7 10-3 20-3 30 0 13-8 18-7 18-7 6 10 1 18 0 19 3 5 5 10 5 16 0 19-11 24-22 25 3 3 6 8 6 16v21c0 2 1 4 4 3 21-7 36-26 36-49 0-29-23-52-52-52z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#13AA52" d="M64 8s10 8 12 16c3 11-6 26-12 36-6-10-15-25-12-36 2-8 12-16 12-16z"/>
        <path fill="#1FA768" d="M64 40s6 6 6 12c0 11-6 20-6 20s-6-9-6-20c0-6 6-12 6-12z"/>
      </svg>
    ),
  },
];

const Skills = () => {
  return (
    <section id="skills" className="content py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center">
          <h3 className="section-title inline-block">Tools &amp; Technologies</h3>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-gray-400 text-[15px] md:text-lg">
              A structured overview of my technical expertise — programming languages,
              developer tools, frameworks, and technologies I use to build high-quality,
              scalable applications.
            </p>
            <p className="mt-2 text-gray-500 text-sm md:text-base">
              Clean code, modern UI development, efficient problem-solving, and production-ready engineering.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {SKILLS.map((s) => (
              <div
                key={s.id}
                className="group bg-[#0f1115] rounded-lg p-6 flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(2,6,23,0.5)]"
              >
                <div className="rounded-md p-3 bg-[#0b0d10] border border-transparent group-hover:border-picto-primary transition-all">
                  <div className="w-14 h-14 flex items-center justify-center">{s.icon}</div>
                </div>
                <div className="mt-4 text-sm font-semibold text-gray-100 text-center">
                  {s.name}
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-picto-primary transition-all group-hover:w-10" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
