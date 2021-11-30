function hideForm() {
    const form = document.getElementById("form-page")
    form.classList.add("d-none")
}

function showResults() {
    const results = document.getElementById("results-page")
    results.classList.remove("d-none")
}

// taken/adapted from https://stackoverflow.com/questions/59792460/how-to-make-page-scroll-to-top-after-submit-button-is-pressed-in-google-form
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

function onSubmit(token) {
    if (validateRequired()) {
        setResults()
        hideForm()
        scrollToTop()
        showResults()
    }
}