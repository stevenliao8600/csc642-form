function getName() {
    const lname = document.getElementById("last-name").value
    const fname = document.getElementById("first-name").value

    return fname + " " + lname
}

function getTitle() {
    const title = document.getElementById("preferred-title").value
    return title
}

function getHeight() {
    const ft = document.getElementById("height-ft").value
    const inch = document.getElementById("height-in").value

    if (ft && inch) {
        return ft + " \' " + inch + "\""
    }
    return 'N/A'
}

function getPhone() {
    const phone = document.getElementById("phone")

    if (phone.validity.valid) {
        return phone.value
    }
    return 'N/A'
}

function getAddress() {
    const address = document.getElementById("address").value
    const apartment = document.getElementById("apartment").value
    const city = document.getElementById("city").value
    const state = document.getElementById("state").value
    const zip = document.getElementById("zip").value

    let fullAddress = address + "\n"
    if (apartment) {
        fullAddress += apartment + "\n"
    }
    fullAddress += city + ", " + state + " " + zip
    return fullAddress
}

function getServices() {
    const servicesIds = [
        "services-email",
        "services-phone",
        "services-facebook",
        "services-tweeter",
        "services-surface-mail",
        "services-personal-visit"
    ]

    const services = servicesIds.map(id => {
        if (document.getElementById(id).checked) {
            return document.querySelector('label[for=' + id + ']').textContent
        } else {
            return ""
        }
    }).filter(service => service != "").join("\n")

    if(!services) {
        return 'None'
    } else {
        return services
    }
}

function getBudget() {
    const budget = document.getElementById("budget").value

    if (budget) {
        return 'N/A'
    } else {
        return budget
    }
}

function getEmail() {
    const email = document.getElementById("email").value
    return email
}

function getAddressGeocodeFormat() {
    const parts = [
        "address",
        "city",
        "state",
        "zip"
    ]

    const address = parts.map(
        part => document.getElementById(part).value.trim()
    ).join(",")
    return address
}

async function getCoords() {
    const options = {
        method: 'GET',
        url: 'https://open.mapquestapi.com/geocoding/v1/address',
        params: {
            key: 'fqZTPkACfRZ5myK2njiNiNFiJcNlDPd0',
            location: getAddressGeocodeFormat()
        }
    };

    const res = await axios.request(options)
    const latLng = res.data.results[0].locations[0].latLng
    return latLng
}