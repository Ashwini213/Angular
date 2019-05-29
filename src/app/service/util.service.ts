import { Injectable } from '@angular/core';
import { Label } from '../model/label';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public theme$: Subject<any> = new Subject();
  // public labels$:Label[];
  public search$: Subject<any> = new Subject();
  public label$: Label;

  constructor(private http: HttpClient) { }
  postService(url, object) {
    return this.http.post<any>(url, object, {observe : 'response'});
  }
  public setTheme(themeChanged: boolean) {
    this.theme$.next(themeChanged);
  }

  public getTheme() {
    return this.theme$;
  }
  public getSearch() {
    return this.search$;
  }

  public setLabel(label: Label) {
    this.label$ = (label);
  }

  public getLabel(): Label {
    return this.label$;
  }

  // public setLabels(labels:Label[])
  // {
  //   this.labels$=labels;
  // }

  // public getLabels()
  // {
  //   return this.labels$;
  // }

  public setSearch(search: string) {
    this.search$.next(search);
  }
  putService(url, object, header) {
    return this.http.put<any>(url, object, header);
  }

  getService(url, header) {
    return this.http.get<any>(url, header);
  }

  deleteService(url, header) {
    return this.http.delete<any>(url, header);
  }

  postForNoteCreate(url, header, object) {
    return this.http.post<any>(url, object, header);
  }

  putForNoteUpdate(url, object, header) {
    return this.http.put<any>(url, object, header);
  }

  deleteForNoteDelete(url, header) {
    return this.http.delete<any>(url, header);
  }

  putForLabelUpdate(url, object, header) {
    return this.http.put<any>(url, object, header);
  }

  deleteForLabelDelete(url, header) {
    return this.http.delete<any>(url, header);
  }

  postForLabelCreate(url, object, header) {
    return this.http.post<any>(url, object, header);
  }

  deleteForRemoveLabelFromNote(url, header) {
    return this.http.delete<any>(url, header);
  }

  addForAddLabelFromNote(url, object) {
    return this.http.put<any>(url, object, {observe : 'response'});
  }

  postToUploadImage({ url, object, header }: { url; object; header; }) {
    return this.http.post<any>(url, object, header);
  }

  getUserEmail(url, header) {
    return this.http.get<any>(url, header);
  }

  postForCollaborator(url, header) {
    return this.http.post<any>(url, {}, header);
  }

  getCollaborateUser(url) {
    return this.http.get<any>(url, {});
  }

  removeCollaborateUser(url) {
    return this.http.delete<any>(url, {});
  }

  postForAddImage(url, param, header) {
    return this.http.post<any>(url, param, header);
  }

  removeImage(url) {
    return this.http.delete<any>(url, {});
  }
}


