/** @jsxImportSource @revideo/2d */
import { makeProject } from '@revideo/core';
import { Txt, Rect, Node, Circle, makeScene2D } from '@revideo/2d';
import { createRef, all, chain, waitFor } from '@revideo/core';

// Color palette
const COLORS = {
  background: '#0a0a0f',
  emerald: '#10B981',
  emeraldDark: '#059669',
  white: '#ffffff',
  gray: '#9ca3af',
  grayDark: '#374151',
};

// Main scene
const mainScene = makeScene2D('main', function* (view) {
  const bgRef = createRef<Rect>();
  view.add(<Rect ref={bgRef} width={'100%'} height={'100%'} fill={COLORS.background} />);

  // HOOK (0-3s)
  const hookTitleRef = createRef<Txt>();
  const logoRef = createRef<Node>();
  
  yield view.add(
    <Node ref={logoRef} y={-200}>
      <Circle size={120} fill={COLORS.emerald} opacity={0.2} />
      <Circle size={80} fill={COLORS.emerald} opacity={0.4} />
      <Txt fontSize={72} fontWeight={900} fill={COLORS.white} fontFamily="Arial" y={-15}>M</Txt>
    </Node>
  );
  
  yield view.add(
    <Txt ref={hookTitleRef} fontSize={88} fontWeight={700} fill={COLORS.white} fontFamily="Arial" y={150} opacity={0}>
      Tu Agency de AI
    </Txt>
  );
  
  yield* chain(logoRef().scale(0, 0.5), all(logoRef().scale(1.1, 0.3), hookTitleRef().opacity(1, 0.5)), logoRef().scale(1, 0.2));
  yield* waitFor(2);
  yield* all(logoRef().opacity(0, 0.5), hookTitleRef().opacity(0, 0.5));
  
  // PROBLEM (3-8s)
  const problemTitleRef = createRef<Txt>();
  const problemSubRef = createRef<Txt>();
  const hubspotIconRef = createRef<Rect>();
  
  yield view.add(<Txt ref={problemTitleRef} fontSize={52} fontWeight={600} fill={COLORS.gray} fontFamily="Arial" y={-300} opacity={0}>El problema con HubSpot</Txt>);
  yield view.add(<Rect ref={hubspotIconRef} width={200} height={80} fill={COLORS.grayDark} opacity={0} radius={12} />);
  yield view.add(<Txt ref={problemSubRef} fontSize={42} fontWeight={500} fill={COLORS.white} fontFamily="Arial" y={200} opacity={0} lineHeight={70} textAlign="center">{'⏱ 2 semanas setup\n👨‍💻 5+ devs necesarios\n💰 $10,000+ mensual'}</Txt>);
  
  yield* all(problemTitleRef().opacity(1, 0.5), hubspotIconRef().opacity(1, 0.5), problemSubRef().opacity(1, 0.8));
  yield* waitFor(3);
  yield* all(problemTitleRef().opacity(0, 0.4), hubspotIconRef().opacity(0, 0.4), problemSubRef().opacity(0, 0.4));
  
  // SOLUTION (8-15s)
  const solutionTitleRef = createRef<Txt>();
  const solutionMainRef = createRef<Txt>();
  const counterRef = createRef<Txt>();
  const checkRef = createRef<Txt>();
  
  yield view.add(<Txt ref={solutionTitleRef} fontSize={64} fontWeight={700} fill={COLORS.emerald} fontFamily="Arial" y={-350} opacity={0}>Mercury Hub</Txt>);
  yield view.add(<Txt ref={solutionMainRef} fontSize={96} fontWeight={900} fill={COLORS.white} fontFamily="Arial" y={0} opacity={0}>5 min + 0 devs</Txt>);
  yield view.add(<Txt ref={counterRef} fontSize={140} fontWeight={900} fill={COLORS.emerald} fontFamily="Arial" y={350} opacity={0}>91%</Txt>);
  yield view.add(<Txt ref={checkRef} fontSize={36} fontWeight={500} fill={COLORS.gray} fontFamily="Arial" y={480} opacity={0}>más barato que HubSpot</Txt>);
  
  yield* all(solutionTitleRef().opacity(1, 0.4), solutionMainRef().opacity(1, 0.5), counterRef().opacity(1, 0.6), checkRef().opacity(1, 0.5));
  yield* counterRef().scale(1.2, 0.3);
  yield* counterRef().scale(1, 0.2);
  yield* waitFor(2);
  yield* all(solutionTitleRef().opacity(0, 0.4), solutionMainRef().opacity(0, 0.4), counterRef().opacity(0, 0.4), checkRef().opacity(0, 0.4));
  
  // FEATURES (15-22s)
  const featuresTitleRef = createRef<Txt>();
  const feature1Ref = createRef<Node>();
  const feature2Ref = createRef<Node>();
  const feature3Ref = createRef<Node>();
  const feature4Ref = createRef<Node>();
  
  const features = [
    { icon: '🎨', title: 'Visual Builder', desc: 'Drag & drop sin código' },
    { icon: '📚', title: 'Knowledge Base', desc: 'Entrena tus agentes' },
    { icon: '🏷️', title: 'White-label', desc: 'Tu marca, tus clientes' },
    { icon: '⚡', title: 'Billing Automatizado', desc: 'Facturación integrada' },
  ];
  
  yield view.add(<Txt ref={featuresTitleRef} fontSize={48} fontWeight={600} fill={COLORS.white} fontFamily="Arial" y={-600} opacity={0}>Todo lo que necesitas</Txt>);
  
  const featureRefs = [feature1Ref, feature2Ref, feature3Ref, feature4Ref];
  for (let i = 0; i < 4; i++) {
    view.add(
      <Node ref={featureRefs[i]} opacity={0} x={i % 2 === 0 ? -200 : 200}>
        <Rect width={380} height={140} fill="#111118" radius={16} stroke={COLORS.emerald} lineWidth={1} opacity={0.8} />
        <Txt fontSize={48} x={-140} y={-30}>{features[i].icon}</Txt>
        <Txt fontSize={36} fontWeight={700} fill={COLORS.white} fontFamily="Arial" x={-60} y={-35}>{features[i].title}</Txt>
        <Txt fontSize={24} fill={COLORS.gray} fontFamily="Arial" x={-60} y={15}>{features[i].desc}</Txt>
      </Node>
    );
  }
  
  yield* all(featuresTitleRef().opacity(1, 0.3), feature1Ref().opacity(1, 0.4), feature2Ref().opacity(1, 0.5), feature3Ref().opacity(1, 0.6), feature4Ref().opacity(1, 0.7));
  yield* waitFor(3);
  yield* all(featuresTitleRef().opacity(0, 0.3), feature1Ref().opacity(0, 0.3), feature2Ref().opacity(0, 0.3), feature3Ref().opacity(0, 0.3), feature4Ref().opacity(0, 0.3));
  
  // PRICING (22-27s)
  const pricingTitleRef = createRef<Txt>();
  const starterRef = createRef<Node>();
  const fleetRef = createRef<Node>();
  const enterpriseRef = createRef<Node>();
  
  yield view.add(<Txt ref={pricingTitleRef} fontSize={52} fontWeight={700} fill={COLORS.white} fontFamily="Arial" y={-550} opacity={0}>Precios simples</Txt>);
  
  const pricingPlans = [
    { ref: starterRef, name: 'Starter', price: '$79', period: '/mes', features: ['3 agentes', '1,000 msgs', 'White-label básico'], highlight: false },
    { ref: fleetRef, name: 'Fleet', price: '$299', period: '/mes', features: ['10 agentes', '25,000 msgs', 'White-label completo', 'Billing integrado'], highlight: true },
    { ref: enterpriseRef, name: 'Enterprise', price: 'Custom', period: '', features: ['Agentes ilimitados', 'Todo incluido', 'Soporte 24/7'], highlight: false },
  ];
  
  for (let i = 0; i < 3; i++) {
    const plan = pricingPlans[i];
    const xPos = -380 + i * 320;
    view.add(
      <Node ref={plan.ref} opacity={0} x={xPos}>
        <Rect width={280} height={380} fill={plan.highlight ? COLORS.emerald : '#111118'} radius={20} stroke={plan.highlight ? COLORS.emerald : COLORS.grayDark} lineWidth={plan.highlight ? 3 : 1} />
        <Txt fontSize={32} fontWeight={700} fill={plan.highlight ? COLORS.background : COLORS.white} fontFamily="Arial" y={-140}>{plan.name}</Txt>
        <Txt fontSize={64} fontWeight={900} fill={plan.highlight ? COLORS.background : COLORS.emerald} fontFamily="Arial" y={-50}>{plan.price}</Txt>
        <Txt fontSize={24} fill={plan.highlight ? COLORS.background : COLORS.gray} fontFamily="Arial" y={10}>{plan.period}</Txt>
        {plan.features.map((feat, fi) => (<Txt key={fi} fontSize={20} fill={plan.highlight ? COLORS.background : COLORS.gray} fontFamily="Arial" y={80 + fi * 45}>{'✓ ' + feat}</Txt>))}
        {plan.highlight && <Rect width={200} height={50} fill={COLORS.background} radius={25} y={300} />}
      </Node>
    );
  }
  
  yield* all(pricingTitleRef().opacity(1, 0.3), starterRef().opacity(1, 0.4), fleetRef().opacity(1, 0.5), enterpriseRef().opacity(1, 0.6));
  yield* waitFor(3);
  yield* all(pricingTitleRef().opacity(0, 0.3), starterRef().opacity(0, 0.3), fleetRef().opacity(0, 0.3), enterpriseRef().opacity(0, 0.3));
  
  // CTA (27-30s)
  const ctaTitleRef = createRef<Txt>();
  const ctaButtonRef = createRef<Node>();
  const finalLogoRef = createRef<Node>();
  
  yield view.add(<Txt ref={ctaTitleRef} fontSize={72} fontWeight={800} fill={COLORS.white} fontFamily="Arial" y={-100} opacity={0}>Start Free Today</Txt>);
  yield view.add(
    <Node ref={ctaButtonRef} opacity={0} y={100}>
      <Rect width={400} height={100} fill={COLORS.emerald} radius={50} />
      <Txt fontSize={36} fontWeight={700} fill={COLORS.background} fontFamily="Arial">Comenzar gratis →</Txt>
    </Node>
  );
  yield view.add(
    <Node ref={finalLogoRef} y={350} opacity={0}>
      <Circle size={60} fill={COLORS.emerald} opacity={0.3} />
      <Circle size={40} fill={COLORS.emerald} opacity={0.5} />
      <Txt fontSize={36} fontWeight={900} fill={COLORS.white} fontFamily="Arial" y={-8}>M</Txt>
    </Node>
  );
  
  yield* all(ctaTitleRef().opacity(1, 0.4), ctaButtonRef().opacity(1, 0.5), finalLogoRef().opacity(1, 0.5));
  yield* chain(ctaButtonRef().scale(1, 0.3), ctaButtonRef().scale(1.05, 0.3), ctaButtonRef().scale(1, 0.3));
  yield* waitFor(1);
});

// Export project
export default makeProject({
  scenes: [mainScene],
  settings: { shared: { size: { x: 1080, y: 1920 } } },
});
