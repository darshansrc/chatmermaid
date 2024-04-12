import React, {
  useState,
  useRef,
  useEffect,
  Fragment,
  useCallback,
} from "react";
import { getCodeString } from "rehype-rewrite";
import mermaid from "mermaid";
import MarkdownPreview from "@uiw/react-markdown-preview";

const randomid = () => parseInt(String(Math.random() * 1e15), 10).toString(36);
export const Code = ({ inline, children = [], className, ...props }) => {
  const demoid = useRef(`dome${randomid()}`);
  const [container, setContainer] = useState(null);
  const isMermaid =
    className && /^language-mermaid/.test(className.toLocaleLowerCase());
  const code =
    props.node && props.node.children
      ? getCodeString(props.node.children)
      : children[0] || "";

  useEffect(() => {
    const reRender = async () => {
      if (container && isMermaid) {
        try {
          const str = await mermaid.render(demoid.current, code);
          (container as HTMLElement).innerHTML = str.svg;
        } catch (error) {
          // (container as HTMLElement).innerHTML = error;
        }
      }
    };
    reRender();
  }, [container, isMermaid, code, demoid]);

  const refElement = useCallback((node) => {
    if (node !== null) {
      setContainer(node);
    }
  }, []);

  if (isMermaid) {
    return (
      <div className="bg-neutral-900 flex flex-col gap-4">
        <MarkdownPreview source={`\`\`\`mermaid\n${code}\n\`\`\``} />
        <code
          className="bg-neutral-900"
          id={demoid.current}
          style={{ display: "none" }}
        />
        <code className="bg-neutral-900" ref={refElement} data-name="mermaid" />
      </div>
    );
  }
  return <code>{children}</code>;
};
