const ham = document.getElementById('ham');
const close = document.getElementById('close');
const nav = document.getElementById("navbar");
if(ham){
    ham.addEventListener('click', function(){
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', function(){
        nav.classList.remove('active');
    })
}