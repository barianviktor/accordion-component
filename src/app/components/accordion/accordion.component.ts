import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items!: { title: string; description: string }[];
  @Input() color: {
    titleBackgroundColor: string;
    detailsBackgroundColor: string;
    titleColor: string;
    detailsColor: string;
    titleBackgroundColorHover: string;
  };
  hover = -1;
  selectedIndex?: number = undefined;
  faAngleDown = faAngleDown;

  constructor() {
    this.color = {
      titleBackgroundColor: 'rgb(255, 255, 255)',
      titleBackgroundColorHover: 'rgb(237, 237, 237)',
      titleColor: 'rgb(10, 10, 10)',
      detailsBackgroundColor: 'rgb(237, 237, 237)',
      detailsColor: 'rgb(10, 10, 10)',
    };
  }

  ngOnInit(): void {}
  onSelect(index: number) {
    index == this.selectedIndex
      ? (this.selectedIndex = undefined)
      : (this.selectedIndex = index);
  }
}
