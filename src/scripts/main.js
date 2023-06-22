console.log(`main.js loaded`)

const dataElementAttr = `data-element`
const ariaExpandedAttr = `aria-expanded`

const fieldsetEls = document.querySelectorAll(`fieldset`)

if (fieldsetEls && fieldsetEls.length > 0) {
    fieldsetEls.forEach(function (fieldsetEl) {
        const legendEl = fieldsetEl.querySelector(`legend`)
        legendEl.addEventListener(`click`, function (event) {
            const ariaExpanded = fieldsetEl.getAttribute(ariaExpandedAttr)
            fieldsetEl.setAttribute(ariaExpandedAttr, "true")
            if (ariaExpanded === "true") {
                fieldsetEl.removeAttribute(ariaExpandedAttr)
            }
        })
    })
}