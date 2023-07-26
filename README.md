<br>
<p align="center">
<img width="431" alt="Screen Shot 2023-07-25 at 11 20 10 AM" src="https://github.com/moonkorea00/haduri-zzal-bang/assets/78708082/9bedd0a1-2e52-406b-bd96-45d54bf0e2dc">
<p align="center"><b>틱톡보다 20년 앞서갔던 한국 인싸문화</b></p>

<br>
<br>

> 하두리 감성의 화질과 필터로 사진을 편집하고 저장할 수 있는 서비스

> 배포 주소 : https://www.haduri-zzal.com/

> 프로젝트 관련 자세한 내용 [Wiki에서 보기](https://github.com/moonkorea00/haduri-zzal-bang/wiki) 

</br>

## 목차

- [실행 방법](https://github.com/moonkorea00/haduri-zzal-bang#실행-방법)
- [기술 스택](https://github.com/moonkorea00/haduri-zzal-bang#기술-스택)
- [Demo](https://github.com/moonkorea00/haduri-zzal-bang#demo)
- [서비스 동작 흐름](https://github.com/moonkorea00/haduri-zzal-bang#서비스-동작-흐름)

<br>

## 실행 방법

- [ ] 설치
```sh
git clone https://github.com/moonkorea00/haduri-zzal-bang.git

npm install
```
- [ ] 실행
```sh
# development mode
npm run dev

# production mode
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

## 서비스 동작 흐름

1. 이미지 업로드

   - [ ] 사용자가 이미지 파일을 직접 선택 또는 드래그해서 업로드
   
   <img width="600" alt="하두리" src="https://user-images.githubusercontent.com/78708082/233539324-d7db5039-5676-4905-a511-6295ced9e88a.png">

</br>

2. 편집 옵션 선택

   - [ ] 화질, 필터, 하두리 워터마크 사용 유무 선택

|       |       |
| :-------------------------: | :-------------------------: |
| ![demo](https://user-images.githubusercontent.com/78708082/233538945-e9b80a71-493f-4738-a39a-57d48060bfee.png) |![demo2](https://user-images.githubusercontent.com/78708082/233538949-7648228f-83bd-4d1a-8b80-0f8cbce1e778.png) |

</br>

3. 이미지 다운로드

   - [ ] 적용된 옵션들로 생성된 jpeg파일 저장

<br>

4. 카카오톡 공유

   - [ ] 친구에게 카카오톡으로 서비스 공유하기

|       |       |
| :-------------------------: | :-------------------------: |
| <img width="1091" alt="Screen Shot 2023-07-26 at 4 18 39 AM" src="https://github.com/moonkorea00/haduri-zzal-bang/assets/78708082/99947d4e-934d-4e72-9bd5-a9f7dbed29a9"> | ![share-with-kakao (1)](https://github.com/moonkorea00/haduri-zzal-bang/assets/78708082/dcd56e5c-8d28-4459-b617-0c39cae03af6) |

</br>
