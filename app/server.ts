interface Directory {
  [key: string]: {
    directories?: Array<string>;
    files?: Array<string>;
  };
}

interface File {
  [key: string]: string;
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

const files: File = {
  "home/about.md": `# About Me \n\nI am a software engineer.`,
  "home/resume.md": `# Resume \n\nI am a software engineer.`,
  "home/articles/article1.md": `# Article 1 \n\nThis is article 1.`,
  "home/articles/article2.md": `# Article 2 \n\nThis is article 2.`,
  "home/projects/project1.md": `# Project 1 \n\nThis is project 1.`,
  "home/projects/project2.md": `# Project 2 \n\nThis is project 2.`,
};

const doesDirectoryExist = (path: string) => {
  return directories[path] !== undefined;
};

const doesFileExist = (path: string) => {
  return files[path] !== undefined;
};

const getItems = (path: string): Array<Item> => {
  const isPathValid = doesDirectoryExist(path);
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
  arg?: string;
}): Promise<CommandResult> => {
  const normalizedCommand = command.trim().toLowerCase();
  const normalizedArg = arg?.trim().toLowerCase();
  switch (normalizedCommand) {
    case "":
      return { output: "", currentPath: currentPath };
    case "ls":
      return { output: getItems(currentPath), currentPath: currentPath };
    case "cd":
      // currently there is only one level down from home
      if (!arg || arg === "~" || normalizedArg === "..") {
        return { output: "", currentPath: currentPath, newPath: "home" };
      }
      const path = `${currentPath}/${normalizedArg}`;
      const isDirectory = doesDirectoryExist(path);
      return {
        output: isDirectory
          ? ""
          : doesFileExist(path)
          ? "cd: not a directory: " + normalizedArg
          : "cd: no such file or directory: " + normalizedArg,
        currentPath,
        newPath: isDirectory ? path : currentPath,
      };
    case "cat":
      const file = `${currentPath}/${normalizedArg}`;
      const isFile = doesFileExist(file);
      return {
        output: isFile
          ? files[file]
          : doesDirectoryExist(file)
          ? "cat: " + normalizedArg + ": Is a directory"
          : "cat: " + normalizedArg + ": No such file or directory",
        currentPath,
      };
    default:
      return {
        output: "command not found: " + command,
        currentPath: currentPath,
      };
  }
};
