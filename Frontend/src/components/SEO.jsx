import { useEffect } from "react";

const BASE_TITLE = "Capton Visa Point";

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | Study & Immigration Consultants`;

    const setMeta = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
  }, [title, description, keywords]);

  return null;
};

export default SEO;
