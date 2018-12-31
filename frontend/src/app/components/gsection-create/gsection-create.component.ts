import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GsectionService } from './../../gsection.service';

@Component({
  selector: 'app-gsection-create',
  templateUrl: './gsection-create.component.html',
  styleUrls: ['./gsection-create.component.scss']
})
export class GsectionCreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private gsectionService: GsectionService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      user: 'sample',
      content: '',
      created: new Date(),
      updated: new Date(),
      version: '',
      category: '',
      target: ''
    });
  }

  addGsection(title,
              user,
              content,
              version,
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
    const created = new Date();
    const updated = new Date();
    this.gsectionService.addGsection(title, 
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
                                      sold )
                                      .subscribe(() => {
      this.router.navigate([`/gsectionlist`]);
    });
  }

  ngOnInit() {
  }

}

