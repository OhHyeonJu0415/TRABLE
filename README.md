# [TRAVLE](https://ohhyeonju0415.github.io/TRAVLE/, "demo link") : 튀르키예 여행지 구경하기
---


 
 
 



## :triangular_flag_on_post: 프로젝트 설명
* 튀르키예의 대표적인 관광지인 Ankara, Antalya, Cappadoica, Pamukkale에 대한 간략한 소개글과 사진을 통해 여행지를 구경할 수 있습니다.
* 각 도시별로 카테고리가 제공되며 해당 도시 카테고리에서에서 사진 모음집을 볼 수 있습니다.
* 반응형 웹 사이트로 모바일, 태블릿, 데스크탑의 다양한 환경에서 사용자 디바이스에 맞는 화면을 제공합니다.
* 프레임워크, 라이브러리 없이 
__순수 CSS__
와 
__순수 JS__
만을 이용해 개발하였습니다.
* __SPA 구현 / 반응형 웹 사이트__
에 초점을 두고 개발을 진행하였습니다.


> 2023.03 ~ 2023.04
---


 

## :books: 개발 언어
* JavaScript
---

## 실행 화면

||모바일|태블릿|데스크탑|
|---|---|---|---|
|헤더|테스트1|테스트2|테스트3|
|메인화면|테스트1|테스트2|테스트3|
|도시화면|테스트1|테스트2|테스트3|





---
## 아키텍쳐
### 디렉토리 구조
```bash
├── images : 각 도시별 사진 모음집 폴더
│   ├── ankara
│   ├── antalya
│   ├── cappadocia
│   └── pamukkale
├── src
│   ├── component : 재사용 되는 컴포넌트 폴더
│   │   ├── getImage.js : 페이지 내 이미지 렌더링 컴포넌트
│   │   ├── setCheckbox.js : 헤더 내 드롭다운 메뉴 숨기기
│   │   └── setEvent.js : a 태그의 기본 클릭 이벤트 대신 SPA url 설정 
│   ├── info : 메인 페이지에서 렌더링 될 텍스트 모음 폴더
│   │   └── main.js
│   ├── page : 각 도시별 렌더링 될 페이지 폴더
│   │   ├── Ankara.js
│   │   ├── Antalya.js
│   │   ├── Cappadocia.js
│   │   ├── Home.js
│   │   ├── NotFound.js
│   │   └── Pamukkale.js 
│   ├── router : SPA 구현을 위한 폴더
│   │   ├── NotFound.js : 커스텀 이벤트 작성 및 라우터 이름 설정
│   │   └── Pamukkale.js : 커스텀 이벤트 등록 및 url 핸들링
│   └── App.js
├── index.html
├── index.js
└── styles.css
``` 






