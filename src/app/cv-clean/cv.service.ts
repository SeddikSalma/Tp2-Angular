import { Observable, Subject, catchError, map, of, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Personne } from "./personne.model";

@Injectable({ providedIn: "root" })
export class CvService {
  private selectCvSubject = new Subject<Personne>();
  private link = "https://apilb.tridevs.net/api/personnes"
  selectCv$ = this.selectCvSubject.asObservable();
  cvs: Personne[] = [];
  constructor(private httpClient: HttpClient) {
    this.cvs = [];
  }

  deletePersonne(id: number) {
    return this.httpClient.delete(`${this.link}/${id}`);
  }

  addPersonne(personne: Personne) {
    return this.httpClient.post(this.link, personne).pipe(
      map((resp) => {
        return !!resp
      })
    )
  }

  getPersonne(id: number) {
    return this.httpClient.get<Personne>(`${this.link}/${id}`)
  }

  getPersonnesFromApi(): Observable<Personne[]> {
    return this.httpClient.get<Personne[]>(this.link).pipe(
      catchError(() => of([
        new Personne(666, "AbdulMajeed", "Abdullah"),
        new Personne(1, "sellaouti", "aymen", "as.jpg"),
        new Personne(2, "sellaouti", "skander", "cv.png"),
        new Personne(2, "Dhaouadi", "yassine", ""),
        new Personne(2, "Mourali", "sandra", ""),
      ])),
      tap((res) => {
        this.cvs.push(...res)
      }),
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

  getPersonneById(id: number): Observable<Personne | null> {
    const personne = this.cvs.find((personne) => {
      return personne.id == id
    });
    if (personne != undefined)
      return of(personne)
    else
      return of(null)
  }

  addPersonneOld(personne: Personne) {
    personne.id = this.cvs.length + 1;
    this.cvs.push(personne);
  }

  deletePersonneOld(item: Personne) {
    let index = this.cvs.indexOf(item);
    this.cvs.splice(index, 1);
  }
  updatePersonne(personne: Personne) {
    return this.httpClient.put(this.link, personne);
  }
  findByName(name: string): Observable<Personne[]> {
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.httpClient.get<Personne[]>(this.link, { params });
  }

}
