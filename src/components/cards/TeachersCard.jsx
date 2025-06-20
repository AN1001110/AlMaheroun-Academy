export default function teachersCard({
  img,
  name,
  desc,
  subscriptionLink,
  FreeTrial,
}) {
  return (
    <div className="teacher-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <div className="links">
        <a href={subscriptionLink} className="btn">
          حلقة تجريبية مجانية
        </a>
        <a href={FreeTrial} className="btn">
          احجز الآن
        </a>
      </div>
    </div>
  );
}
