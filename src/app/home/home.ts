import { Component } from '@angular/core';
import {countOccurrences} from '@angular-devkit/build-angular/src/webpack/plugins/analytics';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent {
  countMealsGenerated = 0;
  currentMealNum = 0;
  buttonClick = false;
  num = 0;
  title = 'meal2';
  mainDishesOfTheWeek: number[];
  sideDishesOfTheWeek = [];
  vegetablesOfTheWeek = [];
  vegetables = [
    'samp',
    'sammp',
    'samp3',
    'samp4',
    'samp5',
    'vegetable6',
    'samp',
    'sammp',
    'samp3',
    'samp4',
    'samp5',
    'vegetable6'
  ];
  sideDishes = [
    'sa',
    'sa1',
    'sa2',
    'sa3',
    'sa4',
    'sa5',
    'sa6',
  ];
  daysWeekArr = [] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];
  mainDishes = [] = [
    { id: 1,
      mealName: 'sampleSamp',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'sample2',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: true,
      time: false,
      evening: true,
      noon: true,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'sample3',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 4,
      mealName: 'sample4',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'sample5',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'samplde6',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    { id: 1,
      mealName: 'sdample7',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'samplae8',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: true,
      time: false,
      evening: true,
      noon: true,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'samdple9',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 4,
      mealName: 'sample0',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'samplev',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'samplex',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'sample',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'sampledd',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'auesSample',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
    {
      id: 2,
      mealName: 'sampleSample',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
      sidedish: true,
      weekday: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      ingredientsList: [
        'i1',
        'i2',
        'i3',
        'i3',
      ]
    },
  ];

  onGenerateClick(): void {
      this.buttonClick = true;
      this.mainDishesOfTheWeek = [];
      this.vegetablesOfTheWeek = [];
      this.sideDishesOfTheWeek = [];
      this.num = 0;
      this.genOneDay();
      this.genOneDay();
      this.genOneDay();
      this.genOneDay();
      this.genOneDay();
      this.genOneDay();
      this.genOneDay();
      if (this.vegetablesOfTheWeek.length !== 14)
      {
        this.veg();
      }
  }
    getNumbersMainDish(): number{
    const max = this.mainDishes.length;
    this.num = 0;
      // Between 0 and max
    this.num = Math.floor(Math.random() * (max));
    return this.num;
    }
    getNumbersSideDish(): number{
      const max = this.sideDishes.length;
      this.num = 0;
      // Between 1 and max
      this.num = Math.floor(Math.random() * max);
      return this.num;
  }
    getNumbersVegetable(): number{
      const max = this.sideDishes.length;
      this.num = 0;
      // Between 1 and max
      this.num = Math.floor(Math.random() * max) + 1;
      return this.num;
    }
    genOneDay(): void{
      this.genMeal();
      this.genMeal();
    }
    mainDish(): void {
      this.genMainDish();
    }
    veg(): void { // had a bug with not generating enough so i just generate a few more
      if (this.vegetablesOfTheWeek.length !== 14)
      {
        this.veg();
        this.veg();
        this.veg();
        this.veg();
        this.veg();
      }
    }
    genMainDish(): void {
    this.num = 0;
    this.num = this.getNumbersMainDish();
    if (this.mainDishesOfTheWeek.length === 0){ // if there is no mainDish added yet he adds cuz he doesnt have to check
      this.mainDishesOfTheWeek.push(this.num);
      this.currentMealNum = this.num;
    }
    else {
      if (this.mainDishesOfTheWeek.includes(this.num) === false) {// if we hadedt had it this week we add
        this.mainDishesOfTheWeek.push(this.num);
        this.currentMealNum = this.num;
      } else {
        // he checks if we had the same dish this week
        if (this.mainDishesOfTheWeek.includes(this.num) === true) { // if we had it. we generate new
          this.mainDish();
        } else {
          this.mainDishesOfTheWeek.push(this.num);
          this.currentMealNum = this.num;
        }
      }
    }
    }
    genSideDish(): void{
    if (this.mainDishes[this.currentMealNum].sidedish === true){// check if we need sidedish
      this.num = this.getNumbersSideDish();
      if (this.sideDishesOfTheWeek.length === 0){ // add sidedish monday morning
        this.sideDishesOfTheWeek.push(this.num);
      }
      else{
        if (this.sideDishesOfTheWeek[this.currentMealNum - 1] !== this.sideDishes[this.num]){
          this.sideDishesOfTheWeek.push(this.num);
        }
        else{
        if (this.sideDishesOfTheWeek[this.currentMealNum - 1] === this.sideDishes[this.num]){ // no sidedish twice in a row
          this.genSideDish();
        }
        else {
          console.log('checking SideDishes to its occurrence in the week failed');
        }
      }
      }
    }
    else {
      if (this.mainDishes[this.currentMealNum].sidedish === false) {
        this.sideDishesOfTheWeek.push(0);
      }
      else {
        console.log('no side Dish');
      }
      }
    }
  genVeg(): void{
    if (this.mainDishes[this.currentMealNum].vegetables === true){// check if we need sidedish
      this.num = this.getNumbersVegetable();
      if (this.vegetablesOfTheWeek.length === 0){ // add sidedish monday morning
        this.vegetablesOfTheWeek.push(this.num);
      }
      else{
        if (this.vegetablesOfTheWeek[this.currentMealNum - 1] !== this.vegetables[this.num]){
          this.vegetablesOfTheWeek.push(this.num);
        }
        else{
          if (this.vegetablesOfTheWeek[this.currentMealNum - 1] === this.vegetables[this.num]){ // no sidedish twice in a row
            this.genSideDish();
          }
          else {
            console.log('checking vegetables to its occurrence in the week failed');
          }
        }
      }
    }
    else {
      if (this.mainDishes[this.currentMealNum].vegetables === false) {
        this.vegetablesOfTheWeek.push(0);
      }
      else {
        console.log('no veg');
      }
    }
  }
    genMeal(): void{
    this.genMainDish();
    this.genSideDish();
    this.genVeg();
    }
}
