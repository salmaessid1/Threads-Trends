import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  title = 'About Threads & Trends';
  missionStatement = `
     At <strong>Threads & Trends</strong>, we celebrate individuality and creativity in fashion.
     Our vision is to provide a diverse range of stylish and affordable clothing that empowers everyone to express their unique personality.
      We strive to curate collections that not only enhance your wardrobe but also inspire confidence and self-expression.
       Committed to sustainability, we carefully select materials and partners that align with our values, 
       ensuring our products are both beautiful and responsible.
     Join us in redefining fashion as a means of personal expression!es to feel good 
    in their own skin and express themselves through what they wear.
  `;
  
  teamMembers = [
    { name: 'John Doe', role: 'CEO', image: 'assets/member1.jpg' },
    { name: 'Jane Smith', role: 'Designer', image: 'assets/member2.jpg' },
    { name: 'Bob Johnson', role: 'Marketing', image: 'assets/member3.jpg' },
    { name: 'Bob Johnson', role: 'Developper', image: 'assets/member4.jpg' }

  ];
}
