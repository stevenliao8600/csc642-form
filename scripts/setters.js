function setName() {
    const name = document.getElementById('result-name')
    name.textContent = getName()
}

function setTitle() {
    const title = document.getElementById('result-title')
    title.textContent = getTitle()
}

function setHeight() {
    const height = document.getElementById('result-height')
    height.textContent = getHeight()
}

function setPhone() {
    const phone = document.getElementById('result-phone')
    phone.textContent = getPhone()
}

function setAddress() {
    const address = document.getElementById('result-address')
    address.textContent = getAddress()
}

function setServices() {
    const services = document.getElementById('result-services')
    services.textContent = getServices()
}

function setBudget() {
    const budget = document.getElementById('result-budget')
    budget.textContent = getBudget()
}

function setEmail() {
    const email = document.getElementById('result-email')
    email.textContent = getEmail()
}

function initMap() {
    const coords = getCoords()

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: coords,
    });

    const marker = new google.maps.Marker({
        position: coords,
        map: map,
    });
}

function displayResults() {
    initMap()
    setName()
    setTitle()
    setHeight()
    setPhone()
    setAddress()
    setServices()
    setBudget()
    setEmail()
}
