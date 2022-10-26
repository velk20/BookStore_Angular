import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksListComponent} from "./components/books-list/books-list.component";
import {AddBookComponent} from "./components/add-book/add-book.component";
import {BookDetailComponent} from "./components/book-detail/book-detail.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {
    path:'',redirectTo:'add-book',pathMatch:'full'
  },
  {
    path:'book-list',component:BooksListComponent
  },
  {
  path:'add-book',component:AddBookComponent
  },
  {
    path:'edit-book/:id',component:BookDetailComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
