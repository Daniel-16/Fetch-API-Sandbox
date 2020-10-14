const card_title = document.getElementById('card-title');
const card_text = document.getElementById('card-text');
const search = document.getElementById('search');

document.getElementById('form').addEventListener('submit', (form) => {
    form.preventDefault();
    fetch('index.json')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            if (form.target.input.value == json.title) {
                card_title.innerHTML = json.title;
                card_text.innerHTML = json.body
            } else {
                card_title.innerHTML = '404 (Not Found)';
                card_text.innerHTML = 'There was probably an error and we could not fetch the data required'
            }
        })
        .catch(() => {
            console.log('No data found');
            card_title.innerHTML = '404 (Not Found)';
            card_text.innerHTML = 'There was probably an error and we could not fetch the data required'
        });            
    
    
})

