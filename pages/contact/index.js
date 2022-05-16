const honeypot = document.getElementById('honeypot')

document.getElementById('contact-form').addEventListener('submit', function (e) {
    // stop submission if honeypot trap is set
    if (honeypot.hasAttribute('checked')) {
        e.preventDefault()
    }
})