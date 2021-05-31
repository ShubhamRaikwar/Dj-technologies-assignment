import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
	{
		path: '',
		component: CategoryListComponent
	},
	{
		path: 'details/:id',
		component: CategoryDetailsComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
