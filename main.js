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