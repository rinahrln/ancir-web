import UrlParser from '../../routes/url-parser';
import AncirWebResource from '../../data/ancirweb-source';

const DetailAngkot = {
    async render() {
        return `
        <h2>Detail Page</h2>
        `;
    },

    async afterrender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const angkot = await AncirWebResource.detailAngkot(url.id);
        console.log(angkot);
    }
}
