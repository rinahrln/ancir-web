const angkotItem = (angkot) => `
    <div class="col">
        <div class="card h-100 border-warning text-center">
            <div class="text-center mt-3">
                <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-bus fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class="card-body">
                <h5 class="card-title"><a href="${`/#/angkot/${angkot.id}`}">${angkot.kodeAngkot}</a></h5>
                <p class="text-muted">${angkot.deskripsi}</p>
            </div>                         
        </div>
    </div>    
`;

export default angkotItem;