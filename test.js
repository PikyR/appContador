const scriptURL = 'https://script.google.com/macros/s/AKfycbz_70hrmnD-e1zdf12Xzed-uuS6X70HN2oJCC-oGfbkf0tpLJp1rRP-YQoE1YUD5TD61g/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})