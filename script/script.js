
    const celus= window.matchMedia('screen and (max-width: 767px)')
    const menu=document.querySelector('.menu');
    const burgerbutton=document.querySelector('#burger-menu');

    burgerbutton.addEventListener('click',hideShow)
      celus.addListener(validation);

      function validation(event){
        if(event.matches){
          burgerbutton.addEventListener('click',hideShow);

        }else{
          burgerbutton.removeEventListener('click',hideShow);
        }
      }
      validation(celus);
    function hideShow(){
      if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
      }else{
        menu.classList.add('is-active');
      }
      

    }