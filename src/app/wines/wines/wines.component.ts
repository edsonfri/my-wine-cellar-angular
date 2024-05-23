import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable } from 'rxjs';

import { Wine } from '../model/wine';
import { WinesService } from '../serices/wines.service';

@Component({
  selector: 'app-wines',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule],
  templateUrl: './wines.component.html',
  styleUrl: './wines.component.scss',

})
export class WinesComponent {

  wines$: Observable<Wine[]>;
  displayedColumns = ['name'];

  constructor(private winesService: WinesService) {

    this.wines$ =  this.winesService.list();
  }



}
