import { Component, inject, input, output } from '@angular/core';
import { PostInterface } from '../post/models/PostInterface';
import { Post } from '../post/post';
import { PostService } from '../../services/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [Post, RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  postService = inject(PostService);
  posts = this.postService.posts;

  deleteFromPostList(id: number) {
    this.postService.deletePost(id);
  }
}
