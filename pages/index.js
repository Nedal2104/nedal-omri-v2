export default function Home() {
  return (
    <main dir="rtl" style={{ padding: '2rem' }}>
      <h1>מערכת ניהול רפואית</h1>
      <ul>
        <li><a href="/login">התחברות</a></li>
        <li><a href="/dashboard">לוח בקרה</a></li>
        <li><a href="/medications">רשימת תרופות</a></li>
        <li><a href="/chat">צ'אט</a></li>
        <li><a href="/profile">פרופיל</a></li>
      </ul>
    </main>
  );
}
