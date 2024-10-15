function applyScrollbarColorOnScroll() {
    window.addEventListener('scroll', () => {
        // Calculate the scroll percentage
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight));

        // Define colors based on the current page
        const pageName = window.location.pathname.split('/').pop(); // Get the current page name
        let startColor, endColor;

        // Set colors based on the page
        if (pageName === 'pay-gap.html') { 
            startColor = { r: 81, g: 89, b: 95 }; 
            endColor = { r: 215, g: 162, b: 184 };
        } else if (pageName === 'housing.html') {
            startColor = { r: 56, g: 68, b: 79}; // Example start color for Housing
            endColor = { r: 130, g: 147, b: 147 }; // Example end color for Housing
        } else if (pageName === 'evm.html') {
            startColor = { r: 44, g: 47, b: 94}; // Example start color for EVM
            endColor = { r: 141, g: 161, b: 241 }; // Example end color for EVM
        } else {
            // Default colors for other pages
            startColor = { r: 58, g: 70, b: 82 }; // Default start color
            endColor = { r: 168, g: 163, b: 163 }; // Default end color
        }

        // Interpolate between the start and end colors
        const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollPercent);
        const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollPercent);
        const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollPercent);

        // Set the scrollbar color based on the scroll percentage
        document.documentElement.style.setProperty('--scrollbar-thumb-color', `rgb(${r}, ${g}, ${b})`);
    });
}

// Call the function to apply the scrollbar color on page load
applyScrollbarColorOnScroll();
