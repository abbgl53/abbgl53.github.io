// Multi-language Support
const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_btn: "Get in Touch",
        hero_subtitle: "C++ Software Developer",
        about_title: "Summary",
        about_text: "I am a software engineer with 3+ years of experience in software development; I have taken an active role especially in developing C++ and Linux based network and system applications; I effectively use AI tools, possess a research and development culture, adapt to changing requirements, and eager to learn new technologies.",
        skills_title: "Technical Skills",
        soft_skills_title: "Soft Skills",
        experience_title: "Professional Experience",
        education_title: "Education",
        projects_title: "Projects",
        cert_title: "Certifications",
        contact_title: "Contact",
        contact_subtitle: "You can use the following channels to connect with me.",
        location: "Istanbul, Turkey",
        footer_text: "© 2025 Ahmet Babaoğlu. All rights reserved.",
        technical_skills: ["C++", "Python", "Linux", "Docker", "SQL", "QT", "Git", "Selenium", "Flutter", "C#", "D", "Cross Compile", "Vibe Coding", "DPDK", "Deep Packet Inspection (DPI)"],
        soft_skills: ["Crisis Management", "Result Oriented", "Sense of Responsibility", "Team Player", "Analytical Thinking"],
        experience: [
            {
                date: "Jul 2022 — Continuing",
                role: "Computer Engineer",
                company: "Serrasoft Software Limited Company",
                desc: [
                    "Developed DPDK and C++ based correlation and DPI applications in line with low-latency principles.",
                    "Analyzed various protocols (TCP, UDP, QUIC) at the network layer level in high-traffic network environments, and improved filtering and network traffic processing processes.",
                    "Developed Linux-based system services; created utility tools for logging, monitoring, configuration, and performance measurement.",
                    "Took an active role in operational tasks including planning, development, delivery, and maintenance processes by communicating directly with customers in projects.",
                    "Developed multiplatform applications with Qt 6.",
                    "Developed stand-alone applications using Docker and cross-compile build systems for CI/CD.",
                    "Developed integration solutions that enable interaction of application components with external services via REST and SOAP.",
                    "Developed Sphinx-based technical documentation infrastructure and prepared documentation for various projects."
                ]
            },
            {
                date: "Jul 2020 — Sep 2021",
                role: "Intern",
                company: "Serrasoft Software Limited Company",
                desc: [
                    "Developed a Telegram bot for university catering services.",
                    "Made improvements to increase file integrity and security.",
                    "Developed a web scrapper for website categorization with Python."
                ]
            }
        ],
        education: [
            {
                date: "Sep 2025 — Continuing",
                degree: "Master's Degree",
                school: "Bolu Abant İzzet Baysal University",
                dept: "Computer Engineering"
            },
            {
                date: "Sep 2018 — Jun 2022",
                degree: "Bachelor's Degree",
                school: "Bolu Abant İzzet Baysal University",
                dept: "Computer Engineering"
            },
            {
                date: "Sep 2013 — Jun 2017",
                degree: "High School",
                school: "Gülizar Zeki Obdan Anatolian High School",
                dept: ""
            }
        ],
        projects: [
            {
                icon: "bot",
                title: "Browser Automation",
                desc: "Wrote various browser automation and test bots with Selenium."
            },
            {
                icon: "smartphone",
                title: "Mobile Apps",
                desc: "Developed custom mobile applications with Flutter."
            },
            {
                icon: "file-code",
                title: "Open Source CV Builder",
                desc: "Developed a JavaScript-based, open source CV creation application."
            },
            {
                icon: "cpu",
                title: "Embedded & IoT",
                desc: "Developed various hardware and IoT projects with embedded system development boards such as ESP8266 and Arduino."
            }
        ],
        certs: [
            "Necati Ergin C++ Programming Training",
            "Internal Auditor Training",
            "HackerRank | Python"
        ],
        lang_label: "EN"
    },
    tr: {
        nav_about: "Hakkımda",
        nav_skills: "Yetenekler",
        nav_experience: "Deneyim",
        nav_projects: "Projeler",
        nav_contact: "İletişim",
        hero_btn: "İletişime Geç",
        hero_subtitle: "C++ Yazılım Geliştirici",
        about_title: "Özet",
        about_text: "Yazılım geliştirme alanında 3+ yıl deneyime sahip; özellikle C++ ve Linux tabanlı ağ ve sistem uygulamaları geliştirme alanında aktif rol almış, yapay zeka araçlarını etkin kullanan, araştırma ve geliştirmeye yatkın, yeni teknolojileri öğrenmeye meraklı ve ekip çalışmasına uyumlu bir yazılım mühendisiyim.",
        skills_title: "Teknik Beceriler",
        soft_skills_title: "Sosyal Beceriler",
        experience_title: "Profesyonel Deneyim",
        education_title: "Eğitim",
        projects_title: "Projeler",
        cert_title: "Sertifikalar",
        contact_title: "İletişim",
        contact_subtitle: "Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.",
        location: "İstanbul, Türkiye",
        footer_text: "© 2025 Ahmet Babaoğlu. Tüm hakları saklıdır.",
        technical_skills: ["C++", "Python", "Linux", "Docker", "SQL", "Qt", "Git", "Selenium", "Flutter", "C#", "D", "Çapraz Derleme", "Vibe Coding", "DPDK", "Derin Paket İncelemesi (DPI)"],
        soft_skills: ["Kriz Yönetimi", "Sonuç Odaklılık", "Sorumluluk Bilinci", "Takım Çalışmasına Yatkınlık", "Analitik Düşünme"],
        experience: [
            {
                date: "Tem 2022 — Devam Ediyor",
                role: "Bilgisayar Mühendisi",
                company: "Serrasoft Yazılım Limited Şirketi",
                desc: [
                    "Düşük gecikme prensiplerine uygun olarak DPDK ve C++ tabanlı korelasyon ve DPI uygulamaları geliştirdim.",
                    "Yüksek trafikli ağ ortamlarında TCP, UDP ve QUIC gibi protokolleri ağ katmanı seviyesinde analiz ederek filtreleme ve ağ trafiği işleme süreçlerini iyileştirdim.",
                    "Linux tabanlı sistem servisleri geliştirdim; loglama, izleme, konfigürasyon ve performans ölçümü için yardımcı araçlar oluşturdum.",
                    "Projelerde müşterilerle doğrudan iletişim kurarak planlama, geliştirme, teslimat ve bakım süreçlerinde aktif rol aldım.",
                    "Qt 6 kullanarak çok platformlu uygulamalar geliştirdim.",
                    "Docker ve çapraz derleme altyapıları kullanarak CI/CD süreçlerine uygun, bağımsız uygulamalar geliştirdim.",
                    "Uygulama bileşenlerinin dış servislerle etkileşimini sağlayan REST ve SOAP tabanlı entegrasyon çözümleri geliştirdim.",
                    "Sphinx tabanlı teknik dokümantasyon altyapısı oluşturdum ve çeşitli projeler için teknik dokümantasyon hazırladım."
                ]
            },
            {
                date: "Tem 2020 — Eyl 2021",
                role: "Stajyer",
                company: "Serrasoft Yazılım Limited Şirketi",
                desc: [
                    "Üniversite yemekhane hizmetlerine yönelik bir Telegram botu geliştirdim.",
                    "Dosya bütünlüğü ve güvenliğini artırmaya yönelik iyileştirmeler yaptım.",
                    "Python kullanarak web sitesi kategorizasyonu için bir web kazıyıcı (web scraper) geliştirdim."
                ]
            }
        ],
        education: [
            {
                date: "Eyl 2025 — Devam Ediyor",
                degree: "Yüksek Lisans",
                school: "Bolu Abant İzzet Baysal Üniversitesi",
                dept: "Bilgisayar Mühendisliği"
            },
            {
                date: "Eyl 2018 — Haz 2022",
                degree: "Lisans",
                school: "Bolu Abant İzzet Baysal Üniversitesi",
                dept: "Bilgisayar Mühendisliği"
            },
            {
                date: "Eyl 2013 — Haz 2017",
                degree: "Lise",
                school: "Gülizar Zeki Obdan Anadolu Lisesi",
                dept: ""
            }
        ],
        projects: [
            {
                icon: "bot",
                title: "Tarayıcı Otomasyonları",
                desc: "Selenium kullanarak çeşitli tarayıcı otomasyon ve test botları geliştirdim."
            },
            {
                icon: "smartphone",
                title: "Mobil Uygulamalar",
                desc: "Flutter ile özel mobil uygulamalar geliştirdim."
            },
            {
                icon: "file-code",
                title: "Open Source CV Builder",
                desc: "JavaScript tabanlı, açık kaynak bir CV oluşturma uygulaması geliştirdim."
            },
            {
                icon: "cpu",
                title: "Gömülü Sistemler & IoT",
                desc: "ESP8266 ve Arduino gibi gömülü sistem geliştirme kartlarıyla çeşitli donanım ve IoT projeleri geliştirdim."
            }
        ],
        certs: [
            "Necati Ergin C++ Programlama Eğitimi",
            "İç Denetçi Eğitimi",
            "HackerRank | Python"
        ],
        lang_label: "TR"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function updateLanguage() {
    const langData = translations[currentLang];

    // Update Static Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) {
            el.textContent = langData[key];
        }
    });

    // Update Language Toggle Label
    document.getElementById('lang-toggle').textContent = langData.lang_label;

    // Update Technical Skills
    const techSkillsContainer = document.getElementById('technical-skills');
    techSkillsContainer.innerHTML = langData.technical_skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');

    // Update Soft Skills
    const softSkillsContainer = document.getElementById('soft-skills');
    softSkillsContainer.innerHTML = langData.soft_skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');

    // Update Experience
    const experienceTimeline = document.getElementById('experience-timeline');
    experienceTimeline.innerHTML = langData.experience.map(exp => `
        <div class="timeline-item">
            <span class="date">${exp.date}</span>
            <h3>${exp.role}</h3>
            <p style="color: var(--primary); font-weight: 600;">${exp.company}</p>
            <div class="glass card" style="margin-top: 1rem; padding: 1.5rem;">
                <ul style="list-style: none;">
                    ${exp.desc.map(item => `<li style="margin-bottom: 0.8rem;">• ${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    // Update Education
    const educationGrid = document.getElementById('education-grid');
    educationGrid.innerHTML = langData.education.map(edu => `
        <div class="glass card">
            <span class="date">${edu.date}</span>
            <h3>${edu.degree}</h3>
            <p>${edu.school}</p>
            ${edu.dept ? `<p style="opacity: 0.7;">${edu.dept}</p>` : ''}
        </div>
    `).join('');

    // Update Projects
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = langData.projects.map(project => `
        <div class="glass card">
            <i data-lucide="${project.icon}" style="color: var(--primary); margin-bottom: 1rem;"></i>
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        </div>
    `).join('');

    // Update Certs
    const certList = document.getElementById('cert-list');
    certList.innerHTML = langData.certs.map(cert => `<span class="skill-tag">${cert}</span>`).join('');

    // Re-create Icons
    lucide.createIcons();
}

// Initial Call
updateLanguage();

// Toggle Language
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');

    // Icons are re-created in updateLanguage or manually here if icons change
    const icon = themeToggle.querySelector('i');
    if (isDark) {
        icon.setAttribute('data-lucide', 'sun');
    } else {
        icon.setAttribute('data-lucide', 'moon');
    }
    lucide.createIcons();

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.remove('dark');
    const icon = themeToggle.querySelector('i');
    icon.setAttribute('data-lucide', 'moon');
    lucide.createIcons();
}

// Optimized Scroll Handler
const navbar = document.getElementById('navbar');
const reveals = document.querySelectorAll('.reveal');

// Reveal Animation Logic
function handleReveal() {
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

// Optimized Scroll Handler
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
            }

            handleReveal();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Initial check on load
window.addEventListener('DOMContentLoaded', handleReveal);
// Fallback check if DOMContentLoaded already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    handleReveal();
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
