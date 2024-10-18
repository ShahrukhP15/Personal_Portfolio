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
        } else if (pageName === 'airbnb-model.html') {
            startColor = { r: 74, g: 17, b: 19}; // Example start color for Airbnb Model
            endColor = { r: 201, g: 72, b: 87 }; // Example end color for Airbnb Model
        } else if (pageName === 'sales-dashboard.html') {
            startColor = { r: 35, g: 64, b: 48}; // Example start color for Sales Dashboard
            endColor = { r: 33, g: 140, b: 116 }; // Example end color for Sales Dashboard
        } else {
            // Default colors for other pages
            startColor = { r: 50, g: 64, b: 87 }; // Default start color
            endColor = { r: 63, g: 181, b: 181 }; // Default end color
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

function openRandomLink() {
    // Define your two YouTube links
    const links = [
        "https://youtube.com/clip/Ugkxw9kTcDtmLCxJ_S9o4dDokmFCVQAh5wXV?si=KoF3MLJLmU36hByd",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    ];

    // Randomly pick one of the two links
    const randomIndex = Math.floor(Math.random() * links.length);

    // Open the randomly selected link
    window.open(links[randomIndex], '_blank');
}