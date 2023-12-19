import { Component } from '@angular/core';

interface Member {
  id: number;
  name: string;
  photo: string;
}

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {

  memberId: number = 0;
  memberName: string = '';


  members: Member[] = [
    { id: 1, name: 'Yasser Khemakhem', photo: '../../../assets/jmel.jpg' },
    { id: 2, name: 'Maiez Ben Romdhane', photo: '../../../assets/jmel1.jpg' },
    { id: 3, name: 'Ahmed Chtourou', photo: '../../../assets/jmel2.jpg' },
    { id: 4, name: 'Ammar Jmel', photo: '../../../assets/ammar.jpg' },
  ];

  addMember(): void {
    this.members.push({ id: this.memberId, name: this.memberName, photo: '../../../assets/jmel.jpg' })
    this.memberName = '';
    this.memberId = 0;
  }

  deleteMember(memberId: number): void {
    this.members = this.members.filter(member => member.id !== memberId);
  }
}
