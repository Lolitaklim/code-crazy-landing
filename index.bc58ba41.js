function keepNumbersAndPlus(str) {
    // Заменяем все символы, кроме цифр и плюса, на пустую строку
    return str.replace(/[^\d+]/g, "");
}
function validateForm(form) {
    const name = form.querySelector('[name="name"]').value;
    // const interest = form.querySelector('[name="interest"]').value
    const email = form.querySelector('[name="email"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    if (!validator.isLength(name, {
        min: 2
    })) {
        showNotification("\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043C\u044F");
        form.querySelector('[name="name"]').style.border = "2px solid rgb(151, 28, 28)";
        return false;
    }
    if (!email && !phone) {
        showNotification("\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430,\u0432\u0432\u0435\u0434\u0438\u0442\u0435 email \u0438\u043B\u0438 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
        return false;
    }
    if (email && !validator.isEmail(email)) {
        showNotification("\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 email");
        form.querySelector('[name="email"]').style.border = "2px solid rgb(151, 28, 28)";
        return false;
    }
    if (phone && !validator.isMobilePhone(keepNumbersAndPlus(phone), "ru-RU")) {
        showNotification("\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
        form.querySelector('[name="phone"]').style.border = "2px solid rgb(151, 28, 28)";
        return false;
    }
    return true;
}
function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";
    setTimeout(function() {
        notification.style.display = "none";
    }, 7000);
}
function showSuccess(message) {
    const success = document.getElementById("success");
    success.textContent = message;
    success.style.display = "block";
    setTimeout(function() {
        success.style.display = "none";
    }, 10000);
}
// function setupFormValidation(formId, captchaContainerId) {
function setupFormValidation(formId) {
    const form = document.getElementById(formId);
    form.querySelectorAll("input").forEach(function(input) {
        input.addEventListener("input", function(event) {
            event.target.style.border = "1px solid rgba(255, 255, 255, 0.5)";
        });
    });
    form.addEventListener("submit", function(event) {
        if (!validateForm(form)) event.preventDefault();
        else {
            event.preventDefault();
            const chat_id = "617780753";
            const uri = `https://api.telegram.org/bot7780425723:AAHOZOmdv07R_SaSQsZQHKgnE-BBdOrjT0k/sendMessage`;
            // let message = `Данные из формы: "${this.type.value}" \n
            let message = `\u{414}\u{430}\u{43D}\u{43D}\u{44B}\u{435} \u{438}\u{437} \u{444}\u{43E}\u{440}\u{43C}\u{44B}: 

      \u{418}\u{43C}\u{44F} \u{43E}\u{442}\u{43F}\u{440}\u{430}\u{432}\u{438}\u{442}\u{435}\u{43B}\u{44F}: ${this.name.value}

      \u{417}\u{430}\u{434}\u{430}\u{447}\u{430}: ${this.interest.value ? this.interest.value : "\u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E"}\n
      Email:  ${this.email.value ? this.email.value : "\u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E"}

      \u{41D}\u{43E}\u{43C}\u{435}\u{440} \u{442}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}\u{430}:  ${this.phone.value ? this.phone.value : "\u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E"}\n`;
            axios.post(uri, {
                chat_id: chat_id,
                text: message,
                parse_mode: "html"
            }).then((res)=>{
                this.name.value = "";
                this.interest.value = "";
                this.email.value = "";
                this.phone.value = "";
                showSuccess("\u0417\u0430\u044F\u0432\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430!");
            }).catch((error)=>{
                console.warn(error);
            });
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
        }
    });
// form.querySelector('[name="phone"]').addEventListener('input', function (e) {
//   var input = e.target
//   input.value = input.value.replace(/[^0-9+]/g, '')
// })
}
setupFormValidation("form");
setupFormValidation("form-modal");

//# sourceMappingURL=index.bc58ba41.js.map
