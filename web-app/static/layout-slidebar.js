document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show-navbar");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
        // exibe versao do sistema
        $("#id-system-version").toggle();
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  var myLink = document.querySelector('a[href="#"]');
  myLink.addEventListener("click", function (e) {
    e.preventDefault();
  });

  // Your code to run since DOM is loaded and ready
});

// exibe modal com menu perfil
$(function () {
  $(".perfil-icon").click(function (e) {
    e.preventDefault();
    el = $(this).data("element");
    $(el).toggle();
  });
});

// oculta elementos ao clicar fora
const hidecontainer = document.querySelectorAll(".hide-container");

function hideContainer(e) {
  //verifica a box que esta ativa
  //console.log(this)
  const container = $(this).children().children().eq(1);
  if (!container.is(e.target) && !container.has(e.target).length) {
    $(this).hide();
  }
}
hidecontainer.forEach((l) => l.addEventListener("mouseup", hideContainer));

// oculta menu de perfil do usuario
$(document).mouseup(function (e) {
  const container = $(".perfil-menu");
  if (!container.is(e.target) && !container.has(e.target).length) {
    container.hide();
  }
});
