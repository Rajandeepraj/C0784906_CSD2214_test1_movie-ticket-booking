$(document).ready(function(){
    $('.search-results').hide();
$('#book_button').click(function(){
    $('.book-results').show();      
});

$('.clear_button').click(function(){

    $('.search-results').hide();
});
$('.pay-button').click(function(){

    $('.pay-results').show();
});

$('.collapse-btn').click(function(){
    
   $(this).parent().next().toggle();
//    $('.collapse-cls, closest_cls').toggle();
})

});