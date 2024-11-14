document.addEventListener("DOMContentLoaded", function () {
    
    const starsContainer = document.querySelectorAll('.stars');
    
    starsContainer.forEach(function(stars) {
        const rating = parseInt(stars.getAttribute('data-rating'));
        let starsHtml = '';

        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                starsHtml += '<i class="fa fa-star filled"></i>';
            } else {
                starsHtml += '<i class="fa fa-star"></i>';
            }
        }

        stars.innerHTML = starsHtml;
    });

    const hungerMenu = document.getElementById('hunger-menu');
    const menu = document.getElementById('menu');
    
    if (hungerMenu && menu) {
        hungerMenu.addEventListener('click', function () {
            menu.classList.toggle('show');
        });
    }
});
