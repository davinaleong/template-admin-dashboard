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

function main() {
  try {
    // Collapsible Fieldsets
    fieldsetEls.forEach(function (fieldsetEl) {
      // On load, expand all fieldsets
      fieldsetEl.setAttribute(ariaHiddenAttr, `true`)

      const legendEl = fieldsetEl.querySelector(`legend`)
      legendEl.addEventListener(`click`, function (event) {
        event.preventDefault()
        toggleElement(fieldsetEl)
      })
    })

    // Menu Accordion
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

    // Random Landing Page BG
    let oldLandingBg = ``
    const landingClassList = landingHeadingEl.classList
    landingBgs.forEach(function (landingBg) {
      landingClassList.forEach(function (classItem) {
        if (classItem === landingBg) {
          oldLandingBg = classItem
        }
      })
    })

    const newLandingBg = getRandomArrayElement(landingBgs)
    landingHeadingEl.classList.remove(oldLandingBg)
    landingHeadingEl.classList.add(newLandingBg)

    // Random Auth Page BG
    let oldAuthBg = ``
    const authClassList = authEl.classList
    authBgs.forEach(function (authBg) {
      authClassList.forEach(function (classItem) {
        if (classItem === authBg) {
          oldAuthBg = classItem
        }
      })
    })

    const newAuthBg = getRandomArrayElement(authBgs)
    authEl.classList.remove(oldAuthBg)
    authEl.classList.add(newAuthBg)

    btnMenuEl.addEventListener(`click`, function (event) {
      event.preventDefault()

      sidebarEl.setAttribute(ariaHiddenAttr, `true`)
    })

    btnCloseMenuEl.addEventListener(`click`, function (event) {
      event.preventDefault()

      sidebarEl.setAttribute(ariaHiddenAttr, `false`)
    })

    aActiveEls.forEach(function (aActiveEl) {
      aActiveEl.addEventListener(`click`, function (event) {
        event.preventDefault()
        return
      })
    })
  } catch (error) {
    console.log(`menuEls`, error)
  }
}

/**
 * Credit to: Adrian Roselli
 * https://adrianroselli.com/2018/05/functions-to-add-aria-to-tables-and-lists.html
 */
function addTableARIA() {
  try {
    let allTables = document.querySelectorAll("table")
    for (let i = 0; i < allTables.length; i++) {
      allTables[i].setAttribute("role", "table")
    }
    let allCaptions = document.querySelectorAll("caption")
    for (let i = 0; i < allCaptions.length; i++) {
      allCaptions[i].setAttribute("role", "caption")
    }
    let allRowGroups = document.querySelectorAll("thead, tbody, tfoot")
    for (let i = 0; i < allRowGroups.length; i++) {
      allRowGroups[i].setAttribute("role", "rowgroup")
    }
    let allRows = document.querySelectorAll("tr")
    for (let i = 0; i < allRows.length; i++) {
      allRows[i].setAttribute("role", "row")
    }
    let allCells = document.querySelectorAll("td")
    for (let i = 0; i < allCells.length; i++) {
      allCells[i].setAttribute("role", "cell")
    }
    let allHeaders = document.querySelectorAll("th")
    for (let i = 0; i < allHeaders.length; i++) {
      allHeaders[i].setAttribute("role", "columnheader")
    }
    // this accounts for scoped row headers
    let allRowHeaders = document.querySelectorAll("th[scope=row]")
    for (let i = 0; i < allRowHeaders.length; i++) {
      allRowHeaders[i].setAttribute("role", "rowheader")
    }
  } catch (e) {
    console.log("addTableARIA(): " + e)
  }
}

// Call Functions
main()
addTableARIA()
