import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__, Output,EventEmitter } from '@angular/core';
import { CompiledStylesheet } from '@angular/compiler';
import { ShowsService } from '../../Services/shows/shows.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-current-shows',
  templateUrl: './current-shows.component.html',
  styleUrls: ['./current-shows.component.css']
})
export class CurrentShowsComponent implements OnInit {
  

  allshows;
  myDate = new Date();
  
  constructor(private showsService : ShowsService) {
     
    
  }
  ngOnInit(): void {
    this.showsService.getcurrentshows().subscribe(data => this.allshows = data);


  }

  getshowsdetails(showid:number){
    window.location.href=`/show/${showid}`;
    


  }

  getshowschedule(){
    const curDate = formatDate(this.myDate, 'yyyy-MM-dd', 'en-US');
    window.location.href=`/show/schedule/${curDate}`;
  }
  
}

