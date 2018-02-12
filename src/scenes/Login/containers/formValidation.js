export const validate = values => {
    const errors = {}
    if(!values.username) {
        errors.username = 'required'
    }
    if(!values.email) {
        errors.email = 'required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'invalid email address'
    }
    if(!values.password) {
        errors.password = 'required'
    }
    if(!values.secondPassword) {
        errors.secondPassword = 'required'
    } else if(values.password !== values.secondPassword) {
        errors.secondPassword = 'passwords don\'t match'
    }
    return errors
}

export const warn = values => {
    const warnings = {}
    if( values.password && values.password.length < 6) {
        warnings.password = 'consider longer password'
    }
    return warnings
}