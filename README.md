# [TRAVLE](https://ohhyeonju0415.github.io/TRAVLE/, "demo link") : 튀르키예 여행지 구경하기


:link: TRAVLE : https://ohhyeonju0415.github.io/TRAVLE/


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


 

## :books: 기술 스택
### Environment
<img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Development
 <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
 
 
---

## :tv: 실행 화면
다른 페이지 클릭 시 URL은 변경되지만 새로 고침 없이 새로운 페이지를 렌더링 합니다.


||모바일|태블릿|데스크탑|
|---|:---:|:---:|:---:|
|__헤더__|<img width="100%" src="https://user-images.githubusercontent.com/71424881/230072245-f376fcce-8d4d-4478-9b93-ab134c40aa95.PNG"/>|<img width="100%" src="https://user-images.githubusercontent.com/71424881/230073579-a65a012c-4609-4b92-811d-ebfecf77afd6.PNG"/>|<img width="100%" src="https://user-images.githubusercontent.com/71424881/230075551-b4ca000c-aeb9-457c-a26b-13aec7a823e5.PNG"/>|
||드롭다운 메뉴|드롭다운 메뉴|일렬로 정렬하여 나타냄|
|__메인화면__|<img width="100%" src="https://user-images.githubusercontent.com/71424881/230074470-deafa248-10cf-4279-84c8-01f83c69efb1.PNG"/>|<img width="100%" src="https://user-images.githubusercontent.com/71424881/230074474-935cf100-3f94-4bb0-ba6a-7fdd4997b651.PNG"/>|<img width="100%" src="https://user-images.githubusercontent.com/71424881/230075572-834657c1-9960-4930-b81b-9c5af9ede508.PNG"/>|
||소개글과 사진을 겹치면서 소개글 일부만 노출|소개글과 사진을 겹침|소개글과 사진을 양옆으로 배치|
|__도시화면__|<img width="100%" src="https://user-images.githubusercontent.com/71424881/230076675-d58ca724-de8c-474b-a672-eda435ae8811.PNG"/>|<img width="100%" src="https://user-images.githubusercontent.com/71424881/230076683-16a8c74e-ce30-4258-b3ad-89f652af9cc7.PNG"/>|<img width="100%" src="https://user-images.githubusercontent.com/71424881/230083861-24742cdb-dff4-4422-8e14-cb0eb0c5ba86.PNG"/>|
||_column 1_ 로 정렬|_column 2_ 로 정렬|_column 3_ 으로 정렬|





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

---


__:link: [TRAVLE](https://ohhyeonju0415.github.io/TRAVLE/, "demo link") 구경하기__






