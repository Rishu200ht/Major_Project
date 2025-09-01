// Technical Interview Page JavaScript
class TechnicalInterviewPage {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.sidebarToggle = document.getElementById('sidebarToggle');
        this.navToggle = document.getElementById('navToggle');
        this.mobileOverlay = document.getElementById('mobileOverlay');
        this.checkQuestionsBtn = document.getElementById('checkQuestionsBtn');
        this.navLinks = document.querySelector('.nav-links');
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupAnimations();
        this.setupResponsiveFeatures();
        this.setupAccessibility();
    }

    setupEventListeners() {
        // Sidebar toggle for mobile
        if (this.sidebarToggle) {
            this.sidebarToggle.addEventListener('click', () => {
                this.toggleSidebar();
            });
        }

        // Mobile navigation toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => {
                this.toggleMobileNav();
            });
        }

        // Mobile overlay click
        if (this.mobileOverlay) {
            this.mobileOverlay.addEventListener('click', () => {
                this.closeSidebar();
            });
        }

        // Check Questions button
        if (this.checkQuestionsBtn) {
            this.checkQuestionsBtn.addEventListener('click', () => {
                console.log('Button clicked!'); // Debug log
                this.handleCheckQuestions();
            });
        } else {
            console.log('Button not found!'); // Debug log
        }

        // Sidebar navigation items hover effects
        this.setupSidebarHoverEffects();

        // Window resize handling
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardNavigation(e);
        });

        // Smooth scrolling for internal links
        this.setupSmoothScrolling();
    }

    toggleSidebar() {
        if (this.sidebar) {
            const isActive = this.sidebar.classList.contains('active');
            
            if (isActive) {
                this.closeSidebar();
            } else {
                this.openSidebar();
            }
        }
    }

    openSidebar() {
        if (this.sidebar && this.mobileOverlay) {
            this.sidebar.classList.add('active');
            this.mobileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeSidebar() {
        if (this.sidebar && this.mobileOverlay) {
            this.sidebar.classList.remove('active');
            this.mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    toggleMobileNav() {
        if (this.navLinks) {
            this.navLinks.classList.toggle('active');
        }
    }

    handleCheckQuestions() {
        // Add click animation
        this.checkQuestionsBtn.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            this.checkQuestionsBtn.style.transform = '';
            
            // Show questions section
            const questionsSection = document.getElementById('questionsSection');
            if (questionsSection) {
                questionsSection.style.display = 'block';
                questionsSection.scrollIntoView({ behavior: 'smooth' });
                
                // Hide the CTA button
                this.checkQuestionsBtn.parentElement.style.display = 'none';
                
                // Initialize question toggles
                this.setupQuestionToggles();
            }
        }, 150);
    }

    showQuestionsSection() {
        const questionsSection = document.getElementById('questionsSection');
        if (questionsSection) {
            questionsSection.style.display = 'block';
            questionsSection.scrollIntoView({ behavior: 'smooth' });
            
            // Initialize question toggles if not already done
            this.setupQuestionToggles();
        }
    }

    setupQuestionToggles() {
        const toggleButtons = document.querySelectorAll('.toggle-btn');
        
        toggleButtons.forEach(button => {
            // Remove existing listeners to avoid duplicates
            button.replaceWith(button.cloneNode(true));
        });
        
        // Re-select buttons after cloning
        const newToggleButtons = document.querySelectorAll('.toggle-btn');
        
        newToggleButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const targetId = e.target.getAttribute('data-target');
                const answerElement = document.getElementById(targetId);
                
                if (answerElement) {
                    const isVisible = answerElement.classList.contains('show');
                    
                    if (isVisible) {
                        // Hide answer
                        answerElement.classList.remove('show');
                        button.textContent = 'Show Answer';
                        button.classList.remove('active');
                    } else {
                        // Show answer
                        answerElement.classList.add('show');
                        button.textContent = 'Hide Answer';
                        button.classList.add('active');
                    }
                }
            });
        });
    }

    setupSidebarHoverEffects() {
        const sidebarLinks = document.querySelectorAll('.nav-link-sidebar');
        
        sidebarLinks.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                if (!e.target.closest('.nav-item').classList.contains('active')) {
                    e.target.style.transform = 'translateX(5px)';
                }
            });

            link.addEventListener('mouseleave', (e) => {
                if (!e.target.closest('.nav-item').classList.contains('active')) {
                    e.target.style.transform = '';
                }
            });

            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all items
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to clicked item
                e.target.closest('.nav-item').classList.add('active');
                
                // Get the link text
                const spanElement = e.target.querySelector('span') || e.target.closest('.nav-link-sidebar').querySelector('span');
                if (spanElement) {
                    const linkText = spanElement.textContent;
                    
                    if (linkText.includes('HTML Interview Questions')) {
                        // Show HTML questions section
                        this.showQuestionsSection();
                    } else if (!linkText.includes('Technical Interview Questions')) {
                        // Removed popup notification - sections now work directly
                    }
                }
                
                // Close sidebar on mobile after selection
                if (window.innerWidth <= 768) {
                    this.closeSidebar();
                }
            });
        });
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all content sections
        document.querySelectorAll('.content-section, .hero-section, .cta-section').forEach(section => {
            observer.observe(section);
        });

        // Animate importance cards
        this.animateImportanceCards();
    }

    animateImportanceCards() {
        const cards = document.querySelectorAll('.importance-card');
        
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    setupResponsiveFeatures() {
        this.handleResize();
    }

    handleResize() {
        const width = window.innerWidth;
        
        // Auto-close sidebar on desktop
        if (width > 768) {
            this.closeSidebar();
            if (this.navLinks) {
                this.navLinks.classList.remove('active');
            }
        }
        
        // Adjust content padding based on sidebar visibility
        if (width <= 768) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    }

    setupAccessibility() {
        // Add ARIA attributes
        if (this.sidebar) {
            this.sidebar.setAttribute('aria-label', 'Interview categories navigation');
        }
        
        if (this.sidebarToggle) {
            this.sidebarToggle.setAttribute('aria-label', 'Toggle sidebar navigation');
        }
        
        // Skip to content link
        this.addSkipToContentLink();
    }

    addSkipToContentLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    handleKeyboardNavigation(e) {
        // ESC key to close sidebar
        if (e.key === 'Escape') {
            this.closeSidebar();
            if (this.navLinks && this.navLinks.classList.contains('active')) {
                this.toggleMobileNav();
            }
        }
        
        // Tab navigation enhancements
        if (e.key === 'Tab') {
            this.handleTabNavigation(e);
        }
    }

    handleTabNavigation(e) {
        const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }

    setupSmoothScrolling() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                if (href && href !== '#') {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    showNotification(message, type = 'info') {
        // Notification popup disabled - no more popups will appear
        return;
    }

    // Public methods for external use
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    highlightNavItem(itemText) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const link = item.querySelector('.nav-link-sidebar span');
            if (link && link.textContent.includes(itemText)) {
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            }
        });
    }
}

// Utility functions
const utils = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    isElementInViewport: (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new TechnicalInterviewPage();
    
    // Make app globally available for debugging
    window.technicalInterviewApp = app;
    
    // Add performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page loaded in ${Math.round(loadTime)}ms`);
        });
    }
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
