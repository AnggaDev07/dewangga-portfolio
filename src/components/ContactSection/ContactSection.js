'use client';

import styles from './ContactSection.module.css';
import { GitlabIcon, GithubIcon, LinkedinIcon } from '../Icons';

export default function ContactSection() {
  return (
    <section id='contact' className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.contactInfoBlock}>
          <p className={styles.subtitle}>Ready To Collaborate?</p>
          <h2 className={styles.title}>
            GET IN <span className={styles.titleHighlight}>TOUCH</span>
          </h2>

          <div className={styles.infoGrid}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Email :</span>
              <a
                href='mailto:anggadev07@gmail.com'
                className={styles.infoValue}
              >
                anggadev07@gmail.com
              </a>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Location :</span>
              <span className={styles.infoValue}>Batam, Indonesia</span>
            </div>
          </div>

          {/* Adding Download CV Button linked to Google Drive with camelCase style classes */}
          <div className={styles.cvContainer}>
            <a
              href='https://drive.google.com/file/d/1H9ltv7_INlPrffxp5VFX1WkO8Fv3iO7j/view?usp=drive_link'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.cvButton}
              aria-label="Download Dewangga's Curriculum Vitae"
            >
              Download CV
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
                <polyline points='7 10 12 15 17 10'></polyline>
                <line x1='12' y1='15' x2='12' y2='3'></line>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.socialsContainer}>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.socialLink}
          >
            <GitlabIcon className={styles.socialIcon} aria-label='Gitlab' />
            <span className={styles.socialText}>Gitlab</span>
          </a>
          <a
            href='https://github.com/AnggaDev07/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.socialLink}
          >
            <GithubIcon className={styles.socialIcon} aria-label='Github' />
            <span className={styles.socialText}>Github</span>
          </a>
          <a
            href='https://www.linkedin.com/in/dewangga-fadillah-yusuf/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.socialLink}
          >
            <LinkedinIcon className={styles.socialIcon} aria-label='Linkedin' />
            <span className={styles.socialText}>Linkedin</span>
          </a>
        </div>
      </div>

      <div className={styles.giantTextContainer}>
        <div className={styles.giantText}>Dewangga Fadillah Yusuf.</div>
      </div>
    </section>
  );
}
