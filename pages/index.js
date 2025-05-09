import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ConstructionIcon from '../components/ConstructionIcon';

export default function Home() {
  // Initialize state variables with empty strings
  const [companyName, setCompanyName] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');

  // Get environment variables on component mount
  useEffect(() => {
    setCompanyName(process.env.NEXT_PUBLIC_COMPANY_NAME || 'Nossa Empresa');
    setInstagramUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${companyName} - Em Construção`}</title>
        <meta name="description" content={`${companyName} - Site em construção`} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <div className={styles.iconContainer}>
          <ConstructionIcon />
        </div>
        
        <h1 className={styles.title}>Estamos em construção</h1>
        
        <div className={styles.company}>
          <h2>{companyName}</h2>
          
          <div className={styles.social}>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={styles.instagramIcon}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Siga-nos no Instagram</span>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} {companyName}. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
