import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { MemberModel } from './models/member.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'members-front';

  members: MemberModel[] = [
    // { name: 'Member 01', id: 1, surname: 'Ciclano', photo: 'https://www.google.com/'},
    // { name: 'Member 02', id: 2, surname: 'Fulano', photo: 'https://www.google.com/'},
    // { name: 'Member 03', id: 3, surname: 'Beltrano', photo: 'https://www.google.com/'}
  ];

  teste = {
    attr: '123'
  }

  constructor(private api: ApiService) {
    this.getMembers();
  }

  getMembers() {
    this.api.getAllMembers().subscribe((data) => {
      this.members = data;
    }, err => {
      console.error(err);
    })
  }

  memberDetail(id: string) {
   
  }
}
