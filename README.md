# &#128247;&nbsp;하두리 짤방

하두리 감성의 화질과 필터로 사진을 편집하고 저장할 수 있는 서비스
> 개발 동기 : 여러 커뮤니티 사이트 사용자들이 레트로와 틱톡보다 20년 앞선 `한국 인싸 문화`에 대한 향수가 있어 개발하게 되었습니다.
>
> 프로젝트 기간 : 2023년 4월 7일 ~ (진행중)
> 
> 배포 주소 : https://www.haduri-zzal.com/
>
> 프로젝트 관련 자세한 내용 [Wiki에서 보기](https://github.com/moonkorea00/haduri-zzal-bang/wiki)

</br>

## 실행 방법

- [ ] 모듈 설치
```tsx
npm install
```
- [ ] 개발 모드
```tsx
npm run dev
````
- [ ] 배포 모드
```tsx
npm run deploy
```

</br>

## 기술 스택

<img alt="NextJS" src ="https://img.shields.io/badge/Next.js-000000?&style=flat&logo=Next.js&logoColor=white"/><img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-3178C6?&style=flat&logo=TypeScript&logoColor=white"/>
<img alt="Chakra UI" src ="https://img.shields.io/badge/Chakra UI-06B6D4?&style=flat&logo=ChakraUI&logoColor=white"/>
<img alt="Vercel" src ="https://img.shields.io/badge/Vercel-000000?&style=flat&logo=Vercel&logoColor=white"/>
<img alt="Figma" src ="https://img.shields.io/badge/Figma-FFCA28?&style=flat&logo=Figma&logoColor=white"/>

</br>

## Demo

- [ ] 데스크탑

|   메인    |  하두리 편집  |
| :-------------------------: | :-------------------------: |
| ![main(desktop)](https://user-images.githubusercontent.com/78708082/233359158-1aa99de0-e420-4f2d-bb00-941daf4af3ea.gif) | ![create(desktop)](https://user-images.githubusercontent.com/78708082/233359193-5fcacbdf-d78b-49dc-b5ac-6a8c23d8c889.gif)|

- [ ] 모바일

|   메인    |  하두리 편집  |
| :-------------------------: | :-------------------------: |
| ![main(mobile)](https://user-images.githubusercontent.com/78708082/233362581-36515251-7f4c-492f-b0eb-c6d4995df260.gif) | ![create(mobile)](https://user-images.githubusercontent.com/78708082/233362595-ccaca7d5-a746-49bf-ba41-a61ae306e382.gif)|

</br>

## 프로젝트 개발 구조 및 동작 흐름

### 개발 구조

![haduri-zzal-dev-flow](https://user-images.githubusercontent.com/78708082/233532583-0cf6e791-9800-4edc-8f9d-f327e8ce3866.png)

</br>

### 하두리 편집 동작 흐름

1. 이미지 업로드
  - 사용자가 이미지 파일을 직접 선택 또는 드래그해서 업로드
  > 자세한 로직 [wiki에서 보기](https://github.com/moonkorea00/haduri-zzal-bang/wiki/%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4-%EB%A1%9C%EC%A7%81)
   <img width="600" alt="하두리 짤" src="https://user-images.githubusercontent.com/78708082/233539324-d7db5039-5676-4905-a511-6295ced9e88a.png">

</br>

2. 화질 및 필터 옵션 선택
  - 화질, 필터, 하두리 워터마크 사용 유무 선택
  > 자세한 로직 [wiki에서 보기](https://github.com/moonkorea00/haduri-zzal-bang/wiki/%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4-%EB%A1%9C%EC%A7%81#2-%ED%99%94%EC%A7%88-%EC%95%95%EC%B6%95)

|       |       |
| :-------------------------: | :-------------------------: |
| ![demo](https://user-images.githubusercontent.com/78708082/233538945-e9b80a71-493f-4738-a39a-57d48060bfee.png) |![demo2](https://user-images.githubusercontent.com/78708082/233538949-7648228f-83bd-4d1a-8b80-0f8cbce1e778.png) |

</br>

3. 이미지 다운로드
- 적용된 옵션들로 생성된 jpeg파일 저장

</br>

## 관련 블로그 글
> [canvas api로 이미지 편집하기](https://www.moonkorea.dev/Javascript-canvas-api%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8E%B8%EC%A7%91%ED%95%98%EA%B8%B0)

> [이벤트 지연 처리 전략 (debounce)](https://www.moonkorea.dev/React-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%A7%80%EC%97%B0-%EC%B2%98%EB%A6%AC-%EC%A0%84%EB%9E%B5-(debounce))