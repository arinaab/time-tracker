class Person {
    constructor() {
        this.wrapper = document.querySelector('.dashboard__wrapper')
    }

    createPerson () {
        this.wrapper.innerHTML = `
            <div class="person">
                <div class="person__info">
                    <p class="person__subtitle">Report for</p>
                    <p class="person__title">Jeremy Robson</p>
                </div>
                <div class="person__periods">
                    <p>Daily</p>
                    <p class="active">Weekly</p>
                    <p>Monthly</p>
                </div>
            </div>
        `
    }
}
const newPerson = new Person()
export default newPerson