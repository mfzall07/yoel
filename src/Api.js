import request from './utils/request';
class Api {
    static urlAPI() {
        return "http://localhost:5000/"
    }

    // Begin :: Auth
    static login(email, password) {
        let path = 'login';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data: {
                email,  
                password,   
            },
        })
    }
    static logout() {
        let path = 'logout';
        return request(`${this.urlAPI()}${path}`, {
            method: 'DELETE',
        })
    }
    static me() {
        let path = 'me';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    
    // End :: Auth

}
export default Api;