const Youtube = ({ size = 24 }: { size?: number }) => {
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
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <polygon points="10,9 16,12 10,15 10,9" />
    </svg>
  );
};

export default Youtube;
