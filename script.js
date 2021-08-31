
    let formValidator = {
        handleSubmit:(event) => {
            event.preventDefault();
            let send = true;

            let inputs = form.querySelectorAll('input');

            formValidator.clearErrors();

            for(let i = 0; i < inputs.length; i++ ) {
                let input = inputs[i];
                let check = formValidator.checkInput(input);
                if(check !== true) {
                    send = false;
                    formValidator.showError(input, check)
                }
            }
            
            if(send) {
                form.submit();
            }
        },
        checkInput:(input) => {
            let rules = input.getAttribute('data-rules');
            if(rules !== null) {
                rules = rules.split('|');
                for(let k in rules) {
                    let rulesDetails = rules[k].split('=');
                    switch(rulesDetails[0]) {
                        case 'required':
                            if(input.value == '') {
                                return "Campo obrigatório";
                            }
                        break;
                        case 'min':
                            if(input.value.length < rulesDetails[1]){
                                return 'Campo deve ter pelo menos '+rulesDetails[1]+' caracteres';
                            }
                        break;
                        case 'email':
                            if(!input.value.includes('@')) {
                                return 'Incluir o @ no email';
                            }
                    }
                }
            }
            return true;
        },
        showError:(input, error) => {
            input.style.borderColor = '#FF0000';
            let errorElement = document.createElement('div');
            errorElement.classList.add('error');
            errorElement.innerHTML = error;

            input.parentElement.insertBefore(errorElement, input.ElementSibling);
        },
        clearErrors:() => {
            let inputs = form.querySelectorAll('input');
                for(let i = 0; i < inputs.length; i++) {
                    inputs[i].style = '';
                }

            let errorElements = document.querySelectorAll('.error');
            for(let i = 0; i < errorElements.length; i++) {
                errorElements[i].remove();
            }
        }
    };

    let form = document.querySelector('.form');
    form.addEventListener('submit', formValidator.handleSubmit);