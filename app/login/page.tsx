import React from 'react'
import Link from 'next/link'
import styles from './login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Logga in</h1>
        
        <form className={styles.form}>
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
              placeholder="Ditt lösenord" 
              required 
            />
          </div>
          
          <button type="submit" className={styles.button}>
            Logga in
          </button>
        </form>
        
        <div className={styles.links}>
          <Link href="/forgot-password" className={styles.link}>
            Glömt lösenord?
          </Link>
          <Link href="/" className={styles.link}>
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </div>
  )
} 