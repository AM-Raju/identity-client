"use client";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className=" h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl text-red-500 font-semibold text-center">
        Something went wrong
      </h1>
      <h1 className="text-4xl text-red-500 font-semibold text-center">
        {error.message}
      </h1>
      <div>
        <button
          className="bg-secondary px-3 py-2 rounded-lg"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
