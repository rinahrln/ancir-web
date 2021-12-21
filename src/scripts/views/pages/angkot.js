import AncirWebResource from '../../data/ancirweb-source';
import angkotItem from '../templates/angkot-item';

const Angkot = {
    async render() {
        return `
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Pilih Angkot</h2>
                </div>
                <div id="angkot" class="row row-cols-1 row-cols-md-4 g-4"></div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const dataAngkot = await AncirWebResource.angkot();
        const angkotContainer = document.querySelector('#angkot');
        dataAngkot.forEach((angkot) => {
            angkotContainer.innerHTML += angkotItem(angkot);
        });

        const header = document.querySelector('.masthead');
        header.style.display = 'none';
    },
};

export default Angkot;