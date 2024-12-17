# myBlog (SNS + Communication)

## 요약

> 개인 일기를 작성하고, 작성된 글을 모든 사람이 볼 수 있도록 공유하며 댓글을 통해 소통할 수 있는 커뮤니케이션 기능을 갖춘 반응형 웹사이트입니다. 사용자는 자신의 일기를 자유롭게 작성하고, 다른 사용자들과 의견을 나누며 상호작용할 수 있습니다.

### 제작 이유

처음에는 개인 블로그 형식으로 글을 작성하고 관리하는 플랫폼을 구상했으나, 점차 내가 쓴 글을 다른 사람들과 공유하고 소통할 수 있는 공간을 만들고 싶다는 생각이 들었습니다. 그래서 단순한 일기 작성에서 나아가, 사용자들이 서로 의견을 나누고 소통할 수 있는 SNS 형식으로 확장하게 되었습니다. 댓글 기능을 추가하여 글을 공유하는 것뿐만 아니라, 다양한 사람들과의 상호작용을 통해 더 풍부한 커뮤니케이션이 가능하도록 설계를 하였습니다.

## 기능 소개

- 비로그인/로그인 사용자 모두 서비스 이용 가능
- 글 작성 및 댓글 달기는 로그인 후 가능
- 게시자만 자신의 글에 달린 댓글 삭제 가능
- 작성된 글은 모든 사용자에게 공개되며, 인기 순으로 상위에 노출
- 백엔드 로직은 Firebase-Database, Firebase-Authentication, Firebase-Stroage를 사용하여 백엔드 환경을 구축

## 기술 스택 (Skill)

**Language**

<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <br />
</div>
<br />

**Client**

<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <br />
  <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
</div>
<br />

**Database**

<div>
  <img src="https://img.shields.io/badge/firebase-339933?style=for-the-badge&logo=firebase.js&logoColor=white">
  <img src="https://img.shields.io/badge/firebase-database-213s12?style=for-the-badge&logo=firebase-database&logoColor=white">
  <img src="https://img.shields.io/badge/firebase-authentication-sad442?style=for-the-badge&logo=firebase-authentication&logoColor=white">
  <img src="https://img.shields.io/badge/firebase-storage-ff22dd?style=for-the-badge&logo=firebase-storage&logoColor=white">
  <br />
</div>
<br />

**UI**

<div>
  <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
  <br />
  <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white">
</div>
<br />

**Etc**

<div>
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/netlify-4A154B?style=for-the-badge&logo=netlify&logoColor=black">
</div>

## 문제해결

**문제.1**

학원 주말반에서 미니 팀프로젝트 진행 시 설계 단계에서 충분한 시간이 주어지지 않고 mvp 기능이 완전이 정해지지 않은채로 설계를 시작해서 시행착오를 많이 겪었습니다.

**해결 방법**

- `핵심 기능 선정` 시간이 부족한 상황에서는 핵심 기능을 우선적으로 정리하고, 나머지 부분은 후속 작업으로 미뤄 일정을 맞췄습니다. 또한, 진행 중 발생한 문제는 팀원들과 빠르게 공유하고 피드백을 받아 해결했습니다.

## 느낀 점

- 설계 단계에서 주제만 선정하고 MVP 기능을 명확히 정의하지 않은 채로 개발을 시작하면서, 각자 진행하는 부분과 API 명세서에 대한 정리가 부족했습니다. 이를 통해 초기 설계와 문서화의 중요성을 깨달았고, 개인의 능력만으로는 부족하다는 점을 실감했습니다. 설계가 미흡한 채로 시작하면 후반부에 일정을 맞추기 어려워지고 많은 시행착오를 겪게 된다는 것을 배웠습니다.

## 어려웠던 점

- 같은 팀으로 배정된 두 팀원은 IT 개발 경험이 적고, 개발이 처음인 분들이라 소통 시 의도한 내용이 일치하지 않는 경우가 많았습니다. 또한, 이번 프로젝트에서 처음으로 팀 리더 역할을 맡게 되어, 기능 배분과 주말에만 개발을 해야 하는 제약 속에서 각자가 최선의 방향을 찾는 것이 큰 어려움이었습니다. 이를 해결하기 위해 디스코드 채널을 새로 만들고 평일에는 디스코드, 주말에는 카톡을 통해 세부 일정을 주고받으며 소통했으며, 진도가 늦은 파트는 제가 지원하면서 동시에 개발을 진행했습니다. 그러나 같은 repository에서 git merge 시 충돌이 많이 발생해 이를 해결하는 데 어려움을 겪었습니다..

## 프로젝트 이미지

| ![메인 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/splash.png)     | ![로그인 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/main.png)      |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ![회원가입 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/filter.png) | ![블로그 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/cochimark.png) |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------          |
| ![글작성 화면](https://github.com/junesung1004/todayEat-TeamProject/blob/develop/public/view/menuitem.png) |
| ---------------------------------------------------------------------------------------------------------- |
