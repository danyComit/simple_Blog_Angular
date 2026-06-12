import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostInterface } from './components/post/models/PostInterface';
import { Post } from './components/post/post';
import { PostList } from './components/post-list/post-list';
import { PostService } from './services/post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Post, PostList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('blog');
  isLoading = signal(true);
  private postService = inject(PostService);
  post = this.postService.posts;

  constructor() {
    setTimeout(() => this.isLoading.set(false), 2000);
  }

  onDeletePost(id: number) {
    this.post.update((current) => current.filter((p) => p.id !== id));
  }
  onAddPost(post: PostInterface) {
    this.post.update((current) => [...current, post]);
  }
}
