import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

//imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Providers
import { PieDataService } from './services/pie-data.service';
import { PieCustomDataComponent } from './pie-custom-data/pie-custom-data.component';
import { MindmapComponent } from './mindmap/mindmap.component';
import { JsmindComponent } from './jsmind/jsmind.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddhealthdataComponent } from './addhealthdata/addhealthdata.component';
import { ModaldialogComponent } from './modaldialog/modaldialog.component';
import { ModaladdhealthdataComponent } from './modaladdhealthdata/modaladdhealthdata.component';
import { ModaledithealthdataComponent } from './modaledithealthdata/modaledithealthdata.component';
import { EdithealthdataComponent } from './edithealthdata/edithealthdata.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    PieCustomDataComponent,
    MindmapComponent,
    JsmindComponent,
    AddhealthdataComponent,
    ModaldialogComponent,
    ModaladdhealthdataComponent,
    ModaledithealthdataComponent,
    EdithealthdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [PieDataService, NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
