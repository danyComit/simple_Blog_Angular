import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-post.html',
  styleUrl: './edit-post.css',
})
export class EditPost {
  private postService = inject(PostService);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  postId = Number(this.route.snapshot.params['id']);
  post = this.postService.posts().find((p) => p.id === this.postId);

  formEdit = this.fb.group({
    title: [this.post?.title ?? '', [Validators.required, Validators.minLength(3)]],
    content: [this.post?.content ?? '', [Validators.required, Validators.minLength(10)]],
  });

  editPost() {
    console.log('editPost called');
    if (this.formEdit.invalid) return;
    if (!this.postService.checkId(this.postId)) return;
    this.postService.updatePost(
      this.postId,
      this.formEdit.value.title!,
      this.formEdit.value.content!,
    );
    this.router.navigate(['/']);
  }
}
