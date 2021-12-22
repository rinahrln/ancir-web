const detailBrt = (brt) => `
    <div class="ratio ratio-21x9">
        <iframe src="${brt.ruteMap}" title="Rute BRT" allowfullscreen></iframe>
    </div>
    <h4 class="section-heading">Informasi Biaya</h4>
    <table class="table table-success">
        <thead class="table-dark">
            <tr>
                <th scope="col">Kategori</th>
                <th scope="col">Harga</th>
                <th scope="col">Jam Operasional</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Pelajar / Mahasiswa</td>
                <td>${brt.biayaPelajar}</td>
            </tr>
            <tr>
                <td>Dewasa / Umum</td>
                <td>${brt.biayaUmum}</td>
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
            <tr>
                <td>${brt.infoHalte.halte1.namaHalte}</td>
                <td>${brt.infoHalte.halte1.infoJamDatang}</td>
            </tr>
            <tr>
                <td>${brt.infoHalte.halte2.namaHalte}</td>
                <td>${brt.infoHalte.halte2.infoJamDatang}</td>
            </tr>
            <tr>
                <td>${brt.infoHalte.halte3.namaHalte}</td>
                <td>${brt.infoHalte.halte3.infoJamDatang}</td>

            <tr>
                <td>${brt.infoHalte.halte4.namaHalte}</td>
                <td>${brt.infoHalte.halte4.infoJamDatang}</td>
            </tr>

            <tr>
                <td>${brt.infoHalte.halte5.namaHalte}</td>
                <td>${brt.infoHalte.halte5.infoJamDatang}</td>
            </tr>

            <tr>
                <td>${brt.infoHalte.halte6.namaHalte}</td>
                <td>${brt.infoHalte.halte6.infoJamDatang}</td>
            </tr>
        </tbody>
    </table>
`;

export default detailBrt;