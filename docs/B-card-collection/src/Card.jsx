
function Card({ title, text, linkLabel, linkHref }) {
const styles = {
    card: {
        width: '100%',
        boxSizing: 'border-box',
        padding: 24,
        borderRadius: 24,
        background: 'rgba(255, 255, 255, 0.78)',
        border: '1px solid rgba(31, 41, 51, 0.12)',
        boxShadow: '0 24px 60px rgba(31, 41, 51, 0.12)',
        color: '#1f2933',
        fontFamily: 'Georgia, "Times New Roman", serif',
    },
    title: {
        margin: '0 0 12px',
        fontSize: 28,
        lineHeight: 1.1,
    },
    text: {
        margin: '0 0 18px',
        fontSize: 16,
        lineHeight: 1.6,
        color: '#52606d',
    },
    link: {
        display: 'inline-block',
        padding: '8px 16px',
        borderRadius: 9999,
        backgroundColor: '#c44900',
        color: 'white',
        textDecoration: 'none',
        fontSize: 16,
    },
}

return (
        <article style={styles.card}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.text}>{text}</p>
        <a href={linkHref} style={styles.link}>
            {linkLabel}
        </a>
        </article>
    )
}

export default Card