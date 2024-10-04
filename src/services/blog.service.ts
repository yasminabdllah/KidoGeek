import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  blogs_data: Blog[]=[
    {
      blog_id: 1,
      title: 'The Benefits of Learning Programming at a Young Age',
      author: 'Amina Salah',
      date: '2024-09-10',
      content: 'Teaching kids how to code at an early age is crucial in building problem-solving skills and logical thinking. Programming helps children break down complex problems into smaller tasks, making them more adept at tackling real-world challenges. By learning to code, kids also gain a head start on future technology-related careers.'
    },
    {
      blog_id: 2,
      title: 'How Coding Boosts Creativity in Kids',
      author: 'Youssef Ali',
      date: '2024-09-15',
      content: 'Coding is not just about computers and software. It’s a tool that encourages kids to think creatively and come up with innovative solutions. With coding, kids can build games, create animations, and design websites—all while enhancing their creativity. This blog explores how coding empowers children to transform ideas into reality.'
    },
    {
      blog_id: 3,
      title: 'Why Every Kid Should Learn to Code',
      author: 'Sara Khaled',
      date: '2024-09-25',
      content: 'In today’s digital age, coding is as essential as learning math or reading. It equips kids with skills that will be necessary in almost every job sector. Whether your child dreams of becoming a doctor, engineer, or artist, learning to code can provide them with valuable skills for their future. This post dives into the reasons why coding is a must-learn skill for every child.'
    },
    {
      blog_id: 4,
      title: 'Top Programming Languages for Kids in 2024',
      author: 'Ahmed Hassan',
      date: '2024-10-01',
      content: 'The world of programming offers various languages suited for kids of different ages. In this blog, we highlight the top languages for kids to start learning, such as Scratch, Python, and JavaScript. Each language has its own advantages, from visual block-based coding to text-based coding that helps kids gradually advance in their programming journey.'
    },
    {
      blog_id: 5,
      title: 'How Learning to Code Develops Problem-Solving Skills in Kids',
      author: 'Layla Ibrahim',
      date: '2024-10-03',
      content: 'Programming is more than just typing lines of code—it’s about solving problems in efficient and creative ways. This blog explains how coding teaches kids to identify issues, break them into smaller parts, and think critically to find solutions. With coding, kids develop a mindset that prepares them for life’s challenges, both big and small.'
    },
    {
      blog_id: 6,
      title: 'Why Coding Should Be Part of Every Child’s Curriculum',
      author: 'Mohamed Alaa',
      date: '2024-10-05',
      content: 'As technology advances, coding has become a fundamental skill in almost every industry. Introducing coding into school curriculums can help children develop critical thinking, improve math skills, and prepare them for future careers. This blog explores how schools can integrate programming into their teaching to give students a competitive edge.'
    },
    {
      blog_id: 7,
      title: 'Coding Games: A Fun Way to Teach Programming to Kids',
      author: 'Mona Ismail',
      date: '2024-10-07',
      content: 'Kids learn best when they’re having fun! Coding games offer an interactive and playful approach to teaching programming concepts. This blog highlights some of the best coding games that help kids understand programming logic, sequences, and loops, all while enjoying themselves and developing new skills.'
    },
    {
      blog_id: 8,
      title: 'How Coding Helps Kids Develop Resilience and Patience',
      author: 'Karim Mostafa',
      date: '2024-10-10',
      content: 'Coding is a trial-and-error process, where kids often face bugs and challenges. This teaches them the importance of persistence and resilience. In this post, we discuss how learning to code can help children develop patience and a mindset that encourages them to keep trying, even when faced with obstacles.'
    },
    {
      blog_id: 9,
      title: 'The Role of Parents in Encouraging Kids to Learn Coding',
      author: 'Nadia Hussein',
      date: '2024-10-12',
      content: 'Parents play a crucial role in supporting their children’s coding journey. From providing access to the right tools to encouraging creativity, parents can foster a love for programming at home. This blog offers tips for parents on how to motivate kids to learn coding and make it an enjoyable experience.'
    },
    {
      blog_id: 10,
      title: 'Coding and Robotics: The Future of Kids’ Education',
      author: 'Omar Nabil',
      date: '2024-10-14',
      content: 'Coding and robotics are transforming the way children learn and think about technology. This blog delves into how programming skills are used in robotics and how kids can learn both to understand how modern devices work. Coding and robotics together can spark curiosity and prepare children for the future of innovation.'
    }
  ]

}
