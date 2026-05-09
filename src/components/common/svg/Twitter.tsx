const Twitter = ({ size = 24 }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 5.8c-.7.3-1.5.5-2.2.6a3.8 3.8 0 0 0 1.7-2.1 7.6 7.6 0 0 1-2.4.9 3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 3 4.9a3.8 3.8 0 0 0 1.2 5 3.7 3.7 0 0 1-1.7-.5v.1a3.8 3.8 0 0 0 3 3.7 3.8 3.8 0 0 1-1.7.1 3.8 3.8 0 0 0 3.6 2.6A7.7 7.7 0 0 1 2 18.6a10.8 10.8 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5A7.7 7.7 0 0 0 22 5.8z" />
    </svg>
  );
};

export default Twitter;
