
function accordionClick(reference) {
    const accordionHeader = reference.current

    accordionHeader.classList.toggle("active")
    const accordionBody = accordionHeader.nextElementSibling
    if (accordionHeader.classList.contains("active")) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"
    } else {
        accordionBody.style.maxHeight = 0
    }
    
}