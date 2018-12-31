import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule,
          MatFormFieldModule,
          MatInputModule,
          MatOptionModule,
          MatSelectModule,
          MatCardModule,
          MatTableModule,
          MatPaginatorModule,
          MatSortModule,
          MatDividerModule,
          MatSnackBarModule,
          MatButtonModule,
         MatSidenavModule,
         MatIconModule,
         MatListModule
        } from '@angular/material';

import { GsectionService } from './gsection.service';
import { GsectionListComponent } from './components/gsection-list/gsection-list.component';
import { GsectionCreateComponent } from './components/gsection-create/gsection-create.component';
import { GsectionEditComponent } from './components/gsection-edit/gsection-edit.component';
import { GsectionViewComponent } from './components/gsection-view/gsection-view.component';

import * as  MarkdownIt from 'markdown-it';



@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    GsectionListComponent,
    GsectionCreateComponent,
    GsectionEditComponent,
    GsectionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [GsectionService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
