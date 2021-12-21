import Home from '../views/pages/home';
import Angkot from '../views/pages/angkot';
import Brt from '../views/pages/brt';
import DetailAngkot from '../views/pages/detail-angkot';

const routes = {
    '/': Home,
    '/home': Home,
    '/angkot': Angkot,
    '/angkot/:id': DetailAngkot,
    '/brt': Brt,
};

export default routes;