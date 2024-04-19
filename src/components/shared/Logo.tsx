const Logo = ({ customClass }: { customClass: string }) => {
  return (
    <div className={`text-2xl font-semibold tracking-wider ${customClass}`}>
      <span className="text-primary font-bold text-4xl border border-secondary px-2 py-1 hover:bg-secondary transition-all duration-300">
        I
      </span>{" "}
      dentity
    </div>
  );
};

export default Logo;
