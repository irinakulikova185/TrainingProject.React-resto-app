export default class RestoService {
    constructor() {
        this._apiBase = "http://localhost:3000"
    }
    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        
        return await res.json()
    }

    getMenuItems = async() => {
        return await this.getResourse("/menu/")
       
    }
}