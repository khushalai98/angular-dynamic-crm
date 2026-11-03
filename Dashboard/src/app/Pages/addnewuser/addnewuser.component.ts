
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavsettingComponent } from '../navsetting/navsetting.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';


interface User {
  id: number;
  name: string;
  email: string;
  initials: string;
  role: string;
}

@Component({
  selector: 'app-addnewuser',
  standalone: true,
  imports: 
  [RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NavsettingComponent,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    CommonModule,
  ],
  templateUrl: './addnewuser.component.html',
  styleUrl: './addnewuser.component.scss'
})
export class AddnewuserComponent {

// Sample user data matching your interface design
  users: User[] = [
    { id: 1, name: 'Emma Stone', email: 'e.stone@company.com', initials: 'ES', role: 'Viewer' },
    { id: 2, name: 'Alissia McCalister', email: 'a.mccalister@company.com', initials: 'AM', role: 'Viewer' },
    { id: 3, name: 'Emily Luisa Bernacle', email: 'e.luis.bernacle@company.com', initials: 'EB', role: 'Member' },
    { id: 4, name: 'Aaron Wave', email: 'a.wave@company.com', initials: 'AW', role: 'Contributor' },
    { id: 5, name: 'Thomas Palstein', email: 't.palstein@company.com', initials: 'TP', role: 'Viewer' }
  ];

  pendingUsers = [
  { initials: 'LP', email: 'lydia.posh@company.com', expiration: 'Expires in 12 days', role: 'Viewer' },
  { initials: 'AW', email: 'a.widburg@company.com', expiration: 'Expires in 8 days', role: 'Viewer' }
];

  openAddUserModal(): void {
    console.log('Open add user dialog');
  }

  editUser(user: User): void {
    console.log('Editing user:', user);
  }

  removeUser(user: User): void {
    this.users = this.users.filter(u => u.id !== user.id);
  }

  resendInvitation(user: any) {
    console.log('Resending invitation to:', user.email);
    // Add your service call logic here (e.g., this.userService.resendInvite(user.id).subscribe(...))
  }

  cancelInvitation(user: any) {
    console.log('Canceling invitation for:', user.email);
    // Filter the user out of the pending list or make an API call
    this.pendingUsers = this.pendingUsers.filter(p => p !== user);
  }
}
