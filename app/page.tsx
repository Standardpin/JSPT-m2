export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-10 py-20 text-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/75" />
        {/* Content */}
        <div className="relative z-10">
          <img 
            src="/images/rehab-after.png" 
            alt="재활 이후" 
            className="h-15 w-auto mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-foreground leading-tight mb-6">
            움직임을 어디서<br />
            이어가야 할지 고민되시나요?
          </h1>
          <img 
            src="/images/center-text.png" 
            alt="MOTIONA JS PT 센터" 
            className="h-10 w-auto mx-auto mb-6"
          />
          
          <p className="text-gray-600 text-2xl">
            재활 이후의 시간을<br />
            혼자 넘기지 않아도 되는 곳
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-10 flex justify-center">
        <img 
          src="/images/logo.jpg" 
          alt="MOTIONA JS PT Logo" 
          className="w-48 h-auto"
        />
      </section>

      {/* Concerns Section */}
      <section className="px-6 py-8 text-center">
        <h2 className="text-lg font-bold text-foreground mb-6">
          이런 고민이 있었다면<br />
          혼자 판단하지 않으셔도 됩니다
        </h2>
        
        <div className="space-y-4 text-left max-w-sm mx-auto">
          <div className="flex items-start gap-3">
            <span className="text-brand-red text-lg">•</span>
            <p className="text-sm text-gray-700">
              퇴원 이후 어떤 운동부터 시작해야<br />
              할지 <span className="text-brand-red-accent font-medium">막막했던 분</span>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-brand-red text-lg">•</span>
            <p className="text-sm text-gray-700">
              운동을 하면 통증이나 <span className="text-brand-red-accent font-medium">불안이<br />
              반복되던 분</span>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-brand-red text-lg">•</span>
            <p className="text-sm text-gray-700">
              재활과 일반 운동 사이에서 방향을<br />
              잡기 <span className="text-brand-red-accent font-medium">어려웠던 분</span>
            </p>
          </div>
        </div>
      </section>

      {/* This Space Section */}
      <section className="px-6 py-8">
        <div className="bg-[#e8f4fc] border-2 border-[#4a9fd4] rounded-lg p-6 text-center">
          <h3 className="text-[#4a9fd4] font-bold text-lg mb-2">[ 이 공간은 ]</h3>
          <p className="text-sm text-gray-700">
            그런 분들을 위해 만들어졌습니다.
          </p>
        </div>
      </section>

      {/* Same Person Same Standards Section */}
      <section className="px-6 py-10 text-center">
        <h2 className="text-xl font-bold text-foreground mb-2">
          같은 사람, 같은 기준으로
        </h2>
        <p className="text-brand-yellow text-xl font-bold mb-6">이어갑니다</p>
        
        <p className="text-sm text-gray-600 mb-2">
          병원에서는 <span className="font-medium">물리치료사</span>로서,
        </p>
        <p className="text-sm text-gray-600 mb-4">
          이 공간에서는 <span className="text-brand-yellow font-bold">운동 기반 재활 트레이너</span>로서
        </p>
        <p className="text-xs text-gray-500 mb-8">
          같은 기준을<br />
          제 몸에도 적용해왔습니다.
        </p>

        {/* Therapy Image */}
        <div className="relative rounded-lg overflow-hidden mb-4">
          <img 
            src="/images/therapy.png" 
            alt="재활 치료 세션"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-brand-gray px-6 py-12">
        <h2 className="text-xl font-bold text-center text-foreground mb-2">
          재활 이후, 실제 움직임을
        </h2>
        <p className="text-xl font-bold text-center text-foreground mb-8">
          다시 만나는 과정
        </p>

        <div className="space-y-4 max-w-sm mx-auto">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded">상태</span>
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-medium">급성 재활 이후 회복 단계에 있던 고객사</span>
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-brand-red-accent text-white text-xs font-bold px-3 py-1 rounded">접근</span>
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-medium">일상 동작 중 반복되는 불편감과 움직임에<br />
              대한 지속적인 불안</span>
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-brand-dark-red text-white text-xs font-bold px-3 py-1 rounded">변화</span>
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-medium">기능적 기능 누수에 맞춰 기본적인<br />
              움직임부터 다시 구성</span>
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-foreground text-white text-xs font-bold px-3 py-1 rounded">결과</span>
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-medium">일상 동작에 대한 막연 회복 감소<br />
              움직임에 대한 점진적 안정</span>
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 py-12 text-center bg-white">
        <div className="border-l-4 border-foreground pl-4 text-left max-w-sm mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed">
            기록이 남았고, 그 기록을 기준으로<br />
            움직임을 다시 만들었습니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-12 text-center bg-white">
        <h2 className="text-xl font-bold text-foreground mb-2">
          상담은 결정을
        </h2>
        <p className="text-xl font-bold text-foreground mb-6">
          강요하는 자리가 <span className="text-brand-yellow">아닙니다</span>
        </p>
        
        <p className="text-sm text-gray-600 mb-8 leading-relaxed">
          현재 상태를 함께 정리하고는 과정입니다.<br />
          편하게 이야기 나눠보시고 결정은 천천히 하셔도 괜찮습니다.
        </p>

        {/* KakaoTalk Button */}
        <a 
          href="#" 
          className="inline-flex items-center gap-2 bg-kakao-yellow text-kakao-brown font-bold py-4 px-8 rounded-lg text-base"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.89 5.31 4.71 6.72-.17.61-.66 2.33-.76 2.7-.12.44.16.43.34.31.14-.09 2.18-1.47 3.07-2.07.54.07 1.09.11 1.64.11 5.52 0 10-3.58 10-8 0-4.42-4.48-8-10-8z"/>
          </svg>
          카카오톡 상담하기
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray px-6 py-8 text-center">
        <div className="flex justify-center mb-4">
          <img 
            src="/images/logo.jpg" 
            alt="MOTIONA JS PT Logo" 
            className="w-24 h-auto"
          />
        </div>
        <p className="text-xs text-gray-500">
          월요일마다 노력하세요?<br />
          편하게 카카오톡으로 연락주세요.
        </p>
      </footer>
    </main>
  );
}
