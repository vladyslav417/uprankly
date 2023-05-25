import theme from "../src/theme";
import {
  FaCertificate,
  FaChalkboard,
  FaChalkboardTeacher,
  FaCode,
  FaEnvelope,
  FaLaptop,
} from "react-icons/fa";

export default [
  {
    id: 1,
    icon: <FaChalkboardTeacher />,
    color: theme.palette.primary.main,
    title: "Established In 2006",
    text:
      "We are SEO veterans and we have evolved our strategy over time to get better results – while being compliant with Google’s editorial guidelines.",
  },
  {
    id: 2,
    icon: <FaChalkboard />,
    color: theme.palette.primary.main,
    title: "Relevant Powerful Links",
    text:
      "Building low-quality links is a strategy that backfires in the long term. That’s why – our team is dedicated to finding safe, contextual and relevant links for you.",
  },
  {
    id: 3,
    icon: <FaLaptop />,
    color: theme.palette.info.main,
    title: "Reduce Operational Cost",
    text:
      "Working with Uprankly is much cheaper than hiring, training and managing an in-house team. (Plus, you’ll get much better results from our expertise).",
  },
  {
    id: 4,
    icon: <FaCode />,
    color: theme.palette.error.main,
    title: "Only White Hat Strategies",
    text:
      "We don’t do Black Hat or Grey Hat link building. We are all about getting high-quality links that boost traffic and sales growth in the long term.",
  },
  {
    id: 5,
    icon: <FaEnvelope />,
    color: theme.palette.primary.main,
    title: "World-class Customer Support",
    text:
      "Get prompt email support all through the week for any questions your team may have about link building.",
  },
  {
    id: 6,
    icon: <FaCertificate />,
    color: theme.palette.warning.main,
    title: "100% Satisfaction Guarantee",
    text:
      "Our clients approve all the sites before the links are placed. 96% of our links stay live for years - but if any of them are removed within 6 months, we’ll replace the link for free.",
  },
];
