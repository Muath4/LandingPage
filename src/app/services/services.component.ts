import { Component } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  standalone: true,
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  // constructor(private modalService: NgbModal) {
  // }

  public open(modal: any): void {
    //this.modalService.open(modal);
  }

}
