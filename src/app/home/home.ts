import { Component } from '@angular/core';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent {
  countMealsGenerated = 0;
  num = 0;
  mondayE = 0;
  mondayM = 0;
  tuesdayE = 0;
  tuesdayM = 0;
  wednesdayE = 0;
  wednesdayM = 0;
  thursdayE = 0;
  thursdayM = 0;
  fridayE = 0;
  fridayM = 0;
  saturdayM = 0;
  saturdayE = 0;
  sundayE = 0;
  sundayM = 0;
  title = 'meal2';
  mainDishesOfTheWeek = [];
  sideDishesOfTheWeek = [];
  vegetablesOfTheWeek = [];
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
      vegetable: true,
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
    }
  ];
  sideDish = [] = [
    {
      name: 'beans',
    },
    {
      name: 'broccoli',
    }
  ];
  onGenerateClick(): void {
      this.mainDishesOfTheWeek = [];
      this.genMonday();
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
      console.log('push into mealsOfTheWeek successful');
      console.log(this.mainDishesOfTheWeek);
  }
    getNumbers(): number{
    const max = this.mainDishes.length;
    this.num = 0;
      // Between 0 and max
    this.num = Math.floor(Math.random() * (max));
    return this.num;
    }
    genMonday(): void{
      // !toDo rewrite to gen meal() instead of get numbers itself!
      const rndmNum = this.getNumbers();
      this.mainDishesOfTheWeek.push(rndmNum);
      const rndmNum2 = this.getNumbers();
      this.mainDishesOfTheWeek.push(rndmNum2);
    }
    genMainDish(): void{
    this.countMealsGenerated++;
    this.num = this.getNumbers();
    if (this.mainDishesOfTheWeek.length === 0){
      this.mainDishesOfTheWeek.push(this.mainDishes[this.num]);
    }
    else {
      if (this.mainDishesOfTheWeek[this.countMealsGenerated - 1].mealName === this.mainDishes[this.num].mealName){
         this.num = this.getNumbers();
      }
    }
    }
    genSideDish(): void{
    const num = this.getNumbers();

    }
    genMeal(): void{
    this.genMainDish();
    this.genSideDish();
    this.genMainDish();
    if (this.mainDishes[this.countMealsGenerated].sidedish === true){
      this.genSideDish();
    }
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
