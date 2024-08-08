var typed = new Typed(".flow-text", {
    strings: ["Fullstack Developer", "Java Developer", "Web Developer","DSA"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    showCursor: false
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".timeline .section");
    const line = document.querySelector(".timeline .line");

    function checkPosition() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("show-me");
                line.style.display = "block";
            } else {
                section.classList.remove("show-me");
            }
        });
    }

    window.addEventListener("scroll", checkPosition);
    checkPosition();
});
const form = document.getElementById('contact-form');
    const successMessageDiv = document.getElementById('successMessage');

    form.addEventListener('submit', e => {
        e.preventDefault();

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                successMessageDiv.innerHTML = "Thank you! Your form is submitted successfully.";
                successMessageDiv.style.color = "green";
                form.reset(); // Reset the form after successful submission
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            successMessageDiv.innerHTML = `Error: ${error.message}`;
            successMessageDiv.style.color = "red";
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const sidebar = document.getElementById('sidebar');
        const hamburger = document.getElementById('hamburger');
        const closebtn = document.getElementById('closebtn');
        const body = document.body;
        const popup = document.getElementById('popupRectangle');
    
        // Toggle sidebar when clicking the hamburger button
        hamburger.addEventListener('click', function() {
            body.classList.toggle('sidebar-open');
        });
    
        // Close sidebar when clicking the close button inside the sidebar
        closebtn.addEventListener('click', function() {
            body.classList.remove('sidebar-open');
        });
    
        // Function to show popup with the specific message and position
        function showPopup(event) {
            const message = event.target.getAttribute('data-message');
            const position = event.target.getAttribute('data-position');
            
            document.getElementById('popupText').textContent = message;
            
            // Remove any existing position classes
            popup.classList.remove('popup-left', 'popup-right');
            
            // Apply the new position class based on data-position attribute
            if (position === 'left') {
                popup.classList.add('popup-left');
            } else if (position === 'right') {
                popup.classList.add('popup-right');
            }
            
            // Position the popup based on the clicked element
            const rect = event.target.getBoundingClientRect();
            popup.style.top = `${rect.top + window.scrollY + rect.height / 2}px`;
            popup.style.left = `${rect.left + rect.width / 2}px`;
            
            popup.style.display = 'flex'; // Show the popup
        }
    
        // Add event listeners to rectangles
        document.querySelectorAll('.outer-rectangle').forEach(rectangle => {
            rectangle.addEventListener('click', showPopup);
        });
    
        // Close popup when clicking outside
        document.addEventListener('click', function(event) {
            if (!popup.contains(event.target) && !document.querySelectorAll('.outer-rectangle').contains(event.target)) {
                popup.style.display = 'none';
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const closeBtn = document.getElementById('closeBtn');
        const popup = document.getElementById('popupRectangle');
    
        // Close popup when clicking the close button
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none'; // Hide the popup
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        if (sessionStorage.getItem('reloaded') !== 'true') {
            sessionStorage.setItem('reloaded', 'true');
            window.location.href = 'index.html'; // Replace 'index.html' with your homepage URL
        } else {
            sessionStorage.removeItem('reloaded');
        }
    });
        
    