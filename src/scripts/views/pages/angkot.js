import AncirWebResource from '../../data/ancirweb-source';

const Angkot = {
    async render() {
        return `
            <h2>Angkot Page</h2>
        `;
    },

    async afterRender() {
        const angkot = await AncirWebResource.angkot();
        console.log(angkot);
    },
};

export default Angkot;