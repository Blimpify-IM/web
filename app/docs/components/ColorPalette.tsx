'use client'

import React from 'react'
import styles from './ColorPalette.module.css'

type ColorGroup = {
  title: string
  colors: {
    name: string
    variable: string
    value: string
    description: string
  }[]
}

const colorGroups: ColorGroup[] = [
  {
    title: 'Primära färger',
    colors: [
      { 
        name: 'Primary', 
        variable: '--primary-color', 
        value: '#8400ff',
        description: 'Huvudfärg för knappar, länkar och betonade element'
      },
      { 
        name: 'Primary Hover', 
        variable: '--primary-hover', 
        value: '#7000d6',
        description: 'Hover-tillstånd för primära element'
      },
      { 
        name: 'Primary Light', 
        variable: '--primary-light', 
        value: '#a64dff',
        description: 'Ljusare variant för ikoner och sekundära element'
      },
      { 
        name: 'Primary Dark', 
        variable: '--primary-dark', 
        value: '#6a00cc',
        description: 'Mörkare variant för aktiva tillstånd'
      },
    ]
  },
  {
    title: 'Sekundära färger',
    colors: [
      { 
        name: 'Secondary', 
        variable: '--secondary-color', 
        value: '#ff00d4',
        description: 'Komplementfärg för kontrast och betoning'
      },
      { 
        name: 'Secondary Light', 
        variable: '--secondary-light', 
        value: 'rgba(255, 255, 255, 0.8)',
        description: 'Ljus text och ikoner mot mörk bakgrund'
      },
      { 
        name: 'Secondary Dark', 
        variable: '--secondary-dark', 
        value: '#cc00a9',
        description: 'Mörkare variant för aktiva tillstånd'
      },
      { 
        name: 'Secondary Lighter', 
        variable: '--secondary-lighter', 
        value: 'rgba(255, 255, 255, 0.6)',
        description: 'För mindre viktig text och inaktiva element'
      },
    ]
  },
  {
    title: 'Accentfärger',
    colors: [
      { 
        name: 'Accent', 
        variable: '--accent-color', 
        value: '#00e5ff',
        description: 'För att betona viktiga element och länkar'
      },
      { 
        name: 'Accent Light', 
        variable: '--accent-light', 
        value: '#4dffff',
        description: 'Ljusare variant för hover-effekter'
      },
      { 
        name: 'Accent Dark', 
        variable: '--accent-dark', 
        value: '#00b8cc',
        description: 'Mörkare variant för aktiva tillstånd'
      },
    ]
  },
  {
    title: 'Bakgrundsfärger',
    colors: [
      { 
        name: 'Background Dark', 
        variable: '--background-dark', 
        value: 'rgba(15, 3, 24, 0.95)',
        description: 'Huvudbakgrund för mörkt tema'
      },
      { 
        name: 'Background Darker', 
        variable: '--background-darker', 
        value: 'rgba(10, 2, 16, 0.98)',
        description: 'Mörkare bakgrund för kontrast'
      },
      { 
        name: 'Background White', 
        variable: '--background-white', 
        value: 'rgba(255, 255, 255, 0.95)',
        description: 'Bakgrund för ljust tema'
      },
    ]
  },
  {
    title: 'Statusfärger',
    colors: [
      { 
        name: 'Success', 
        variable: '--success-color', 
        value: '#00e676',
        description: 'För framgång och slutförda åtgärder'
      },
      { 
        name: 'Error', 
        variable: '--error-color', 
        value: '#ff1744',
        description: 'För fel och misslyckade åtgärder'
      },
      { 
        name: 'Warning', 
        variable: '--warning-color', 
        value: '#ffea00',
        description: 'För varningar och uppmärksamhet'
      },
      { 
        name: 'Info', 
        variable: '--info-color', 
        value: '#2979ff',
        description: 'För informationsmeddelanden'
      },
    ]
  },
]

