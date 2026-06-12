import { Component, computed, inject, input, Input } from '@angular/core';
import { PostInterface } from './models/PostInterface';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  post = input.required<PostInterface>();

  badgeClass = computed(() =>
    this.post().id % 2 === 0 ? 'bg-pink-100 text-pink-800' : 'bg-emerald-100 text-emerald-800',
  );

  wordCount = computed(() => this.post().content.trim().split(/\s+/).length);
}
