
import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

export interface Workspace {
  id: number;
  name: string;
  starterKit: string;
  region: string;
  performance: string;
}

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule
  ],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.scss'
})
export class WorkshopComponent {
  starterKits = [
    { value: 'none', label: 'None - Empty workspace' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' }
  ];

  regions = [
    { value: 'europe-west-01', label: 'europe-west-01' },
    { value: 'us-east-01', label: 'us-east-01' },
    { value: 'asia-south-01', label: 'asia-south-01' }
  ];

  performances = [
    {
      value: 'base',
      label: 'Base performance',
      details: '1/8 vCPU, 1 GB RAM'
    },
    {
      value: 'advanced',
      label: 'Advanced performance',
      details: '1/4 vCPU, 2 GB RAM'
    },
    {
      value: 'turbo',
      label: 'Turbo performance',
      details: '1/2 vCPU, 4 GB RAM'
    }
  ];

  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    starterKit: new FormControl('none', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    region: new FormControl('europe-west-01', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    performance: new FormControl('base', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  constructor(
    private dialogRef: MatDialogRef<WorkshopComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { workspaceCount: number }
  ) { }

  submit(): void {
    if (this.form.invalid || this.data.workspaceCount >= 10) {
      this.form.markAllAsTouched();
      return;
    }

    const workspace: Workspace = {
      id: Date.now(),
      ...this.form.getRawValue()
    };

    this.dialogRef.close(workspace);
  }

  goBack(): void {
    this.dialogRef.close();
  }


  
}



