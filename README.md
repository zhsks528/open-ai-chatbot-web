# triple-recommendation-ai-web

[`create-triple-app`](https://github.com/titicacadev/create-triple-app)으로
생성한 프로젝트입니다. 이 내용은 프로젝트에 대한 소개로 대체해주세요.

## Setup

프로젝트를 클론합니다:

```
git clone git@github.com:titicacadev/triple-recommendation-ai-web.git && cd triple-recommendation-ai-web
```

디펜던시를 설치합니다:

```
$ npm install
```

## Development

`dev` 태스크로 개발환경에서 앱을 실행합니다:

```
$ npm run dev
# next dev
```

### Testing

React 컴포넌트 모듈 단위의 테스트를 권장하고 있습니다. 테스트에 관한 자세한
정보는 이 저장소의 `TESTING.md` 문서를 참고해주세요.

### CI

GitHub Actions로 CI Check을 수행합니다. 수행 결과는 PR Commit의 check status나
저장소의 Actions 탭에서 확인할 수 있습니다. 테스트 등의 Step이 추가되면
`.github/workflows/ci.yaml`의 내용을 수정 바랍니다.

### CD

GitHub Actions로 CD를 수행합니다. Slack의 커맨드로 트리거합니다.

```
/release triple-recommendation-ai-web BRANCH-NAME release-dev
```

## Contributing

`master`를 베이스 브랜치로 하는 feature branch에서 기능 개발 후 PR 생성 및
리뷰, 머지를 기본으로 합니다. 보다 자세한 브랜칭 전략은
[Branching Strategy](https://github.com/titicacadev/create-triple-app/blob/master/docs/02-branching-strategy.md)
문서를 참고해주세요.

- `master`에서 새 브랜치를 생성합니다. 브랜치명에 이슈 번호가 포함되어 있다면
  더 좋습니다. `git checkout -b feature/123-my-branch-name`
- 기능을 변경합니다.
- GitHub titicacadev/triple-recommendation-ai-web 저장소에 브랜치를 푸시합니다.
- 해당 브랜치로 새 Pull Request를 생성합니다. Base branch는 `master`입니다.
- 테스트, 리뷰 후 머지합니다.
