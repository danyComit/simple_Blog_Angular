import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-add-post',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-post.html',
  styleUrl: './add-post.css',
})
export class AddPost {
  private postService = inject(PostService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  addForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    content: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
    if (this.addForm.invalid) return;
    this.postService.addPost({
      id: Date.now(),
      title: this.addForm.value.title!,
      content: this.addForm.value.content!,
      date: new Date(),
    });
    this.router.navigate(['/']);
  }
}
