const Linkedin = ({ size = 24 }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <circle cx="7" cy="7" r="1" />
      <path d="M11 17v-4a3 3 0 0 1 6 0v4" />
    </svg>
  );
};

export default Linkedin;
