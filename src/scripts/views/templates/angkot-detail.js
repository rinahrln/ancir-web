const angkotDetail = (angkot) => `
    <div class="ratio ratio-21x9">
        <iframe src="${angkot.ruteMap}" title="Rute Angkot" allowfullscreen></iframe>
    </div>
    <div class="text-center mt-3">
        <h2 class="section-heading text-uppercase"> ${angkot.kodeAngkot} - ${angkot.deskripsi}</h2>
    </div>
    <h4 class="section-heading">Informasi Biaya dan Jam Operasional</h4>
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
            <td colspan="3">Rp. ${angkot.biayaPelajar}</td>
        </tr>
        <tr>
            <td>Dewasa / Umum</td>
            <td colspan="3">Rp. ${angkot.biayaUmum}</td>
        </tr>
        <tr>
            <td colspan="2">Jam Operasional</td>
            <td>${angkot.jamOperasi}</td>
        </tr>
        </tbody>
    </table>
    <h4 class="section-heading">Informasi Rute</h4>
    <p>${angkot.infoRute}</p>
`;

export default angkotDetail;