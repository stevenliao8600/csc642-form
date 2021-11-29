function hideForm() {
    const form = document.getElementById("form-page")
    form.classList.add("d-none")
}

function showResults() {
    const results = document.getElementById("results-page")
    results.classList.remove("d-none")
}

function onSubmit() {
    if (validateRequired) {
        setResults()
        hideForm()
        showResults()
    }
}