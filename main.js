$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        
        $("ul").append(`<li>${novaTarefa}</li>`);
        $('#nome-tarefa').val('')

        $("ul").on('click', 'li', function(){
            $(this).toggleClass("linha-meio");
            $(this).find(".pendente").toggleClass("hide");
            
        })
    })
})