import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  data = [
    {
      id: 0,
      title: "The grasshopper",
      content: [
        "A grasshopper hopped into a bar",
        "Bartender: Hey, we have a drink named after you.",
        "Grasshopper: You have a drink named Bob?"
      ]
    },
    {
      id: 1,
      title: "Walking into a bar",
      content: [
        "Two guys are walking down the street one saturday night.",
        "One walks into a bar.",
        "The other one ducks."
      ]
    }
  ]

  constructor() { }

  getDataFromId(id: number) {
    if(this.data.length > id)
      return this.data[id];
    return null;
  }
}
