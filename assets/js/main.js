document.addEventListener("DOMContentLoaded", function() {
    // headerの読み込み
    fetch("../components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });

    // footerの読み込み
    fetch("../components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.querySelectorAll('.stars');
    
    starsContainer.forEach(function(stars) {
        const rating = parseInt(stars.getAttribute('data-rating'));
        let starsHtml = '';

        //generate star based on given num
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                starsHtml += '<i class="fa fa-star filled"></i>';
            } else {
                starsHtml += '<i class="fa fa-star"></i>';
            }
        }

        stars.innerHTML = starsHtml;
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const hungerMenu = document.getElementById('hunger-menu'); // ハンバーガーメニュー
    const menu = document.getElementById('menu'); // メニュー
  
    // ハンバーガーメニューがクリックされた時の処理
    hungerMenu.addEventListener('click', function () {
      // モバイルメニューの表示・非表示を切り替え
      menu.classList.toggle('show');
    });
});
