import { Component } from '@angular/core';
import { HeaderBarComponent } from "../hero-section/header-bar/header-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderBarComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
