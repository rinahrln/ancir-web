import CONFIG from './config';

const API_ENDPOINT = {
    ANGKOT: `${CONFIG.BASE_URL}data-angkot`,
    BRT: `${CONFIG.BASE_URL}data-brt/E7KqR3VYK8Zvo55ViGv0`,
    DETAIL: (id) => `${CONFIG.BASE_URL}data-angkot/${id}`
}

export default API_ENDPOINT;