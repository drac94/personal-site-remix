interface File {
  id: string;
  name: string;
  content: string;
}

interface Directory {
  id: string;
  name: string;
  files?: Array<File>;
  directories?: Array<Directory>;
}

const paths: Array<Directory> = [
  {
    id: "0",
    name: "home",
    files: [
      {
        id: "1",
        name: "about",
        content: "about me",
      },
      {
        id: "2",
        name: "resume",
        content: "resume",
      },
    ],
    directories: [
      {
        id: "3",
        name: "articles",
        files: [
          {
            id: "4",
            name: "article1",
            content: "article1",
          },
        ],
      },
      {
        id: "5",
        name: "projects",
        files: [
          {
            id: "6",
            name: "project1",
            content: "project1",
          },
        ],
      },
    ],
  },
];

type ItemType = "file" | "directory";

export interface Item {
  id: string;
  name: string;
  type: ItemType;
}

interface CommandResult {
  output: string | Array<Item>;
  currentPath: string;
  newPath?: string;
}

const getItems = (path: string): Array<Item> => {
  const currentPath = paths.find((p) => p.name === path);
  if (!currentPath) {
    return [];
  }
  const files =
    currentPath.files?.map(
      (f): Item => ({ id: f.id, name: f.name, type: "file" })
    ) || [];
  const directories =
    currentPath.directories?.map(
      (d): Item => ({ id: d.id, name: d.name, type: "directory" })
    ) || [];
  return [...files, ...directories];
};

const doesPathExist = (path: string) => {
  // currently there is only one directory, so this is fine
  return paths[0].directories?.find((p) => p.name === path);
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
      const isPathValid = doesPathExist(arg);
      return {
        output: isPathValid ? "" : "cd: no such file or directory: " + arg,
        currentPath,
        newPath: isPathValid ? `${currentPath}/${arg}` : currentPath,
      };
    default:
      return {
        output: "command not found: " + command,
        currentPath: currentPath,
      };
  }
};
