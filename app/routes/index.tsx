import { useEffect, useRef, useState } from "react";
import Prompt from "~/components/prompt";

export default function Index() {
  const [prompts, setPrompts] = useState([
    {
      command: "ls",
      output: "about projects",
    },
    {
      command: "cd about",
      output: "about me",
    },
  ]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
  }, [prompts]);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-500">
      <div className="flex h-screen w-screen flex-col sm:h-[600px] sm:w-[800px]">
        <div className="grid h-10 grid-cols-3 bg-slate-200 px-4 sm:rounded-t-lg">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border border-red-600 bg-red-400" />
            <span className="block h-4 w-4 rounded-full border border-yellow-600 bg-yellow-400" />
            <span className="block h-4 w-4 rounded-full border border-green-600 bg-green-400" />
          </div>
          <p className="text-center align-middle leading-10">luisguerrero.me</p>
        </div>
        <div
          className="flex-1 overflow-scroll bg-slate-800 p-4 sm:rounded-b-lg"
          ref={containerRef}
          onClick={() => inputRef.current?.focus()}
        >
          {prompts.map((prompt) => (
            <div className="text-slate-200" key={prompt.command}>
              <div className="flex">
                <Prompt />
                <p>{prompt.command}</p>
              </div>
              <p>{prompt.output}</p>
            </div>
          ))}
          <div className="flex">
            <Prompt />
            <input
              className="bg-transparent text-slate-200 outline-none"
              autoFocus
              ref={inputRef}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setPrompts([
                    ...prompts,
                    {
                      command: event.currentTarget.value,
                      output: "about me",
                    },
                  ]);
                  event.currentTarget.value = "";
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
