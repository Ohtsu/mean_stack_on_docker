import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GsectionService } from './../../gsection.service';
import { Gsection } from '../../models/gsection.model';


import * as  MarkdownIt from 'markdown-it';

@Component({
  selector: 'app-gsection-view',
  templateUrl: './gsection-view.component.html',
  styleUrls: ['./gsection-view.component.scss']
})
export class GsectionViewComponent implements OnInit {

  msg = '';
  markdown = new MarkdownIt();
  id: String;
  gsection: any = [];

  constructor(private gsectionService: GsectionService,
    private router: Router,
    private route: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.gsectionService.getGsectionById(this.id).subscribe(res => {
        this.gsection = res;
        const md = this.markdown.render(this.gsection.content);
        this.msg = md;
      });
    });

  }

}
