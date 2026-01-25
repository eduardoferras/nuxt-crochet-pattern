---
"web": major
---

- **WHAT changed**: Upgraded `@vee-validate/nuxt` from `4.15.1` to `5.0.0-beta.0` along with `vee-validate` core. This introduces breaking changes: forms built with v4 stopped validating correctly due to API differences.
- **WHY the change was made**: Companion packages such as `@vee-validate/zod` were removed in v5. This simplifies the setup to just `@vee-validate/nuxt` and makes it possible to upgrade peer dependencies more easily.
