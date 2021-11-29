function validateLname() {
    const lname = document.getElementById("last-name").value
    const feedback = document.getElementById("lname-feedback")

    if (lname == "") {
        feedback.textContent = "Last name cannot be empty"
    } else if (lname.length > 40) {
        feedback.textContent = "Last name cannot be longer than 40 characters"
    } else {
        feedback.textContent = "Valid last name"
        feedback.style = "color: green"
        return true
    }
    feedback.style = "color: red"
    return false
}

function validateFname() {
    const fname = document.getElementById("first-name").value
    const feedback = document.getElementById("fname-feedback")

    if (fname == "") {
        feedback.textContent = "First name cannot be empty"
    } else if (fname.length > 40) {
        feedback.textContent = "First name cannot be longer than 40 characters"
    } else {
        feedback.textContent = "Valid first name"
        feedback.style = "color: green"
        return true
    }
    feedback.style = "color: red"
    return false
}

function validateTitle() {
    const title = document.getElementById("preferred-title").value
    const feedback = document.getElementById("title-feedback")

    const titles = [
        'none',
        'student',
        'professor',
        'staff',
        'retired'
    ]

    if (title == "") {
        feedback.textContent = "Choose a preferred title"
    } else if (!titles.includes(title)) {
        feedback.textContent = "Choose a valid preferred title"
    } else {
        feedback.textContent = "Valid title"
        feedback.style = "color: green"
        return true
    }
    feedback.style = "color: red"
    return false
}

function validateAddress() {
    const address = document.getElementById("address").value
    const feedback = document.getElementById("address-feedback")

    if (address == "") {
        feedback.textContent = "Address cannot be empty"
    } else if (address.length > 40) {
        feedback.textContent = "Address cannot be longer than 40 characters"
    } else {
        feedback.textContent = "Valid address"
        feedback.style = "color: green"
        return true
    }
    feedback.style = "color: red"
    return false
}

function validateApartment() {
    const apartment = document.getElementById("apartment").value
    const feedback = document.getElementById("apartment-feedback")

    if (apartment.length > 40) {
        feedback.textContent = "Apartment cannot be longer than 40 characters"
        feedback.style = "color: red"
    } else {
        feedback.textContent = "Input your apartment, studio or floor, if applicable"
        feedback.style.removeProperty('color')
    }
}

function validatePhone() {
    const phone = document.getElementById("phone").value
    const feedback = document.getElementById("phone-feedback")
    const re = /\(\d{3}\)\s\d{3}\-\d{4}/
    if (phone.match(re)) {
        feedback.textContent = "Valid phone number"
        feedback.style = "color: green"
    } else {
        feedback.textContent = "Input your phone number"
        feedback.style.removeProperty('color')
    }
}

function validateCity() {
    const city = document.getElementById("city").value
    const feedback = document.getElementById("city-feedback")

    const re = /[a-zA-Z',.\s-]+/

    if (city == "") {
        feedback.textContent = "City cannot be empty"
    } else if (city.length > 40) {
        feedback.textContent = "City cannot be longer than 40 characters"
    } else if (!city.match(re)) {
        feedback.textContent = "Invalid characters"
    } else {
        feedback.textContent = "Valid city"
        feedback.style = "color: green"
        return true
    }
    feedback.style = "color: red"
    return false
}

function validateState() {
    const state = document.getElementById("state").value
    const feedback = document.getElementById("state-feedback")

    const states = [
        "AL",
        "AK",
        "AS",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "DC",
        "FM",
        "FL",
        "GA",
        "GU",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MH",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "MP",
        "OH",
        "OK",
        "OR",
        "PW",
        "PA",
        "PR",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VI",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY"
    ]

    if (state == "") {
        feedback.textContent = "Choose a state"
    } else if (!states.includes(state)) {
        feedback.textContent = "Choose a valid state"
    } else {
        feedback.textContent = "Valid state"
        feedback.style = "color: green"
        return true
    }
    feedback.style = "color: red"
    return false
}

function validateZip() {
    const zip = document.getElementById("zip").value
    const feedback = document.getElementById("zip-feedback")

    const re = /\d{5}/

    if (zip == "") {
        feedback.textContent = "Zip code cannot be empty"
    } else if (!zip.match(re)) {
        feedback.textContent = "Input a valid zip code"
    } else {
        feedback.textContent = "Valid zip code"
        feedback.style = "color: green"
        return true
    }
    feedback.style = "color: red"
    return false
}

function validateEmail() {
    const validity = document.getElementById("email").validity
    const feedback = document.getElementById("email-feedback")

    if (validity.valueMissing) {
        feedback.textContent = "Email cannot be empty"
    } else if (validity.typeMismatch) {
        feedback.textContent = "Input a valid email"
    } else {
        feedback.textContent = "Valid email"
        feedback.style = "color: green"
        return true
    }
    feedback.style = "color: red"
    return false
}

function validateTOS() {
    const validity = document.getElementById("tos").validity
    const feedback = document.getElementById("tos-feedback")

    if (validity.valid) {
        feedback.textContent = ""
        return true
    }
    feedback.textContent = "Must agree with Terms of Service"
    feedback.style = "color: red"
    return false
}

function validateRequired() {
    const valid = [
        validateLname(),
        validateFname(),
        validateTitle(),
        validateAddress(),
        validateCity(),
        validateState(),
        validateZip(),
        validateEmail(),
        validateTOS()
    ]
    return !valid.includes(false)
}