function hideForm() {
    const form = document.getElementById("form-page")
    form.classList.add("d-none")
}

function showResults() {
    const results = document.getElementById("results-page")
    results.classList.remove("d-none")
}

// taken/adapted from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

function onSubmit(token) {
    if (validateRequired()) {
        setResults()
        hideForm()
        scrollToTop()
        showResults()
    }
}