import request from './utils/request';
class Api {
    static urlAPI() {
        return "http://localhost:5000/"
    }

    // Begin :: Auth
    static login(username, password) {
        let path = 'login';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data: {
                username,  
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

    static CreateContact(data) {
        let path = 'list-contact/create';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data,
        })
    }
    static GetContact() {
        let path = 'list-contact';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    static GetQuotes() {
        let path = 'quotes';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    static UpdateQuotes(id, data) {
        let path = `quotes/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'PATCH',
            data,
        })
    }

    static GetVisi() {
        let path = 'visi';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    static UpdateVisi(id, data) {
        let path = `visi/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'PATCH',
            data,
        })
    }

    static GetMission() {
        let path = 'mission';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    static UpddateMission(id, data) {
        let path = `mission/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'PATCH',
            data,
        })
    }

}
export default Api;