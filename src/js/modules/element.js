class Element {

    constructor(data, view = 'weekly') {
        this.wrapper = document.querySelector('.dashboard__wrapper')
        this.data = data
        this.view = view
    }

    checkForLast () {
        let last = ''
        switch (this.data) {
            case 'daily':
                last = 'day'
                break
            case 'weekly':
                last = 'week'
                break
            case 'monthly':
                last = 'month'
                break
            default:
                last = 'week'
        }
        return last
    }

    createElement () {
        const { title, timeframes } = this.data
        const currentTime = timeframes[this.view].current
        const previousTime = timeframes[this.view].previous

        const element = document.createElement('div')
        element.innerHTML = `
            <div class="element">
                <div class="element__info">
                    <div class="element__title">${title}</div>
                    <div class="element__duration">${currentTime}hrs</div>
                    <div class="element__text">last ${this.checkForLast()} - ${previousTime}hrs</div>
                </div>
            </div>
        `
        this.wrapper.append(element)
        document.querySelectorAll('.element').forEach(item => {
            const firstColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
            const secondColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
            item.style.backgroundImage = `linear-gradient(to left, ${firstColor}, ${secondColor})`
        })
    }

    changeContent () {
        document.querySelectorAll('.element').forEach(item => {
            item.parentElement.remove()
            item.remove()
        })
    }
}
export default Element