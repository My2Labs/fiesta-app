import { Component, Input, OnInit } from '@angular/core';
import { InventoryServiceService } from '../../inventory-service.service';
import { Fiesta } from '../../inventory-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  @Input() name!: string;
  @Input() color!: string;
  @Input() type!: string;
  @Input() description!: string;
  @Input() value!: number;
  @Input() quantity!: number;
  inventoryService: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    ngAfterViewInit() {
    return this.name, this.color, this.type, this.description, this.value, this.quantity;
  }

  addFiesta(newFiesta: Fiesta) {
    this.inventoryService.addFiesta(newFiesta).subscribe((response: any) => {
      this.router.navigateByUrl('/Fiesta');
    });

    console.log(newFiesta.name);
  }

}

// import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommentsService } from '../../comments.service';
// import { Comment } from '../models/Comments';

// @Component({
//   selector: 'app-comment-list',
//   templateUrl: './comment-list.component.html',
//   styleUrls: ['./comment-list.component.css'],
// })
// export class CommentListComponent implements OnInit {
//   @Input() name!: string;
//   @Input() email!: string;
//   @Input() comment!: string;
//   commentService: any;

//   constructor(private router: Router) {}

//   ngOnInit(): void {}

//   ngAfterViewInit() {
//     return this.name, this.email, this.comment;
//   }

//   addComment(newComment: Comment) {
//     this.commentService.addComment(newComment).subscribe((response: any) => {
//       this.router.navigateByUrl('/Comment');
//     });
//     console.log(newComment.name, newComment.comment);
//   }
// }