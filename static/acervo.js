  
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