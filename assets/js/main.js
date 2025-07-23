
// Enhanced Mobile menu toggle with better transitions
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        // Add transition classes to mobile menu if not already present
        mobileMenu.classList.add('transition-all', 'duration-300', 'ease-in-out');
        
        mobileMenuButton.addEventListener('click', function() {
            // Toggle menu with animation instead of just hiding
            if (mobileMenu.classList.contains('hidden')) {
                // Prepare for animation in
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('opacity-0', 'scale-95');
                
                // Trigger animation after a tiny delay to ensure CSS transition works
                setTimeout(() => {
                    mobileMenu.classList.remove('opacity-0', 'scale-95');
                    mobileMenu.classList.add('opacity-100', 'scale-100');
                    
                    // Add rotation to the button for visual feedback
                    mobileMenuButton.classList.add('rotate-90', 'transform', 'transition-transform', 'duration-300');
                }, 10);
            } else {
                // Animate out
                mobileMenu.classList.remove('opacity-100', 'scale-100');
                mobileMenu.classList.add('opacity-0', 'scale-95');
                
                // Remove rotation from button
                mobileMenuButton.classList.remove('rotate-90');
                
                // Hide after animation completes
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            }
        });
    }
    
    // Enhanced scroll animation with configurable options
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            // Get custom threshold or use default
            const threshold = element.dataset.threshold ? parseFloat(element.dataset.threshold) : 1.2;
            const screenPosition = window.innerHeight / threshold;
            
            // Get custom animation class or use default
            const animationClass = element.dataset.animation || 'animate-fade-in';
            
            if (elementPosition < screenPosition) {
                // Add animation class
                element.classList.add(animationClass);
                
                // Apply custom delay if specified
                if (element.dataset.delay) {
                    element.style.transitionDelay = element.dataset.delay + 'ms';
                }
                
                // Apply custom duration if specified
                if (element.dataset.duration) {
                    element.style.transitionDuration = element.dataset.duration + 'ms';
                }
            }
        });
    };
    
    // Throttle scroll event for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                animateOnScroll();
                scrollTimeout = null;
            }, 20);
        }
    });
    
    // Run once on page load with a slight delay to ensure elements are rendered
    setTimeout(animateOnScroll, 100);

    const foodButton = document.querySelector('.flex.flex-wrap.justify-center.mb-8 button:nth-child(1)');
    const drinksButton = document.querySelector('.flex.flex-wrap.justify-center.mb-8 button:nth-child(2)');
    const specialsButton = document.querySelector('.flex.flex-wrap.justify-center.mb-8 button:nth-child(3)');
    
    // Get sections
    const foodSection = document.querySelector('.grid.md\\:grid-cols-2.gap-8');
    const drinksSection = document.querySelector('.py-12.bg-gray-200');
    
    // Find or create specials section (assuming it's after drinks section)
    let specialsSection = document.getElementById('drinks');
    if (!specialsSection) {
        specialsSection = drinksSection; // Fallback to drinks section if specials not found
    }
    
    // Add active class to food button by default
    foodButton.classList.add('bg-green-800', 'text-white');
    foodButton.classList.remove('bg-gray-200', 'text-gray-700');
    
    // Function to scroll to element
    function scrollToElement(element) {
        if (element) {
            // Get the height of the sticky navbar
            const navbar = document.querySelector('nav');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            
            // Calculate position accounting for navbar
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra padding
            
            // Smooth scroll
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Function to update active button
    function setActiveButton(activeButton) {
        // Reset all buttons
        [foodButton, drinksButton, specialsButton].forEach(button => {
            button.classList.remove('bg-green-800', 'text-white');
            button.classList.add('bg-gray-200', 'text-gray-700');
        });
        
        // Set active button
        activeButton.classList.add('bg-green-800', 'text-white');
        activeButton.classList.remove('bg-gray-200', 'text-gray-700');
    }
    
    // Add click event listeners to buttons
    foodButton.addEventListener('click', function() {
        scrollToElement(foodSection);
        setActiveButton(foodButton);
    });
    
    drinksButton.addEventListener('click', function() {
        scrollToElement(drinksSection);
        setActiveButton(drinksButton);
    });
    
    specialsButton.addEventListener('click', function() {
        scrollToElement(specialsSection);
        setActiveButton(specialsButton);
    });
    
    // Create scroll-to-top button
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '↑';
    scrollTopButton.className = 'fixed bottom-6 right-6 bg-green-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-2xl opacity-0 transition-opacity duration-300 hover:bg-green-700';
    scrollTopButton.style.zIndex = '40';
    document.body.appendChild(scrollTopButton);
    
    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.opacity = '1';
        } else {
            scrollTopButton.style.opacity = '0';
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

