
            setTimeout(function(){
                $('#preloader').velocity({
                    opacity : 0.1,
                    translateY: "-80px",
                    filter: "grayscale(100%)"
                }


                , {
                    duration: 400,
                    complete: function(){
                    $('#hola').velocity({
                    translateY : "-100%"
                }, {
                    duration: 1000,
                    easing: [0.7,0,0.3,1],
                    complete: function(){
                        $('.home').addClass('animate-border divide');
                        $('.header_anima_start').addClass('header_anima');
                        $('.pic_app_start').addClass('pic_app');
                        
                        $('.pic_app_start_2').addClass('pic_app_2'); 
                        
                        $('.img_app_start_wrapper').addClass('img_app_wrapper'); 
                        $('.wrapper_h1_start').addClass('wrapper_h1');
                        
                        
                        

                    }
                })  
                    }
                })
            },2000)






