import {
  type ActionArgs,
  json,
  type LoaderArgs,
  redirect,
} from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import Prompt from "~/components/prompt";
import { executeCommand, type Item } from "~/server";
import { commitSession, destroySession, getSession } from "~/sessions";

type PromptType = {
  command: string;
  output: string | Array<Item>;
  path: string;
};

export const action = async ({ request }: ActionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const formData = await request.formData();
  const command = formData.get("command");

  if (typeof command !== "string") {
    return json({ error: "Invalid command" }, { status: 400 });
  }
  const prompts = (session.get("prompts") || []) as Array<PromptType>;
  const currentPath = session.get("currentPath") || "home";

  const [commandName, arg] = command.split(" ");

  if (commandName === "clear") {
    return redirect("/", {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    });
  }

  const result = await executeCommand({
    command: commandName,
    currentPath,
    arg,
  });

  session.set("currentPath", result.newPath || currentPath);

  prompts.push({
    command,
    output: result.output,
    path: currentPath,
  });

  session.set("prompts", prompts);

  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export const loader = async ({ request }: LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const prompts = (session.get("prompts") || []) as Array<PromptType>;
  const currentPath = session.get("currentPath") || "home";

  return typedjson({
    prompts,
    currentPath,
  });
};

export default function Index() {
  const { prompts, currentPath } = useTypedLoaderData<typeof loader>();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    formRef.current?.reset();
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
                <Prompt path={prompt.path} />
                <p>{prompt.command}</p>
              </div>
              {Array.isArray(prompt.output) ? (
                <ul className="grid grid-cols-4">
                  {prompt.output.map((item) => (
                    <li
                      className={item.type === "file" ? "text-blue-400" : ""}
                      key={item.name}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{prompt.output}</p>
              )}
            </div>
          ))}
          <div className="flex">
            <Prompt path={currentPath} />
            <Form method="post" ref={formRef} replace>
              <input type="submit" hidden />
              <input
                className="bg-transparent text-slate-200 outline-none"
                autoFocus
                name="command"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                ref={inputRef}
              />
              <input name="path" defaultValue={currentPath} hidden />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
