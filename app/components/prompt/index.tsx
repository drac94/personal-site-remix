export default function Prompt({
  path,
  command,
}: {
  path?: string;
  command?: string;
}) {
  return (
    <p>
      <span className="text-blue-500">~/luisguerrero.me/{path}</span>
      <span className="mx-2 inline-block h-2 w-2 -rotate-45 border-r-2 border-b-2 border-blue-500" />
      {command}
    </p>
  );
}
