import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {
  id: number = 0;
  data: any;
  isLastVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.isLastVisible = false; //Di default, ogni volta che viene caricato è false
      this.id = params['id'];
      console.log('Getting data for ' + this.id);
      this.data = this.contentService.getDataFromId(this.id);
      console.log('Data returned' + this.data)
    });
  }

  onButtonClicked() {
    this.isLastVisible = !this.isLastVisible;
  }
}
