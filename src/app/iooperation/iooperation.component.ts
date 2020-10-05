import { HttpUsageComponent } from './../http-usage/http-usage.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-iooperation',
  templateUrl: './iooperation.component.html',
  styleUrls: ['./iooperation.component.css']
})
export class IOoperationComponent{
  constructor(private httpvar:HttpUsageComponent) { }
  createPost1(form){
    console.log(form);
    this.httpvar.createPost(form.value);
    form.value=""
  }
}
