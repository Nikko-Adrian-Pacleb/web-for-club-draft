// components/Card.js

export default function EventCard({
  title,
  about,
  location,
  advisors,
  imgLink,
  datetime,
}) {
  return (
    <div className="border p-4 rounded-md shadow-lg text-center max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-2">{about}</p>
      <p className="mb-2">{location}</p>
      <p className="mb-2">Advisors: {advisors.join(", ")}</p>
      <img src={imgLink} alt={title} width="200" className="mx-auto mb-4" />
      <p className="mb-1">Date: {datetime.toLocaleDateString()}</p>
      <p>Time: {datetime.toLocaleTimeString()}</p>
    </div>
  );
}
