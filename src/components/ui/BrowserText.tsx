import { TextData } from "@/data/textData";
import Link from "@/components/ui/Link";

interface BrowserProps {
  textData: TextData;
}

export default function BrowserText({ textData }: BrowserProps) {
  return (
    <div className="mockup-browser border bg-light-blue [&:not(:last-child)]:mb-10">
      <div className="mockup-browser-toolbar">
        <div className="input">
          <a href={textData.href} target="_blank">
            {textData.href}
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center bg-base-200 px-4 py-16">
        <div className="mb-10 flex flex-col items-center">
          <h2 className="max-w-[80ch] text-center text-2xl font-bold md:text-3xl xl:text-4xl">
            {textData.heading}
          </h2>
          <h3 className="mb-10 max-w-[80ch] text-center text-lg opacity-70 md:text-xl xl:text-2xl">
            {textData.subheading}
          </h3>
          <p className="mb-4 max-w-[80ch] text-justify md:text-lg xl:text-xl">
            {textData.paragraph0}
          </p>
          <p className="max-w-[80ch] text-justify md:text-lg xl:text-xl">
            {textData.paragraph1}
          </p>
        </div>
        <Link className="text-blue" href={textData.href}>
          Leia aqui &rarr;
        </Link>
      </div>
    </div>
  );
}
