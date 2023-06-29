console.log(`main.js loaded`)

// Attributes
const dataElementAttr = `data-element`
const dataActiveAttr = `data-active`
const ariaHiddenAttr = `aria-hidden`

// Elements
const fieldsetEls = document.querySelectorAll(`fieldset`)
const menuEls = document.querySelectorAll(`.menu`)
const landingHeadingEl = document.querySelector(`.landing__heading`)
const authEl = document.querySelector(`.auth`)
const sidebarEl = document.querySelector(`[${dataElementAttr}="sidebar"]`)
const btnMenuEl = document.querySelector(`[${dataElementAttr}="btn-menu"]`)
const btnCloseMenuEl = document.querySelector(
  `[${dataElementAttr}="btn-close-menu"]`
)
const btnBackToTopEl = document.querySelector(
  `[${dataElementAttr}="btn-back-to-top"]`
)
const aActiveEls = document.querySelectorAll(`a[${dataActiveAttr}="true"]`)

const landingBgs = [
  "bg-landing-1",
  "bg-landing-2",
  "bg-landing-3",
  "bg-landing-4",
  "bg-landing-5",
]

const authBgs = ["bg-auth-1", "bg-auth-2", "bg-auth-3"]

// Logic
if (fieldsetEls && fieldsetEls.length > 0) {
  fieldsetEls.forEach(function (fieldsetEl) {
    // On load, expand all fieldsets
    fieldsetEl.setAttribute(ariaHiddenAttr, `true`)

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
      menuItemEl.setAttribute(ariaHiddenAttr, `true`)
      if (index > 0) {
        menuItemEl.removeAttribute(ariaHiddenAttr)
      }

      const menuItemLabelEl = menuItemEl.querySelector(`.menu-item-label`)
      menuItemLabelEl.addEventListener(`click`, function (event) {
        event.preventDefault()
        toggleElement(menuItemEl)
      })
    })
  })
}

if (landingHeadingEl) {
  let oldBg = ``
  const classList = landingHeadingEl.classList
  landingBgs.forEach(function (landingBg) {
    classList.forEach(function (classItem) {
      if (classItem === landingBg) {
        oldBg = classItem
      }
    })
  })

  const newBg = getRandomArrayElement(landingBgs)
  landingHeadingEl.classList.remove(oldBg)
  landingHeadingEl.classList.add(newBg)
}

if (authEl) {
  let oldBg = ``
  const classList = authEl.classList
  authBgs.forEach(function (authBg) {
    classList.forEach(function (classItem) {
      if (classItem === authBg) {
        oldBg = classItem
      }
    })
  })

  const newBg = getRandomArrayElement(authBgs)
  authEl.classList.remove(oldBg)
  authEl.classList.add(newBg)
}

if (sidebarEl) {
  if (btnMenuEl) {
    btnMenuEl.addEventListener(`click`, function (event) {
      event.preventDefault()

      sidebarEl.setAttribute(ariaHiddenAttr, `true`)
    })

    btnCloseMenuEl.addEventListener(`click`, function (event) {
      event.preventDefault()

      sidebarEl.setAttribute(ariaHiddenAttr, `false`)
    })
  }
}

if (btnBackToTopEl) {
  window.addEventListener(`scroll`, function (event) {
    const ariaHidden = window.scrollY >= 100 ? `false` : `true`
    btnBackToTopEl.setAttribute(ariaHiddenAttr, ariaHidden)
  })
}

if (aActiveEls && aActiveEls.length > 0) {
  aActiveEls.forEach(function (aActiveEl) {
    aActiveEl.addEventListener(`click`, function (event) {
      event.preventDefault()
      return
    })
  })
}

// Functions
function toggleElement(element) {
  const ariaHidden = element.getAttribute(ariaHiddenAttr)
  element.setAttribute(ariaHiddenAttr, `true`)
  if (ariaHidden === `true`) {
    element.removeAttribute(ariaHiddenAttr)
  }
}

function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}
