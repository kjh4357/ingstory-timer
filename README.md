# **ingstory-timer**

서버에서 불러온 시간을 기준으로 동작하는 간단한 타이머 앱입니다.

---
<div align="center">
  <img src="https://github.com/user-attachments/assets/47389966-457b-4643-9baa-b0efba0dcf80" alt="Image 1" width="300" />
  <img src="https://github.com/user-attachments/assets/c086dc75-a64c-4308-ab00-21633654051b" alt="Image 2" width="302" />
</div>

### **기술 스택**
- **Frontend**: React, Vite, typescript
- **Package Manager**: PNPM
- **CSS Framework (Optional)**: Tailwind CSS
- **Linting/Formatting**: ESLint
- **API (Optional)**: Axios

---

### **설치 방법**

1. **GitHub 저장소 복제**
   ```bash
   git clone https://github.com/kjh4357/ingstory-timer.git
   cd timer-app
   ```

2. **의존성 설치 (PNPM 사용)**
   ```bash
   pnpm install
   ```

3. **개발 서버 실행**
   ```bash
   pnpm dev
   ```

4. **프로덕션 빌드**
   ```bash
   pnpm build
   ```

5. **빌드된 결과물 로컬 테스트**
   ```bash
   pnpm preview
   ```

---

### **스크립트 명령어**

| 명령어          | 설명                                  |
|------------------|---------------------------------------|
| `pnpm dev`       | 개발 서버 실행 (http://localhost:5173) |
| `pnpm build`     | 프로덕션 빌드 생성                   |
| `pnpm preview`   | 빌드된 결과물을 로컬에서 미리 보기    |
| `pnpm lint`      | ESLint로 코드 정적 분석              |

---


---



### **환경 변수 설정**

`.env` 파일에 필요한 환경 변수를 추가하세요. 

```
VITE_API_URL=https://23qle2bzdnqgtwdegesxodas6e0qzlzr.lambda-url.ap-northeast-2.on.aws/
VITE_APP_KEY=nospoonhere
```


### **데모 링크**
- http://ingstory-timer.s3-website.ap-northeast-2.amazonaws.com/

