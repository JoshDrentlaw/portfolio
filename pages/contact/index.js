const honeypot = document.querySelector('#honeypot'),
    $name = document.querySelector('[name="contact_name"]'),
    $email = document.querySelector('[name="contact_email"]'),
    $phone = document.querySelector('[name="contact_phone_number"]'),
    $message = document.querySelector('[name="contact_message"]'),
    phoneNumberRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im),
    validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }

document.getElementById('contact-form').addEventListener('submit', function (e) {
    const form = new FormData(this)

    // stop submission if honeypot trap is set
    if (honeypot.hasAttribute('checked')) {
        e.preventDefault()
    }

    if ($name.value === '') {
        e.preventDefault()
        $name.setCustomValidity('Please enter your full name.')
    } else {
        $name.setCustomValidity('')
    }

    if ($email.value === '') {
        e.preventDefault()
        $email.setCustomValidity('Please enter an email address.')
    } else {
        $email.setCustomValidity('')
    }

    if ($phone.value === '') {
        e.preventDefault()
        $phone.setCustomValidity('Please enter a phone number.')
    } else {
        $phone.setCustomValidity('')
    }

    if ($message.value === '') {
        e.preventDefault()
        $message.setCustomValidity('Please add a short message describing what you\'re looking for')
    } else {
        $message.setCustomValidity('')
    }
})

$name.addEventListener('input', function () {
    if ($name.value === '') {
        $name.setCustomValidity('Please enter your full name.')
    } else {
        $name.setCustomValidity('')
    }
})

$email.addEventListener('input', function () {
    if ($email.value === '') {
        $email.setCustomValidity('Please enter an email address.')
    } else if (!validateEmail($email.value)) {
        $email.setCustomValidity('Your email address appears to have some mistake in it.')
    } else {
        $email.setCustomValidity('')
    }
})

$phone.addEventListener('input', function () {
    if ($phone.value === '') {
        $phone.setCustomValidity('Please enter a phone number.')
    } else if (!phoneNumberRegex.test($phone.value)) {
        $phone.setCustomValidity('Your phone number appears to have some mistake in it.')
    } else {
        $phone.setCustomValidity('')
    }
})

$message.addEventListener('input', function () {
    if ($message.value === '') {
        $message.setCustomValidity('Please add a short message describing what you\'re looking for')
    } else {
        $message.setCustomValidity('')
    }
})