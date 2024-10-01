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

    initObserver(containerBoxId, animationIds, rightDivId) {
        const sections = document.querySelectorAll(#${rightDivId} .section);
        const animations = animationIds.map(id => document.getElementById(id));

        // Hide all animations except the first one
        animations.forEach((anim, index) => {
            if (index !== 0) anim.style.display = 'none';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(sections).indexOf(entry.target);
                    animations.forEach(anim => {
                        anim.style.display = 'none';
                        anim.stop();
                    });

                    const currentAnimation = animations[index];
                    currentAnimation.style.display = 'block';
                    currentAnimation.play();
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));
    }

    // Initialize observer for the first container
    initObserver('container-box1', ['animation1-1', 'animation1-2', 'animation1-3'], 'rightDiv1');

    // Initialize observer for the second container
    initObserver('container-box2', ['animation2-1', 'animation2-2', 'animation2-3'], 'rightDiv2');


const buttons = document.querySelectorAll('.icon-button');
const defaultImage = document.querySelector('.default');
const alternateImages = [
    'path_to_your_alternate_image1.webp', 
    'path_to_your_alternate_image2.webp', 
    'path_to_your_alternate_image3.webp'  
];

function resetButtons() {
    buttons.forEach((btn, index) => {
        const para = btn.parentElement.querySelector('p');
        const hoverAr = btn.parentElement.querySelector('.hover-arrow');
        const btnArrowIcon = btn.querySelector('.arrow-icon img');

        para.style.display = 'none';
        hoverAr.style.display = 'none';
        btnArrowIcon.src = 'https://img.icons8.com/android/12/expand-arrow.png';
    });
}

function showDefaultImage() {
    defaultImage.classList.remove('hidden');
    defaultImage.classList.add('animation');
    defaultImage.style.opacity = '1';
}

function hideDefaultImage() {
    defaultImage.classList.add('hidden');
    defaultImage.classList.remove('animation');
    defaultImage.style.opacity = '0';
}

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const section = button.parentElement;
        const paragraph = section.querySelector('p');
        const hoverArrow = section.querySelector('.hover-arrow');
        const arrowIcon = button.querySelector('.arrow-icon img');

        if (paragraph.style.display === 'none' || !paragraph.style.display) {
            resetButtons();
            paragraph.style.display = 'block';
            paragraph.classList.add('show');
            hoverArrow.style.display = 'flex';
            arrowIcon.src = 'https://img.icons8.com/ios-filled/12/collapse-arrow.png';
            hideDefaultImage();

            const alternateImage = document.querySelector('.image-container img.hidden');
            alternateImage.src = alternateImages[index];
            alternateImage.classList.remove('hidden');
            alternateImage.classList.add('animation');
            alternateImage.style.opacity = '1';
        } else {
            paragraph.classList.remove('show');
            paragraph.style.display = 'none';
            hoverArrow.style.display = 'none';
            arrowIcon.src = 'https://img.icons8.com/android/12/expand-arrow.png';

            const allClosed = Array.from(buttons).every(btn => {
                const sec = btn.parentElement;
                const para = sec.querySelector('p');
                return para.style.display === 'none';
            });

            if (allClosed) {
                showDefaultImage();
            }
        }
    });
});

resetButtons();
showDefaultImage();
buttons[0].click(); 




