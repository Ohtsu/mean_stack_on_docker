import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Gsection } from './models/gsection.model';

@Injectable({
  providedIn: 'root'
})
export class GsectionService {

  uri = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getGsections(): Observable<Gsection[]> {
    return this.http.get<Gsection[]>(`${this.uri}/gsections`);
  }

  getGsectionById(id): Observable<Gsection> {
    return this.http.get<Gsection>(`${this.uri}/gsections/${id}`);
  }

  getGsectionsByCategory(category): Observable<Gsection[]>  {
    return this.http.get<Gsection[]>(`${this.uri}/gsections/category/${category}`);
  }

  getGsectionsByContent(content): Observable<Gsection[]>  {
    return this.http.get<Gsection[]>(`${this.uri}/gsections/content/${content}`);
  }

  addGsection(title,
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
              sold ) {
    const gsection = {
      title: title,
      user: user,
      content: content,
      version: version,
      created: created,
      updated: updated,
      category: category,
      target: target,
      author_id: author_id,
      author_name: author_name,
      language: language,
      currency: currency,
      price: price,
      emargin: emargin,
      access: access,
      sold: sold };
    return this.http.post(`${this.uri}/gsections/add`, gsection);
  }


  updateGsection(id,
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
                 sold ) {
    const gsection = {
      title: title,
      user: user,
      content: content,
      version: version,
      created: created,
      updated: updated,
      category: category,
      target: target,
      author_id: author_id,
      author_name: author_name,
      language: language,
      currency: currency,
      price: price,
      emargin: emargin,
      access: access,
      sold: sold
    };
    return this.http.post(`${this.uri}/gsections/update/${id}`, gsection);
  }

  deleteGsection(id) {
    return this.http.get(`${this.uri}/gsections/delete/${id}`);
  }



}
