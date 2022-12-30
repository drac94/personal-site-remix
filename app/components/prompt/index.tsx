export default function Prompt({ path }: { path?: string }) {
  return (
    <div className="flex items-center text-lime-500">
      <span>~/luisguerrero.me/{path}</span>
      <span className="mx-2 inline-block h-2 w-2 -rotate-45 border-r-2 border-b-2 border-lime-500" />
    </div>
  );
}