const gradients = [
  { 
    name: 'Primary Gradient', 
    variable: '--primary-gradient', 
    value: 'linear-gradient(135deg, #8400ff, #ff00d4)',
    description: 'För CTA-knappar och viktiga element'
  },
  { 
    name: 'Background Gradient', 
    variable: '--background-gradient', 
    value: 'linear-gradient(135deg, #070110, #0f0320)',
    description: 'För sidans huvudbakgrund'
  },
  { 
    name: 'Accent Gradient', 
    variable: '--accent-gradient', 
    value: 'linear-gradient(135deg, #8400ff 0%, #ff00d4 100%)',
    description: 'Alternativ gradient för betonade element'
  },
  { 
    name: 'Card Gradient', 
    variable: '--card-gradient', 
    value: 'linear-gradient(145deg, rgba(30, 10, 40, 0.6) 0%, rgba(15, 3, 24, 0.8) 100%)',
    description: 'För kort och paneler'
  },
]

export default function ColorPalette() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`Kopierat: ${text}`)
      })
      .catch(err => {
        console.error('Kunde inte kopiera text: ', err)
      })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blimpify Färgpalett</h1>
      <p className={styles.description}>
        Klicka på en färgruta eller variabelnamn för att kopiera värdet till urklipp.
      </p>
      
      {colorGroups.map((group) => (
        <div key={group.title} className={styles.colorGroup}>
          <h2 className={styles.groupTitle}>{group.title}</h2>
          <div className={styles.colorGrid}>
            {group.colors.map((color) => (
              <div key={color.variable} className={styles.colorCard}>
                <div 
                  className={styles.colorSwatch} 
                  style={{ backgroundColor: color.value }}
                  onClick={() => copyToClipboard(color.value)}
                  title={`Klicka för att kopiera: ${color.value}`}
                ></div>
                <div className={styles.colorInfo}>
                  <h3 className={styles.colorName}>{color.name}</h3>
                  <code 
                    className={styles.colorVariable}
                    onClick={() => copyToClipboard(`var(${color.variable})`)}
                    title={`Klicka för att kopiera: var(${color.variable})`}
                  >
                    {color.variable}
                  </code>
                  <div className={styles.colorValue}>{color.value}</div>
                  <p className={styles.colorDescription}>{color.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className={styles.colorGroup}>
        <h2 className={styles.groupTitle}>Gradienter</h2>
        <div className={styles.gradientGrid}>
          {gradients.map((gradient) => (
            <div key={gradient.variable} className={styles.gradientCard}>
              <div 
                className={styles.gradientSwatch} 
                style={{ background: gradient.value }}
                onClick={() => copyToClipboard(gradient.value)}
                title={`Klicka för att kopiera: ${gradient.value}`}
              ></div>
              <div className={styles.gradientInfo}>
                <h3 className={styles.gradientName}>{gradient.name}</h3>
                <code 
                  className={styles.gradientVariable}
                  onClick={() => copyToClipboard(`var(${gradient.variable})`)}
                  title={`Klicka för att kopiera: var(${gradient.variable})`}
                >
                  {gradient.variable}
                </code>
                <p className={styles.gradientDescription}>{gradient.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.usageExamples}>
        <h2 className={styles.groupTitle}>Användningsexempel</h2>
        <div className={styles.codeExample}>
          <h3>Grundläggande användning</h3>
          <pre>
            <code>{`.my-element {
  color: var(--primary-color);
  background-color: var(--background-dark);
  border-radius: var(--border-radius-md);
}`}</code>
          </pre>
        </div>
        
        <div className={styles.codeExample}>
          <h3>Knappar</h3>
          <pre>
            <code>{`.primary-button {
  background: var(--primary-gradient);
  color: white;
  box-shadow: var(--button-shadow);
}

.primary-button:hover {
  box-shadow: var(--button-shadow-hover);
}`}</code>
          </pre>
        </div>
        
        <div className={styles.codeExample}>
          <h3>Kort och paneler</h3>
          <pre>
            <code>{`.card {
  background: var(--card-gradient);
  border: var(--card-border);
  box-shadow: var(--card-shadow);
  border-radius: var(--border-radius-lg);
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
} 