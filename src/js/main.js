import req from "./modules/request";
import newPerson from "./modules/person";
import Element from "./modules/element";

window.addEventListener('DOMContentLoaded', () => {
    let result = []
    req.get()
        .then(res => result = [...res])
        .then(() => {
            result.forEach(item => new Element(item).createElement())
        })
    newPerson.createPerson()

    const periods = document.querySelectorAll('.person__periods p')
    periods.forEach(item => {
        item.addEventListener('click', (e) => {
            periods.forEach(item => item.classList.remove('active'))
            if (e.target) {
                e.target.classList.add('active')
                const text = e.target.textContent.toLowerCase()
                new Element(item, text).changeContent()
                result.forEach(item => new Element(item, text).createElement())
            }
        })
    })
})