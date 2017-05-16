import { Routes, RouterModule } from '@angular/router';

import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'about', component: AboutComponent }
];
export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
