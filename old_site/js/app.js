// JavaScript logic for Adhithi Kandhi's sliding portfolio website

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider-container");
    const navLinks = document.querySelectorAll(".nav-link");
    const navIndicator = document.getElementById("navIndicator");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const sectionsCount = 5;
    let currentIdx = 0;

    // Set initial position of the navbar slider indicator
    updateNavIndicator();

    // Main navigation trigger function
    window.goToSlide = function(idx) {
        if (idx < 0 || idx >= sectionsCount) return;
        currentIdx = idx;
        
        // Translate the horizontal container layout
        slider.style.transform = `translateX(-${currentIdx * 100}vw)`;
        
        // Update active class on nav links
        navLinks.forEach((link, i) => {
            if (i === currentIdx) {
                link.classList.add("text-brand-600", "font-bold");
                link.classList.remove("text-stone-500");
            } else {
                link.classList.remove("text-brand-600", "font-bold");
                link.classList.add("text-stone-500");
            }
        });

        // Sync helper buttons visibility
        if (prevBtn) {
            prevBtn.style.opacity = currentIdx === 0 ? "0.3" : "1";
            prevBtn.style.pointerEvents = currentIdx === 0 ? "none" : "auto";
        }
        if (nextBtn) {
            nextBtn.style.opacity = currentIdx === sectionsCount - 1 ? "0.3" : "1";
            nextBtn.style.pointerEvents = currentIdx === sectionsCount - 1 ? "none" : "auto";
        }

        updateNavIndicator();
    };

    // Calculate and translate the navbar slider underline indicator
    function updateNavIndicator() {
        if (!navIndicator) return;
        const activeLink = navLinks[currentIdx];
        if (activeLink) {
            const rect = activeLink.getBoundingClientRect();
            const parentRect = activeLink.parentElement.getBoundingClientRect();
            navIndicator.style.left = `${rect.left - parentRect.left}px`;
            navIndicator.style.width = `${rect.width}px`;
        }
    }

    // Prev / Next trigger points
    window.nextSlide = function() {
        if (currentIdx < sectionsCount - 1) {
            goToSlide(currentIdx + 1);
        }
    };

    window.prevSlide = function() {
        if (currentIdx > 0) {
            goToSlide(currentIdx - 1);
        }
    };

    // Bind navigation click triggers
    navLinks.forEach((link, idx) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            goToSlide(idx);
        });
    });

    // Keyboard Arrow Key Bindings
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            nextSlide();
        } else if (e.key === "ArrowLeft") {
            prevSlide();
        }
    });

    // Mobile Swipe Gesture Listeners
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50; // Minimum swipe distance in pixels

    document.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const diffX = touchStartX - touchEndX;
        if (Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0) {
                // Swiped Left -> View Next Slide (move right)
                nextSlide();
            } else {
                // Swiped Right -> View Previous Slide (move left)
                prevSlide();
            }
        }
    }

    // Resize handler to keep active navbar indicator centered
    window.addEventListener("resize", () => {
        updateNavIndicator();
    });
});
