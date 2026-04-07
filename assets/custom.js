
document.addEventListener("DOMContentLoaded", function () {
  function bindCheckoutRedirect(button) {
    if (!button.dataset.bound) {
      button.dataset.bound = "true";
      button.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "https://seguro.royalcalcados.com.br/checkout";
      });
    }
  }

  function scanAndBindButtons() {
    const buttons = document.querySelectorAll(".finalizar-compra, .checkout-button, .botao-finalizar, [data-rcd-request]");
    buttons.forEach(bindCheckoutRedirect);
  }

  // Usar MutationObserver para lidar com elementos dinâmicos
  const observer = new MutationObserver(function () {
    scanAndBindButtons();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Aplicar inicialmente
  scanAndBindButtons();
});
