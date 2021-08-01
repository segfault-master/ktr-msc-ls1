import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter<boolean>();

  emailFormControl = new FormControl('', [
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);


  telFormControl = new FormControl('', [
  ]);
  companyNameFormControl = new FormControl('', [
  ]);
  nameFormControl = new FormControl('', [
    Validators.required
  ]);


  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  register(): void {
    // tslint:disable-next-line:max-line-length
    if (!this.emailFormControl.invalid && !this.passwordFormControl.invalid && !this.nameFormControl.invalid && !this.companyNameFormControl.invalid && !this.telFormControl.invalid) {
      // tslint:disable-next-line:max-line-length
      this.authService.register({name: this.nameFormControl.value, password: this.passwordFormControl.value, email: this.emailFormControl.value, tel: this.telFormControl.value, companyName: this.companyNameFormControl.value}).subscribe(
        (response: any) => {
          localStorage.setItem('user', this.nameFormControl.value);
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
