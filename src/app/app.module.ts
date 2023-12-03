import { CanDeactivateGuard } from './add-cv/can-deactivate.guard';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CvComponent } from "./cv/cv/cv.component";
import { ListComponent } from "./cv/list/list.component";
import { ItemComponent } from "./cv/item/item.component";
import { CardComponent } from "./cv/card/card.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { DefaultImagePipe } from "./cv/pipes/default-image.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { RouterParamComponent } from "./components/router-param/router-param.component";
import { FrontComponent } from "./components/front/front.component";
import { AdminComponent } from "./components/admin/admin.component";
import { MasterDetailsComponent } from "./cv/master-details/master-details.component";
import { DetailCvComponent } from "./cv/detail-cv/detail-cv.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { TestformComponent } from "./components/testform/testform.component";
import { ToastrModule } from "ngx-toastr";
import { EmbaucheComponent } from "./cv/embauche/embauche.component";
import { LoginComponent } from './login/login.component';
import { SpecificCvComponent } from './cv/specific-cv/specific-cv.component';
import { SearchComponent } from './cv/search/search.component';
import { DisplayComponent } from './cv/display/display.component';
import { MergeComponent } from './merge/merge.component';
import { ProductComponent } from './product/product.component';
import { ProductDisplayComponent } from './product/product-display/product-display.component';
import { MasterComponentComponent } from './master-component/master-component.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    HighlightDirective,
    DefaultImagePipe,
    NavbarComponent,
    HomeComponent,
    RouterParamComponent,
    FrontComponent,
    AdminComponent,
    MasterDetailsComponent,
    DetailCvComponent,
    NF404Component,
    TestformComponent,
    EmbaucheComponent,
    LoginComponent,
    SpecificCvComponent,
    SearchComponent,
    DisplayComponent,
    MergeComponent,
    ProductComponent,
    ProductDisplayComponent,
    MasterComponentComponent,
    AddCvComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [],
  providers: [
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
