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
    var navi_1: NaviModel = { header: "wpf", class: "fa fa-stack-overflow", items: [ { name: "wpf.tutorial" }, { name: "app.kakaotalk"}, { name: "app.stackoverflow"}, { name: "app.devexpress"}, { name: "app.infragistics"}] };
    var navi_2: NaviModel = { header: "web", class: "fa fa-edge", items: [ { name: "python.tutorial" }, { name: "angular4.tutorial"}] };
    var navi_3: NaviModel = { header: "netflix", class: "fa fa-file-video-o", items: [ { name: "drm.house of cards" }, { name: "drm.지정생존자"}] };
    var navi_5: NaviModel = { header: "m.c.u", class: "fa fa-film", items: [ 
       { name: " iron man" },
       { name: " incredible hulk"},
       { name: " captain america"},
       { name: " thor"},
       { name: " avengers"},
       { name: " guadians of galaxy"},
       { name: " ant man"},
       { name: " doctor strange"},
       { name: " spider man"},
       { name: " black panther"},
       { name: " captain marvel"},
       { name: " dare devil"},
       { name: " punisher"},
       { name: " jessica jones"},
       { name: " luke cage"},
       { name: " iron fist"},] 
      };
    var navi_4: NaviModel = { header: "we are groot", class: "fa fa-smile-o", items: [ 
       { name: " groot.team" },
       { name: " groot.history"}] 
      };    

    this.navis = [navi_1, navi_2, navi_3, navi_4, navi_5];

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
  class: string;
  items: NaviItemModel[];
}
class NaviItemModel {
  name: string;
}
