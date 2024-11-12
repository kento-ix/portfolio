document.addEventListener("DOMContentLoaded", function() {
    fetch("../components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });

    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
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
  