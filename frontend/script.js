
function showPage(pageId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(pageId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile menu if open
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
}

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function handleDonate(event) {
    event.preventDefault();
    alert('Thank you for your donation! We will contact you shortly to arrange pickup.');
    event.target.reset();
}

function handleVolunteer(event) {
    event.preventDefault();
    alert('Thank you for volunteering! We will contact you with more details.');
    event.target.reset();
}

function handleContact(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will respond to your message soon.');
    event.target.reset();
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');

    if (tab === 'login') {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
    } else {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
    }
}

function handleLogin(event) {
    event.preventDefault();
    alert('Login successful! Welcome back.');
    showPage('home');
}

function handleSignup(event) {
    event.preventDefault();
    alert('Account created successfully! Welcome to Food Connect.');
    showPage('home');
}