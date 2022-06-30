import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

type FiestaResponse = {
  fiesta: Fiesta[];
};

export type Fiesta = {
  id: number;
  name: string;
  color: string;
  type: string;
  description: string;
  value: number;  
  quantity: number;
};

@Injectable({
  providedIn: 'root'
})

export class InventoryServiceService {
  fiesta: Fiesta[] = [];
  findAll: any;

  constructor(private http: HttpClient) { }

    fetchFiesta() {
    return this.http.get<FiestaResponse>(`${environment.fiestaEndpoint}/`);
  }
  addFiesta(fiesta: Fiesta) {
    return this.http.post<Fiesta>(`${environment.fiestaEndpoint}/`, fiesta);
  }
  deleteFiesta(fiesta: Fiesta) {
    return this.http.delete(`${environment.fiestaEndpoint}/${fiesta.id}`);
  }
  updateFiesta(fiesta: Fiesta) {
    return this.http.put<FiestaResponse>(
      `${environment.fiestaEndpoint}/${fiesta.id}`,
      fiesta
    );
  }
}


// type CommentsResponse = {
//   comments: Comment[];
// };

// export type Comment = {
//   id: number;
//   name: string;
//   email: string;
//   comment: string;
// };

// type CommentResponse = {
//   comment: Comment;
// };

// @Injectable({
//   providedIn: 'root',
// })
// export class CommentsService {
//   comments: Comment[] = [];
//   findAll: any;

//   constructor(private http: HttpClient) {}

//   fetchComments() {
//     return this.http.get<CommentsResponse>(`${environment.commentsEndpoint}/`);
//   }
//   addComment(comment: Comment) {
//     return this.http.post<Comment>(`${environment.commentsEndpoint}/`, comment);
//   }
//   deleteComment(comment: Comment) {
//     return this.http.delete(`${environment.commentsEndpoint}/${comment.id}`);
//   }
//   updateComment(comment: Comment) {
//     return this.http.put<CommentResponse>(
//       `${environment.commentsEndpoint}/${comment.id}`,
//       comment
//     );
//   }
// }
