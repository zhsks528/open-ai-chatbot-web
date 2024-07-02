# `envs` 디렉토리

이 디렉토리는 CI/CD 시점에 배포될 환경에 따라 서비스 고유의 환경 변수를 관리하는 곳입니다.

## `release-dev`

만약 `dev` 환경 배포의 경우라면 `.env` + `./env/.env.development` 이 병합되고 Github
Action CI/CD 과정에서 `dev` 환경의 트리플 공통 환경 변수가 최종적으로 병합되어
배포가 이뤄집니다.

- 참조: https://github.com/titicacadev/gha-tools#inject-global-env
