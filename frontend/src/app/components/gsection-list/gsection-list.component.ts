import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Gsection } from '../../models/gsection.model';
import { GsectionDataSource } from '../../gsection-datasource';
import { GsectionService } from './../../gsection.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-gsection-list',
  templateUrl: './gsection-list.component.html',
  styleUrls: ['./gsection-list.component.scss']
})
export class GsectionListComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  gsections: Gsection[];
  displayedColumns = ['title', 'category',  'updated', 'version', 'target', 'actions'];
  gsectionDataSource: GsectionDataSource;

  constructor(private gsectionService: GsectionService,
              private router: Router) { }

  ngOnInit() {
    this.gsectionDataSource = new GsectionDataSource(this.paginator,
                                                    this.sort,
                                                    this.gsectionService);
    this.gsectionDataSource.loadAllGsections();

  }


  private loadAllGsections() {
    this.gsectionDataSource.loadAllGsections();
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => {
          this.loadAllGsections();
        })
      )
      .subscribe();
  }

  findGsectionsByCategory(category: string) {
    this.gsectionDataSource.loadGsectionsByCategory(category);
  }

  findGsectionsByContent(content: string) {
    this.gsectionDataSource.loadGsectionsByContent(content);
  }

  editGsection(id) {
    console.log(id);
    this.router.navigate([`/gsectionedit/${id}`]);
  }

  viewGsection(id) {
    console.log(id);
    this.router.navigate([`/gsectionview/${id}`]);
  }

  deleteGsection(id) {
    this.gsectionService.deleteGsection(id).subscribe(() => {
      this.loadAllGsections();
    });
  }


}

