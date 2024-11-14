document.addEventListener("DOMContentLoaded", function () {
    fetch("../components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });

    fetch("../components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });

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
