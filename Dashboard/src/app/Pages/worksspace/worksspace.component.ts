import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavsettingComponent } from '../navsetting/navsetting.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';

export interface BillingItem {
  title: string;
  subtitle?: string;
  usedText?: string;
  includedText?: string;
  progressValue?: number;
  price: string;
  isTotal?: boolean;
}

@Component({
  selector: 'app-worksspace',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NavsettingComponent,
    MatButtonModule,
    MatCardModule,
    MatIcon,
    MatProgressBarModule,
    MatListModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDividerModule,

  ],
  templateUrl: './worksspace.component.html',
  styleUrl: './worksspace.component.scss'
})


export class WorksspaceComponent {

  billingItems: BillingItem[] = [
    {
      title: 'Starter plan',
      subtitle: 'Discounted plan for start-ups and growing companies',
      price: '90.00'
    },
    {
      title: 'Storage',
      usedText: 'Used 10.1 GB',
      includedText: '100 GB included',
      progressValue: 10.1,
      price: '40.00'
    },
    {
      title: 'Bandwidth',
      usedText: 'Used 2.9 GB',
      includedText: '5 GB included',
      progressValue: 58,
      price: '10.00'
    },
    {
      title: 'Users',
      usedText: 'Used 9',
      includedText: '50 users included',
      progressValue: 18,
      price: '20.00'
    },
    {
      title: 'Query super caching (EU-Central 1)',
      subtitle: '4 GB query cache, $120/mo',
      price: '120.00'
    },
    {
      title: 'Total for current month',
      price: '280',
      isTotal: true
    }
  ];

  // 1. Declare the form group property here so the HTML can find it
  spendControlForm = new FormGroup({
    isEnabled: new FormControl(true),
    amount: new FormControl('350'),
    email: new FormControl('')
  });

  onUpdate() {
    console.log(this.spendControlForm.value);
  }


  // add-ones
  addonForm = new FormGroup({
    isActivated: new FormControl(false)
  });

  onLearnMore() {
    console.log('Navigating to learn more...');
    // Add navigation logic here
  }
}


