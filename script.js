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