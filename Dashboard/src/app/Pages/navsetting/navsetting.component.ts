import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navsetting',
  standalone: true,
 imports: [RouterLink,RouterLinkActive,NavsettingComponent,RouterOutlet],
  templateUrl: './navsetting.component.html',
  styleUrl: './navsetting.component.scss'
})
export class NavsettingComponent {

}
