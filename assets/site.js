
document.querySelectorAll('form[data-lead]').forEach(form=>{form.addEventListener('submit',e=>{e.preventDefault();const msg=form.querySelector('.form-message');if(msg){msg.textContent='Thanks — your message is ready to connect once the site email/CRM destination is added.';msg.style.color='#386641';msg.style.fontWeight='800';} });});
