import { Component, OnInit ,Input, Output, EventEmitter,} from '@angular/core';
import { frais } from 'src/app/models/food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent  implements OnInit {
  @Input() item!: frais;
  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit() {}

}
