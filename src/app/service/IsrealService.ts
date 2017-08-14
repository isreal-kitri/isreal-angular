/**
 * Created by danawacomputer on 2017-07-20.
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Announce} from "../domain/announce";

@Injectable()
export class IsrealService {

  constructor(private http: HttpClient) {}

  // 1. 모든 공지 목록 가져오기
  getAnnounces(): Observable<Announce[]> {
    return this.http.get("http://localhost:8080/announce")
  }

  // 2. 등록번호에 따라 공지 확인하기
  getAnnounce(post_seq: number): Observable<Announce> {
    return this.http.get("http://localhost:8080/announce/" + post_seq);
  }
}
