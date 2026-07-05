const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-slate-400 md:flex-row">
        <p>
          © {currentYear} Mohan. All rights reserved.
        </p>

        <p>
          Built with{" "}
          <span className="font-medium text-cyan-400">React</span>,
          {" "}
          <span className="font-medium text-cyan-400">FastAPI</span>,
          {" "}
          <span className="font-medium text-cyan-400">Docker</span>,
          {" "}
          and{" "}
          <span className="font-medium text-cyan-400">AWS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;