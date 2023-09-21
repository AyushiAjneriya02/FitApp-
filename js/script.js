function changeBg(){
    let scrollValue = window.scrollY;
    let nbar = document.getElementById('nbar');
    if(scrollValue < 150){
        nbar.classList.remove('bgColor');
    }
    else{
        nbar.classList.add('bgColor');
    }
    
    }
    
    window.addEventListener('scroll', changeBg)

