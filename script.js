// Function to open the modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
// Get modal element
var modal = document.getElementById("myModal");

// Get open modal button
var btn = document.getElementById("openModal");

// Get close button
var closeBtn = document.getElementsByClassName("close")[0];

// Listen for open click
btn.onclick = function() {
    modal.style.display = "block"; // Show modal
}

// Listen for close click
closeBtn.onclick = function() {
    modal.style.display = "none"; // Hide modal
}

// Listen for outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide modal on outside click
    }
}


function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active'); // Toggle the active class
}

// Add a scroll event listener to change the navbar background color
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "block";
    });
});

document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.modal').style.display = "none";
    });
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});
