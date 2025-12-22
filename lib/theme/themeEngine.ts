
  // Font weight tiers (strict 400-800 range)
  export type BodyWeightTier = "regular" | "medium";
  export type HeadingWeightTier = "semibold" | "bold" | "extrabold";
  export type WeightTier = BodyWeightTier | HeadingWeightTier;

  // Weight tier to numeric mapping (400-800 only)
  const WEIGHT_TIER_MAP: Record<WeightTier, number> = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  };

  /**
   * Get numeric weight from tier
   */
  function getWeightValue(tier: WeightTier): number {
    return WEIGHT_TIER_MAP[tier] || 400;
  }

  /**
   * Validates that heading weight is bolder than body weight
   */
  function validateWeightHierarchy(
    heading: HeadingWeightTier,
    body: BodyWeightTier
  ): boolean {
    return getWeightValue(heading) > getWeightValue(body);
  }

  /**
   * Auto-calculate label weight (sits between body and heading)
   */
  function calculateLabelWeight(
    heading: HeadingWeightTier,
    body: BodyWeightTier
  ): WeightTier {
    const headingValue = getWeightValue(heading);
    const bodyValue = getWeightValue(body);
    const labelValue = Math.floor((headingValue + bodyValue) / 2);

    if (labelValue <= 400) return 'regular';
    if (labelValue <= 500) return 'medium';
    if (labelValue <= 600) return 'semibold';
    if (labelValue <= 700) return 'bold';
    return 'extrabold';
  }

  /**
   * Normalize and validate weight configuration
   */
  function normalizeWeights(
    heading?: HeadingWeightTier,
    body?: BodyWeightTier
  ): {
    heading: HeadingWeightTier;
    body: BodyWeightTier;
    label: WeightTier;
  } {
    const finalHeading = heading || 'bold';
    const finalBody = body || 'regular';

    // Validate hierarchy
    if (!validateWeightHierarchy(finalHeading, finalBody)) {
      console.warn(
        `[Font Weights] Invalid combination: heading="${finalHeading}" must be > body="${finalBody}". Using defaults.`
      );
      return {
        heading: 'bold',
        body: 'regular',
        label: 'medium'
      };
    }

    return {
      heading: finalHeading,
      body: finalBody,
      label: calculateLabelWeight(finalHeading, finalBody)
    };
  }

  export interface DesignJson {
    globalStyles?: {
      radius?: string;
      accentColor?: string;
      accentIntensity?: "vibrant" | "normal" | "discrete" | "monochrome";
      isDark?: boolean;
      themeTone?: "mono" | "linen" | "ink" | "clay" | "slate" | "sage" | "frost" | "pearl"
   | "aqua" | "neutral";
      fontPrimary?: string;
      fontSecondary?: string;
      fontWeightHeading?: HeadingWeightTier;
      fontWeightBody?: BodyWeightTier;
      layoutContent?: string;
      layoutMedia?: string;
      sectionSpacing?: string;
      containerSpacing?: string;
      navbarSpacing?: string;
      formWidth?: string;
      typographyScale?: "sm" | "md" | "lg";
    };
  }

  /**
   * Get default design config (databasen är nu source of truth, design.json tas bort)
   * ⚠️ VIKTIGT: accentIntensity måste vara "normal" för att knappar ska få accent-färg
   * "monochrome" gör att knappar blir svarta (används bara för specifika designs)
   */
  export function getDesignConfigSync(): DesignJson {
    // Returnera bara defaults - databasen är source of truth
    // themeSyncScript läser från localStorage (som synkas från databasen)
    return {
      globalStyles: {
        radius: "xl",
        accentColor: "purple",
        accentIntensity: "normal", // ✅ Ändrat från "monochrome" - knappar får nu accent-färg
        isDark: false,
        themeTone: "neutral",
        fontPrimary: "Outfit",
        fontSecondary: "Outfit",
        fontWeightHeading: "bold",
        fontWeightBody: "regular",
        layoutContent: "xl",
        layoutMedia: "xl",
        sectionSpacing: "lg",
        containerSpacing: "md",
        navbarSpacing: "md",
        formWidth: "sm",
        typographyScale: "md",
      },
    };
  }

  /**
   * Generate the theme sync script that runs in the browser
   * ✅ Databasen är source of truth - läser från localStorage (synkas från databasen)
   */
  function generateThemeSyncScript(config: DesignJson): string {
    // Defaults (används bara om localStorage är tom)
    const accentColor = config?.globalStyles?.accentColor || 'purple';
    const accentIntensity = config?.globalStyles?.accentIntensity || 'normal'; // ⚠️ Ändrat från 'monochrome' till 'normal'
    const radius = config?.globalStyles?.radius || 'xl';
    const isDark = config?.globalStyles?.isDark ?? false;
    const themeModeValue = isDark ? 'dark' : 'light';
    // ⚠️ VIKTIGT: Mappa 'neutral' till 'pure' för CSS (CSS har bara 'pure', inte 'neutral')
    const themeToneRaw = config?.globalStyles?.themeTone || 'neutral';
    const themeTone = themeToneRaw === 'neutral' ? 'pure' : themeToneRaw;
    const fontPrimary = config?.globalStyles?.fontPrimary || 'Outfit';
    const fontSecondary = config?.globalStyles?.fontSecondary || fontPrimary;

    return `
      (function() {
        try {
          // Editor mode check (always false for dashboard)
          function isEditorMode() {
            return false;
          }
          
          const serverDefaults = {
            accentColor: '${accentColor}',
            accentIntensity: '${accentIntensity}',
            radiusScale: '${radius}',
            themeMode: '${themeModeValue}',
            themeTone: '${themeTone}',
            fontPrimary: '${fontPrimary}',
            fontSecondary: '${fontSecondary}'
          };
          
          // Track if this is the initial theme application
          var isInitialThemeLoad = true;

          // Function to detect system theme preference
          function getSystemThemePreference() {
            if (typeof window === 'undefined') return 'light';
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }

          // Function to apply theme settings
          function applyTheme(config, skipTransition) {
            if (isEditorMode()) {
              return;
            }

            const root = document.documentElement;
            if (!root) {
              console.error('[ThemeEngine] document.documentElement not found');
              return;
            }

            // ✅ NEW: Dynamic font loading BEFORE applying CSS variables
            const primaryFont = config.fontPrimary || serverDefaults.fontPrimary;
            const secondaryFont = config.fontSecondary || serverDefaults.fontSecondary;

            // Generate Google Fonts URL
            const fontWeights = '300;400;500;600;700;800;900';
            const fontsToLoad = [primaryFont, secondaryFont]
              .filter(function(f, i, arr) { return arr.indexOf(f) === i; })
              .map(function(f) { return 'family=' + f.replace(/\\s/g, '+') + ':wght@' + fontWeights; })
              .join('&');
            const fontUrl = 'https://fonts.googleapis.com/css2?' + fontsToLoad + '&display=swap';

            // Check if we need to update the font link
            var fontLink = document.querySelector('link[data-font-loader="dynamic"]');

            if (!fontLink) {
              // Create new link element on first run
              fontLink = document.createElement('link');
              fontLink.rel = 'stylesheet';
              fontLink.setAttribute('data-font-loader', 'dynamic');
              document.head.appendChild(fontLink);
            }

            // Update href if different (triggers font download)
            if (fontLink.href !== fontUrl) {
              fontLink.href = fontUrl;
            }

            // ✅ Apply theme mode FIRST (color-mix() depends on --is-dark)
            // Support 'system' mode by detecting OS preference
            const themeModeConfig = config.themeMode || serverDefaults.themeMode;
            let effectiveThemeMode = themeModeConfig;

            // If system mode, detect OS preference
            if (themeModeConfig === 'system') {
              effectiveThemeMode = getSystemThemePreference();
            }

            // Add smooth transition class before theme change (Apple-style)
            // Skip transition on initial load or if explicitly requested
            if (!isInitialThemeLoad && !skipTransition) {
              root.classList.add('theme-transitioning');

              // Force reflow to ensure transition class is applied before theme change
              void root.offsetHeight;

              // Small delay to let the browser apply the transition class
              setTimeout(function() {
                root.setAttribute('data-theme', effectiveThemeMode);
                root.style.setProperty('--is-dark', effectiveThemeMode === 'dark' ? '1' : '0');
                if (effectiveThemeMode === 'dark') {
                  root.classList.add('dark');
                } else {
                  root.classList.remove('dark');
                }

                // Remove transition class after animation completes (500ms)
                setTimeout(function() {
                  root.classList.remove('theme-transitioning');
                }, 500);
              }, 10); // 10ms delay to ensure transition is ready
            } else {
              // No transition - apply immediately
              root.setAttribute('data-theme', effectiveThemeMode);
              root.style.setProperty('--is-dark', effectiveThemeMode === 'dark' ? '1' : '0');
              if (effectiveThemeMode === 'dark') {
                root.classList.add('dark');
              } else {
                root.classList.remove('dark');
              }
            }

            // Mark that initial load is complete
            isInitialThemeLoad = false;
            
            // ✅ Apply theme tone (måste vara först för att påverka alla färger)
            // ⚠️ VIKTIGT: Mappa 'neutral' (databas-värde) till 'pure' (CSS-värde)
            // CSS har :root[data-theme-tone="pure"] men INTE :root[data-theme-tone="neutral"]
            let themeTone = config.themeTone || serverDefaults.themeTone;
            if (themeTone === 'neutral') {
              themeTone = 'pure';
            }
            if (themeTone) {
              root.setAttribute('data-theme-tone', themeTone);
            }
            
            // ✅ Apply accent color by overriding Section 2 primitives
            const color = config.accentColor || serverDefaults.accentColor;
            const isInverse = color === 'inverse';
            const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
            
            if (isInverse) {
              levels.forEach(function(level) {
                root.style.setProperty('--foundation-accent-' + level, 'var(--foundation-gray-' + level + ')');
              });
              root.setAttribute('data-accent-mode', 'inverse');
            } else {
              levels.forEach(function(level) {
                root.style.setProperty('--foundation-accent-' + level, 'var(--foundation-' + color + '-' + level + ')');
              });
              root.removeAttribute('data-accent-mode');
            }

            // ✅ Apply accent intensity (måste vara EFTER accent color)
            const intensity = config.accentIntensity || serverDefaults.accentIntensity;
            root.setAttribute('data-accent-intensity', intensity);
            
            // Apply radius
            const radiusValue = config.radiusScale || serverDefaults.radiusScale;
            const radiusScales = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'];
            radiusScales.forEach(function(scale) {
              root.style.setProperty(
                '--selected-radius-scale-' + scale,
                'var(--foundation-radius-' + radiusValue + '-' + scale + ')'
              );
            });
            
            // ✅ MODIFIED: Apply fonts (already loaded above, now just set CSS variables)
            // Note: primaryFont and secondaryFont are defined at the top of applyTheme()
            root.style.setProperty('--font-primary-name', primaryFont);
            root.style.setProperty('--font-secondary-name', secondaryFont);
            
            // ⚠️ VIKTIGT: Force reflow för att säkerställa att color-mix() uppdateras
            // color-mix() kan ibland inte reagera på runtime-ändringar utan reflow
            void root.offsetHeight; // Force reflow
          }
          
          // ✅ Databasen är source of truth - läs från localStorage (synkas från databasen)
          const stored = localStorage.getItem('blimpify-theme-config');
          let localConfig = stored ? JSON.parse(stored) : null;
          
          // Om ingen localStorage finns, använd defaults (första gången)
          if (!localConfig) {
            localConfig = serverDefaults;
            localStorage.setItem('blimpify-theme-config', JSON.stringify(localConfig));
          }

          // Apply initial theme
          applyTheme(localConfig);

          // Watch for OS theme changes (when in system mode)
          if (window.matchMedia) {
            const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

            // Modern browsers
            if (systemThemeQuery.addEventListener) {
              systemThemeQuery.addEventListener('change', function(e) {
                const stored = localStorage.getItem('blimpify-theme-config');
                if (stored) {
                  try {
                    const config = JSON.parse(stored);
                    // Only reapply if using system mode
                    if (config.themeMode === 'system' && !isEditorMode()) {
                      applyTheme(config);
                    }
                  } catch (err) {
                    console.error('[ThemeEngine] Failed to parse theme config on OS change:', err);
                  }
                }
              });
            }
            // Legacy browsers
            else if (systemThemeQuery.addListener) {
              systemThemeQuery.addListener(function(e) {
                const stored = localStorage.getItem('blimpify-theme-config');
                if (stored) {
                  try {
                    const config = JSON.parse(stored);
                    if (config.themeMode === 'system' && !isEditorMode()) {
                      applyTheme(config);
                    }
                  } catch (err) {
                    console.error('[ThemeEngine] Failed to parse theme config on OS change:', err);
                  }
                }
              });
            }
          }

          // Watch for localStorage changes (for live updates without reload)
          window.addEventListener('storage', function(e) {
            if (e.key === 'blimpify-theme-config' && e.newValue && !isEditorMode()) {
              try {
                const newConfig = JSON.parse(e.newValue);
                applyTheme(newConfig);
              } catch (err) {
                console.error('Failed to parse theme config:', err);
              }
            }
          });

          // Also watch for custom events (for same-tab updates)
          window.addEventListener('theme-changed', function(e) {
            if (isEditorMode()) {
              return;
            }

            const stored = localStorage.getItem('blimpify-theme-config');
            if (stored) {
              try {
                const config = JSON.parse(stored);
                applyTheme(config);
              } catch (err) {
                console.error('[ThemeEngine] Failed to apply theme:', err);
              }
            }
          });
          
        } catch (e) {
          console.error('Theme sync error:', e);
        }
      })();
    `.trim();
  }

  /**
   * Generate CSS variables from design config
   * ✅ CORRECT: Overrides Section 2 primitives
   */
  export function buildCssVars(design: DesignJson): string {
    const radius           = design?.globalStyles?.radius           || "md";
    const accentColor      = design?.globalStyles?.accentColor      || "purple";
    const accentIntensity  = design?.globalStyles?.accentIntensity  || "normal";
    const isDark           = design?.globalStyles?.isDark           ?? false;
    // ⚠️ VIKTIGT: Mappa 'neutral' till 'pure' för CSS (CSS har bara 'pure', inte 'neutral')
    const themeToneRaw = design?.globalStyles?.themeTone || "neutral";
    const themeTone = themeToneRaw === "neutral" ? "pure" : themeToneRaw;
    const fontPrimary      = design?.globalStyles?.fontPrimary      || "Plus Jakarta Sans";
    const fontSecondary    = design?.globalStyles?.fontSecondary    || fontPrimary;
    const layoutContent    = design?.globalStyles?.layoutContent    || "md";
    const layoutMedia      = design?.globalStyles?.layoutMedia      || "xl";
    const sectionSpacing   = design?.globalStyles?.sectionSpacing   || "md";
    const containerSpacing = design?.globalStyles?.containerSpacing || "md";
    const navbarSpacing    = design?.globalStyles?.navbarSpacing    || "md";
    const formWidth        = design?.globalStyles?.formWidth        || "sm";
    const typographyScale  = design?.globalStyles?.typographyScale  || "md";

    // 🎯 NEW: Tier-based weight system (400-800 range with validation)
    const weights = normalizeWeights(
      design?.globalStyles?.fontWeightHeading,
      design?.globalStyles?.fontWeightBody
    );
    const fontWeightHeading = getWeightValue(weights.heading);
    const fontWeightBody = getWeightValue(weights.body);
    const fontWeightLabel = getWeightValue(weights.label);

    const fontWeights = "300;400;500;600;700;800;900";
    const fontsToImport = [fontPrimary, fontSecondary]
      .filter((f, i, arr) => arr.indexOf(f) === i)
      .map(f => `family=${f.replace(/\s/g, '+')}:wght@${fontWeights}`)
      .join('&');
    const fontUrl = `https://fonts.googleapis.com/css2?${fontsToImport}&display=swap`;

    const isInverseAccent = accentColor === "inverse";

    return `
      @import url('${fontUrl}');
      :root {
        /* ===== FONTS ===== */
        --font-primary-name: '${fontPrimary}';
        --font-secondary-name: '${fontSecondary}';

        /* ===== Radius (can be overridden by client) ===== */
        --selected-radius-scale-none: var(--foundation-radius-${radius}-none);
        --selected-radius-scale-xs:   var(--foundation-radius-${radius}-xs);
        --selected-radius-scale-sm:   var(--foundation-radius-${radius}-sm);
        --selected-radius-scale-md:   var(--foundation-radius-${radius}-md);
        --selected-radius-scale-lg:   var(--foundation-radius-${radius}-lg);
        --selected-radius-scale-xl:   var(--foundation-radius-${radius}-xl);
        --selected-radius-scale-2xl:  var(--foundation-radius-${radius}-2xl);
        --selected-radius-scale-full: var(--foundation-radius-${radius}-full);

        /* ===== Layout widths ===== */
        --selected-layout-scale-content: 
  var(--foundation-layout-${layoutContent}-content);
        --selected-layout-scale-media:   var(--foundation-layout-${layoutMedia}-media);
        
        /* ===== Form width ===== */
        --selected-form-width: var(--foundation-form-${formWidth}-width);

        /* ===== Spacing ===== */
        --selected-section-spacing:   var(--foundation-section-spacing-${sectionSpacing});
        --selected-container-spacing: 
  var(--foundation-container-spacing-${containerSpacing});
        --selected-navbar-spacing:    var(--foundation-navbar-spacing-${navbarSpacing});

        /* ===== Accent Foundation Colors ===== */
        /* Sätt defaults initialt (themeSyncScript skriver över från databasen) */
        /* ⚠️ VIKTIGT: themeSyncScript körs efter buildCssVars() och sätter rätt värden från localStorage */
        ${isInverseAccent ? `
          --foundation-accent-100: var(--foundation-gray-100);
          --foundation-accent-200: var(--foundation-gray-200);
          --foundation-accent-300: var(--foundation-gray-300);
          --foundation-accent-400: var(--foundation-gray-400);
          --foundation-accent-500: var(--foundation-gray-500);
          --foundation-accent-600: var(--foundation-gray-600);
          --foundation-accent-700: var(--foundation-gray-700);
          --foundation-accent-800: var(--foundation-gray-800);
          --foundation-accent-900: var(--foundation-gray-900);
          --foundation-accent-1000: var(--foundation-gray-1000);
          --foundation-accent-1100: var(--foundation-gray-1100);
          --foundation-accent-1200: var(--foundation-gray-1200);
        ` : `
          --foundation-accent-100: var(--foundation-${accentColor}-100);
          --foundation-accent-200: var(--foundation-${accentColor}-200);
          --foundation-accent-300: var(--foundation-${accentColor}-300);
          --foundation-accent-400: var(--foundation-${accentColor}-400);
          --foundation-accent-500: var(--foundation-${accentColor}-500);
          --foundation-accent-600: var(--foundation-${accentColor}-600);
          --foundation-accent-700: var(--foundation-${accentColor}-700);
          --foundation-accent-800: var(--foundation-${accentColor}-800);
          --foundation-accent-900: var(--foundation-${accentColor}-900);
          --foundation-accent-1000: var(--foundation-${accentColor}-1000);
          --foundation-accent-1100: var(--foundation-${accentColor}-1100);
          --foundation-accent-1200: var(--foundation-${accentColor}-1200);
        `}

        /* ===== Typography scale ===== */
        --selected-font-size-xs:   var(--foundation-typography-${typographyScale}-xs);
        --selected-font-size-sm:   var(--foundation-typography-${typographyScale}-sm);
        --selected-font-size-base: var(--foundation-typography-${typographyScale}-base);
        --selected-font-size-lg:   var(--foundation-typography-${typographyScale}-lg);
        --selected-font-size-xl:   var(--foundation-typography-${typographyScale}-xl);
        --selected-font-size-2xl:  var(--foundation-typography-${typographyScale}-2xl);
        --selected-font-size-3xl:  var(--foundation-typography-${typographyScale}-3xl);
        --selected-font-size-4xl:  var(--foundation-typography-${typographyScale}-4xl);
        --selected-font-size-5xl:  var(--foundation-typography-${typographyScale}-5xl);
        --selected-font-size-6xl:  var(--foundation-typography-${typographyScale}-6xl);
        --selected-font-size-7xl:  var(--foundation-typography-${typographyScale}-7xl);

        /* ===== Line height scale ===== */
        --selected-leading-tight:   
  var(--foundation-typography-${typographyScale}-leading-tight);
        --selected-leading-snug:    
  var(--foundation-typography-${typographyScale}-leading-snug);
        --selected-leading-normal:  
  var(--foundation-typography-${typographyScale}-leading-normal);
        --selected-leading-relaxed: 
  var(--foundation-typography-${typographyScale}-leading-relaxed);
        --selected-leading-loose:   
  var(--foundation-typography-${typographyScale}-leading-loose);
        /* ===== Line height scale ===== */
        --selected-leading-tight:   
  var(--foundation-typography-${typographyScale}-leading-tight);
        --selected-leading-snug:    
  var(--foundation-typography-${typographyScale}-leading-snug);
        --selected-leading-normal:  
  var(--foundation-typography-${typographyScale}-leading-normal);
        --selected-leading-relaxed: 
  var(--foundation-typography-${typographyScale}-leading-relaxed);
        --selected-leading-loose:   
  var(--foundation-typography-${typographyScale}-leading-loose);

        /* ===== Font weights (tier-based, 400-800 range) ===== */
        --selected-font-weight-heading: ${fontWeightHeading};
        --selected-font-weight-body:    ${fontWeightBody};
        --selected-font-weight-label:   ${fontWeightLabel};

        /* ===== Theme ===== */
        --is-dark: ${isDark ? 1 : 0};
      }
    `.trim();
  }

  /**
   * Get the theme sync script separately
   * This allows theme changes without page reload!
   */
  export function getThemeSyncScript(design: DesignJson): string {
    return generateThemeSyncScript(design);
  }