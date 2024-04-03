export default function Home() {
  return (
    <main className="grid items-center justify-center h-screen">
      <div className="bg-primarylight p-4 w-[350px] text-neutral-50 border border-border rounded-md flex items-center justify-center flex-col">
        <h1 className="text-3xl glitch">Login</h1>
        <input
          type="text"
          className="w-full border border-border rounded-md bg-primarylighter py-2 pl-2 mt-4 mb-2 outline-none"
          placeholder="Username"
        />
        <input
          type="password"
          className="w-full border border-border rounded-md bg-primarylighter py-2 pl-2 mt-2 mb-4 outline-none"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full border border-border rounded-md bg-secondary py-2 pl-2 mt-2 mb-4 outline-none"
        >
          Sign in
        </button>
      </div>
    </main>
  );
}
