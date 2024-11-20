# 협업 가이드

## Issue 발행

- 작업 전 내가 어떤 작업을 할 것인지에 대해 팀원들에게 공유합니다.
- e.g.

  ```markdown
  ## 닭가슴살 성분 비교 사이드바 구현

  Description - 1~5개의 닭가슴살을 선택하여 편리하게 비교할 수 있는 사이드바를 구현한다.

  Task - [ ] 사이드바 마크업 - [ ] 성분표 checked 데이터 연동 - [ ] ...
  ```

## Commit

- 작업 내용을 적절한 단위로 묶어 commit 합니다.
- Commit Message는 컨벤션을 따릅니다.

### Convention

- Type
  ```markdown
  - feat: 새로운 기능 개발
  - fix: 버그 수정
  - refactor: 코드 개선
  - rename: 단순 파일명, 변수명 수정
  - docs: 문서 수정
  - chore: 개발 환경 설정, 기타 작업
  ```
  - e.g. `feat: 성분표 정렬 드롭다운 추가`

## Pull Requests

- Origin repository를 fork하여 작업을 진행합니다.
- main branch에서 branch를 생성하여 작업을 진행합니다.
- Issue를 가지고 개발한 branch를 본인의 repository에 push합니다.
- Origin repository에서 Pull Request를 생성합니다.
- 멘토와 동료 한 명의 리뷰를 받고 merge합니다.

### Convention

- Branch
  ```
  {Type}/{구현한 기능}
  ```
  - e.g. `feat/sortingDropdown`
- Pull Request Title
  ```
  [Feat] 성분표 정렬 드롭다운 구현 (#이슈번호)
  ```
