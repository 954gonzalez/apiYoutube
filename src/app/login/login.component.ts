import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  
  constructor(private fb: FormBuilder, private client: ClientService, public auth: AuthService, private route: Router) { }

      ngOnInit() {
        this.form = this.fb.group({
          email: ['', Validators.email],
          password: ['', Validators.required]
        });
      }

      async onSubmit() {

        if (this.form.valid) {

          this.client.postRequest('http://localhost:5000/api/v01/user/login', {
            email: this.form.value.email,
            password: this.form.value.password
          }).subscribe(

            (response: any) => {
              console.log(response);
             
              this.auth.login(response.token)
             
              this.auth.setCourrentUser(response.name)
             
              this.route.navigate( ['/']);
          }),

          (error) => {

            console.log(error.status);

          };
        } else {

          console.log("Form error");
        }
      }

}

