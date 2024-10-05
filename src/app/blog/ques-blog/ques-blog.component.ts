import { Component } from '@angular/core';
import { Question } from '../../../interfaces/questionsInBlog.interface';

@Component({
  selector: 'app-ques-blog',
  templateUrl: './ques-blog.component.html',
  styleUrl: './ques-blog.component.css'
})
export class QuesBlogComponent {
  Table_content_questions: Question[] = [
    {
      question: 'What is coding for kids?',
      answer: 'Coding for kids is teaching children how to program computers. It involves writing code that computers can understand and execute.The best coding platforms and programs give children of all ages and experience levels the ability to code while making the process fun and engaging.',
      open: false,
      photo: '../../assets/blogsPhotos/learning-to-code.png'
    },
    {
      question: 'Is it hard for kids to learn code?',
      answer: "With so many great services available, learning to code has never been easier! For example, Scratch and Tynker provide innovative visual coding languages that make coding fun.Tynker's award-winning platform captivates young coders because its story-driven strategy motivates them to learn more and more coding concepts to find out what happens next and complete the activity.",
      open: false,
      photo: '../../assets/blogsPhotos/tynker-junior-app.png'
    },
    {
      question: 'Why should kids learn to code?',
      answer: 'Learning to code helps kids develop problem-solving skills, creativity, and logical thinking, which are valuable in many areas.',
      open: false,
      photo: '../../assets/blogsPhotos/tynker-code-blocks-python-javascript.png'
    },
    {
      question: 'How do kids learn to code?',
      answer: 'Kids can learn to code through various platforms, games, and educational programs designed specifically for young learners.',
      open: false,
      photo: '../../assets/blogsPhotos/text-coding.png'
    }
  ];
  open_answer(index: number) {
    this.Table_content_questions[index].open = !this.Table_content_questions[index].open;
  }

}
