import { CanDeactivateGuard } from './cv-clean/add-cv/can-deactivate.guard';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { RouterParamComponent } from "./components/router-param/router-param.component";
import { FrontComponent } from "./components/front/front.component";
import { AdminComponent } from "./components/admin/admin.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { TestformComponent } from "./components/testform/testform.component";
import { ToastrModule } from "ngx-toastr";
import { MergeComponent } from './merge/merge.component';
import { ProductComponent } from './product/product.component';
import { ProductDisplayComponent } from './product/product-display/product-display.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    NavbarComponent,
    HomeComponent,
    RouterParamComponent,
    FrontComponent,
    AdminComponent,
    NF404Component,
    TestformComponent,
    MergeComponent,
    ProductComponent,
    ProductDisplayComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    MatDialogModule
  ],
  exports: [],
  providers: [
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
