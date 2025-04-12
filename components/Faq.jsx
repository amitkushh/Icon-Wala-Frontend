import React from "react";

function Faq() {
  const Faq = [
    {
      id: "1",
      question: "What is an AI icon generator and how does it work?",
      answer:
        "Our AI icon generator uses advanced machine learning models to turn your text prompts or ideas into custom-designed icons. Just describe what you want, and the AI will create a unique, high-quality icon for you in seconds.",
    },
    {
      id: "2",
      question: "Can I use the generated icons for commercial projects?",
      answer:
        "Yes! All icons you generate are yours to use for both personal and commercial projects. Whether it’s for an app, website, logo, or client work — you have full rights.",
    },
    {
      id: "3",
      question: "Do I need any design skills to use this tool?",
      answer:
        "Not at all. The tool is designed for everyone — from developers and startups to marketers and hobbyists. Just type what you need, and the AI handles the rest.",
    },
    {
      id: "4",
      question: "What formats are the icons available in?",
      answer:
        "You can download icons in high-resolution PNG and SVG formats, ensuring they’re ready for both digital and print use. More formats may be added soon!",
    },
    {
      id: "5",
      question: "Can I customize the icons after generation?",
      answer:
        "Yes! After generating an icon, you can tweak aspects like color, background, and size directly within the editor — or download and edit in your favorite design tooll.",
    },
  ];

  return (
    <div className="px-7 py-16 md:py-24 md:px-20">
      <div>
        <h2 className="text-4xl font-bold">FAQ</h2>
      </div>
    </div>
  );
}

export default Faq;
