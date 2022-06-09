import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Tab } from './tab.interface';
import constants from '../state/constants.json';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  imgUrl: string = constants['random-photo-url'];
  position = new FormControl(['left']);
  name: string = constants.name;
  tabs: Tab[] = constants['header-tabs'];
  tabSelected = new FormControl(
    this.tabs.findIndex((t: Tab) => (t || {}).isActive)
  );

  constructor() {}

  ngOnInit(): void {}

  onClick = (tab: Tab, index: number) => {
    this.tabSelected.setValue(new FormControl(index));
    this.tabs.forEach((t: Tab, i: number) => {
      (t || constants['header-default']).isActive = index === i ? true : false;
    });
  };
}
