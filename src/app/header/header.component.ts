import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeaderService } from './header.service';
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
  tabs: Tab[] = [];
  tabSelected = new FormControl();

  constructor(private HeaderService: HeaderService) {}

  ngOnInit(): void {
    this.getTabs();
    this.getTab();
  }

  getTab = () => {
    this.tabSelected = this.HeaderService.getTab();
  };

  setSelectedTab = (index: number) => {
    this.tabSelected.setValue(index);
    this.HeaderService.setTab(index);
  };

  getTabs = () => {
    this.tabs = this.HeaderService.getTabs();
  };

  setTabs = (index: number) => {
    this.HeaderService.setTabs(
      this.tabs.filter((t: Tab, i: number) => {
        (t || constants['header-default']).isActive =
          index === i ? true : false;
        return t;
      })
    );
    this.tabs = this.HeaderService.getTabs();
  };

  onClick = (index: number) => {
    this.setSelectedTab(index);
    this.setTabs(index);
  };
}
