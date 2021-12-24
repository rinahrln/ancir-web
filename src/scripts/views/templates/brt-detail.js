const detailBrt = (brt) => `
    <div class="ratio ratio-21x9">
        <iframe src="${brt.ruteMap}" title="Rute BRT" allowfullscreen></iframe>
    </div>
    <div class="text-center mt-3">
        <h2 class="section-heading text-uppercase">Rute BRT</h2>
    </div>
    <h4 class="section-heading mt-3">Informasi Biaya dan Jam Operasional</h4>
    <table class="table table-success">
        <thead class="table-dark">
            <tr>
                <th scope="col">Kategori</th>
                <th scope="col">Harga</th>
                <th scope="col">Waktu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Pelajar / Mahasiswa</td>
                <td colspan="3">Rp. ${brt.biayaPelajar}</td>
            </tr>
            <tr>
                <td>Dewasa / Umum</td>
                <td colspan="3">Rp. ${brt.biayaUmum}</td>
            </tr>
            <tr>
                <td colspan="2">Jam Operasional</td>
                <td>${brt.jamOperasi}</td>
            </tr>
        </tbody>
    </table>

    <h4 class="section-heading">Informasi Rute</h4>
    <p>${brt.infoRute}</p>

    <h4>Informasi Halte dan Bus Stop</h4>
    <table class="table table-success">
        <thead class="table-dark">
            <tr>
                <th scope="col">Halte dan Bus Stop</th>
                <th scope="col">Jadwal Kedatangan</th>
            </tr>
        </thead>
        <tbody>
            ${brt.infoHalte
                .map((halte) => `
            <tr>
                <td>${halte.namaHalte}</td>
                <td>${halte.infoJamDatang}</td>
            </tr>
            `)
            .join('')}
        </tbody>
    </table>
`;

export default detailBrt;