import AppHome from '@/components/AppHome';
import AppMedium from '@/components/AppMedium';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/medium',
        name: 'Medium',
        component: AppMedium
    }
];

export default routes;
