let languageData = {};

async function loadLanguage(lang) {
  const response = await fetch(`lang/${lang}.json`);
  languageData = await response.json();
  applyLanguage();
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = languageData[key] || element.textContent;
  });
}

function changeLanguage(lang) {
  loadLanguage(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  loadLanguage("en"); // set defaul languange to english
});
