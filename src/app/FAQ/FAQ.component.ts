import { Component } from '@angular/core';
import { FAQModel } from './FAQModel';
import { FAQList } from './FAQList';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-FAQ',
  templateUrl: './FAQ.component.html',
  styleUrls: ['./FAQ.component.css'],
  imports: [CommonModule]
})




export class FAQComponent {

  FAQs = FAQList
  base_answer_id = "answer-"
  base_faq_cont_id = "faq-container-"

  growDiv(i: number) {
    let growDiv = document.getElementById(this.base_answer_id + i);
    let container = document.getElementById(this.base_faq_cont_id + i);

    if (container)
      container.style.border = "0";

    if (growDiv?.clientHeight) {
      growDiv.style.height = "0";

    } else {
      var wrapper = document.querySelector('.measuringWrapper');
      if (container)
        container.style.border = "1.75px solid #006127";

      if (growDiv != null)
        growDiv.style.height = wrapper?.clientHeight + "px";
    }
    //document!.getElementById("more-button").value = document.getElementById("more-button").value == 'Read more' ? 'Read less' : 'Read more';
  }
  message = "I'm read only!";
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }

}
