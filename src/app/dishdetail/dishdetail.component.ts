import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

import{MenuComponent} from '../menu/menu.component';

const DISHES: Dish[]=  [
                         {
                           name:'Uthappizza',
                           image: '/assets/images/uthappizza.png',
                           category: 'mains',
                           label:'Hot',
                           price:'4.99',
                           description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'  
                         },
                         ]              
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

	selectedDish: Dish = DISHES[0];

  constructor() { }

  ngOnInit() {
  }

}
