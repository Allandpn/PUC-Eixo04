document.addEventListener("DOMContentLoaded", function (event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)
  
      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          // show navbar
          nav.classList.toggle('show-navbar')
          // change icon
          toggle.classList.toggle('bx-x')
          // add padding to body
          bodypd.classList.toggle('body-pd')
          // add padding to header
          headerpd.classList.toggle('body-pd')
          // exibe versao do sistema
          $("#id-system-version").toggle();
        })
      }
    }
  
    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
  
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
  
    function colorLink() {
      if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
      }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))
  
  
  
    // Your code to run since DOM is loaded and ready
  });
  
  
  
  
  var myLink = document.querySelector('a[href="#"]');
  myLink.addEventListener('click', function (e) {
    e.preventDefault();
  
  });
  
  
  
  // exibe modal com menu perfil
  $(function () {
    $(".perfil-icon").click(function (e) {
      e.preventDefault();
      el = $(this).data('element');
      $(el).toggle();
    });
  });
  
  
  
  
  
  // exibe tabela com informacoes da escola selecionada
  $(function () {
    $(".open-info-escola").click(function (e) {
      e.preventDefault();
      el = $(this).data('element');
      $(el).toggle();
    });
  });
  
  
  
  // exibe tabela com informacoes da escola selecionada
  
  
  const linkTable = document.querySelectorAll('.nav_link_table')
  
  function tableLink() {
    if (linkTable) {
      linkTable.forEach(
        function (l) {
          console.log('tes')
        })
      console.log(this)
    }
  }
  linkTable.forEach(l => l.addEventListener('click', tableLink))
  
  // exibe modal com cadastro aluno
  $(function () {
    $(".btn-add-aluno").click(function (e) {
      e.preventDefault();
      el = $(this).data('element');
      $(el).toggle();
    });
  });
  
  // exibe modal com edição aluno
  $(function () {
    $(".btn-edit-aluno").click(function (e) {
      e.preventDefault();
      el = $(this).data('element');
      $(el).toggle();
    });
  });
  
  // exibe modal com cadastro instrumento
  $(function () {
    $(".btn-add-instrumento").click(function (e) {
      e.preventDefault();
      el = $(this).data('element');
      $(el).toggle();
    });
  });
  
  // exibe modal com edição instrumento
  $(function () {
    $(".btn-edit-instrumento").click(function (e) {
      e.preventDefault();
      el = $(this).data('element');
      $(el).toggle();
    });
  });
