import { NgIf } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgIf, RouterLink],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
  http = inject(HttpClient);

  private readonly endPoint = 'https://alpay-karacabey.de/sendMail.php';

  contactData = {
    name: '',
    email: '',
    message: '',
    accepted: false
  };

  formSubmitted = false;
  mailTest = false;

  post = {
    endPoint: 'https://alpay-karacabey.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: { 'Content-Type': 'application/json' },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.formSubmitted = true;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.formSubmitted = true;
      ngForm.resetForm();
    }

    setTimeout(() => {
      this.formSubmitted = false;
    }, 4000);
  }
}
