import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// import { Component, OnInit } from '@angular/core';
// import { CommentsService } from 'src/app/comments.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-comment',
//   templateUrl: './comment.component.html',
//   styleUrls: ['./comment.component.css'],
// })
// export class CommentComponent implements OnInit {
//   postComment: string[] = [];
//   comments: any;
//   name = '';
//   email = '';
//   comment = '';

//   post() {
//     this.postComment.push(this.comment);
//   }

//   constructor(
//     private commentService: CommentsService,
//     private router: Router
//   ) {}


//   ngOnInit() {

//     this.commentService.fetchComments().subscribe((theresponse: any) => {
//       console.log(theresponse.comments);
//       this.comments = theresponse.comments;
//     });
//   }
// }
