import imgAngkot from '../../../assets/img/angkot.jpg';
import imgBrt from '../../../assets/img/brt.jpg';

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
                        <img src="${imgAngkot}" class="card-img-top" alt="Gambar Angkot">
                        <div class="card-body">
                            <h5 class="card-title">Rute Angkot</h5>
                            <a href="#/angkot" class="btn btn-primary btn-sm mt-3">Detail</a>
                        </div>                         
                        </div>
                    </div>    
                    <div class="col">
                        <div class="card h-100 border-warning text-center">
                        <img src="${imgBrt}" class="card-img-top" alt="Gambar BRT">
                        <div class="card-body">
                            <h5 class="card-title">Rute BRT</h5>
                            <a href="#/brt" class="btn btn-primary btn-sm mt-3">Detail</a>
                        </div>                         
                        </div>
                    </div>                                       
                </div>
                <div id="title" class="text-center mt-5">
                    <h2 class="section-heading text-uppercase">About</h2>
                </div>
                <div id="about" class="container text-center">
                    <p>ANCIR WEB merupakan aplikasi web yang digunakan untuk melihat rute, jadwal, dan juga informasi biaya pada Angkot dan BRT yang ada di kota Cirebon. ANCIR WEB memudahkan masyarakat Cirebon atau pengunjung baru yang datang ke kota Cirebon mengetahui rute yang dilalui jika ingin menggunakan transportasi umum tersebut.</p>
                </div>
            </div>
        </section>
        `;
    },

    async afterRender() {

        const header = document.querySelector('.masthead');
        header.style.display = 'flex';

    },
};

export default Home;