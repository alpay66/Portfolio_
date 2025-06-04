import { Component } from '@angular/core';
import { ContactformComponent } from "../contactform/contactform.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact-me',
  imports: [ContactformComponent, FooterComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

}
