import React, { useState } from 'react';
import styles from './Header.module.css';

interface Props {
  onSearch: (location: string) => void;
}

const Header: React.FC<Props> = ({ onSearch }) => {
  const [location, setLocation] = useState<string>('');

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <header className={styles.header}>
      <svg width="311" height="126" viewBox="0 0 311 126" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
          <path d="M37.376 75.264C37.376 82.56 31.424 88.64 20.736 88.64C10.048 88.64 3.776 82.688 3.328 73.984H8.192C8.64 80.512 12.736 84.736 20.672 84.736C27.2 84.736 32.32 81.408 32.32 75.904C32.32 71.168 29.632 68.992 23.104 67.648L17.28 66.496C11.2 65.28 4.8 62.464 4.8 54.464C4.8 47.104 11.264 41.408 20.416 41.408C29.376 41.408 36.288 47.04 36.8 55.808H31.872C31.552 49.728 27.072 45.312 20.48 45.312C13.44 45.312 9.664 49.6 9.664 54.208C9.664 59.648 14.272 61.312 19.392 62.336L25.216 63.552C32.96 65.152 37.376 68.352 37.376 75.264ZM51.109 88H46.309V42.048H51.109V64.192L72.869 42.048H78.437L56.037 64.96L79.077 88H72.869L51.109 66.432V88ZM102.707 70.784V88H97.9065V70.784L81.2025 42.048H86.4505L100.467 66.304L114.547 42.048H119.539L102.707 70.784ZM137.071 72.32H116.847V68.352H137.071V72.32ZM164.149 88.96C151.349 88.96 141.685 78.528 141.685 64.96C141.685 51.456 151.349 41.088 164.149 41.088C175.093 41.088 184.117 48.448 185.909 59.392H180.853C179.381 51.2 172.597 45.376 164.149 45.376C153.973 45.376 146.613 53.696 146.613 64.96C146.613 76.352 153.973 84.672 164.149 84.672C172.661 84.672 179.445 78.784 180.853 70.592H185.909C184.117 81.536 175.093 88.96 164.149 88.96ZM223.943 88L219.143 75.264H197.703L192.839 88H188.103L205.959 42.048H211.207L228.999 88H223.943ZM208.455 47.168L199.175 71.36H217.607L208.455 47.168ZM266.876 75.264C266.876 82.56 260.924 88.64 250.236 88.64C239.548 88.64 233.276 82.688 232.828 73.984H237.692C238.14 80.512 242.236 84.736 250.172 84.736C256.7 84.736 261.82 81.408 261.82 75.904C261.82 71.168 259.132 68.992 252.604 67.648L246.78 66.496C240.7 65.28 234.3 62.464 234.3 54.464C234.3 47.104 240.764 41.408 249.916 41.408C258.876 41.408 265.788 47.04 266.3 55.808H261.372C261.052 49.728 256.572 45.312 249.98 45.312C242.94 45.312 239.164 49.6 239.164 54.208C239.164 59.648 243.772 61.312 248.892 62.336L254.716 63.552C262.46 65.152 266.876 68.352 266.876 75.264ZM290.315 88H285.579V46.336H270.155V42.048H305.739V46.336H290.315V88Z" fill="#FF7A41"/>
          <circle cx="155" cy="63" r="61.5" stroke="url(#paint0_linear_1_9)" stroke-width="3"/>
          <defs>
          <linearGradient id="paint0_linear_1_9" x1="155" y1="0" x2="155" y2="126" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF7A41"/>
          <stop offset="0.775" stop-color="#FF7A41" stop-opacity="0"/>
          </linearGradient>
          </defs>
        </svg>
      <div className={styles.searchbar}>
        <input type="text" className={styles.input} placeholder="Search..." value={location} onChange={(e) => setLocation(e.target.value)} />
        <button onClick={handleSearch}>
            <svg width="39" height="43" viewBox="0 0 39 43" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.searchicon}>
                <path d="M28.1417 30.0524L27.2107 28.8763L26.0285 29.8121L26.9704 30.9895L28.1417 30.0524ZM27.3381 30.6487L28.5094 29.7117L27.6336 28.6169L26.4822 29.4169L27.3381 30.6487ZM35.2191 40.5L34.0478 41.437L34.9849 42.6083L36.1562 41.6713L35.2191 40.5ZM36 39.8753L36.937 41.0466L38.1083 40.1096L37.1713 38.9383L36 39.8753ZM32.7191 17.5C32.7191 22.1106 30.5689 26.218 27.2107 28.8763L29.0727 31.2286C33.1188 28.0258 35.7191 23.0661 35.7191 17.5H32.7191ZM18.2191 3C26.2272 3 32.7191 9.49187 32.7191 17.5H35.7191C35.7191 7.83502 27.8841 0 18.2191 0V3ZM3.71912 17.5C3.71912 9.49187 10.211 3 18.2191 3V0C8.55413 0 0.719116 7.83502 0.719116 17.5H3.71912ZM18.2191 32C10.211 32 3.71912 25.5081 3.71912 17.5H0.719116C0.719116 27.165 8.55413 35 18.2191 35V32ZM26.4822 29.4169C24.1383 31.0456 21.2924 32 18.2191 32V35C21.9238 35 25.3638 33.8471 28.194 31.8806L26.4822 29.4169ZM36.3904 39.563L28.5094 29.7117L26.1668 31.5858L34.0478 41.437L36.3904 39.563ZM35.0629 38.704L34.2821 39.3287L36.1562 41.6713L36.937 41.0466L35.0629 38.704ZM26.9704 30.9895L34.8287 40.8123L37.1713 38.9383L29.313 29.1154L26.9704 30.9895Z" fill="#FF7A41"/>
            </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;