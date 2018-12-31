import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';

import { GsectionService } from './gsection.service';

import { Gsection } from './models/gsection.model';

export class GsectionDataSource extends DataSource<Gsection> {
    private gsectionsSubject = new BehaviorSubject<Gsection[]>([]);

    gsections: Gsection[];

    constructor(private paginator: MatPaginator,
                private sort: MatSort,
                private sv: GsectionService) {
        super();
    }

    getCurrentGsections() {
        return this.gsections;
    }

    loadAllGsections() {
        this.sv.getGsections()
            .subscribe(dt => {
                this.gsectionsSubject.next(dt);
                this.gsections = dt;
        });
    }


    loadGsectionsByContent(content: string) {
        this.sv.getGsectionsByContent(content)
            .subscribe(dt => {
                this.gsectionsSubject.next(dt);
                this.gsections = dt;
        });
    }


    loadGsectionsByCategory(category: string) {
        this.sv.getGsectionsByCategory(category)
            .subscribe(dt => {
                this.gsectionsSubject.next(dt);
                this.gsections = dt;
        });
    }


    connect(collectionViewer: CollectionViewer): Observable<Gsection[]> {
        const dataMutations = [
            this.gsectionsSubject.asObservable(),
            this.paginator.page,
            this.sort.sortChange
        ];
        if (this.gsections.length != null) {
            this.paginator.length = this.gsections.length;
        } else {
            this.paginator.length = 3;
        }
        return merge(...dataMutations).pipe(map(() => {
            let stData = null;
            if (this.gsections != null) {
                stData = this.getGsectionsSortedData([...this.gsections]);
            }
            if (stData != null) {
                return this.getPagedData(stData);
            } else {
                return null;
            }
            // return this.getPagedData(this.getGsectionsSortedData([...this.gsections]));
        }));
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.gsectionsSubject.complete();
    }

    private getPagedData(gsections: Gsection[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return gsections.splice(startIndex, this.paginator.pageSize);
    }

    private getGsectionsSortedData(gsections: Gsection[]) {
        if (!this.sort.active || this.sort.direction === '') {
          return gsections;
        }

        return gsections.sort((a, b) => {
          const isAsc = this.sort.direction === 'asc';
          switch (this.sort.active) {
            case 'id': return compare(+a.id, +b.id, isAsc);
            case 'title': return compare(+a.title, +b.title, isAsc);
            case 'category': return compare(a.category, b.category, isAsc);
            case 'updated': return compare(a.updated, b.updated, isAsc);
            default: return 0;
          }
        });
      }
}

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
