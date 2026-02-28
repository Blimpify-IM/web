'use client';

import { useEffect, useState } from 'react';
import { Section, Box } from '@blimpify-im/ui';
import Image from 'next/image';

const MOBILE_BREAKPOINT = 768;

const CDN = 'https://cdn.blimpify-im.com/assets/images';
const WEBSITE_IMAGE_SRC = `${CDN}/green-hero.png`;
const PINK_HERO_SRC = `${CDN}/pink-hero.png`;
const GLASS_HERO_SRC = `${CDN}/glass-hero.png`;
const FLOWER_IMAGE_SRC = `${CDN}/flower.png`;
const PURPLE_HERO_SRC = `${CDN}/purple-hero.png`;
const PERSON_HERO_SRC = `${CDN}/person-hero.png`;
const THINKBIGGER_HERO_SRC = `${CDN}/thinkbigger-hero.png`;
const KAKAO_HERO_SRC = `${CDN}/kakao-hero.png`;
const PINK_BEAN_SRC = `${CDN}/pink-bean.png`;
const KNIFE_HERO_SRC = `${CDN}/knife-hero.png`;
const TECHY_HERO_SRC = `${CDN}/techy-hero.png`;
const BOOM_HERO_SRC = `${CDN}/boom-hero.png`;
const FIRE_HERO_SRC = `${CDN}/fire-hero.png`;
const LIGHT_HERO_SRC = `${CDN}/light-hero.png`;
const WORM_HERO_SRC = `${CDN}/worm-hero1.png`;

/** 5 bilder per rad, inga dubletter mellan raderna. Regel: 6×DUPLICATE_COUNT delbart med 2×5=10 → D=5,10… */
const IMAGES_PER_ROW = 5;
const DUPLICATE_COUNT = 10;

/** Rad 1 (överst): egna 5 – ingen delad med rad 2 eller 3 */
const SHOWCASE_IMAGES_TOP = [FLOWER_IMAGE_SRC, PINK_HERO_SRC, GLASS_HERO_SRC, WEBSITE_IMAGE_SRC, PINK_BEAN_SRC];
/** Mobil: rosa först i övre raden */
const SHOWCASE_IMAGES_TOP_MOBILE = [PINK_HERO_SRC, FLOWER_IMAGE_SRC, GLASS_HERO_SRC, WEBSITE_IMAGE_SRC, PINK_BEAN_SRC];
/** Rad 2 (mitten): egna 5 – ingen delad med rad 1 eller 3 */
const SHOWCASE_IMAGES_BOTTOM = [PURPLE_HERO_SRC, PERSON_HERO_SRC, WORM_HERO_SRC, FIRE_HERO_SRC, THINKBIGGER_HERO_SRC];
/** Mobil: thinkbigger först i mittenraden (bytt plats med första) */
const SHOWCASE_IMAGES_BOTTOM_MOBILE = [THINKBIGGER_HERO_SRC, PERSON_HERO_SRC, WORM_HERO_SRC, FIRE_HERO_SRC, PURPLE_HERO_SRC];
/** Rad 3 (nederst): egna 5 – ingen delad med rad 1 eller 2 */
const SHOWCASE_IMAGES_THIRD = [KNIFE_HERO_SRC, BOOM_HERO_SRC, KAKAO_HERO_SRC, LIGHT_HERO_SRC, TECHY_HERO_SRC];
/** Andel av track per 1px scroll. */
const SCROLL_SPEED = 0.002;
/** Nedre raden rullar långsammare så den inte "tar slut" så fort. */
const RIGHT_ROW_SPEED = 0.5;

const createItems = (count: number) =>
  Array.from({ length: count }, (_, i) => ({ id: i }));

const scrollItems = createItems(6);
const duplicatedScrollItemsLeft = Array.from({ length: DUPLICATE_COUNT }, () => scrollItems).flat();
const duplicatedScrollItemsRight = Array.from({ length: DUPLICATE_COUNT }, () => scrollItems).flat();
const duplicatedScrollItemsThird = Array.from({ length: DUPLICATE_COUNT }, () => scrollItems).flat();

const LOOP_PERCENT = 50;

const RIGHT_ROW_START_OFFSET = 8;
/** Rad 3: lite annan hastighet så det inte känns identiskt med rad 1 */
const THIRD_ROW_SPEED = 0.85;

function getTrackTransforms(scrollY: number) {
  const leftOffset = (scrollY * SCROLL_SPEED) % LOOP_PERCENT;
  const rightRaw = (scrollY * SCROLL_SPEED * RIGHT_ROW_SPEED) % LOOP_PERCENT;
  const rightOffset = rightRaw - RIGHT_ROW_START_OFFSET;
  const thirdOffset = (scrollY * SCROLL_SPEED * THIRD_ROW_SPEED) % LOOP_PERCENT;
  return {
    left: `translateX(-${leftOffset}%)`,
    right: `translateX(${rightOffset}%)`,
    third: `translateX(-${thirdOffset}%)`,
  };
}

