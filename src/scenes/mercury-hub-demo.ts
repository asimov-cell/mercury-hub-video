/**
 * Mercury Hub - Revideo Demo
 * 
 * CMO Concept: "The 5-Minute Agency"
 * 30-second SaaS product launch video
 * 
 * HOOK: "Tu agency de AI en 5 minutos"
 * PROOF: 91% más barato que HubSpot
 * CTA: "Start free today"
 */

import {makeScene2D} from '@revideo/2d';
import {
  all,
  chain,
  createRef,
  useScene,
  waitFor,
  Linear,
  Ease,
} from '@revideo/core';
import {Circle, Img, Line, Rect, Txt} from '@revideo/2d';

// Color palette - Mercury Hub branding
const colors = {
  primary: '#10B981',      // Emerald green
  secondary: '#6366F1',   // Indigo
  dark: '#0F172A',        // Slate 900
  light: '#F8FAFC',       // Slate 50
  accent: '#F59E0B',       // Amber
  muted: '#64748B',        // Slate 500
};

// Scene 1: Hook (0-3s)
function* createHookScene(view: any, refs: any) {
  // Timer/clock animation
  yield* all(
    refs.timerRing().scale(1, 0.5),
    refs.timerRing().opacity(1, 0.3),
  );
  
  // Main hook text
  yield* chain(
    refs.hookText().scale(0, 1.2, 0.4, Ease.OutBack),
    refs.hookText().scale(1, 1, 0.2),
  );
  
  yield* waitFor(0.5);
  
  // Mercury Hub logo text
  yield* all(
    refs.logoText().opacity(0, 1, 0.3),
    refs.logoText().scale(0.8, 1, 0.3),
  );
}

// Scene 2: Problem (3-8s)
function* createProblemScene(view: any, refs: any) {
  // HubSpot pain points
  yield* chain(
    refs.hubspotBox().position([0, -50], 0.5),
    refs.hubspotBox().opacity(1, 0.3),
  );
  
  yield* waitFor(0.3);
  
  // Problem text
  yield* chain(
    refs.problemText().opacity(0, 1, 0.4),
    refs.problemText().scale(0.9, 1, 0.3),
  );
  
  yield* waitFor(0.5);
  
  // Time/cost indicators
  yield* all(
    refs.weeksText().opacity(1, 0.3),
    refs.weeksText().scale(1, 1, 0.2),
  );
  
  yield* waitFor(1.5);
  
  // Transition slam
  yield* all(
    refs.slamLine().width(0, 1920, 0.3),
    refs.hubspotBox().opacity(1, 0, 0.2),
    refs.problemText().opacity(1, 0, 0.2),
    refs.weeksText().opacity(1, 0, 0.2),
  );
}

// Scene 3: Solution (8-15s)
function* createSolutionScene(view: any, refs: any) {
  // Mercury Hub box appears
  yield* chain(
    refs.mercuryBox().scale(0, 1, 0.5, Ease.OutBack),
    refs.mercuryBox().opacity(1, 0.3),
  );
  
  yield* waitFor(0.3);
  
  // Solution text
  yield* chain(
    refs.solutionText().opacity(0, 1, 0.4),
    refs.solutionText().scale(0.9, 1, 0.3),
  );
  
  yield* waitFor(0.5);
  
  // "5 min" counter animation
  yield* chain(
    refs.counterText().scale(1.5, 1, 0.3, Ease.OutBack),
    refs.counterText().opacity(1, 0.3),
  );
  
  // Numbers counting effect
  for (let i = 1; i <= 5; i++) {
    refs.counterText().text(`${i}`);
    yield* waitFor(0.15);
  }
  
  yield* waitFor(0.5);
  
  // Stats reveal
  yield* chain(
    refs.statsBox().opacity(0, 1, 0.4),
    refs.statsBox().scale(0.9, 1, 0.3),
  );
  
  yield* waitFor(2);
}

// Scene 4: Features (15-22s)
function* createFeaturesScene(view: any, refs: any) {
  // Features container
  yield* chain(
    refs.featuresContainer().opacity(1, 0.3),
    refs.featuresContainer().scale(0.95, 1, 0.4),
  );
  
  // Each feature animates in sequence
  const features = [
    refs.feature1(),
    refs.feature2(),
    refs.feature3(),
    refs.feature4(),
  ];
  
  for (const feature of features) {
    yield* chain(
      feature().opacity(0, 1, 0.2),
      feature().position([feature().position()[0], feature().position()[1] - 10], 0.2),
    );
    yield* waitFor(0.3);
  }
  
  yield* waitFor(2);
}

// Scene 5: Pricing (22-27s)
function* createPricingScene(view: any, refs: any) {
  // Pricing cards fly in
  yield* chain(
    refs.pricingContainer().opacity(1, 0.3),
    refs.pricingContainer().scale(0.9, 1, 0.5, Ease.OutBack),
  );
  
  // Starter card
  yield* refs.starterCard().position([0, 0], 0.4);
  yield* waitFor(0.2);
  
  // Fleet card (featured)
  yield* refs.fleetCard().scale(1.1, 1.1, 0.3);
  yield* waitFor(0.2);
  
  // Enterprise card
  yield* refs.enterpriseCard().position([0, 0], 0.4);
  
  yield* waitFor(2);
}

