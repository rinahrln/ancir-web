import API_ENDPOINT from '../globals/api-endpoint';

class AncirWebResource {
    static async angkot() {
        const response = await fetch(API_ENDPOINT.ANGKOT);
        return response.json();
    }

    static async brt() {
        const response = await fetch(API_ENDPOINT.BRT);
        return response.json();
    }

    static async detailAngkot(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();     
    }
}

export default AncirWebResource;