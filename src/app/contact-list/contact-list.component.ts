import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contacts: any

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts() {
    this.http.get('http://localhost:3000/contacts')
      // })
      .toPromise()
      .then(data => {
        this.contacts = data
        // console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteContactById(e: any, id: number) {
    e.preventDefault()
    if (!window.confirm('确定删除吗？')) {
      return
    }
    this.http.delete(`http://localhost:3000/contacts/${id}`)
      .toPromise()
      .then(data => {
        this.getContacts()
      })
      .catch(err => {
        console.log(err)
      })
  }
}

