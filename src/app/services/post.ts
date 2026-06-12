import { Injectable, signal } from '@angular/core';
import { PostInterface } from '../components/post/models/PostInterface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts = signal<PostInterface[]>([
    {
      id: 1,
      title: 'First Post',
      content: 'This is the content of the first post.',
      date: new Date('2024-01-01'),
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the content of the second post.',
      date: new Date('2024-02-01'),
    },
  ]);
  addPost(post: PostInterface) {
    this.posts.update((current) => [...current, post]);
  }
  deletePost(id: number) {
    this.posts.update((current) => current.filter((p) => p.id != id));
  }
  updatePost(id: number, newtitle: string, newcontent: string) {
    let updatedPost = this.posts().find((p) => p.id === id);
    let updatedPostDate = updatedPost!.date;
    this.deletePost(id);
    this.addPost({
      id: id,
      title: newtitle,
      content: newcontent,
      date: updatedPostDate,
    });
  }
  checkId(id: number): boolean {
    if (id < 0) return false;
    const flag = this.posts().find((p) => p.id === id);
    return flag !== undefined;
  }
}
