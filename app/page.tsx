import SupabaseStatus from "./supabase-status";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <div className="crowd" aria-hidden="true">
          {Array.from({ length: 48 }, (_, i) => (
            <span key={i} className={i === 9 ? "me" : undefined}>혼잡스</span>
          ))}
        </div>
        <p className="eyebrow">크리에이터 소개</p>
        <h1>혼잡스</h1>
        <p className="tagline">혼자서 잡(Job)을 할 수 있는 사람.</p>
        <div className="meter" aria-label="오늘의 혼잡도: 혼잡">
          <span>오늘의 혼잡도</span>
          <span className="bars"><i /><i /><i /><i /></span>
          <strong>혼잡</strong>
        </div>
      </header>

      <section>
        <h2>소개</h2>
        <p>안녕하세요, 혼잡스입니다.</p>
        <p><span className="slot">어떤 사람인지, 어떤 활동을 하는지 두세 문장으로 적어 주세요.</span></p>
      </section>

      <section>
        <h2>하는 일</h2>
        <ul className="works">
          {[1, 2, 3].map((n) => (
            <li key={n}>
              <h3><span className="slot">콘텐츠 {n}</span></h3>
              <p>어떤 콘텐츠인지 한 문장으로 설명합니다.</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>만나는 곳</h2>
        <ul className="links">
          <li><span className="name">채널</span><span className="addr"><span className="slot">채널 주소</span></span></li>
          <li><span className="name">SNS</span><span className="addr"><span className="slot">계정 주소</span></span></li>
          <li><span className="name">문의</span><span className="addr"><span className="slot">이메일 주소</span></span></li>
        </ul>
      </section>

      <footer>
        © 2026 혼잡스
        <SupabaseStatus />
      </footer>
    </div>
  );
}
