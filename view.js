// JavaScript to handle accordion toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // Toggle active class
            const activeHeader = document.querySelector('.accordion-header.active');
            if (activeHeader && activeHeader !== this) {
                activeHeader.classList.remove('active');
                activeHeader.nextElementSibling.style.maxHeight = '0'; // Close previously opened content
            }

            this.classList.toggle('active');

            // Toggle the corresponding accordion content
            const content = this.nextElementSibling;
            if (this.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px'; // Expand content
            } else {
                content.style.maxHeight = '0'; // Collapse content
            }
        });
    });
});
