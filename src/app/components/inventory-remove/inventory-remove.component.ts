import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from '../../inventory-service.service';
import { Fiesta } from '../../inventory-service.service';


@Component({
  selector: 'app-inventory-remove',
  templateUrl: './inventory-remove.component.html',
  styleUrls: ['./inventory-remove.component.css']
})
export class InventoryRemoveComponent implements OnInit {

  fiesta: any;

  constructor(private inventoryService: InventoryServiceService) { }

  ngOnInit(): void {
  }

  updateFiesta(fiesta: Fiesta) {
    this.inventoryService.updateFiesta(fiesta).subscribe((response) => {
      this.fiesta = [response.fiesta];
    });
  };

  deleteFiesta(fiesta: Fiesta)  {
    this.inventoryService.deleteFiesta(fiesta).subscribe((response) => {});
  }

}

// import { Component, OnInit } from '@angular/core';
// import { CommentsService } from '../../comments.service';
// import { Comment } from '../models/Comments';

// @Component({
//   selector: 'app-remove-comment',
//   templateUrl: './remove-comment.component.html',
//   styleUrls: ['./remove-comment.component.css'],
// })
// export class RemoveCommentComponent implements OnInit {
//   comments: any;
//   constructor(private commentService: CommentsService) {}

//   ngOnInit(): void {}

//   deleteComment(comment: Comment) {
//     this.commentService.deleteComment(comment).subscribe((response) => {});
//   }

//   updateComment(comment: Comment) {
//     this.commentService.updateComment(comment).subscribe((response) => {
//       this.comments = [response.comment];
//     });
//   }
// }
