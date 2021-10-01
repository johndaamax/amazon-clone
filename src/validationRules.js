export function validateName(name) {
    if (!name) {
        return { name: 'Enter your name' }
    } else {
        return null
    }
}

export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!email) {
        return { email: 'Enter your e-mail address' }
    }
    else if (!emailRegex.test(email)) {
        return { email: 'Wrong or Invalid e-mail address. Please correct and try again' }
    } else {
        return null
    }
}

export function validatePassword(password) {
    if (password.length < 6) {
        return { password: 'Minimum 6 characters required' }
    } else {
        return null
    }
}