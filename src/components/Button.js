function Button({ text, fill, style, onClick }) {
  return (
    <div className='main-button' onClick={onClick}>
      <svg
        width={style.width}
        height={style.height}
        viewBox="0 0 274 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 115C-6 95 7.00002 40.5 19.5 32C32 23.5 266.5 -27 272 22.5C277.5 72 236.5 78 236.5 78C236.5 78 17 135 5.5 115Z"
          fill="black"
          stroke="black"
        />
        <text x="125" y="70" textAnchor="middle" fill={style.color} {...style}>
          {text}
        </text>
      </svg>
    </div>
  );
}

export default Button;
