$(function(){

    $('#owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos
    
    $('.featured-item a').addClass('btn btn-dark stretch-link');
    
    $('.featured-item h4').trigger( function(){

       $(this).css({
           'color': '#f00',
           'background': '#ff0',
           'font-weight': '100',
       });

    });

  })
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});
/* modais sobre e contato */
$('.nav-modal-open').on('click', function(e){

    e.preventDefault();

    let elem = $(this).attr('rel')

    $('.modal-body').html($('#'+elem).html())
    
    $('.modal-header h5.modal-title').html($(this).text())

    let myModal = new bootstrap.Modal($('#modelId'))

    myModal.show()

 });

 function validate( elem ){
    if( elem.val() == '') {

       console.log('o campo de '+ elem.attr('name') + ' é obrigatório')

       elem.parent().find('.text-muted').show()

       elem.addClass('invalid')

       return false
    } else {
       elem.parent().find('.text-muted').hide()
       elem.removeClass('invalid')
    }
 }

 $('body').on('submit', '.modal-body .form', function(e){

    e.preventDefault()

    const inputName = $('#nome')
    const inputEmail = $('#email')

    validate(inputName)
    validate(inputEmail)

    if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
       console.log('verificar campos obrigatórios')
       return false
    } else {
       $(this).on('submit', this)  
    }

 })

 $('body').on('blur', '#nome', function(){
    validate($(this))
 })

 $('body').on('blur', '#iMail', function(){
   validate($(this))
})

 $('body').on('blur', '#email', function(){
    validate($(this))
 })

 $('body').on('focus', '#date', function(){
    $(this).datepicker()
 })

 $('body').on('blur', '#date', function(){
    validate($(this))
    $(this).mask('00/00/0000');
 }) 

 $('body').on('blur', '#time', function(){
    validate($(this))
    $(this).mask('00:00');
 })

 $('body').on('blur', '#cep', function(){
    validate($(this))
    $(this).mask('00000-000');
 })

 $('body').on('blur', '#phone', function(){
    validate($(this))
    $(this).mask('00000-0000');
 })

 $('body').on('blur', '#cpf', function(){
    validate($(this))
    $(this).mask('000.000.000-00');
 })
