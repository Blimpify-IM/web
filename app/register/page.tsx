import React from 'react'
import Link from 'next/link'
import styles from './register.module.css'

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.registerCard}>
        <h1 className={styles.title}>Registrera dig</h1>
        
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Namn</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Ditt namn" 
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">E-post</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Din e-postadress" 
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">Lösenord</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Välj ett lösenord" 
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Bekräfta lösenord</label>
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="Bekräfta ditt lösenord" 
              required 
            />
          </div>
          
          <button type="submit" className={styles.button}>
            Registrera
          </button>
        </form>
        
        <div className={styles.links}>
          <p>Har du redan ett konto?</p>
          <Link href="/login" className={styles.link}>
            Logga in här
          </Link>
          <Link href="/" className={styles.link}>
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </div>
  )
} 