// Scene 6: CTA (27-30s)
function* createCTAScene(view: any, refs: any) {
  // Final CTA
  yield* chain(
    refs.ctaText().opacity(0, 1, 0.4),
    refs.ctaText().scale(0.9, 1, 0.4, Ease.OutBack),
  );
  
  yield* waitFor(0.5);
  
  // CTA button pulse
  yield* chain(
    refs.ctaButton().scale(0, 1, 0.4, Ease.OutBack),
    refs.ctaButton().opacity(1, 0.3),
  );
  
  // Button pulse animation
  for (let i = 0; i < 3; i++) {
    yield* chain(
      refs.ctaButton().scale(1.05, 0.2),
      refs.ctaButton().scale(1, 0.2),
    );
  }
  
  yield* waitFor(1);
  
  // Final logo
  yield* chain(
    refs.finalLogo().opacity(0, 1, 0.5),
    refs.finalLogo().scale(0.8, 1, 0.3),
  );
}

export default makeScene2D('mercury-hub-demo', function* (view) {
  // Create refs
  const refs = {
    // Hook scene
    timerRing: createRef<Circle>(),
    hookText: createRef<Txt>(),
    logoText: createRef<Txt>(),
    
    // Problem scene
    hubspotBox: createRef<Rect>(),
    problemText: createRef<Txt>(),
    weeksText: createRef<Txt>(),
    slamLine: createRef<Line>(),
    
    // Solution scene
    mercuryBox: createRef<Rect>(),
    solutionText: createRef<Txt>(),
    counterText: createRef<Txt>(),
    statsBox: createRef<Rect>(),
    
    // Features scene
    featuresContainer: createRef<Rect>(),
    feature1: createRef<Txt>(),
    feature2: createRef<Txt>(),
    feature3: createRef<Txt>(),
    feature4: createRef<Txt>(),
    
    // Pricing scene
    pricingContainer: createRef<Rect>(),
    starterCard: createRef<Rect>(),
    fleetCard: createRef<Rect>(),
    enterpriseCard: createRef<Rect>(),
    
    // CTA scene
    ctaText: createRef<Txt>(),
    ctaButton: createRef<Rect>(),
    finalLogo: createRef<Txt>(),
  };

  // ========== SCENE 1: HOOK (0-3s) ==========
  view.add(
    <Rect
      width={'100%'}
      height={'100%'}
      fill={colors.dark}
    />,
  );
  
  // Timer ring
  view.add(
    <Circle
      ref={refs.timerRing}
      width={200}
      height={200}
      stroke={colors.primary}
      strokeWidth={8}
      lineWidth={8}
      fill={'transparent'}
      opacity={0}
    />,
  );
  
  // Hook text
  view.add(
    <Txt
      ref={refs.hookText}
      text={'Tu Agency de AI\nen 5 minutos'}
      fontSize={72}
      fontFamily={'Inter'}
      fontWeight={'Bold'}
      fill={colors.light}
      textAlign={'center'}
      y={50}
      opacity={0}
    />,
  );
  
  // Logo text
  view.add(
    <Txt
      ref={refs.logoText}
      text={'Mercury Hub'}
      fontSize={36}
      fontFamily={'Inter'}
      fontWeight={'Medium'}
      fill={colors.primary}
      y={-80}
      opacity={0}
    />,
  );
  
  yield* waitFor(3);

  // ========== SCENE 2: PROBLEM (3-8s) ==========
  view.add(
    <Rect
      ref={refs.hubspotBox}
      width={600}
      height={200}
      fill={colors.muted}
      opacity={0}
      y={-100}
    />,
  );
  
  view.add(
    <Txt
      ref={refs.problemText}
      text={'Setup de HubSpot'}
      fontSize={48}
      fill={colors.light}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      ref={refs.weeksText}
      text={'= 2 semanas + devs + $10K'}
      fontSize={32}
      fill={colors.accent}
      opacity={0}
      y={80}
    />,
  );
  
  view.add(
    <Line
      ref={refs.slamLine}
      points={[[-960, 0], [-960, 0]]}
      stroke={colors.accent}
      lineWidth={4}
    />,
  );
  
  yield* createProblemScene(view, refs);

  // ========== SCENE 3: SOLUTION (8-15s) ==========
  view.add(
    <Rect
      ref={refs.mercuryBox}
      width={600}
      height={200}
      fill={colors.primary}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      ref={refs.solutionText}
      text={'Mercury Hub'}
      fontSize={48}
      fill={colors.dark}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      ref={refs.counterText}
      text={'0'}
      fontSize={120}
      fontFamily={'Inter'}
      fontWeight={'Bold'}
      fill={colors.light}
      opacity={0}
      y={100}
    />,
  );
  
  view.add(
    <Rect
      ref={refs.statsBox}
      width={800}
      height={100}
      fill={colors.secondary}
      opacity={0}
      y={200}
    />,
  );
  
  // Add stats text
  view.add(
    <Txt
      text={'91% más barato • 0 devs necesarios • Setup en horas'}
      fontSize={28}
      fill={colors.light}
      y={200}
      opacity={0}
    />,
  );
  
  yield* createSolutionScene(view, refs);

  // ========== SCENE 4: FEATURES (15-22s) ==========
  view.add(
    <Rect
      ref={refs.featuresContainer}
      width={'100%'}
      height={'100%'}
      fill={colors.dark}
      opacity={0}
    />,
  );
  
  const featureY = -80;
  const featureSpacing = 80;
  
  const featureLabels = [
    '✓  Visual Builder',
    '✓  Knowledge Base',
    '✓  White-label',
    '✓  Billing Automatizado',
  ];
  
  view.add(
    <Txt
      ref={refs.feature1}
      text={featureLabels[0]}
      fontSize={40}
      fill={colors.light}
      x={-200}
      y={featureY}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      ref={refs.feature2}
      text={featureLabels[1]}
      fontSize={40}
      fill={colors.light}
      x={-200}
      y={featureY + featureSpacing}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      ref={refs.feature3}
      text={featureLabels[2]}
      fontSize={40}
      fill={colors.light}
      x={-200}
      y={featureY + featureSpacing * 2}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      ref={refs.feature4}
      text={featureLabels[3]}
      fontSize={40}
      fill={colors.primary}
      x={-200}
      y={featureY + featureSpacing * 3}
      opacity={0}
    />,
  );
  
  yield* createFeaturesScene(view, refs);

  // ========== SCENE 5: PRICING (22-27s) ==========
  view.add(
    <Rect
      ref={refs.pricingContainer}
      width={'100%'}
      height={'100%'}
      fill={colors.light}
      opacity={0}
    />,
  );
  
  const cardWidth = 200;
  const cardHeight = 280;
  const cardSpacing = 40;
  
  // Starter
  view.add(
    <Rect
      ref={refs.starterCard}
      width={cardWidth}
      height={cardHeight}
      fill={colors.light}
      stroke={colors.muted}
      lineWidth={2}
      radius={12}
      x={-250}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      text={'Starter'}
      fontSize={24}
      fontWeight={'Bold'}
      fill={colors.dark}
      x={-250}
      y={-100}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      text={'$79/mo'}
      fontSize={36}
      fontWeight={'Bold'}
      fill={colors.primary}
      x={-250}
      y={-50}
      opacity={0}
    />,
  );
  
  // Fleet (featured)
  view.add(
    <Rect
      ref={refs.fleetCard}
      width={cardWidth}
      height={cardHeight}
      fill={colors.primary}
      radius={12}
      x={0}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      text={'Fleet'}
      fontSize={24}
      fontWeight={'Bold'}
      fill={colors.light}
      y={-100}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      text={'$299/mo'}
      fontSize={36}
      fontWeight={'Bold'}
      fill={colors.light}
      y={-50}
      opacity={0}
    />,
  );
  
  // Enterprise
  view.add(
    <Rect
      ref={refs.enterpriseCard}
      width={cardWidth}
      height={cardHeight}
      fill={colors.light}
      stroke={colors.muted}
      lineWidth={2}
      radius={12}
      x={250}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      text={'Enterprise'}
      fontSize={24}
      fontWeight={'Bold'}
      fill={colors.dark}
      x={250}
      y={-100}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      text={'Custom'}
      fontSize={36}
      fontWeight={'Bold'}
      fill={colors.secondary}
      x={250}
      y={-50}
      opacity={0}
    />,
  );
  
  yield* createPricingScene(view, refs);

  // ========== SCENE 6: CTA (27-30s) ==========
  view.add(
    <Rect
      width={'100%'}
      height={'100%'}
      fill={colors.dark}
    />,
  );
  
  view.add(
    <Txt
      ref={refs.ctaText}
      text={'Start Free Today'}
      fontSize={64}
      fontWeight={'Bold'}
      fill={colors.light}
      textAlign={'center'}
      y={-50}
      opacity={0}
    />,
  );
  
  view.add(
    <Rect
      ref={refs.ctaButton}
      width={300}
      height={70}
      fill={colors.primary}
      radius={35}
      y={60}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      text={'Get Started →'}
      fontSize={28}
      fontWeight={'Medium'}
      fill={colors.dark}
      y={60}
      opacity={0}
    />,
  );
  
  view.add(
    <Txt
      ref={refs.finalLogo}
      text={'Mercury Hub'}
      fontSize={32}
      fontWeight={'Medium'}
      fill={colors.primary}
      y={180}
      opacity={0}
    />,
  );
  
  yield* createCTAScene(view, refs);
  
  yield* waitFor(1);
});