const INITIAL_TRANSFORMS = getTrackTransforms(0);

export function WebsiteShowcaseScrollSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [transforms, setTransforms] = useState(INITIAL_TRANSFORMS);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const setMobile = () => setIsMobile(mql.matches);
    setMobile();
    mql.addEventListener('change', setMobile);
    return () => mql.removeEventListener('change', setMobile);
  }, []);

  const getImageSrcTop = (index: number) => (isMobile ? SHOWCASE_IMAGES_TOP_MOBILE : SHOWCASE_IMAGES_TOP)[index % IMAGES_PER_ROW];
  const getImageSrcBottom = (index: number) => (isMobile ? SHOWCASE_IMAGES_BOTTOM_MOBILE : SHOWCASE_IMAGES_BOTTOM)[index % IMAGES_PER_ROW];
  const getImageSrcThird = (index: number) => SHOWCASE_IMAGES_THIRD[index % IMAGES_PER_ROW];

  useEffect(() => {
    setTransforms(getTrackTransforms(window.scrollY));
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        setTransforms(getTrackTransforms(window.scrollY));
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Section
      overflow="hidden"
      style={{
        position: 'relative',
        marginTop: '-26vh',
        minHeight: 'calc(200px * 3 + 6rem)',
      }}
    >
      <style jsx global>{`
        .website-showcase-row {
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          min-height: 228px;
          max-height: 228px;
          contain: layout style;
        }
        .website-showcase-track {
          display: flex;
          align-items: stretch;
          width: fit-content;
          min-height: 200px;
          max-height: 200px;
          will-change: transform;
          backface-visibility: hidden;
        }
        .website-showcase-item {
          flex-shrink: 0;
          width: 360px;
          min-width: 360px;
          max-width: 360px;
          height: 200px;
          min-height: 200px;
          max-height: 200px;
          padding: 0 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface-page, #f5f5f5);
          overflow: hidden;
          contain: layout style paint;
        }
        .website-showcase-item-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 6px;
          overflow: hidden;
          background: var(--surface-page, #f5f5f5);
        }
        .website-showcase-item-inner img {
          object-fit: cover !important;
          border-radius: 6px;
          box-shadow: var(--shadow-soft, 0 2px 8px rgba(0,0,0,0.08));
        }
      `}</style>

      {/* Rad 1: rullar åt vänster */}
      <Box
        style={{
          overflow: 'hidden',
          padding: 'var(--foundation-space-4) 0',
          marginBottom: 'var(--foundation-space-2)',
          position: 'relative',
        }}
        className="website-showcase-row"
      >
        <div
          className="website-showcase-track"
          style={{ transform: transforms.left }}
        >
          {duplicatedScrollItemsLeft.map((item, index) => (
            <div key={`left-${item.id}-${index}`} className="website-showcase-item">
              <div className="website-showcase-item-inner">
                <Image
                  src={getImageSrcTop(index)}
                  alt={`Hemsida ${index + 1}`}
                  fill
                  sizes="360px"
                  priority={index < 5}
                  loading={index < 5 ? 'eager' : 'lazy'}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Rad 2: rullar åt höger */}
      <Box
        style={{
          overflow: 'hidden',
          padding: 'var(--foundation-space-4) 0',
          marginBottom: 'var(--foundation-space-2)',
          position: 'relative',
        }}
        className="website-showcase-row"
      >
        <div
          className="website-showcase-track"
          style={{ transform: transforms.right }}
        >
          {duplicatedScrollItemsRight.map((item, index) => (
            <div key={`right-${item.id}-${index}`} className="website-showcase-item">
              <div className="website-showcase-item-inner">
                <Image
                  src={getImageSrcBottom(index)}
                  alt={`Hemsida ${index + 1}`}
                  fill
                  sizes="360px"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Rad 3: rullar åt vänster */}
      <Box
        style={{
          overflow: 'hidden',
          padding: 'var(--foundation-space-4) 0',
          position: 'relative',
        }}
        className="website-showcase-row"
      >
        <div
          className="website-showcase-track"
          style={{ transform: transforms.third }}
        >
          {duplicatedScrollItemsThird.map((item, index) => (
            <div key={`third-${item.id}-${index}`} className="website-showcase-item">
              <div className="website-showcase-item-inner">
                <Image
                  src={getImageSrcThird(index)}
                  alt={`Hemsida ${index + 1}`}
                  fill
                  sizes="360px"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </Box>
    </Section>
  );
}
