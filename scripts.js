const form = document.querySelector('.rating');
const thankyou = document.querySelector('.thankyou');
const result = document.querySelector('#result');

form.addEventListener('submit', ev => {
    ev.preventDefault();
    const rating = new FormData(ev.target).get('rating');
    
    if(!rating) return;

    result.innerHTML = rating;

    form.classList.add('hidden');
    thankyou.classList.remove('hidden');
})