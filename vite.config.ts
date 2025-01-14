import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 경로 설정을 위한 path 모듈
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        svgoConfig: {
          plugins: [
            {
              name: "removeAttrs", // 속성 제거 플러그인
              params: {
                attrs: "(fill|stroke)", // 제거할 속성 지정
              },
            },
          ],
        },
      },
      include: "**/*.svg?react", // 처리할 파일 패턴
      exclude: "", // 제외할 파일 패턴
    }),
  ],
  define: {
    "process.env": process.env, // 환경 변수 로깅용
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @를 src 폴더로 설정
    },
  },
});
