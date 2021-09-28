import { LoignService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoignService) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  public loggedIn(): void {
    // https://oauth.vk.com/authorize
    this.loginService.authorizeAccout().subscribe(console.log);
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      loginID: [null],
      passwordID: [null],
    });
  }
}
