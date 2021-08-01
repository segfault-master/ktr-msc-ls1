import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter<boolean>();

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);



  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    if (!this.nameFormControl.invalid && !this.passwordFormControl.invalid) {
      this.authService.login({name: this.nameFormControl.value, password: this.passwordFormControl.value}).subscribe(
        (response: any) => {
          localStorage.setItem('user', this.nameFormControl.value);
          this.router.navigate(['cards']);
        }, (error: any) => {
          console.log(error);
        }
      );
    }
    console.log(this.nameFormControl.value);

    // TODO drop following line
    // this.router.navigate(['/learn']);
  }

  clickClose(): void {
    this.close.emit();
  }


}
