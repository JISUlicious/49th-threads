# 49th-wereads

## wereads 프로젝트 Back-end 소개

- Meta의 텍스트 중심 SNS 서비스 [쓰레드](https://www.threads.net/) 백엔드 클론 프로젝트
  
### 개발 인원 및 기간

- 개발기간 : 2023/9/11 ~ 2023/9/15
- 개발 인원 : 프론트엔드 2명, 백엔드 3명
- Backend: (original repository) https://github.com/wecode-bootcamp-korea/49-1st-Team4-backend
- Frontend: https://github.com/wecode-bootcamp-korea/49-1st-Team4-frontend
<br>

## 적용 기술 및 구현 기능

### 적용 기술
> - Frontend : React.js, sass
> - Backend : Node.js, express.js, typeORM, bcrypt, JWT, MySQL
> - Common : RESTful API


### 구현 기능

##### 회원가입
- input 유효성 검사
- bcrypt 비밀번호 암호화

##### 로그인
- bcrypt 비밀번호 검증
- JWT 토큰 발행

##### 게시글
- 게시글 작성 / 수정 / 삭제 API
- 좋아요 등록 / 삭제 API
- 댓글 등록 API

##### 공통
- JWT token 검증 middleware


<br>


## Reference

- 이 프로젝트는 [쓰레드](https://www.threads.net/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
