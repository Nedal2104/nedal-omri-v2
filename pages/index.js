
export default function Home() {
  return (
    <div style={{ direction: 'rtl', fontFamily: 'Arial', padding: '20px' }}>
      <h1>ברוך הבא לאתר של ד"ר נידאל</h1>
      <ul>
        <li><a href="/login">התחברות</a></li>
        <li><a href="/dashboard">לוח בקרה</a></li>
        <li><a href="/medications">תרופות</a></li>
        <li><a href="/chat">צ'אט</a></li>
        <li><a href="/profile">פרופיל</a></li>
      </ul>
    </div>
  );
}
