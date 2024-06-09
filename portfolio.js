document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('openDocButton').addEventListener('click', function() {
    var docLink = document.getElementById('docLink');
    if (docLink.style.display === 'none') {
        docLink.style.display = 'inline';
    } else {
        docLink.style.display = 'none';
    }
});
document.addEventListener("scroll", function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.navbar a');

    sections.forEach(section => {
        var top = section.offsetTop - 50;
        var bottom = top + section.offsetHeight;
        var id = section.getAttribute('id');

        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('.navbar a[href="#' + id + '"]').classList.add('active');
        }
    });
});
document.querySelector('.navbar').addEventListener('click', function() {
    this.classList.toggle('active');
});
document.getElementById('c-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for your message!');
    this.reset();
});
