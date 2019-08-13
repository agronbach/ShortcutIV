// Allow HTML "includes" of header/footer/favIcon code
$(function(){
    $("[data-load]").each(function(){
        $(this).load($(this).data("load"), function(){
        });
    });
})