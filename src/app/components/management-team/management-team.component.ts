import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-management-team',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './management-team.component.html',
  styleUrl: './management-team.component.scss'
})
export class ManagementTeamComponent {

}
