export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-500">
      <div>
        <div className="grid h-10 grid-cols-3 rounded-t-lg bg-slate-200 px-4">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border border-red-600 bg-red-400" />
            <span className="block h-4 w-4 rounded-full border border-yellow-600 bg-yellow-400" />
            <span className="block h-4 w-4 rounded-full border border-green-600 bg-green-400" />
          </div>
          <p className="text-center align-middle leading-10">luisguerrero.me</p>
        </div>
        <div className="h-[600px] w-[800px] rounded-b-lg bg-slate-800">
          <p className="p-4 text-slate-200">previous commands</p>
        </div>
      </div>
    </div>
  );
}
