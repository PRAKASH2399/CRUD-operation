import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class Post{
    private url ="https://jsonblob.com/api/1a7a6396-ff26-11ea-8cd2-371416120f7f"
    constructor(private http : HttpClient){}
 
    getpost(){
        return this.http.get(this.url);
    }

    posting(element){
        return this.http.post(this.url, element);
    }

    updating(post){
        return this.http.put(this.url+'/'+ post.roll,[]);
    }

    deleting(post){
        console.log(post.roll)
        return this.http.delete(this.url+'/'+ post.roll);
    }
}