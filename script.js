// create a node list of all panels (similar to array of html elements)
const panels = document.querySelectorAll('.panel')

// .forEach is a high order array method
panels.forEach((panel) => {
  // add event listener to each panel element
  panel.addEventListener('click', () => {
    // remove 'active' class from each panel
    removeActiveClasses()
    // add active class to panel clicked on
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
