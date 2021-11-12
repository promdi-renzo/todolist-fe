function AddButton({onClick}) {
  return (
    <div className="add-button" onClick={onClick}>
      <svg
        width="162"
        height="97"
        viewBox="0 0 162 97"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M161.505 90.5164C161.505 90.5164 -42 96.8579 12 83C66 69.1421 82.5052 21.8741 99.5052 4.87424C116.505 -12.1256 153.586 20.8683 161.505 20.0165V90.5164Z"
          fill="black"
        />
        <path
          d="M119.005 34.8744L119.505 74.8744"
          stroke="white"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path
          d="M139.003 53.8744L99.0052 54.519"
          stroke="white"
          strokeWidth="11"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default AddButton;
