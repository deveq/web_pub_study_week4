window.onload = () => {
    const emailContainer = document.querySelector('section.content .email');
    const btn =emailContainer.querySelector('.btn');
    // const btn = document.querySelector('section.content .email .btn');
    const input = emailContainer.querySelector('input');
    // const input = document.querySelector('section.content .email input');
    const warning = emailContainer.querySelector('.warning');
    btn.addEventListener('click', (e) => {
        const result = checkValidation(input.value);
        warning.hidden = result;
    })
}

const checkValidation = (mail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}