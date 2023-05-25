import theme from "../src/theme";
import { FaEnvelope, FaFax, FaMapMarker, FaPhone } from "react-icons/fa";

export default [
  {
    id: 1,
    icon: <FaMapMarker />,
    color: theme.palette.primary.main,
    title: "Address",
    subtitle: "700/B, DT Road.",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    color: theme.palette.primary.main,
    title: "Email",
    subtitle: "support@uprankly.com",
  },
  {
    id: 3,
    icon: <FaPhone />,
    color: theme.palette.primary.main,
    title: "Phone Number",
    subtitle: "+88 (01919) 532 888",
  },
  {
    id: 4,
    icon: <FaFax />,
    color: theme.palette.primary.main,
    title: "Fax",
    subtitle: "+88 (01919) 532 888",
  },
];
