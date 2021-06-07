import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'teste-itau-bba';

  constructor(private toastr: ToastrService) {}

  showToastr() {
    this.toastr.success('kdfjsdkahfldslf', 'success');
  }

}
