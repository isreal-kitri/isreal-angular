/**
 * Created by danawacomputer on 2017-07-20.
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Announce} from "../domain/announce";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

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

  // 3. 공지 글 쓰기
  addAnnounce(announce: any): Observable<any> {
    return this.http.post("http://localhost:8080/announce/regist", announce);
    //console.log(announce + "transmission check");
  }

  // 4. 조회수 기준 Top4 공지사항 목록 가져오기
  getTop4Announces(): Observable<Announce[]> {
    return this.http.get("http://localhost:8080/announce/top4");
  }

  private errorHandler(error: Response) {
    console.error("Error Occured: " + error);
    return Observable.throw(error || "Some Error on Server Occured");
  }

}
