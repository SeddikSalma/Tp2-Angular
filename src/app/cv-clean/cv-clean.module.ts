import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvCleanRoutingModule } from './cv-clean-routing.module';
import { MasterComponentComponent } from './master-component/master-component.component';
import { SpecificCvComponent } from './specific-cv/specific-cv.component';
import { CvComponent } from './cv/cv.component';
import { CardComponent } from './card/card.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { MasterDetailsComponent } from './master-details/master-details.component';
import { DisplayComponent } from './display/display.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { SearchComponent } from './search/search.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCvComponent } from './add-cv/add-cv.component';


@NgModule({
  declarations: [
    MasterComponentComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    SearchComponent,
    MasterDetailsComponent,
    SpecificCvComponent,
    CvComponent,
    ListComponent,
    DisplayComponent,
    ItemComponent,
    CardComponent,
    AddCvComponent,
  ],
  imports: [
    CommonModule,
    CvCleanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CvCleanModule { }
