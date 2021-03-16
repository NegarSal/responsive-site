window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 7520|| document.documentElement.scrollTop > 7520) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$('.thumbnail').click(function(){
    $('.modal-body').empty();
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#modal').modal({show:true});
});

$('#modal').on('show.bs.modal', function () {
    $('.col-6,.row .thumbnail').addClass('blur');
})

$('#modal').on('hide.bs.modal', function () {
    $('.col-6,.row .thumbnail').removeClass('blur');
})