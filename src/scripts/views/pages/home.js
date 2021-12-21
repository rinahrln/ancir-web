const Home = {
    async render() {
        return `
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Pilih Rute</h2>
                </div>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card h-100 border-warning text-center">
                        <img src="../assets/img/angkot.jpg" class="card-img-top" alt="Gambar Angkot">
                        <div class="card-body">
                            <h5 class="card-title">Rute Angkot</h5>
                            <a href="#/angkot" class="btn btn-primary btn-sm mt-3">Detail</a>
                        </div>                         
                        </div>
                    </div>    
                    <div class="col">
                        <div class="card h-100 border-warning text-center">
                        <img src="../assets/img/brt.jpg" class="card-img-top" alt="Gambar BRT">
                        <div class="card-body">
                            <h5 class="card-title">Rute BRT</h5>
                            <a href="#/brt" class="btn btn-primary btn-sm mt-3">Detail</a>
                        </div>                         
                        </div>
                    </div>                                       
                </div>
            </div>
        </section>
        `;
    },

    async afterRender() {

    },
};

export default Home;