import React from "react";

type Props = {
  content: string
};

const HostRenderer = ({ content }: Props) => {
  return (
    <>
      {
        content.split(" ").map((word: string, index: number) => {
          const urlPattern = /(https?:\/\/[^\s]+)/g;
          if (urlPattern.test(word)) {
            return (
              <span
                key={index}
              >
                <a
                  href={word}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  {"302.AI"}
                </a>
                {" "}
              </span>
            );
          }
          return `${word} `;
        })
      }
    </>
  );
};

export default HostRenderer;
