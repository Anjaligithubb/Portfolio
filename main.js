// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initPreloader();
    initNavigation();
    initTypingEffect();
    initCodeBoardTyping();
    loadDynamicContent();
    initScrollEffects();
    initContactForm();
    initAnimations();
});

// Preloader functionality
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    // Hide preloader after page load
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                
                // Update active link
                updateActiveNavLink(this);
            }
        });
    });

    // Update active navigation link based on scroll position
    window.addEventListener('scroll', updateActiveNavOnScroll);
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Update active nav link on scroll
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Typing effect for hero section
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseTime = 2000;

    function typeText() {
        const currentText = TYPING_TEXTS[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % TYPING_TEXTS.length;
        }

        setTimeout(typeText, typeSpeed);
    }

    // Start typing after a delay
    setTimeout(typeText, 1000);
}

// Code Board Typing Effect
function initCodeBoardTyping() {
    const codeEditorContent = document.getElementById('code-editor-content');
    if (!codeEditorContent) return;

    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let currentTokenIndex = 0;
    let currentTokenCharIndex = 0;
    const typingSpeed = 50;
    const lineDelay = 800;

    function typeCodeLine() {
        if (currentLineIndex >= CODE_LINES.length) {
            // Restart typing after a delay
            setTimeout(() => {
                codeEditorContent.innerHTML = '';
                currentLineIndex = 0;
                currentCharIndex = 0;
                currentTokenIndex = 0;
                currentTokenCharIndex = 0;
                typeCodeLine();
            }, 3000);
            return;
        }

        const currentLine = CODE_LINES[currentLineIndex];
        
        // Create line element if it doesn't exist
        let lineElement = document.getElementById(`code-line-${currentLine.lineNumber}`);
        if (!lineElement) {
            lineElement = document.createElement('div');
            lineElement.className = 'code-line';
            lineElement.id = `code-line-${currentLine.lineNumber}`;
            
            const lineNumber = document.createElement('span');
            lineNumber.className = 'line-number';
            lineNumber.textContent = currentLine.lineNumber;
            lineElement.appendChild(lineNumber);
            
            codeEditorContent.appendChild(lineElement);
        }

        // Type current token character by character
        if (currentTokenIndex < currentLine.tokens.length) {
            const currentToken = currentLine.tokens[currentTokenIndex];
            
            // Create token element if it doesn't exist
            let tokenElement = document.getElementById(`token-${currentLine.lineNumber}-${currentTokenIndex}`);
            if (!tokenElement) {
                tokenElement = document.createElement('span');
                tokenElement.className = currentToken.type;
                tokenElement.id = `token-${currentLine.lineNumber}-${currentTokenIndex}`;
                lineElement.appendChild(tokenElement);
            }

            // Add character to current token
            if (currentTokenCharIndex < currentToken.text.length) {
                tokenElement.textContent = currentToken.text.substring(0, currentTokenCharIndex + 1);
                currentTokenCharIndex++;
                setTimeout(typeCodeLine, typingSpeed);
            } else {
                // Move to next token
                currentTokenIndex++;
                currentTokenCharIndex = 0;
                setTimeout(typeCodeLine, typingSpeed);
            }
        } else {
            // Move to next line
            currentLineIndex++;
            currentTokenIndex = 0;
            currentTokenCharIndex = 0;
            setTimeout(typeCodeLine, lineDelay);
        }
    }

    // Start typing after a delay
    setTimeout(typeCodeLine, 1500);
}

// Load dynamic content
function loadDynamicContent() {
    loadPersonalInfo();
    loadProjects();
    loadTimeline();
    loadSkills();
    loadContactInfo();
    loadSocialLinks();
}

// Load personal information
function loadPersonalInfo() {
    // Update hero section
    const heroName = document.querySelector('.hero-name');
    const heroDescription = document.querySelector('.hero-description');
    const resumeBtn = document.querySelector('.btn-primary');
    
    if (heroName) {
        heroName.innerHTML = `Hi, I'm <span class="highlight">${PERSONAL_INFO.name}</span>`;
    }
    
    if (heroDescription) {
        heroDescription.textContent = PERSONAL_INFO.description;
    }
    
    if (resumeBtn) {
        resumeBtn.href = PERSONAL_INFO.resumeLink;
    }

    // Update navbar logo
    const navLogo = document.querySelector('.nav-logo a');
    if (navLogo) {
        navLogo.textContent = PERSONAL_INFO.name;
    }
}

