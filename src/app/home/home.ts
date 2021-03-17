import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent {
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
  mealsOfTheWeekArray = [];
  daysWeekArr = [] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];
  mealsArray = [] = [
    { id: 1,
      mealName: 'meal1',
      vegetables: true,
      meat: false,
      potato: false,
      noodles: false,
      fastfood: false,
      time: false,
      evening: true,
      noon: false,
      bothTime: false,
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
  onGenerateClick(): void {
      this.mealsOfTheWeekArray = [];
      this.generateMeals();
      this.checkNoon();
      if (this.mealsArray[this.num].noon === true) {

      }
      this.generateMeals();
      this.mondayE = this.num;
      this.mealsOfTheWeekArray.push(this.mondayE);
      this.generateMeals();
      this.tuesdayM = this.num;
      this.mealsOfTheWeekArray.push(this.tuesdayM);
      this.generateMeals();
      this.tuesdayE = this.num;
      this.mealsOfTheWeekArray.push(this.tuesdayE);
      this.generateMeals();
      this.wednesdayM = this.num;
      this.mealsOfTheWeekArray.push(this.wednesdayM);
      this.generateMeals();
      this.wednesdayE = this.num;
      this.mealsOfTheWeekArray.push(this.wednesdayE);
      this.generateMeals();
      this.thursdayM = this.num;
      this.mealsOfTheWeekArray.push(this.thursdayM);
      this.generateMeals();
      this.thursdayE = this.num;
      this.mealsOfTheWeekArray.push(this.thursdayE);
      this.generateMeals();
      this.fridayM = this.num;
      this.mealsOfTheWeekArray.push(this.fridayM);
      this.generateMeals();
      this.fridayE = this.num;
      this.mealsOfTheWeekArray.push(this.fridayE);
      this.generateMeals();
      this.saturdayM = this.num;
      this.mealsOfTheWeekArray.push(this.saturdayM);
      this.generateMeals();
      this.mealsOfTheWeekArray.push(this.saturdayE);
      this.generateMeals();
      this.sundayE = this.num;
      this.mealsOfTheWeekArray.push(this.sundayM);
      this.generateMeals();
      this.sundayE = this.num;
      this.mealsOfTheWeekArray.push(this.sundayE);
      console.log('push into mealsOfTheWeek successful');
      console.log(this.mealsOfTheWeekArray);
  }
    generateMeals(): void{
    const max = this.mealsArray.length;
    this.num = 0;
      // Between 0 and max
    this.num = Math.floor(Math.random() * (max));
    }
    checkNoon(): void {
      if (this.mealsArray[this.num].noon === true) {
        this.mondayM = this.num;
        this.mealsOfTheWeekArray.push(this.mondayM);
      }
      else {
        this.generateMeals();
        this.checkNoon();
      }
  }
    checkEvening(): void{

    }
}
