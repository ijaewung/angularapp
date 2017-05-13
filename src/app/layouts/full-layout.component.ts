import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  public menus: MenuModel[];
  public navis: NaviModel[];
  public title = "DOTVEL";
  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}

  public constructor() {
    this.title = ".net Avengers";

    var dashboard: MenuModel = { header: "Dashboard", url: "", tooltip: "", number: 0, isenabled: true};
    var users: MenuModel = { header: "Users", url: "", tooltip: "", number: 0, isenabled: true};
    var settings: MenuModel = { header: "Settings", url: "", tooltip: "", number: 0, isenabled: true};
    this.menus = [dashboard, users, settings];
    var navi_1: NaviModel = { header: "닷넷프레임워크", items: [ { name: "Tutorial" }, { name: "Article"}] };
    var navi_2: NaviModel = { header: "넷플릭스", items: [ { name: "House of Cards" }, { name: "Defenders"}] };
    this.navis = [navi_1, navi_2];
    
  }
}

class MenuModel {
  header: string;
  url: string;
  tooltip: string;
  number: number;
  isenabled: boolean;
}

class NaviModel {
  header: string;
  items: NaviItemModel[];
}
class NaviItemModel {
  name: string;
}
