import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  displayAlert(): void {
    let alertMessage = document.querySelector(".alert-message") as HTMLElement;
    if (alertMessage) {
      alertMessage.style.display = "block";
      setTimeout(() => {
        alertMessage.style.display = "none";
      }, 2000);
    } else {
      console.error("Element with class 'alert-message' not found.");
    }
  }
}
