import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    contact = {
        name: '',
        email: '',
        message: ''
    };
    submitted = false;

    constructor() {
        
        emailjs.init("MenLOkOOO3JnDBx4Y"); 
    }

    onSubmit(): void {
        const templateParams = {
            name: this.contact.name,
            email: this.contact.email,
            message: this.contact.message
        };

        emailjs.send('service_5rojrjk', 'template_vocz3hr', templateParams)
            .then((response: { status: any; text: any; }) => {
                console.log('SUCCESS!', response.status, response.text);
                this.submitted = true; 
                this.resetForm();
            }, (error: any) => {
                console.log('FAILED...', error);
            });
    }

    resetForm(): void {
        this.contact = {
            name: '',
            email: '',
            message: ''
        };
    }
}
