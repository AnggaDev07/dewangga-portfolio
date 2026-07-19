import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  // Defining personal profile variables using camelCase convention
  const developerFullName = "Dewangga Fadillah Yusuf";
  const watermarkFirstName = "Dewangga";
  const watermarkSecondName = "Yusuf.";
  const locationText = "Batam, Indonesia";
  const taglineBoldText = "Full-Stack ";
  const taglineAccentText = "Developer";

  return (
    <section id="home" className={styles.hero}>
      {/* Background Watermark Text */}
      <div className={styles.watermark} aria-hidden="true">
        <span className={styles.watermarkText}>{watermarkFirstName}</span>
        <span className={styles.watermarkText}>{watermarkSecondName}</span>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Avatar */}
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarRing}>
            <div className={styles.avatarInner}>
              {/* Note: Remember to replace /images/avatar.png with your own portrait image later */}
              <Image
                src="/images/avatar.png"
                alt={`${developerFullName} - ${taglineBoldText}${taglineAccentText}`}
                width={160}
                height={160}
                priority
                className={styles.avatarImage}
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className={styles.location}>
          <Image
            src="/images/location-icon.png"
            alt="Location"
            width={18}
            height={22}
            className={styles.locationIcon}
          />
          <span className={styles.locationText}>{locationText}</span>
        </div>

        {/* Tagline */}
        <h1 className={styles.tagline}>
          <span className={styles.taglineBold}>{taglineBoldText}</span>
          <span className={styles.taglineAccent}>{taglineAccentText}</span>
        </h1>

        {/* Description */}
        <p className={styles.description}>
          Hello, I&apos;m <span className={styles.highlightName}>{developerFullName}</span>, a Full Stack Developer who enjoys building web applications from the ground up. I love solving complex problems, crafting intuitive user experiences, and developing efficient, maintainable systems.
        </p>
      </div>
    </section>
  );
}