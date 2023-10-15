


// exibe modal com cadastro escola
$(function () {
    $(".btn-add-escola").click(function (e) {
        e.preventDefault();
        el = $(this).data('element');
        $(el).toggle();
    });
});


// exibe modal com cadastro curso
$(function () {
    $(".btn-add-curso").click(function (e) {
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

// exibe tabela com informacoes da turma selecionada
$(function () {
    $(".open-info-turma").click(function (e) {
        e.preventDefault();
        el = $(this).data('element');
        $(el).toggle();       
    });
});

// exibe tabela com informacoes da escola selecionada
$(function () {
    $(".btn-dados-usuario").click(function (e) {
        e.preventDefault();
        el = $(this).data('element');
        $(el).toggle();       
    });
});



// oculta tabela aberta ao clicar nas abas Escola, Equipe e Acervo
const linkTable = document.querySelectorAll('.nav_link_table')


function tableLink() {
    if (linkTable) {
        linkTable.forEach(function (l) {
            el = $(l).data('element');
            $(el).hide();
        }
    )}
}
linkTable.forEach(l => l.addEventListener('click', tableLink))


