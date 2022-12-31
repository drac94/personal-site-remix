var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3, handleRequest = (request, responseStatusCode, responseHeaders, remixContext) => (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) : handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
), entry_server_default = handleRequest, handleBotRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    {
      onAllReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
}), handleBrowserRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    {
      onShellReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
});

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JEZBQ2HF.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
], meta = () => ({
  charset: "utf-8",
  title: "Luis Guerrero personal website",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader
});
var import_node3 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_react4 = require("react"), import_remix_typedjson = require("remix-typedjson");

// app/components/prompt/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Prompt({
  path,
  command
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-blue-500", children: [
      "~/luisguerrero.me/",
      path
    ] }, void 0, !0, {
      fileName: "app/components/prompt/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "mx-2 inline-block h-2 w-2 -rotate-45 border-r-2 border-b-2 border-blue-500" }, void 0, !1, {
      fileName: "app/components/prompt/index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    command
  ] }, void 0, !0, {
    fileName: "app/components/prompt/index.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/server.ts
var directories = {
  home: {
    directories: ["articles", "projects"],
    files: ["about.md", "resume.md"]
  },
  "home/articles": {
    files: ["article1.md", "article2.md"]
  },
  "home/projects": {
    files: ["project1.md", "project2.md"]
  }
}, files = {
  "home/about.md": `# About Me 

I am a software engineer.`,
  "home/resume.md": `# Resume 

I am a software engineer.`,
  "home/articles/article1.md": `# Article 1 

This is article 1.`,
  "home/articles/article2.md": `# Article 2 

This is article 2.`,
  "home/projects/project1.md": `# Project 1 

This is project 1.`,
  "home/projects/project2.md": `# Project 2 

This is project 2.`
}, doesDirectoryExist = (path) => directories[path] !== void 0, doesFileExist = (path) => files[path] !== void 0, getItems = (path) => {
  if (!doesDirectoryExist(path))
    return [];
  let { directories: dir, files: files2 } = directories[path];
  return [
    ...(dir == null ? void 0 : dir.map(
      (directory) => ({ name: directory, type: "directory" })
    )) ?? [],
    ...(files2 == null ? void 0 : files2.map((file) => ({ name: file, type: "file" }))) ?? []
  ];
}, executeCommand = async ({
  command,
  currentPath,
  arg
}) => {
  let normalizedCommand = command.trim().toLowerCase(), normalizedArg = arg == null ? void 0 : arg.trim().toLowerCase();
  switch (normalizedCommand) {
    case "":
      return { output: "", currentPath };
    case "ls":
      return { output: getItems(currentPath), currentPath };
    case "cd":
      if (!arg || arg === "~" || normalizedArg === "..")
        return { output: "", currentPath, newPath: "home" };
      let path = `${currentPath}/${normalizedArg}`, isDirectory = doesDirectoryExist(path);
      return {
        output: isDirectory ? "" : doesFileExist(path) ? "cd: not a directory: " + normalizedArg : "cd: no such file or directory: " + normalizedArg,
        currentPath,
        newPath: isDirectory ? path : currentPath
      };
    case "cat":
      let file = `${currentPath}/${normalizedArg}`;
      return {
        output: doesFileExist(file) ? files[file] : doesDirectoryExist(file) ? "cat: " + normalizedArg + ": Is a directory" : "cat: " + normalizedArg + ": No such file or directory",
        currentPath
      };
    default:
      return {
        output: "command not found: " + command,
        currentPath
      };
  }
};

// app/sessions.ts
var import_node2 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session"
  }
});

// app/routes/index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie")), command = (await request.formData()).get("command");
  if (typeof command != "string")
    return (0, import_node3.json)({ error: "Invalid command" }, { status: 400 });
  let prompts = session.get("prompts") || [], currentPath = session.get("currentPath") || "home", [commandName, arg] = command.split(" ");
  if (commandName === "clear")
    return (0, import_node3.redirect)("/", {
      headers: {
        "Set-Cookie": await destroySession(session)
      }
    });
  let result = await executeCommand({
    command: commandName,
    currentPath,
    arg
  });
  return session.set("currentPath", result.newPath || currentPath), prompts.push({
    command,
    output: result.output,
    path: currentPath
  }), session.set("prompts", prompts), (0, import_node3.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}, loader = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie")), prompts = session.get("prompts") || [], currentPath = session.get("currentPath") || "home";
  return (0, import_remix_typedjson.typedjson)({
    prompts,
    currentPath
  });
};
function Index() {
  let { prompts, currentPath } = (0, import_remix_typedjson.useTypedLoaderData)(), containerRef = (0, import_react4.useRef)(null), formRef = (0, import_react4.useRef)(null), inputRef = (0, import_react4.useRef)(null);
  return (0, import_react4.useEffect)(() => {
    var _a, _b, _c;
    (_a = formRef.current) == null || _a.reset(), (_b = inputRef.current) == null || _b.focus(), (_c = containerRef.current) == null || _c.scrollTo(0, containerRef.current.scrollHeight);
  }, [prompts]), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex h-screen items-center justify-center bg-slate-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex h-screen w-screen flex-col sm:h-[600px] sm:w-[800px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid h-10 grid-cols-3 bg-slate-200 px-4 sm:rounded-t-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block h-4 w-4 rounded-full border border-red-600 bg-red-400" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block h-4 w-4 rounded-full border border-yellow-600 bg-yellow-400" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "block h-4 w-4 rounded-full border border-green-600 bg-green-400" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-center align-middle leading-10", children: "luisguerrero.me" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        className: "flex-1 overflow-scroll bg-slate-800 p-4 sm:rounded-b-lg",
        ref: containerRef,
        onClick: () => {
          var _a;
          return (_a = inputRef.current) == null ? void 0 : _a.focus();
        },
        children: [
          prompts.map((prompt) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-slate-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "break-all", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Prompt, { path: prompt.path, command: prompt.command }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 108,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 107,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 106,
              columnNumber: 15
            }, this),
            Array.isArray(prompt.output) ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "grid grid-cols-4", children: prompt.output.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "li",
              {
                className: item.type === "file" ? "text-teal-500" : "",
                children: item.name
              },
              item.name,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 114,
                columnNumber: 21
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 112,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "break-all", children: prompt.output }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 123,
              columnNumber: 17
            }, this)
          ] }, prompt.command, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Prompt, { path: currentPath }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 128,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_react3.Form,
              {
                method: "post",
                ref: formRef,
                action: "/?index",
                className: "flex-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { name: "path", defaultValue: currentPath, hidden: !0 }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 135,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    "input",
                    {
                      className: "w-full bg-transparent text-slate-200 outline-none",
                      autoFocus: !0,
                      name: "command",
                      autoComplete: "off",
                      autoCapitalize: "off",
                      autoCorrect: "off",
                      ref: inputRef
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 136,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "submit", className: "h-0 w-0" }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 145,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 129,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 127,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 99,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "8cfaee1c", entry: { module: "/build/entry.client-V7NR2TP6.js", imports: ["/build/_shared/chunk-LARA5CK4.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-T457BOAP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-IAFOMUGP.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-8CFAEE1C.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
