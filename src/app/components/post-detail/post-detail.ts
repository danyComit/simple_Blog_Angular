import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);

  postId = this.route.snapshot.params['id'];
  post = computed(() => this.postService.posts().find((p) => p.id === Number(this.postId)));

  wordCount = computed(() => this.post()?.content.trim().split(/\s+/).length ?? 0);
}
