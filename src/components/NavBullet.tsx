const NavBullet = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="bullet">
      <circle
        cx="10"
        cy="10"
        r="8"
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="out-bullet"
      />
      <circle
        cx="10"
        cy="10"
        r="6.5"
        fill="rgba(18, 18, 18, 1)"
        stroke="rgba(18, 18, 18, 1)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="in-bullet"
      />
    </svg>
  );
};

export default NavBullet;