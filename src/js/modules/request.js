class Request {
    async get () {
        const res = await fetch('assets/db/data.json')

        return await res.json()
    }
}
const req = new Request()

export default req