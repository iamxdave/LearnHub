import ManOne from "@/public/man_one.png";
import ManTwo from "@/public/man_two.png";
import WomanOne from "@/public/woman_one.png";
import { BiTime,BiTrendingUp,BiUser,BiVideo } from "react-icons/bi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Features",
    hash: "#features",
  },
  {
    name: "Pricings",
    hash: "#pricings",
  },
  {
    name: "Reviews",
    hash: "#reviews",
  },
] as const;

export const contactLink = {
  name: "Get started",
  hash: "#get-started",
} as const;

export const homeData = [
  {
    listing: "Access a vast library of video courses",
    icon: BiVideo,
  },
  {
    listing: "Learn from industry experts and experienced instructors",
    icon: BiUser,
  },
  {
    listing: "Learn at your own pace, anytime, anywhere",
    icon: BiTime,
  },
  {
    listing: "Stay updated with the latest trends and skills",
    icon: BiTrendingUp,
  },
] as const;

export const featuresData = [
  {
    title: "Extensive Course Library",
    description:
      "At LearnHub, we offer an extensive course library with thousands of video lessons covering diverse subjects. Whether you're interested in technology, arts, science, or business, you'll find a course that suits your interests and goals.",
  },
  {
    title: "Expert Instructors",
    description:
      "Our courses are taught by industry experts and experienced instructors who are passionate about sharing their knowledge. Learn from the best and gain insights from professionals who excel in their fields.",
  },
  {
    title: "Flexible Learning",
    description:
      "We understand that life can be busy, so we offer flexible learning options. You can access our video courses at any time and from any device, allowing you to learn at your own pace and convenience.",
  },
] as const;

export const pricingsData = [
  {
    type: "Beginner",
    price: "Free",
    description: "For beginners who want to learn new skills",
    features: [
      "Access to all courses",
      "Unlimited learning",
      "Limited access to new courses",
    ],
  },
  {
    type: "Pro",
    price: "$9.99",
    description: "For professionals who want to master new skills",
    features: [
      "Access to all courses",
      "Unlimited learning",
      "Unlimited access to new courses",
    ],
  },
  {
    type: "Team",
    price: "$19.99",
    description: "For teams who want to learn together",
    features: [
      "Access to all courses",
      "Unlimited learning",
      "Unlimited access to new courses",
      "Team management tools",
    ],
  },
] as const;

export const reviewsData = [
  {
    name: "John Cooper",
    title: "Web Developer",
    avatar: ManOne,
    review:
      "LearnHub has helped me learn new skills and advance my career. I highly recommend it to anyone who wants to learn new skills and advance their career.",
  },
  {
    name: "Jane Doe",
    title: "Data Scientist",
    avatar: WomanOne,
    review:
      "I've been using LearnHub for a few months now and I'm really impressed with the quality of the courses. I've learned a lot and I'm excited to learn more.",
  },
  {
    name: "Mary Smith",
    title: "Software Engineer",
    avatar: ManTwo,
    review:
      "LearnHub is a great platform for learning new skills. I've been using it for a few months now and I'm really impressed with the quality of the courses.",
  },
] as const;