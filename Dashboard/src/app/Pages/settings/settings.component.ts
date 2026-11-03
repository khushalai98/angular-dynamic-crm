import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavsettingComponent } from '../navsetting/navsetting.component';
import { MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NavsettingComponent,
    MatFormFieldModule,
    MatHint,
    MatLabel,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatCheckboxModule,
    JsonPipe,
    // form-builder is service it is just not component 
    // FormBuilder, 
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    


  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  private readonly _formBuilder = inject(FormBuilder);

  readonly toppings = this._formBuilder.group({
    TeamJoinReq: true,
    WeeklyTeamActivityDigest: false,
    APIincidents: false,
    Platformincidents: false,
    Paymenttransactions: true,
    Userbehavior: true,
  });
}
