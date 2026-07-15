/* ============================================
   GRACIE'S WEBSITE - JAVASCRIPT
   Adds interactive features and animations
   to make Gracie's website even more fun!
   ============================================ */

// When the page loads, run this code
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐱 Welcome to Gracie\'s Website! 🐱');
    
    // Add smooth scroll behavior
    addSmoothScroll();
    
    // Add animations to cards when they appear
    addCardAnimations();
    
    // Add a fun message every time someone hovers on the hero
    addHeroInteraction();
});

/* ============================================
   SMOOTH SCROLL - Makes the page scroll smoothly
   ============================================ */
function addSmoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

/* ============================================
   CARD ANIMATIONS - Fade in cards as you scroll
   ============================================ */
function addCardAnimations() {
    // Get all photo cards, project cards, and video cards
    const cards = document.querySelectorAll('.photo-card, .project-card, .video-card');
    
    // Add a fade-in animation to each card
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.6s ease ${index * 0.1}s forwards`;
    });
}

/* ============================================
   HERO INTERACTION - Fun messages on hover
   ============================================ */
function addHeroInteraction() {
    const hero = document.querySelector('.hero');
    const messages = [
        '🐱 Gracie says hi!',
        '😸 Pet me!',
        '🍖 Got any snacks?',
        '☀️ Let\'s nap together!',
        '🪶 Play with me!',
        '💕 Thanks for visiting!'
    ];
    
    hero.addEventListener('click', function() {
        // Pick a random message from the list
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Create a pop-up message
        const popup = document.createElement('div');
        popup.textContent = randomMessage;
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #ff69b4;
            color: white;
            padding: 20px 40px;
            border-radius: 15px;
            font-size: 1.5rem;
            font-weight: bold;
            z-index: 1000;
            animation: popupAnimation 2s ease forwards;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        `;
        
        document.body.appendChild(popup);
        
        // Remove the popup after 2 seconds
        setTimeout(() => {
            popup.remove();
        }, 2000);
    });
}

/* ============================================
   CSS ANIMATIONS - Define animations in JavaScript
   (This is an alternative way to add animations)
   ============================================ */

// Create a style element for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes popupAnimation {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;

// Add the animations to the page
document.head.appendChild(style);

/* ============================================
   CONSOLE MESSAGE - A fun message in the browser console
   ============================================ */
console.log('%c🐱 Welcome to Gracie\'s Website! 🐱', 'color: #ff69b4; font-size: 20px; font-weight: bold;');
console.log('%cGracie is 1 year old and loves snacks, sleeping in the sun, and playtime with her feather wand!', 'color: #ffa500; font-size: 14px;');
console.log('%cClick on the hero section to get a special message from Gracie!', 'color: #333; font-size: 12px;');
