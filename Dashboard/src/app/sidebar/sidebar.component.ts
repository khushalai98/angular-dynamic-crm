import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WorkshopComponent, Workspace } from '../workshop/workshop.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule, MatButtonModule, MatListModule,
    MatMenuModule, MatDividerModule, MatDialogModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  showWorkspaces = false;
  workspaces: Workspace[] = [];
  selectedTheme: 'light' | 'dark' | 'system' = 'light';

  menuItems = [
    { name: 'Overview', icon: 'home', path: '/' },
    { name: 'Details', icon: 'list_alt', path: '/details' },
    { name: 'Settings', icon: 'settings', path: '/settings' }
  ];

  shortcuts = [
    { name: 'Add new user', icon: 'person_add', path: '/add-user' },
    { name: 'Workspace usage', icon: 'analytics', path: '/workspace-usage' },
    { name: 'Cost spend control', icon: 'account_balance', path: '/cost-spend-control' }
  ];

  constructor(
    private dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      this.workspaces = JSON.parse(
        localStorage.getItem('workspaces') || '[]'
      );
    } catch {
      this.workspaces = [];
    }

    const theme = localStorage.getItem('app-theme');

    if (theme === 'light' || theme === 'dark' || theme === 'system') {
      this.selectedTheme = theme;
    }

    this.applyTheme();
  }

  toggleWorkspaces(): void {
    this.showWorkspaces = !this.showWorkspaces;
  }

  selectWorkspace(name: string): void {
    console.log(name);
    this.showWorkspaces = false;
  }

  openAddWorkspace(): void {
    this.showWorkspaces = false;

    if (this.workspaces.length >= 10) {
      return;
    }

    this.dialog.open(WorkshopComponent, {
      width: '820px',
      maxWidth: '95%',
      maxHeight: '90vh',
      data: { workspaceCount: this.workspaces.length }
    }).afterClosed().subscribe((workspace: Workspace | undefined) => {
      if (workspace) {
        this.workspaces.push(workspace);

        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem(
            'workspaces',
            JSON.stringify(this.workspaces)
          );
        }
      }
    });
  }

  setTheme(theme: 'light' | 'dark' | 'system'): void {
    this.selectedTheme = theme;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('app-theme', theme);
      this.applyTheme();
    }
  }

  applyTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const dark =
      this.selectedTheme === 'dark' ||
      (
        this.selectedTheme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );

    document.documentElement.classList.toggle('dark-theme', dark);
  }
}
