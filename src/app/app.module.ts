import { HttpClientModule } from '@angular/common/http';
import { HttpUsageComponent } from './http-usage/http-usage.component';
import { Post } from './http-usage/post.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IOoperationComponent } from './iooperation/iooperation.component';


@NgModule({
  declarations: [
    AppComponent,
    IOoperationComponent,
    HttpUsageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Post,HttpUsageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
