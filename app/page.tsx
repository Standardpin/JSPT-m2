export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-brand-gray px-6 py-12 text-center">
        {/* 1. 재활이후 이미지 */}
        <img 
          src="/재활이후.png" 
          alt="재활 이후" 
          className="h-8 w-auto mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-foreground leading-tight mb-6">
          움직임을 어디서<br />
          이어가야 할지 고민되시나요?
        </h1>
        <p className="text-sm text-gray-600 mb-2">MOTIONA JS PT 센터</p>
        <p className="text-xs text-gray-500">•</p>
        <p className="text-sm text-gray-600 mt-2">
          재활 이후의 시간을<br />
          혼자 넘기지 않아도 되는 곳
        </p>
      </section>

      {/* Logo Section */}
      <section className="py-10 flex justify-center">
        {/* 2. 로고 (대문자 JPG 확인) */}
        <img 
          src="/IMG_2568.JPG" 
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

      {/* Same Person Section */}
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

        {/* 3. 프로필 사진 (대문자 PNG, 파일명은 2445 사용) */}
        <div className="relative rounded-lg overflow-hidden mb-4 mt-8">
          <img 
            src="/IMG_2445.PNG" 
            alt="프로필 사진"
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

        {/* 4. 치료 장면 (대문자 PNG, 파일명은 2866 사용) */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-sm">
             <img 
            src="/IMG_2866.PNG" 
            alt="치료 장면"
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-4 max-w-sm mx-auto">
           {/* 단계별 내용 생략 (위와 동일) */}
           <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded">상태</span>
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-medium">급성 재활 이후 회복 단계에 있던 고객사</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer 등 나머지 코드는 그대로 두셔도 됩니다. */}
       <footer className="bg-brand-gray px-6 py-8 text-center mt-12">
        <div className="flex justify-center mb-4">
           {/* 로고 다시 사용 */}
          <img 
            src="/IMG_2568.JPG" 
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
  )
}
