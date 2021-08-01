import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {LoggedService} from '../logged.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter<boolean>();
  @Output() reload = new EventEmitter<boolean>();

  emailFormControl = new FormControl('', [
    Validators.email,
  ]);
  telFormControl = new FormControl('', [
  ]);
  companyNameFormControl = new FormControl('', [
  ]);
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor(private loggedService: LoggedService) { }

  ngOnInit(): void {
  }

  addCard(): void {
    // tslint:disable-next-line:max-line-length
    if (!this.emailFormControl.invalid && !this.nameFormControl.invalid && !this.companyNameFormControl.invalid && !this.telFormControl.invalid) {
      // tslint:disable-next-line:max-line-length
      this.loggedService.postCards({name: this.nameFormControl.value, email: this.emailFormControl.value, tel: this.telFormControl.value, companyName: this.companyNameFormControl.value}).subscribe(
        (response: any) => {
          this.clickClose();
          this.reload.emit();
          this.router.navigate(['cards']);
        }, (error: any) => {
          console.log('ERROR', error);
        }
      );
    }
  }

  clickClose(): void {
    this.close.emit();
  }
}
