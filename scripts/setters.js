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

function createMap(coords) {
    return new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: coords,
    });
}

function createMarker(coords, map) {
    return new google.maps.Marker({
        position: coords,
        map: map,
    });
}

async function initMap() {
    const coords = await getCoords()
    console.log(coords)
    const map = await createMap(coords)
    const marker = await createMarker(coords, map)
    console.log(marker)
}

function setResults() {
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

