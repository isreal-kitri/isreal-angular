

import {Component, OnInit} from '@angular/core';
import {LatLngLiteral} from "@agm/core";
import {MountainInfo} from "../domain/MountainInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'main-mountain',
  templateUrl: './main-mountain.component.html',
  styleUrls: ['./main-mountain.component.css']
})

export class MainMountainComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  sampleMt: MountainInfo = {
    mount_name: '계룡산',
    altitude: 847,
    top100_fm_sel_reason: '예로부터 신라 5악의 하나인 서악(西岳)으로 지칭되었고, 조선시대에는 3악 중 중악(中岳)으로 불리운 산으로서 국립공원으로 지정(1968년)된 점 등을 고려하여 선정산 능선이 마치 닭의 벼슬을 쓴 용의 모습과 닮았다고 하여 계룡산이라는 이름이 유래되었으며, "정감록(鄭鑑錄)"에 언급된 십승지지(十勝之地)중 하나임. 신라 성덕왕 2년(724년) 회의화상이 창건한 동학사(東鶴寺)와 백제 구이신왕(420년)때 고구려의 아도화상에 의하여 창건된 갑사(甲寺)등이 유명',
    mnt_infor: '계룡산은 백두대간에서 갈라져나온 금남정맥의 한 줄기를 이루는 산으로, 충남 공주시와 논산시의 경계를 이루고 있다. 산세가 마치 닭의 벼슬을 쓴 용의 형상을 했다고 해서 계룡산으로 불리게 되었다고 한다.계룡산은 조선조 초기에 씌어진 예언서인 〈정감록〉의 `왕도입지설\'로 유명한 산으로,정상인 천황봉(天皇峰)을 중심으로 쌀개봉(830.6m), 관음봉(765.8m), 문필봉(735.6m), 삼불봉(777.1m), 연천봉(742.9m)이 주능선에 줄지어 솟아 있다. 계룡산 산자락 곳곳에 문화 유적이 산재해 있는데, 동북쪽에는 동학사가,서북쪽에는 갑사가,서남쪽에는 신원사 사찰이 자리잡고 있다. 특히 갑사에는 보물 제257호인 부도(浮屠)와 보물 제256호인 철당간 및 지주.보물 제478호인 동종(銅鐘)등의 문화재가 있으며, 〈월인석보〉를 찍어낸 목판도 소장되어 있다. 〈월인석보〉는 세종29년(1447년)에 간행된 〈석보상절〉과 세종 31년에 간행된 〈월인천강지곡〉을 합편하여, 세조가 1459년에 간행한 것이다. 상봉을 중심으로 동쪽에 동학사, 서쪽에 갑사, 남쪽에 신원사가 자리하여 현재까지도 보존되고 북쪽의 구룡사는 절터만 남아 있다. 계룡사에는 노루, 담비, 청설모, 황매화 등 희귀 동.식물 1227종이 서식하고 있으며, 계룡 8경으로 꼽히는 천황봉(일출), 삼불봉(설화), 연천봉(낙조), 관음봉(한운), 동학계곡(신록), 은선폭포(운무), 갑사계곡(단풍), 남매탑(명월) 등은 울창한 숲과 기암절벽을 더불어 장관을 이루고 있다.',
    transport: '기점은 공주와 대전이다. 교통입지로 성장한 대전은 설명할 필요가 없을 것이고 공주로는 동서울터미널에서 30분 간격, 남부터미널에서 52회나 다닌다. 이 외에 인천, 대전, 수원, 성남, 청주, 원주와 충남 각지에서 직행버스를 탈 수 있다. 대전→갑사, 동학사 : 수시로 운행 , 공주 갑사, 신원사: 수시로 운행'
  };

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  zoom: number = 8;
  title: string = 'My first AGM project';
  lat: number = 36.145029;
  lng: number = 127.857517;

  markerClick() {
    console.log('marker check');
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
    console.log(index);
    console.log(label);
    this.router.navigate(['main', index]);
  }

  markers: marker[] = [
    {
      lat: 35.808458,
      lng: 128.112730,
      label : '가야산국립공원',
      draggable: true
    },
    {
      lat: 36.357374,
      lng: 127.209145,
      label : '계룡산국립공원',
      draggable: false
    },
    {
      lat: 35.487610,
      lng: 126.869100,
      label : '내장산국립공원',
      draggable: true
    },
    {
      lat: 35.876494,
      lng: 127.756719,
      label : '덕유산국립공원',
      draggable: true
    },
    {
      lat: 35.128229,
      lng: 127.004426,
      label : '무등산국립공원',
      draggable: true
    },
    {
      lat: 35.645374,
      lng: 126.573265,
      label : '변산반도국립공원',
      draggable: true
    },
    {
      lat: 37.676810,
      lng: 126.992706,
      label : '북한산국립공원',
      draggable: true
    },
    {
      lat: 38.144646,
      lng: 128.417001,
      label : '설악산국립공원',
      draggable: true
    },
    {
      lat: 36.969689,
      lng: 128.510094,
      label : '소백산국립공원',
      draggable: true
    },
    {
      lat: 36.545029,
      lng: 127.857517,
      label : '속리산국립공원',
      draggable: true
    },
    {
      lat: 37.781452,
      lng: 128.5963284,
      draggable: true,
      label : '오대산국립공원'
    },
    {
      lat:36.849365,
      lng: 128.149563,
      draggable: true,
      label : '월악산국립공원'
    },
    {
      lat: 34.759923,
      lng: 126.686092,
      draggable: true,
      label : '월출산국립공원'
    },
    {
      lat: 36.412806,
      lng: 129.189237,
      draggable: true,
      label : '주왕산국립공원'
    },
    {
      lat: 35.313673,
      lng: 127.624721,
      draggable: true,
      label : '지리산국립공원'
    },
    {
      lat: 37.347371,
      lng: 128.069207,
      draggable: true,
      label : '치악산국립공원'
    },
    {
      lat: 37.117325,
      lng: 128.933039,
      draggable: true,
      label : '태백산국립공원'
    },
    {
      lat: 33.381207,
      lng: 126.542284,
      draggable: true,
      label : '한라산국립공원'
    }
  ]

}
interface marker {
  lat: number;
  lng: number;
  draggable: boolean;
  label: string;
}

interface ploy {

}
