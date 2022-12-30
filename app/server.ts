interface Directory {
  [key: string]: {
    directories?: Array<string>;
    files?: Array<string>;
  };
}

type ItemType = "file" | "directory";

export interface Item {
  name: string;
  type: ItemType;
}

interface CommandResult {
  output: string | Array<Item>;
  currentPath: string;
  newPath?: string;
}

const directories: Directory = {
  home: {
    directories: ["articles", "projects"],
    files: ["about.md", "resume.md"],
  },
  "home/articles": {
    files: ["article1.md", "article2.md"],
  },
  "home/projects": {
    files: ["project1.md", "project2.md"],
  },
};

const doesPathExist = (path: string) => {
  return directories[path] !== undefined;
};

const getItems = (path: string): Array<Item> => {
  const isPathValid = doesPathExist(path);
  if (!isPathValid) {
    return [];
  }
  const { directories: dir, files } = directories[path];
  return [
    ...(dir?.map(
      (directory): Item => ({ name: directory, type: "directory" })
    ) ?? []),
    ...(files?.map((file): Item => ({ name: file, type: "file" })) ?? []),
  ];
};

export const executeCommand = async ({
  command,
  currentPath,
  arg,
}: {
  command: string;
  currentPath: string;
  arg: string;
}): Promise<CommandResult> => {
  switch (command) {
    case "":
      return { output: "", currentPath: currentPath };
    case "ls":
      return { output: getItems(currentPath), currentPath: currentPath };
    case "cd":
      // currently there is only one level down from home
      if (!arg || arg === "~" || arg === "..") {
        return { output: "", currentPath: currentPath, newPath: "home" };
      }
      const path = `${currentPath}/${arg}`;
      const isPathValid = doesPathExist(path);
      return {
        output: isPathValid ? "" : "cd: no such file or directory: " + arg,
        currentPath,
        newPath: isPathValid ? path : currentPath,
      };
    default:
      return {
        output: "command not found: " + command,
        currentPath: currentPath,
      };
  }
};
