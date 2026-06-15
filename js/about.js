/* ========================================
   TASTEPAL - ABOUT PAGE JAVASCRIPT
   Statistics counter animation
   ======================================== */

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const targetCount = parseInt(statElement.getAttribute('data-count'));
                
                if (isNaN(targetCount)) return;
                
                let currentCount = 0;
                const duration = 2000; // 2 seconds
                const increment = targetCount / (duration / 16); // 60fps
                
                const timer = setInterval(() => {
                    currentCount += increment;
                    if (currentCount >= targetCount) {
                        // For K+ values, add 'K' if needed
                        const label = statElement.nextElementSibling;
                        if (label && label.innerText.includes('K+')) {
                            statElement.innerText = targetCount + '+';
                        } else {
                            statElement.innerText = targetCount;
                        }
                        clearInterval(timer);
                    } else {
                        statElement.innerText = Math.floor(currentCount);
                    }
                }, 16);
                
                observer.unobserve(statElement);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Initialize about page
document.addEventListener('DOMContentLoaded', function() {
    animateStats();
});