# CSPM-Opensource-Web
**OpenSource CSPM**은 **공개 SW 개발자 대회** 출전을 위해 개발된 **클라우드 자산 관리 솔루션**입니다.  
**누구나 쉽게 사용**할 수 있는 **AWS 자산 스캐너**로, **보안 취약점**을 실시간 탐지하여  
**클라우드 보안 수준**을 높이고 **자산의 안전성**을 강화하는 것을 목표로 합니다.  
본 저장소는 **프론트엔드** 구현 부분입니다.

## 📅 프로젝트 기간
2024.07.25 ~ 2024.08.22 (1개월) 

## ✨ 담당 역할

- **대시보드 UI 구현**
  - 리소스 그룹 선택 창, 위험도 차트, 통계 그래프 개발
  - Chart.js를 활용한 실시간 데이터 시각화

- **프로젝트 관리 페이지**
  - 프로젝트 생성/삭제 UI, 상태 표시 컴포넌트 제작
  - API 연동을 통한 데이터 반영

- **설정 페이지**
  - 사용자 IAM 추가 변경 기능 제작
  - 비밀번호 변경 기능 제작

- **공통 컴포넌트 개발**
  - 버튼, 모달, 로딩 스피너 등 재사용 가능한 컴포넌트 제작

- **로그인 페이지 개발**
  - 회원가입, 로그인, 비밀번호 변경 UI 구현 및 API 연동

- **API 연동**
  - `fetchWrapper` 제작하여 JWT 헤더 자동 포함
  - 토큰 만료 시 재발급 후 API 재실행 로직 구현

- **UI/UX 개선**
  - 불필요한 API 호출 최소화로 성능 최적화
  - 사용자 흐름을 고려한 페이지 전환 및 인터랙션 개선
  
## 🛠 기술 스택 (Frontend)
<div>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> 
   <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> 
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> 
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> 
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> 
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> 
   <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"> 
</div>

## 📸 주요 화면

| SMTP 이메일 | 회원가입 | 데시보드 관리 | 설정 페이지 |
|:---:|:---:|:---:|:---:|
| <img width="400" src="https://github.com/user-attachments/assets/c804ef34-fede-4ec9-ac24-4b4222466854" /> | <img width="250" src="https://github.com/user-attachments/assets/ba4fdda2-59a8-4156-83b0-6ec3d6b39401" /> | <img width="400" src="https://github.com/user-attachments/assets/665f8e13-33d2-4962-83b6-ca07bb6adf37" /> | <img width="400" src="https://github.com/user-attachments/assets/1fabe9b8-6451-4d86-8bad-ba9b7ac21559" /> |



## 🚀 실행 방법
```bash
# 1. 저장소 클론
git clone https://github.com/{username}/CSPM-Opensource-Web.git

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev
```


## 👨‍💻 팀원

- 정승근  
- 박상우  
- 이승주  
- 이루다
