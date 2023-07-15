console.log(`main.js loaded`);

// Attributes
const dataElementAttr = `data-element`;
const dataActiveAttr = `data-active`;
const dataTargetAttr = `data-target`;
const dataSortDirectionAttr = `data-sort-direction`;
const ariaHiddenAttr = `aria-hidden`;
const ariaExpandedAttr = `aria-expanded`;

const landingBgs = [
    "bg-landing-1",
    "bg-landing-2",
    "bg-landing-3",
    "bg-landing-4",
    "bg-landing-5",
];

const authBgs = ["bg-auth-1", "bg-auth-2", "bg-auth-3"];
const sortDirections = ["asc", "desc"];

// Functions
function logFunction(name, params = {}) {
    console.log(`fn ${name}(${JSON.stringify(params)})`);
}

function toggleElement(element) {
    logFunction(`toggleElement`, { element });

    const ariaHidden = element.getAttribute(ariaHiddenAttr);
    element.setAttribute(ariaHiddenAttr, `true`);
    if (ariaHidden === `true`) {
        element.removeAttribute(ariaHiddenAttr);
    }
}

function getRandomArrayElement(array) {
    logFunction(`getRandomArrayElement`, { array });

    return array[Math.floor(Math.random() * array.length)];
}

function main() {
    logFunction(`main`);

    // Elements
    const fieldsetEls = document.querySelectorAll(`fieldset`);
    const menuEls = document.querySelectorAll(`.menu`);
    const landingEl = document.querySelector(`.landing`);
    const loginHeadingEl = document.querySelector(`.login__heading`);
    const authEl = document.querySelector(`.auth`);
    const sidebarEl = document.querySelector(`[${dataElementAttr}="sidebar"]`);
    const btnMenuEl = document.querySelector(`[${dataElementAttr}="btn-menu"]`);
    const btnCloseMenuEl = document.querySelector(
        `[${dataElementAttr}="btn-close-menu"]`
    );
    const btnBackToTopEl = document.querySelector(
        `[${dataElementAttr}="btn-back-to-top"]`
    );
    const aActiveEls = document.querySelectorAll(`a[${dataActiveAttr}="true"]`);
    const tableCollapsibleEls = document.querySelectorAll(`.table-collapsible`);
    const dialogEls = document.querySelectorAll(`dialog`);
    const btnLaunchDialogEls = document.querySelectorAll(
        `[${dataElementAttr}="btn-launch-dialog"]`
    );
    const tableSortableEls = document.querySelectorAll(`.table-sortable`);

    // Collapsible Fieldsets
    if (fieldsetEls && fieldsetEls.length > 0) {
        fieldsetEls.forEach(function (fieldsetEl) {
            // On load, expand all fieldsets
            fieldsetEl.setAttribute(ariaHiddenAttr, `true`);

            const legendEl = fieldsetEl.querySelector(`legend`);
            legendEl.addEventListener(`click`, function (event) {
                event.preventDefault();
                toggleElement(fieldsetEl);
            });
        });
    }

    // Menu Accordion
    if (menuEls && menuEls.length > 0) {
        menuEls.forEach(function (menuEl) {
            const menuItemEls = menuEl.querySelectorAll(`.menu-item`);
            menuItemEls.forEach(function (menuItemEl, index) {
                // On load, expand the first menu item and collapse the rest
                menuItemEl.setAttribute(ariaHiddenAttr, `true`);
                if (index > 0) {
                    menuItemEl.removeAttribute(ariaHiddenAttr);
                }

                const menuItemLabelEl =
                    menuItemEl.querySelector(`.menu-item__label`);
                if (menuItemLabelEl) {
                    menuItemLabelEl.addEventListener(`click`, function (event) {
                        event.preventDefault();
                        toggleElement(menuItemEl);
                    });
                }
            });
        });
    }

    // Random Landing Page BG
    if (landingEl) {
        let oldLandingBg = ``;
        const landingClassList = landingEl.classList;
        landingBgs.forEach(function (landingBg) {
            landingClassList.forEach(function (classItem) {
                if (classItem === landingBg) {
                    oldLandingBg = classItem;
                }
            });
        });

        const newLandingBg = getRandomArrayElement(landingBgs);
        landingEl.classList.remove(oldLandingBg);
        landingEl.classList.add(newLandingBg);
    }

    // Random Login Page BG
    if (loginHeadingEl) {
        let oldLandingBg = ``;
        const landingClassList = loginHeadingEl.classList;
        landingBgs.forEach(function (landingBg) {
            landingClassList.forEach(function (classItem) {
                if (classItem === landingBg) {
                    oldLandingBg = classItem;
                }
            });
        });

        const newLandingBg = getRandomArrayElement(landingBgs);
        loginHeadingEl.classList.remove(oldLandingBg);
        loginHeadingEl.classList.add(newLandingBg);
    }

    // Random Auth Page BG
    if (authEl) {
        let oldAuthBg = ``;
        const authClassList = authEl.classList;
        authBgs.forEach(function (authBg) {
            authClassList.forEach(function (classItem) {
                if (classItem === authBg) {
                    oldAuthBg = classItem;
                }
            });
        });

        const newAuthBg = getRandomArrayElement(authBgs);
        authEl.classList.remove(oldAuthBg);
        authEl.classList.add(newAuthBg);
    }

    // Menu Buttons
    if (sidebarEl) {
        if (btnMenuEl) {
            btnMenuEl.addEventListener(`click`, function (event) {
                event.preventDefault();

                sidebarEl.setAttribute(ariaHiddenAttr, `true`);
            });
        }

        if (btnCloseMenuEl) {
            btnCloseMenuEl.addEventListener(`click`, function (event) {
                event.preventDefault();

                sidebarEl.setAttribute(ariaHiddenAttr, `false`);
            });
        }
    }

    // Remove click event from active links
    if (aActiveEls && aActiveEls.length > 0) {
        aActiveEls.forEach(function (aActiveEl) {
            aActiveEl.removeEventListener(`click`, function (event) {
                event.preventDefault();
                return;
            });
        });
    }

    // Collapsible Tables
    if (tableCollapsibleEls && tableCollapsibleEls.length > 0) {
        tableCollapsibleEls.forEach(function (tableCollapsibleEl) {
            tableCollapsibleEl.setAttribute(ariaExpandedAttr, `true`);

            const captionEl = tableCollapsibleEl.querySelector(`caption`);
            captionEl.addEventListener(`click`, function (event) {
                event.preventDefault();

                const ariaExpanded =
                    tableCollapsibleEl.getAttribute(ariaExpandedAttr);
                console.log(`ariaExpanded`, ariaExpanded);
                tableCollapsibleEl.setAttribute(ariaExpandedAttr, `true`);
                if (ariaExpanded && ariaExpanded === `true`) {
                    tableCollapsibleEl.removeAttribute(ariaExpandedAttr);
                }
            });
        });
    }

    // Toggle Back to Top Button on scroll
    if (btnBackToTopEl) {
        window.addEventListener(`scroll`, function (event) {
            const ariaHidden = window.scrollY >= 100 ? `false` : `true`;
            btnBackToTopEl.setAttribute(ariaHiddenAttr, ariaHidden);
        });
    }

    // Register Close Dialog Buttons
    if (dialogEls && dialogEls.length > 0) {
        dialogEls.forEach(function (dialogEl) {
            const btnCloseDialogEl = dialogEl.querySelector(
                `[${dataElementAttr}="btn-close-dialog"]`
            );

            if (btnCloseDialogEl) {
                btnCloseDialogEl.addEventListener(`click`, function (event) {
                    event.preventDefault();
                    dialogEl.close();
                });
            }
        });
    }

    // Toggle Dialogs
    if (btnLaunchDialogEls && btnLaunchDialogEls.length > 0) {
        btnLaunchDialogEls.forEach(function (btnLaunchDialogEl) {
            btnLaunchDialogEl.addEventListener(`click`, function (event) {
                event.preventDefault();

                const dataTarget =
                    btnLaunchDialogEl.getAttribute(dataTargetAttr);
                const dialogEl = document.querySelector(
                    `[${dataElementAttr}="${dataTarget}"]`
                );

                if (dialogEl) {
                    dialogEl.showModal();
                }
            });
        });
    }

    // Toggle Sortable Table Headings
    if (tableSortableEls && tableSortableEls.length > 0) {
        tableSortableEls.forEach(function (tableSortableEl) {
            const theadThEls = tableSortableEl.querySelectorAll(
                `thead > tr:first-of-type > th`
            );
            theadThEls.forEach(function (theadThEl) {
                theadThEl.setAttribute(
                    dataSortDirectionAttr,
                    sortDirections[1]
                );

                theadThEl.addEventListener(`click`, function (event) {
                    event.preventDefault();

                    const dataSortDirection = theadThEl.getAttribute(
                        dataSortDirectionAttr
                    );
                    console.log(dataSortDirection);
                    theadThEl.setAttribute(
                        dataSortDirectionAttr,
                        sortDirections[1]
                    );
                    if (dataSortDirection === sortDirections[1]) {
                        theadThEl.setAttribute(
                            dataSortDirectionAttr,
                            sortDirections[0]
                        );
                    }
                });
            });
        });
    }
}

