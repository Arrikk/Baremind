$(document).ready(function(){
    $('.mobile-toggle').on('click', function(){
        let open = $(this).attr('class').includes('close-btn')

        if(open){
            $(this).html('<i class="bi bi-grid"></i>').removeClass('close-btn').addClass('mobile-toggle')
            $('.navbar-right').css({
                display: 'none'
            })
    
        }else{
            $('.navbar-right').hide()
            $(this).html('<i class="bi bi-x"></i>').addClass('close-btn').removeClass('mobile-toggle')
    
            $('.navbar-right').css({
                display: 'block'
            })

        }
    })
})