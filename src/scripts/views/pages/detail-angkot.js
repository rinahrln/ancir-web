import UrlParser from '../../routes/url-parser';
import AncirWebResource from '../../data/ancirweb-source';
import angkotDetail from '../templates/angkot-detail';

const DetailAngkot = {
    async render() {
        return `
            <section class="page-section bg-light" id="portfolio">
                <div id="angkot" class="container"></div>
            </section>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const angkot = await AncirWebResource.detailAngkot(url.id);
        const angkotContainer = document.querySelector('#angkot');
        angkotContainer.innerHTML = angkotDetail(angkot);

        const header = document.querySelector('.masthead');
        header.style.display = 'none';
    }
}

export default DetailAngkot;
