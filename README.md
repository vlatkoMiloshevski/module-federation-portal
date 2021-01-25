# Angular Architects | Module Federation 


**Run - `package.json`** 

1\. `yarn` [run `yarn` in order to install all of the dependencies]

2\. `npm run start:all` [run all `micofrontend apps` and the `shell`] 


**Deploy - `firebase.json`**

1\. `npm run build:shared-lib` [build shared library's `dist` folder]

2\. `npm run build:all` [build all micofrontend `apps` folder]

3\. `firebase deploy` [deployment for all - shell and mfs] 


**Host - `firebaserc`**

Hosting URL: https://microfrontend-1.web.app 

Hosting URL: https://microfrontend-2.web.app 

Hosting URL: https://module-federation-portal.web.app 
