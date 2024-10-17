import { useDomain } from "@/hooks/global/use-domain";

// Props type definition with optional "replace" parameter
type Props = {
  content: string;
  replace?: string;
};

// Component that renders content and replaces URLs or specified keywords with link
const HostRenderer = ({ content, replace = "302.AI" }: Props) => {
  const domain = useDomain(); // Retrieve the current domain
  const urlPattern = /(https?:\/\/[^\s]+)/g; // Regular expression to detect URLs

  // Split content by spaces and map each word for rendering
  return (
    <>
      {content.split(" ").map((word, index) => (
        <span key={index}>
          {/* Check if the word matches the URL pattern or if it matches the replace keyword */}
          {urlPattern.test(word) || word === replace ? (
            <a
              href={word === replace ? domain : word} // Use domain if the word is the replace keyword
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              {replace}{" "}
              {/* Display the replace keyword or "302.AI" as link text */}
            </a>
          ) : (
            word // Render the word as regular text if not a URL
          )}{" "}
        </span>
      ))}
    </>
  );
};

export default HostRenderer;
