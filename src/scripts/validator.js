function keepNumbersAndPlus(str) {
  // Заменяем все символы, кроме цифр и плюса, на пустую строку
  return str.replace(/[^\d+]/g, '')
}

function validateForm(form) {
  const name = form.querySelector('[name="name"]').value
  // const interest = form.querySelector('[name="interest"]').value
  const email = form.querySelector('[name="email"]').value
  const phone = form.querySelector('[name="phone"]').value

  if (!validator.isLength(name, { min: 2 })) {
    showNotification('Пожалуйста, введите Ваше имя')
    form.querySelector('[name="name"]').style.border =
      '2px solid rgb(151, 28, 28)'
    return false
  }

  if (!email && !phone) {
    showNotification('Пожалуйста,введите email или номер телефона')
    return false
  }

  if (email && !validator.isEmail(email)) {
    showNotification('Пожалуйста, введите правильный email')
    form.querySelector('[name="email"]').style.border =
      '2px solid rgb(151, 28, 28)'
    return false
  }

  if (phone && !validator.isMobilePhone(keepNumbersAndPlus(phone), 'ru-RU')) {
    showNotification('Пожалуйста, введите правильный номер телефона')
    form.querySelector('[name="phone"]').style.border =
      '2px solid rgb(151, 28, 28)'
    return false
  }

  return true
}

function showNotification(message) {
  const notification = document.getElementById('notification')
  notification.textContent = message
  notification.style.display = 'block'
  setTimeout(function () {
    notification.style.display = 'none'
  }, 7000)
}

function showSuccess(message) {
  const success = document.getElementById('success')
  success.textContent = message
  success.style.display = 'block'
  setTimeout(function () {
    success.style.display = 'none'
  }, 10000)
}

// function setupFormValidation(formId, captchaContainerId) {
function setupFormValidation(formId) {
  const form = document.getElementById(formId)

  form.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('input', function (event) {
      event.target.style.border = '1px solid rgba(255, 255, 255, 0.5)'
    })
  })

  form.addEventListener('submit', function (event) {
    if (!validateForm(form)) {
      event.preventDefault()
    } else {
      event.preventDefault()
      const chat_id = '617780753'
      const uri = `https://api.telegram.org/bot7780425723:AAHOZOmdv07R_SaSQsZQHKgnE-BBdOrjT0k/sendMessage`
      // let message = `Данные из формы: "${this.type.value}" \n
      let message = `Данные из формы: \n
      Имя отправителя: ${this.name.value}\n
      Задача: ${this.interest.value ? this.interest.value : 'не указано'}\n
      Email:  ${this.email.value ? this.email.value : 'не указано'}\n
      Номер телефона:  ${this.phone.value ? this.phone.value : 'не указано'}\n`

      axios
        .post(uri, {
          chat_id: chat_id,
          text: message,
          parse_mode: 'html',
        })
        .then((res) => {
          this.name.value = ''
          this.interest.value = ''
          this.email.value = ''
          this.phone.value = ''
          showSuccess('Заявка успешно отправлена!')
        })
        .catch((error) => {
          console.warn(error)
        })

      var modal = document.getElementById('myModal')
      modal.style.display = 'none'
      const submitButton = form.querySelector('button[type="submit"]')
      submitButton.disabled = true
    }
  })

  // form.querySelector('[name="phone"]').addEventListener('input', function (e) {
  //   var input = e.target
  //   input.value = input.value.replace(/[^0-9+]/g, '')
  // })
}

setupFormValidation('form')
setupFormValidation('form-modal')
