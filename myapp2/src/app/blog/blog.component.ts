import { Component, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostData } from './postdata.model';
import { map } from 'rxjs';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  fetchedPosts: PostData[] = [];
  constructor(private http: HttpClient) {}
  firebaseUrl = 'https://blogapp-bde91-default-rtdb.firebaseio.com/posts.json';
  // status = 'blog created';
  // created = new EventEmitter<string>();
  ngOnInit(): void {
    //this.fetchPosts();
  }
  // alert() {
  //   this.created.emit(this.status);
  // }

  createPost(postData: { title: string; content: string }) {
    console.log(postData);
    this.http.post(this.firebaseUrl, postData).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  onFetchPost() {
    this.fetchPosts();
  }
  onDeletePost() {
    this.http.delete(this.firebaseUrl).subscribe((response) => {
      console.log('Posts deleted: ' + response);
      this.fetchedPosts = [];
    });
  }

  fetchPosts() {
    this.http
      .get(this.firebaseUrl)
      .pipe(
        map((responseData) => {
          const postsArray: PostData[] = [];
          for (const key in responseData) {
            postsArray.push({ ...responseData[key], id: key });
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        this.fetchedPosts = posts;
      });
  }
}
