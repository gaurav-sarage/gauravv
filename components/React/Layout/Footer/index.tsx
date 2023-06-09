import Link from "next/link";
import config from "config.json";

import styles from "./style.module.css";
import HomeStyles from "@/styles/Home.module.css";
// import UsersOnline from "@/components/Phoenix/UsersOnline";

export default function Footer() {
    return (
        <div className={styles.container}>
            {/* <UsersOnline /> */}
            <div className={styles.others}>
                <div className={styles.socialsContainer}>
                    <div className={styles.linksColumn}>
                        <Link href={"/"}>
                            <a aria-label="Home">Home</a>
                        </Link>
                        <Link href={"/blog"}>
                            <a aria-label="Blogs">Blogs</a>
                        </Link>
                        <Link href={"/about"}>
                            <a aria-label="About">About</a>
                        </Link>
                        <a
                            href="https://phoenix.aayushsahu.com/dashboard"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            Dashboard
                        </a>
                    </div>
                    <div className={styles.linksColumn}>
                        <a
                            href={config.user.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            GitHub
                        </a>
                        <a
                            href={config.user.twitterLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                        >
                            Twitter
                        </a>
                    </div>
                    <div className={styles.linksColumn}>
                        <a
                            href={config.user.linkedinLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={config.user.devToLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="DevTo"
                        >
                            DevTo
                        </a>
                        <a
                            href="/rss.xml"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="RSS Feed"
                        >
                            RSS
                        </a>
                        <a
                            href="https://open.spotify.com/user/31lqzlo7idq4h2isuqcrvosq6ski?si=f09d69ec49754961"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Spotify"
                        >
                            Spotify
                        </a>
                    </div>
                </div>
                <p className={styles.paragraph}>
                    Made with <span className={HomeStyles.highlight}>
                        NextJS
                    </span>
                </p>
            </div>
        </div>
    );
}
