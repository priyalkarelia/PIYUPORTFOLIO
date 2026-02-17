// ===================================
// PROJECT DATA (Easy to Update)
// ===================================
const projects = [
    {
        id: 1,
        title: "Re-poly Lamps",
        description: "An eco-friendly brand dedicated to reducing plastic waste by repurposing PET bottles into unique handcrafted lamps.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "gradient-1", // Will use gradient placeholder
        demoUrl: "https://repoly-ecommerce.vercel.app/",
        githubUrl: "https://github.com/priyalkarelia/repoly-ecommerce",
        featured: true
    },
    {
        id: 2,
        title: "Bakery website",
        description: "A responsive bakery website focused on elegant user interface design, smooth navigation, and an engaging customer experience.",
        technologies: ["HTML", "CSS", "Responsive"],
        image: "gradient-2",
        demoUrl: "https://uiuxbakery.vercel.app/",
        githubUrl: "https://github.com/priyalkarelia/image",
        featured: true
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Clean and minimal portfolio website for a creative professional showcasing projects with beautiful image galleries and smooth transitions.",
        technologies: ["HTML", "CSS", "JavaScript", "Figma"],
        image: "gradient-3",
        demoUrl: "https://priyalkarelia.vercel.app/",
        githubUrl: "https://github.com/priyalkarelia/PIYUPORTFOLIO",
        featured: true
    },
    {
        id: 4,
        title: "To-Do List",
        description: "A responsive To-Do List web application built using HTML, CSS, and JavaScript that allows users to add, edit, delete, and manage daily tasks efficiently.",
        technologies: ["Node Js", "HTML", "CSS", "JavaScript"],
        image: "gradient-4",
        demoUrl: "https://to-do-list-mu-five-68.vercel.app/",
        githubUrl: "https://github.com/priyalkarelia/To-Do-List",
        featured: false
    }
];

// ===================================
// GRADIENT PLACEHOLDER GENERATOR
// ===================================
const gradients = {
    'gradient-1': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'gradient-2': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'gradient-3': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'gradient-4': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'gradient-5': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
};

// ===================================
// RENDER PROJECTS
// ===================================
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-aos="fade-up">
            <div class="project-image" style="background: ${gradients[project.image]}">
                <div class="project-overlay">
                    ${project.demoUrl !== '#' ? `
                        <a href="${project.demoUrl}" target="_blank" class="btn btn-primary">
                            <span>View Demo</span>
                        </a>
                    ` : ''}
                    <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.167 20 14.418 20 10c0-5.523-4.477-10-10-10z"/>
                        </svg>
                        <span>Code</span>
                    </a>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demoUrl !== '#' ? `
                        <a href="${project.demoUrl}" target="_blank" class="project-link">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                            </svg>
                            <span>Live Demo</span>
                        </a>
                    ` : ''}
                    <a href="${project.githubUrl}" target="_blank" class="project-link">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.167 20 14.418 20 10c0-5.523-4.477-10-10-10z"/>
                        </svg>
                        <span>View Code</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    // Trigger animations
    initAOS();
}

// ===================================
// NAVIGATION
// ===================================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky Navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
mobileMenuToggle?.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle?.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Active Section Highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// DARK MODE TOGGLE
// ===================================
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

// Set initial theme
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
}

themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// ===================================
// TYPING ANIMATION
// ===================================
const typingText = document.getElementById('typingText');
const roles = [
    'Front-End Developer',
    'Web Designer',
    'WordPress Developer',
    'UI/UX Enthusiast'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRole() {
    if (!typingText) return;

    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before next word
    }

    setTimeout(typeRole, typingSpeed);
}

// Start typing animation
if (typingText) {
    setTimeout(typeRole, 1000);
}

// ===================================
// SCROLL ANIMATIONS (Simple AOS Alternative)
// ===================================
function initAOS() {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// ===================================
// CONTACT FORM
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Log form data (in production, send to backend)
    console.log('Form submitted:', formData);

    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Don't prevent default for # only links
        if (targetId === '#' || !targetId) return;
        
        e.preventDefault();
        
        const target = document.querySelector(targetId);
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Render projects
    renderProjects();
    
    // Initialize scroll animations
    initAOS();
    
    // Highlight initial navigation
    highlightNavigation();
    
    // Add entrance animation to hero
    document.querySelector('.hero')?.classList.add('loaded');
});

// ===================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce scroll event handlers
const debouncedHighlightNav = debounce(highlightNavigation, 10);
window.addEventListener('scroll', debouncedHighlightNav);

// ===================================
// UTILITY: ADD MORE PROJECTS EASILY
// ===================================
/**
 * To add a new project, simply add an object to the projects array above:
 * 
 * {
 *     id: 5,
 *     title: "Project Name",
 *     description: "Project description...",
 *     technologies: ["Tech1", "Tech2", "Tech3"],
 *     image: "gradient-5", // or URL to actual image
 *     demoUrl: "https://demo-link.com", // or "#" if no demo
 *     githubUrl: "https://github.com/username/repo",
 *     featured: true
 * }
 * 
 * The project will automatically appear on the page!
 */

// ===================================
// UTILITY: SHOW SUCCESS TOAST
// ===================================
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add toast animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===================================
// CONSOLE SIGNATURE
// ===================================
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #00d4ff;');
console.log('%cWelcome to my portfolio. Built with ❤️ by Priyal Karelia', 'font-size: 12px; color: #94a3b8;');
console.log('%cInterested in the code? Check it out on GitHub!', 'font-size: 12px; color: #b794f6;');