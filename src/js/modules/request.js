class Request {
    constructor(url) {
        this.url = url
    }
    async get () {
        const res = await fetch(this.url)

        return await res.json()
    }
}
const req = new Request('assets/db/data.json')

export default req