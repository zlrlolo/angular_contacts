import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  formData = {
    name: '',
    email: '',
    phone: '',
    id: 0
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  // getContactById(id) {
  //   this.http.get('http://localhost:3000/contacts/${id}')
  //     // })
  //     .toPromise()
  //     .then(data => {
  //       this.forData = data
  //       // console.log(data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  ngOnInit(): void {
    console.log(this.route)
    const contactId = this.route.snapshot.params['id']
    this.getContactById(contactId)
  }

  getContactById(id: number) {
    this.http.get(`http://localhost:3000/contacts/${id}`)
      .toPromise()
      .then((data: any) => {
        this.formData = data
      })
      .catch(err => {
        console.log(err)
      })
  }


  editContact() {
    const id = this.formData.id
    this.http.patch(`http://localhost:3000/contacts/${id}`, this.formData)
      .toPromise()
      .then(data => {
        this.router.navigate(['/contacts'])
      })
      .catch(err => {
        console.log(err)
      })
  }
}

