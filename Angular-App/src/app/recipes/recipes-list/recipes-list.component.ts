import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  new Recipe('A Test Recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
];


  constructor() { }

  ngOnInit(): void {
 
   this.max();
   
  }
max(): void{
  let arr =[1050,7,5,9, 12, 50,150, 2050];
  let curr_max_numb = arr[0];
  let min ;
  for(let i = 0; i <=arr.length; i++){
 
    if (curr_max_numb < arr[i]){
      // console.log(this.arr[i]);
      curr_max_numb = arr[i];
      
      }
     
} 
console.log("CurrMax::  ",curr_max_numb);
for(let i =0; i < arr.length; i++){

}
console.log("Min number is::  ",min);

}
}
