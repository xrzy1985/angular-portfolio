import { Injectable } from '@angular/core';
import { Tab } from './tab.interface';
import { FormControl } from '@angular/forms';
import constants from '../state/constants.json';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor() {}

  tabs: Tab[] = constants['header-tabs'];
  tab: FormControl = new FormControl(
    this.tabs.findIndex((t: Tab) => (t || {}).isActive)
  );

  getTab = () => this.tab;

  setTab = (value: number) => {
    this.tab = value !== undefined ? new FormControl(value) : this.tab;
  };

  getTabs = () => this.tabs;

  setTabs = (values: Tab[]) => {
    this.tabs = (values || []).length ? [...values] : this.tabs;
  };
}
