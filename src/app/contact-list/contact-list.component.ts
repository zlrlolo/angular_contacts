import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(
    private router: Router,
  private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    // const token = window.localStorage.getItem('auth_token')
    // if (!token) {
    //   this.router.navigate(['/signup'])
    // }
    this.http.get('http://localhost:3000/session')

      .toPromise()
      .then(data => {
        // window.localStorage.removeItem('auth_token')
        // this.router.navigate(['/signin'])
      })
      .catch(err => {
        // window.alert('退出失败，请稍后再试')
      })
  }

}

