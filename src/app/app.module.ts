import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';

import { FilterPipe } from './filter/filter.pipe';

import { LoggingService } from './service/logging.service';
import { NinjaService } from './service/ninja.service';

const appRoutes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'directory', component: DirectoryComponent },
      //{ path: 'directory/:ninja', component: DirectoryComponent },
      //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggingService, NinjaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
