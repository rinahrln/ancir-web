import AncirWebResource from '../../data/ancirweb-source';
import detailBrt from '../templates/brt-detail';

const Brt = {
    async render() {
        return `
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div id="brt"></div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const databrt = await AncirWebResource.brt();
        const brtContainer = document.querySelector('#brt');
        brtContainer.innerHTML = detailBrt(databrt);

        const header = document.querySelector('.masthead');
        header.style.display = 'none';
    }
};

export default Brt;