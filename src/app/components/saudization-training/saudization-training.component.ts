import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-saudization-training',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './saudization-training.component.html',
  styleUrl: './saudization-training.component.scss'
})
export class SaudizationTrainingComponent {

}
