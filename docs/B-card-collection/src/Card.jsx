
function Card({ title, text, tag, tagStyle, metaTags = [] }) {
const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
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
        fontSize: 22,
        lineHeight: 1.2,
    },
    text: {
        margin: '0 0 18px',
        fontSize: 14,
        lineHeight: 1.6,
        color: '#52606d',
    },
    tag: {
        alignSelf: 'flex-start',
        display: 'inline-block',
        padding: '6px 12px',
        borderRadius: 9999,
        fontSize: 14,
    },
    tagsRow: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'flex-start',
    },
    metaTag: {
        display: 'inline-block',
        padding: '6px 12px',
        borderRadius: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.78)',
        color: '#1f2933',
        border: '1px solid rgba(31, 41, 51, 0.12)',
        fontSize: 14,
  },
}

return (
        <article style={styles.card}>
        <h2 style={styles.title}>{title}</h2>
        {text ? <p style={styles.text}>{text}</p> : null}
        <div style={styles.tagsRow}>
            {metaTags.map((item) => (
            <div key={item} style={styles.metaTag}>
                {item}
            </div>
            ))}
        <div style={{ ...styles.tag, ...tagStyle }}>{tag}</div>
        </div>
        </article>
    )
}

export default Card
