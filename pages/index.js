import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.busytourist.com/wp-content/uploads/2019/07/Albuquerque-Balloon-Fiesta.jpg.webp",
    address: "123 Hot Air Balloon Blvd, Albuquerque, New Mexico",
    description: "A Hot Air Ballon Meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://bigseventravel.com/wp-content/uploads/2019/07/espresso-fino.jpg",
    address: "456 Coffee Shop Lane, Albuquerque, New Mexico",
    description: "A Coffee Shop Meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
