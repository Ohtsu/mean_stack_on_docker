import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';

import { GsectionService } from './../../gsection.service';

@Component({
  selector: 'app-gsection-edit',
  templateUrl: './gsection-edit.component.html',
  styleUrls: ['./gsection-edit.component.scss']
})
export class GsectionEditComponent implements OnInit {

  id: String;
  gsection: any = [];
  updateForm: FormGroup;
  private datepipe: DatePipe = new DatePipe('en');

  constructor(private gsectionService: GsectionService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      user: '',
      content: '',
      created: new Date(),
      updated: new Date(),
      version: '',
      category: '',
      target: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.gsectionService.getGsectionById(this.id).subscribe(res => {
        this.gsection = res;
        console.log('this.gsection--------------------', this.gsection);
        const cdate = this.datepipe.transform(this.gsection.created, 'yyyy-MM-dd' );
        const udate = this.datepipe.transform(this.gsection.updated, 'yyyy-MM-dd' );
        this.updateForm.get('title').setValue(this.gsection.title);
        this.updateForm.get('user').setValue(this.gsection.user);
        this.updateForm.get('content').setValue(this.gsection.content);
        this.updateForm.get('created').setValue(cdate);
        this.updateForm.get('updated').setValue(udate);
        this.updateForm.get('version').setValue(this.gsection.version);
        this.updateForm.get('category').setValue(this.gsection.category);
        this.updateForm.get('target').setValue(this.gsection.target);

      });
    });
  }

  updateGsection(title,
                  user,
                  content,
                  version,
                  created,
                  category,
                  target,
                  author_id,
                  author_name,
                  language,
                  currency,
                  price,
                  emargin,
                  access,
                  sold
                  ) {
    const updated = new Date();
    this.gsectionService.updateGsection(this.id,
                                            title,
                                            user,
                                            content,
                                            version,
                                            created,
                                            updated,
                                            category,
                                            target,
                                            author_id,
                                            author_name,
                                            language,
                                            currency,
                                            price,
                                            emargin,
                                            access,
                                            sold
                                            )
      .subscribe(() => {
        this.snackBar.open('Gsection updated successfully', 'OK', {duration: 3000});
      });
  }

}

