console.log(`main.js loaded`)

// Attributes
const dataElementAttr = `data-element`
const ariaExpandedAttr = `aria-expanded`

// Elements
const fieldsetEls = document.querySelectorAll(`fieldset`)
const menuEls = document.querySelectorAll(`.menu`)

// Logic
if (fieldsetEls && fieldsetEls.length > 0) {
  fieldsetEls.forEach(function (fieldsetEl) {
    // On load, expand all fieldsets
    fieldsetEl.setAttribute(ariaExpandedAttr, `true`)

    const legendEl = fieldsetEl.querySelector(`legend`)
    legendEl.addEventListener(`click`, function (event) {
      event.preventDefault()
      toggleElement(fieldsetEl)
    })
  })
}

if (menuEls && menuEls.length > 0) {
  menuEls.forEach(function (menuEl) {
    const menuItemEls = menuEl.querySelectorAll(`.menu-item`)
    menuItemEls.forEach(function (menuItemEl, index) {
      // On load, expand the first menu item and collapse the rest
      menuItemEl.setAttribute(ariaExpandedAttr, `true`)
      if (index > 0) {
        menuItemEl.removeAttribute(ariaExpandedAttr)
      }

      const menuItemLabelEl = menuItemEl.querySelector(`.menu-item-label`)
      menuItemLabelEl.addEventListener(`click`, function (event) {
        event.preventDefault()
        toggleElement(menuItemEl)
      })
    })
  })
}

// Functions
function toggleElement(element) {
  const ariaExpanded = element.getAttribute(ariaExpandedAttr)
  element.setAttribute(ariaExpandedAttr, `true`)
  if (ariaExpanded === `true`) {
    element.removeAttribute(ariaExpandedAttr)
  }
}
