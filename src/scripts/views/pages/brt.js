import AncirWebResource from '../../data/ancirweb-source';

const Brt = {
    async render() {
        return `
            <h2>BRT Page</h2>
        `;
    },

    async afterRender() {
        const brt = await AncirWebResource.brt();
        console.log(brt);
    },
};

export default Brt;