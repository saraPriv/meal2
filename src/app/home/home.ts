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
  num = 0;
  title = 'meal2';
  mainDishesOfTheWeek: number[];
  sideDishesOfTheWeek = [];
  vegetablesOfTheWeek = [];
  vegetables = [
    'beans',
    'broccoli',
    'vegetable3',
    'beans2',
    'broccoli2',
    'vegetable6'
  ];
  sideDishes = [
    'rice',
    'noodles',
    'other Rice',
    'bread',
    'toast',
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
      mealName: 'risotto',
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
      vegetable: false,
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
      vegetables: false,
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
      vegetables: false,
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
      vegetables: false,
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
      vegetables: false,
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
      vegetables: false,
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
      vegetable: false,
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
      vegetables: false,
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
      vegetables: false,
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
      vegetables: false,
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
      vegetables: false,
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
      vegetables: false,
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
      vegetables: false,
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
      vegetables: false,
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
      vegetables: false,
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
      vegetables: false,
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
      this.mainDishesOfTheWeek = [];
      this.genOneDay();
      this.genOneDay();
      this.genOneDay();
      this.genOneDay();
      this.genOneDay();
      this.genOneDay();
      this.genOneDay();
      // this.mondayM = this.num;
      // this.mealsOfTheWeekArray.push(this.mondayM);
      // this.getNumbers();
      // this.mondayE = this.num;
      // this.mealsOfTheWeekArray.push(this.mondayE);
      // this.getNumbers();
      // this.tuesdayM = this.num;
      // this.mealsOfTheWeekArray.push(this.tuesdayM);
      // this.getNumbers();
      // this.tuesdayE = this.num;
      // this.mealsOfTheWeekArray.push(this.tuesdayE);
      // this.getNumbers();
      // this.wednesdayM = this.num;
      // this.mealsOfTheWeekArray.push(this.wednesdayM);
      // this.getNumbers();
      // this.wednesdayE = this.num;
      // this.mealsOfTheWeekArray.push(this.wednesdayE);
      // this.getNumbers();
      // this.thursdayM = this.num;
      // this.mealsOfTheWeekArray.push(this.thursdayM);
      // this.getNumbers();
      // this.thursdayE = this.num;
      // this.mealsOfTheWeekArray.push(this.thursdayE);
      // this.getNumbers();
      // this.fridayM = this.num;
      // this.mealsOfTheWeekArray.push(this.fridayM);
      // this.getNumbers();
      // this.fridayE = this.num;
      // this.mealsOfTheWeekArray.push(this.fridayE);
      // this.getNumbers();
      // this.saturdayM = this.num;
      // this.mealsOfTheWeekArray.push(this.saturdayM);
      // this.getNumbers();
      // this.mealsOfTheWeekArray.push(this.saturdayE);
      // this.getNumbers();
      // this.sundayE = this.num;
      // this.mealsOfTheWeekArray.push(this.sundayM);
      // this.getNumbers();
      // this.sundayE = this.num;
      // this.mealsOfTheWeekArray.push(this.sundayE);
      console.log('generatingMealsSuccessfull');
      console.log(this.mainDishesOfTheWeek);
      console.log(this.mainDishes);
      console.log(this.sideDishesOfTheWeek);
      console.log(this.vegetablesOfTheWeek);
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
      this.num = Math.floor(Math.random() * max) + 1;
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
    genMainDish(): void {
    console.log('genMainDish');
    this.num = 0;
    this.num = this.getNumbersMainDish();
    if (this.mainDishesOfTheWeek.length === 0){ // if there is no mainDish added yet he adds cuz he doesnt habe to check
      this.mainDishesOfTheWeek.push(this.num);
      this.currentMealNum = this.num;
      console.log('firstMeal in the week');
    }
    else {
      if (this.mainDishesOfTheWeek.includes(this.num) === false){// if we hadedt had it this week we add
        console.log('didnt have that meal this week');
        this.mainDishesOfTheWeek.push(this.num);
        this.currentMealNum = this.num;
      }
      // he checks if we had the same dish this week
      if (this.mainDishesOfTheWeek.includes(this.num) === true){ // if we had it. we generate new
        console.log('had the Meal already this week');
        this.mainDish();
      }
      else {
        this.mainDishesOfTheWeek.push(this.num);
        this.currentMealNum = this.num;
        console.log('checking MainDishes to its occurrence in the week failed');
      }
    }
    }
    genSideDish(): void{
    console.log('genSideDish');
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
      this.sideDishesOfTheWeek.push(0);
      }
    }
    genVeg(): void{
      console.log('genVegetable');
      if (this.mainDishes[this.currentMealNum].vegetables === true){ // look if we have a veg
        this.num = this.getNumbersVegetable();
        if (this.vegetablesOfTheWeek.length === 0){
          this.vegetablesOfTheWeek.push(this.num);
        }
        else{
          if (this.mainDishes[this.currentMealNum].vegetables === false){
            this.vegetablesOfTheWeek.push(0);
          }
          if (this.vegetablesOfTheWeek[this.num - 1] === this.vegetables[this.num]){
            this.genVeg();
          }
        }
      }
    }
    genMeal(): void{
    this.mainDish();
    this.genSideDish();
    this.genVeg();
    }
    // genTuesday(): void{
    //   const max = this.mealsArray.length;
    //   this.num = 0;
    //   // Between 0 and max
    //   this.num = Math.floor(Math.random() * (max));
    // }
    // genWednesday(): void{
    //   const max = this.mealsArray.length;
    //   this.num = 0;
    //   // Between 0 and max
    //   this.num = Math.floor(Math.random() * (max));
    // }
    // genThursday(): void{
    //   const max = this.mealsArray.length;
    //   this.num = 0;
    //   // Between 0 and max
    //   this.num = Math.floor(Math.random() * (max));
    // }
    // genFriday(): void{
    //   const max = this.mealsArray.length;
    //   this.num = 0;
    //   // Between 0 and max
    //   this.num = Math.floor(Math.random() * (max));
    // }
    // genSaturday(): void{
    //   const max = this.mealsArray.length;
    //   this.num = 0;
    //   // Between 0 and max
    //   this.num = Math.floor(Math.random() * (max));
    // }
    // genSunday(): void{
    //   const max = this.mealsArray.length;
    //   this.num = 0;
    //   // Between 0 and max
    //   this.num = Math.floor(Math.random() * (max));
    // }
  //   checkNoon(): void {
  //     if (this.mealsArray[this.num].noon === true) {
  //       this.mealsOfTheWeekArray.push(this.num);
  //     }
  //     else {
  //       this.generateMeals();
  //       this.checkNoon();
  //     }
  // }
  //   checkEvening(): void{
  //     if (this.mealsArray[this.num].evening === true) {
  //       this.mealsOfTheWeekArray.push(this.num);
  //     }
  //     else {
  //       this.generateMeals();
  //       this.checkEvening();
  //     }
  //   }
}
