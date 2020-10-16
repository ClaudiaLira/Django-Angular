import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { MemberModel } from '../models/member.model';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  member: MemberModel = new MemberModel();

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    console.log('member-detail');
    this.loadMember();
  }

  loadMember(){
    const id = this.route.snapshot.paramMap.get('id');
    this.api.getMember(id).subscribe((data) => {
      console.log(data);
      this.member = data;
    }, err => {
      console.error(err);
    });
  }
}
