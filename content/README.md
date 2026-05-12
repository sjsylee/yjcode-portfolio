# Generated Content

This directory is the local handoff point for private CMS data.

- Real YJ CODE content is managed outside this public repository in Notion.
- `content/generated/` is created by `npm run content:sync`.
- `content/generated/` is git-ignored and must not be committed.
- Pull request CI can use sanitized fallback content.
- Production builds should run with `YJ_CONTENT_STRICT=true` or `VERCEL_ENV=production` so missing or invalid CMS content fails the build.

이 디렉터리는 비공개 CMS 데이터가 로컬 빌드로 전달되는 지점입니다.

- 실제 YJ CODE 콘텐츠는 public repository가 아니라 Notion에서 관리합니다.
- `npm run content:sync`가 `content/generated/`를 생성합니다.
- `content/generated/`는 gitignore 대상이며 커밋하면 안 됩니다.
- Pull request CI는 공개 가능한 fallback 콘텐츠를 사용할 수 있습니다.
- 프로덕션 빌드는 `YJ_CONTENT_STRICT=true` 또는 `VERCEL_ENV=production`으로 실행해 CMS 콘텐츠가 없거나 유효하지 않으면 실패해야 합니다.
