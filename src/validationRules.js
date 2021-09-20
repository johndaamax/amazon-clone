export function validateName(name) {
    if (!name) {
        return { name: 'Enter your name' }
    } else {
        return null
    }
}

export function validateEmail(email) {
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
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