// Load projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';
    
    PROJECTS.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const links = `
        ${project.githubLink !== '#' ? `<a href="${project.githubLink}" target="_blank" class="btn btn-secondary" style="margin-right: 1rem; padding: 0.5rem 1rem; font-size: 0.9rem;">
            <i class="fab fa-github"></i> GitHub
        </a>` : ''}
        ${project.liveLink !== '#' ? `<a href="${project.liveLink}" target="_blank" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
            <i class="fas fa-external-link-alt"></i> Live Demo
        </a>` : ''}
    `;
    
    card.innerHTML = `
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">${techTags}</div>
            <div style="margin-top: 1.5rem;">${links}</div>
        </div>
    `;
    
    return card;
}

// Load timeline
function loadTimeline() {
    const timelineContainer = document.querySelector('.timeline');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = '';
    
    TIMELINE.forEach((item, index) => {
        const timelineItem = createTimelineItem(item, index);
        timelineContainer.appendChild(timelineItem);
    });
}

// Create timeline item
function createTimelineItem(item, index) {
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
    
    timelineItem.innerHTML = `
        <div class="timeline-content">
            <h3 class="timeline-title">${item.title}</h3>
            <h4 class="timeline-institution">${item.institution}</h4>
            <p class="timeline-location">${item.location}</p>
            <p class="timeline-date">${item.date}</p>
        </div>
        <div class="timeline-icon">${item.icon}</div>
    `;
    
    return timelineItem;
}

// Load skills
function loadSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = '';
    
    SKILLS.forEach(skill => {
        const skillItem = createSkillItem(skill);
        skillsGrid.appendChild(skillItem);
    });
}

// Create skill item
function createSkillItem(skill) {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    
    skillItem.innerHTML = `
        <div class="skill-icon">${skill.icon}</div>
        <div class="skill-name">${skill.name}</div>
    `;
    
    return skillItem;
}

// Load contact information
function loadContactInfo() {
    const contactInfo = document.querySelector('.contact-info');
    if (!contactInfo) return;

    const contactItems = [
        {
            icon: 'fas fa-envelope',
            label: 'Email',
            value: CONTACT_INFO.email,
            link: `mailto:${CONTACT_INFO.email}`
        },
        {
            icon: 'fas fa-phone',
            label: 'Phone',
            value: CONTACT_INFO.phone,
            link: `tel:${CONTACT_INFO.phone}`
        },
        {
            icon: 'fas fa-map-marker-alt',
            label: 'Location',
            value: CONTACT_INFO.location,
            link: '#'
        },
        {
            icon: 'fas fa-briefcase',
            label: 'Status',
            value: CONTACT_INFO.availability,
            link: '#'
        }
    ];

    contactInfo.innerHTML = '';
    
    contactItems.forEach(item => {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';
        
        contactItem.innerHTML = `
            <i class="${item.icon}"></i>
            <div class="contact-details">
                <span class="contact-label">${item.label}</span>
                ${item.link !== '#' ? 
                    `<a href="${item.link}" class="contact-value">${item.value}</a>` :
                    `<span class="contact-value">${item.value}</span>`
                }
            </div>
        `;
        
        contactInfo.appendChild(contactItem);
    });
}

// Load social links
function loadSocialLinks() {
    const socialLinksContainers = document.querySelectorAll('.social-links');
    
    socialLinksContainers.forEach(container => {
        container.innerHTML = '';
        
        Object.entries(SOCIAL_LINKS).forEach(([platform, url]) => {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.className = 'social-link';
            
            let iconClass = '';
            switch(platform) {
                case 'linkedin':
                    iconClass = 'fab fa-linkedin-in';
                    break;
                case 'github':
                    iconClass = 'fab fa-github';
                    break;
                case 'instagram':
                    iconClass = 'fab fa-instagram';
                    break;
            }
            
            link.innerHTML = `<i class="${iconClass}"></i>`;
            container.appendChild(link);
        });
    });
}

// Initialize scroll effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skill-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize contact form
function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple form validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! I will get back to you soon.', 'success');
        this.reset();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: linear-gradient(135deg, #64ffda, #00bcd4);' : ''}
        ${type === 'error' ? 'background: linear-gradient(135deg, #ff6b6b, #ee5a52);' : ''}
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Initialize animations
function initAnimations() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Smooth scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #64ffda, #00bcd4);
        border: none;
        color: #1a0f3f;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(100px);
    `;
    
    scrollBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.transform = 'translateY(0)';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'translateY(100px)';
        }
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', addScrollToTopButton);