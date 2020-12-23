import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
    loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'app1'),
    loadRemoteEntry('http://localhost:3100/remoteEntry.js', 'app2')
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));
