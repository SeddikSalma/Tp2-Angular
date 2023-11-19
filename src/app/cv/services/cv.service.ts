import { Observable, Subject, catchError, of } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Personne } from "../model/personne";

@Injectable({ providedIn: "root" })
export class CvService {
  private selectCvSubject = new Subject<Personne>();
  private link = "https://apilb.tridevs.net/api/personnes"
  selectCv$ = this.selectCvSubject.asObservable();
  cvs: Personne[] = [];
  constructor(private httpClient: HttpClient) {
    this.cvs = [
      new Personne(1, "sellaouti", "aymen", "as.jpg"),
      new Personne(2, "sellaouti", "skander", "cv.png"),
      new Personne(2, "Dhaouadi", "yassine", ""),
      new Personne(2, "Mourali", "sandra", ""),
    ];
  }


  getPersonnesFromApi(): Observable<Personne[]> {
    return this.httpClient.get<Personne[]>(this.link).pipe(
      catchError(() => of([new Personne(666, "AbdulMajeed", "Abdullah")]))

    );
  }

  searchPersonnes(query: string): Observable<Personne[]> {
    return this.httpClient.get<Personne[]>(`${this.link}?filter[where][or][0][name][like]=%25${query}%25&filter[where][or][1][firstname][like]=%25${query}%25`).pipe(
      catchError(() => of([]))
    )
  }

  getCvs() {
    return this.cvs;
  }

  selectCv(cv: Personne) {
    this.selectCvSubject.next(cv);
  }
}
