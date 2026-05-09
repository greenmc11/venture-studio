import type { NextConfig } from "next";

const extraLanHosts =
  process.env.DEV_ALLOWED_ORIGINS?.split(/[,;\s]+/).map((s) => s.trim()).filter(Boolean) ?? [];

/**
 * 개발 모드에서 브라우저 Origin 이 localhost 가 아니면 Next 가 내부 dev 리소스 요청을 막습니다.
 * - LAN: `DEV_ALLOWED_ORIGINS` 또는 아래 목록
 * - Cloudflare Tunnel(trycloudflare): `*.trycloudflare.com` 필요
 */
const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.45.138", "*.trycloudflare.com", ...extraLanHosts],
};

export default nextConfig;