/**
 * Credit to: Adrian Roselli
 * https://adrianroselli.com/2018/05/functions-to-add-aria-to-tables-and-lists.html
 */
function addTableAria() {
    logFunction(`addTableAria`);

    try {
        let allTables = document.querySelectorAll("table");
        for (let i = 0; i < allTables.length; i++) {
            allTables[i].setAttribute("role", "table");
        }
        let allCaptions = document.querySelectorAll("caption");
        for (let i = 0; i < allCaptions.length; i++) {
            allCaptions[i].setAttribute("role", "caption");
        }
        let allRowGroups = document.querySelectorAll("thead, tbody, tfoot");
        for (let i = 0; i < allRowGroups.length; i++) {
            allRowGroups[i].setAttribute("role", "rowgroup");
        }
        let allRows = document.querySelectorAll("tr");
        for (let i = 0; i < allRows.length; i++) {
            allRows[i].setAttribute("role", "row");
        }
        let allCells = document.querySelectorAll("td");
        for (let i = 0; i < allCells.length; i++) {
            allCells[i].setAttribute("role", "cell");
        }
        let allHeaders = document.querySelectorAll("th");
        for (let i = 0; i < allHeaders.length; i++) {
            allHeaders[i].setAttribute("role", "columnheader");
        }
        // this accounts for scoped row headers
        let allRowHeaders = document.querySelectorAll("th[scope=row]");
        for (let i = 0; i < allRowHeaders.length; i++) {
            allRowHeaders[i].setAttribute("role", "rowheader");
        }
    } catch (e) {
        console.log("addTableARIA(): " + e);
    }
}

// Call Functions
main();
addTableAria();
