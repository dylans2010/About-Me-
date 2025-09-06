// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Multi-language greeting animation
    const greetings = [
        "Hello, I'm Dylan", // English
        "Hola, soy Dylan", // Spanish
        "Bonjour, je suis Dylan", // French
        "Ciao, sono Dylan", // Italian
        "Hallo, ich bin Dylan", // German
        "Olá, eu sou Dylan", // Portuguese
        "Привет, я Дилан", // Russian
        "こんにちは、ディランです", // Japanese
        "안녕하세요, 저는 딜런입니다", // Korean
        "你好，我是迪伦", // Chinese
        "नमस्ते, मैं डिलन हूँ", // Hindi
        "مرحبا، أنا ديلان", // Arabic
        "Hej, jag är Dylan", // Swedish
        "Γεια σας, είμαι ο Ντίλαν", // Greek
        "Merhaba, ben Dylan", // Turkish
        "Xin chào, tôi là Dylan", // Vietnamese
        "Halo, saya Dylan", // Indonesian
        "Ahoj, jsem Dylan", // Czech
        "Cześć, jestem Dylan", // Polish
        "Salam, mən Dilanam", // Azerbaijani
        "Kamusta, ako si Dylan", // Filipino
        "Hallå, jag är Dylan", // Swedish
        "Hei, jeg er Dylan", // Norwegian
        "Sawubona, ngingu Dylan", // Zulu
        "Salut, eu sunt Dylan" // Romanian
    ];
    
    const typingTextElement = document.getElementById('typing-text');
    let currentGreetingIndex = 0;
    let isDeleting = false;
    let charIndex = 0;
    let typingSpeed = 100;
    let delayBetweenGreetings = 2000; // 2 seconds pause between languages
    
    function typeMultiLingual() {
        const currentGreeting = greetings[currentGreetingIndex];
        
        if (isDeleting) {
            // Deleting text
            typingTextElement.innerHTML = currentGreeting.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster when deleting
        } else {
            // Typing text
            typingTextElement.innerHTML = currentGreeting.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Normal speed when typing
        }
        
        // If finished typing the current greeting
        if (!isDeleting && charIndex === currentGreeting.length) {
            isDeleting = true;
            typingSpeed = delayBetweenGreetings; // Pause before starting to delete
        } 
        // If finished deleting the current greeting
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length; // Move to next greeting
        }
        
        setTimeout(typeMultiLingual, typingSpeed);
    }
    
    // Start typing animation with a small delay
    setTimeout(typeMultiLingual, 1000);
    
    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll animations
    const sections = document.querySelectorAll('section, header, footer');
    
    // Initialize skill bar widths with their original values
    const skills = document.querySelectorAll('.skill-level');
    skills.forEach(skill => {
        // Store the original width as a custom property
        const width = skill.style.width;
        skill.style.setProperty('--skill-width', width);
        // Set initial width to 0 for animation
        skill.style.width = '0';
    });
    
    // Add animation classes when elements are in viewport
    function animateSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('animate');
            }
        });
    }
    
    // Run animation on scroll
    window.addEventListener('scroll', animateSections);
    
    // Run animation on page load with a slight delay for better effect
    setTimeout(animateSections, 300);
    
    // Skill bars animation
    const skillLevels = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillLevels.forEach(skill => {
            const skillSection = document.querySelector('.skills-section');
            const sectionTop = skillSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                // Get the original width from the style attribute
                const width = skill.style.width;
                
                // First set width to 0
                skill.style.width = '0';
                
                // Then animate to the original width
                setTimeout(() => {
                    skill.style.width = width;
                }, 200);
            }
        });
    }
    
    // Run skill bar animation on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Hobby cards animation
    const hobbyCards = document.querySelectorAll('.hobby-card');
    
    function animateHobbyCards() {
        hobbyCards.forEach((card, index) => {
            const freeTimeSection = document.querySelector('.free-time-section');
            if (!freeTimeSection) return;
            
            const sectionTop = freeTimeSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                // Add a staggered delay based on index
                setTimeout(() => {
                    card.classList.add('animate');
                }, 150 * index);
            }
        });
    }
    
    // Run hobby cards animation on scroll
    window.addEventListener('scroll', animateHobbyCards);
    
    // Add special styling for Spotify embed in dark mode
    function updateSpotifyEmbedTheme() {
        const spotifyIframe = document.querySelector('.spotify-iframe');
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        if (spotifyIframe) {
            // Update the src attribute to include the appropriate theme parameter
            let currentSrc = spotifyIframe.src;
            if (isDarkMode) {
                // Set theme=0 for dark mode
                currentSrc = currentSrc.replace('theme=0', 'theme=0').replace('theme=1', 'theme=0');
                if (!currentSrc.includes('theme=')) {
                    currentSrc += '&theme=0';
                }
            } else {
                // Set theme=1 for light mode
                currentSrc = currentSrc.replace('theme=0', 'theme=1').replace('theme=1', 'theme=1');
                if (!currentSrc.includes('theme=')) {
                    currentSrc += '&theme=1';
                }
            }
            spotifyIframe.src = currentSrc;
        }
    }
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would normally send the data to a server
        console.log('Form Submitted with:', { name, email, message });
        
        // Show success message (in a real app, you'd wait for server response)
        alert(`Thank you ${name} for your message! I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
    
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Dark/Light mode toggle
    const body = document.body;
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    toggleButton.classList.add('theme-toggle');
    toggleButton.setAttribute('aria-label', 'Toggle Dark Mode');
    toggleButton.setAttribute('title', 'Toggle Dark Mode');
    document.querySelector('.container').appendChild(toggleButton);
    
    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }
    
    toggleButton.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
        
        // Update Spotify embed theme when toggling
        updateSpotifyEmbedTheme();
    });
    
    function enableDarkMode() {
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('darkMode', 'enabled');
    }
    
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', 'disabled');
    }
    
    // Initial update of Spotify embed theme based on saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        setTimeout(updateSpotifyEmbedTheme, 1000); // Small delay to ensure iframe is loaded
    }
});
