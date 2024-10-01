 const dropdownToggler = document.querySelector('.dropdown-toggler');
    const dropdownList = document.querySelector('.dropdown-list');

    dropdownToggler.addEventListener('click', function() {
        dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
        dropdownToggler.classList.toggle('active');
    });

    window.addEventListener('click', function(e) {
        if (!dropdownToggler.contains(e.target)) {
            dropdownList.style.display = 'none';
            dropdownToggler.classList.remove('active');
        }
    })

const sections = document.querySelectorAll('.section');
const animations = [
    document.getElementById('animation1'),
    document.getElementById('animation2'),
    document.getElementById('animation3'),
];

animations.forEach((anim, index) => {
    if (index !== 0) anim.style.display = 'none';
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            
            // Hide all animations and only show the one corresponding to the section
            animations.forEach(anim => anim.style.display = 'none');
            animations[index].style.display = 'block'; // Show the corresponding animation
        }
    });
}, { threshold: 0.5 });

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
document.querySelectorAll('.icon-button').forEach((button, index) => {
    button.addEventListener('click', function() {
        const sectionClass = index === 0 ? '.nothing' : index === 1 ? '.nothing2' : '.nothing3'; // Select the appropriate section
        const section = document.querySelector(sectionClass);
        const paragraph = section.querySelector('p');
        const hoverArrow = section.querySelector('.hover-arrow');

        if (paragraph && hoverArrow) {
            if (paragraph.style.display === 'none' || !paragraph.style.display) {
                // Show paragraph and hover-arrow
                paragraph.style.display = 'block';
                hoverArrow.style.display = 'flex'; // Adjust as necessary for your layout
            } else {
                // Hide paragraph and hover-arrow
                paragraph.style.display = 'none';
                hoverArrow.style.display = 'none';
            }
        }
    });
});
