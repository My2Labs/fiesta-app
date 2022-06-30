import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from '../../inventory-service.service';
import { Fiesta } from '../../inventory-service.service';
import { Router } from '@angular/router';

const fiesta = {
  name: '',
  color: '',
  type: '',
  description: '',
  value: '',
};

@Component({
  selector: 'app-inventory-input',
  templateUrl: './inventory-input.component.html',
  styleUrls: ['./inventory-input.component.css']
})
export class InventoryInputComponent implements OnInit {
  fiestas: any;

  fiesta = {
    name: '',
    color: '',
    type: '',
    description: '',
    value: '',
    quantity: '',
  };

  constructor(
    private inventoryService: InventoryServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

    getNewFiesta() {
    this.router.navigateByUrl('/Fiesta');
  }

  addFiesta(newFiesta: Fiesta) {
    this.inventoryService.addFiesta(newFiesta).subscribe((response) => {
      window.location.reload();
    });

    console.log(newFiesta.name);
  }

  updateFiesta(fiesta: Fiesta) {
    this.inventoryService.updateFiesta(fiesta).subscribe((response) => {
      window.location.reload();
    });
  };

  deleteFiesta(fiesta: Fiesta)  {
    this.inventoryService.deleteFiesta(fiesta).subscribe((response) => {
      window.location.reload();
    });
  }

}

// import { Component, OnInit } from '@angular/core';
// import { CommentsService } from '../../comments.service';
// import { Comment } from '../models/Comments';
// import { Router } from '@angular/router';

// const comment = {
//   name: '',
//   email: '',
//   comment: '',
// };

// @Component({
//   selector: 'app-comment-form',
//   templateUrl: './comment-form.component.html',
//   styleUrls: ['./comment-form.component.css'],
// })
// export class CommentFormComponent implements OnInit {
//   comments: any;

//   comment = {
//     name: '',
//     email: '',
//     comment: '',
//   };

//   constructor(
//     private commentService: CommentsService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {}

//   getNewComment() {
//     this.router.navigateByUrl('/Comment');
//   }

//   addComment(newComment: Comment) {
//     this.commentService.addComment(newComment).subscribe((response) => {
//       window.location.reload();
//     });

//     console.log(newComment.name, newComment.comment);
//   }

//   deleteComment(comment: Comment) {
//     this.commentService.deleteComment(comment).subscribe((response) => {
//       window.location.reload();
//     });
//   }
// }
