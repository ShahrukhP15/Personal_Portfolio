// ------------------- About -------------------
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


    // ------------------- Experience -------------------
    var bar1 = document.querySelector(".bar1");
    var bar2 = document.querySelector(".bar2");
    var bar3 = document.querySelector(".bar3"); 

    bar1.addEventListener("click", function(){
        var d1 = document.querySelector(".d1");
        if (d1.classList.contains("active")) {
            // Close the detail section
            d1.classList.remove("active");
            d1.style.height = '0'; // Collapse
        } else {
            // Open the detail section
            d1.classList.add("active");
            d1.style.height = d1.scrollHeight + 'px'; // Expand
        }
    });

    bar2.addEventListener("click", function(){
        var d2 = document.querySelector(".d2");
        if (d2.classList.contains("active")) {
            // Close the detail section
            d2.classList.remove("active");
            d2.style.height = '0'; // Collapse
        } else {
            // Open the detail section
            d2.classList.add("active");
            d2.style.height = d2.scrollHeight + 'px'; // Expand
        }
    });

    bar3.addEventListener("click", function(){
        var d3 = document.querySelector(".d3");
        if (d3.classList.contains("active")) {
            // Close the detail section
            d3.classList.remove("active");
            d3.style.height = '0'; // Collapse
        } else {
            // Open the detail section
            d3.classList.add("active");
            d3.style.height = d3.scrollHeight + 'px'; // Expand
        }
    });

    window.addEventListener('scroll', () => {
        // Calculate the scroll percentage
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight));
    
        // Define the start, middle, and end colors
        const startColor = { r: 127, g: 183, b: 190 }; // #464545 (Start Color)
        const midColor = { r: 61, g: 173, b: 173 };
        const endColor = { r: 36, g: 123, b: 159 }; // #A8A3A3 (End Color)
    
        let r, g, b;
        if (scrollPercent < 0.5) {
            // Interpolate between startColor and redColor
            const midScrollPercent = scrollPercent * 2; // Normalize to [0, 1]
            r = Math.round(startColor.r + (midColor.r - startColor.r) * midScrollPercent);
            g = Math.round(startColor.g + (midColor.g - startColor.g) * midScrollPercent);
            b = Math.round(startColor.b + (midColor.b - startColor.b) * midScrollPercent);
        } else {
            // Interpolate between redColor and endColor
            const midScrollPercent = (scrollPercent - 0.5) * 2; // Normalize to [0, 1]
            r = Math.round(midColor.r + (endColor.r - midColor.r) * midScrollPercent);
            g = Math.round(midColor.g + (endColor.g - midColor.g) * midScrollPercent);
            b = Math.round(midColor.b + (endColor.b - midColor.b) * midScrollPercent);
        }
    
        // Set the scrollbar color based on the scroll percentage
        document.documentElement.style.setProperty('--scrollbar-thumb-color', `rgb(${r}, ${g}, ${b})`);
    });

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
    };
    