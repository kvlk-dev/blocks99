document.getElementById("elementProps").onsubmit = async (event) => {
    event.preventDefault()
    const el = await webflow.getSelectedElement();
    if (el && el.textContent) {
        el.setAttribute("style", "max-height: " + document.querySelector("input#elementMaxHeight").value + "px; max-width: " + document.querySelector("input#elementMaxWidth").value + "px;")

        el.save()
    }
}
alert("Hello from blocks99")