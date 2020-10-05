import { Post } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-usage',
  templateUrl: './http-usage.component.html',
  styleUrls: ['./http-usage.component.css']
})
export class HttpUsageComponent implements OnInit {
  constructor(private service:Post) {}
  static array;
  get array(){
    return HttpUsageComponent.array
  }
  ngOnInit(): void {
    this.service.getpost()
    .subscribe(response => {
      console.log(response,typeof response);
      HttpUsageComponent.array=response;
    });
  }

  createPost(form){
    console.log(form,this);
    HttpUsageComponent.array.unshift(form);
    this.service.posting(JSON.stringify(form))
    .subscribe(response => {
      console.log(response,typeof response,'create');
      
    })
  }

  updatePost(post){
    this.service.updating(post)
    .subscribe(response => {
      console.log(response,typeof response);
    })
  }

  deletePost(post){
    this.service.deleting(post);
    HttpUsageComponent.array.splice(HttpUsageComponent.array.indexOf(post),1);
  }
}
