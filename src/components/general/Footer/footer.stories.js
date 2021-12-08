import footer from './footer.html.twig';
import './footer.scss';

export default {
  title: 'Components/General/Footer',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Footer = (args) => footer(args);

const social_svgs = {
  blog: `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
          <polygon id="path-1" points="0 0 44 0 44 44.0000862 0 44.0000862"></polygon>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1564.000000, -44.000000)">
              <g id="Group-12" transform="translate(1564.000000, 44.000000)">
                  <path d="M14.2979027,25.3320157 L25.7721027,25.3320157 C26.6943238,25.3320157 27.4422104,26.0799022 27.4422104,27.0021234 C27.4422104,27.9243445 26.6943238,28.6722311 25.7721027,28.6722311 L14.2979027,28.6722311 C13.3753943,28.6722311 12.627795,27.9243445 12.627795,27.0021234 C12.627795,26.0799022 13.3753943,25.3320157 14.2979027,25.3320157 L14.2979027,25.3320157 Z M14.2979027,18.6860496 L30.1657928,18.6860496 C31.0883011,18.6860496 31.8359005,19.4339362 31.8359005,20.3561574 C31.8359005,21.2786657 31.0883011,22.0262651 30.1657928,22.0262651 L14.2979027,22.0262651 C13.3753943,22.0262651 12.627795,21.2786657 12.627795,20.3561574 C12.627795,19.4339362 13.3753943,18.6860496 14.2979027,18.6860496 L14.2979027,18.6860496 Z M9.78473457,31.5150043 C9.78473457,32.4708286 10.5624907,33.2482975 11.518315,33.2482975 L32.9539966,33.2482975 C33.909821,33.2482975 34.6872899,32.4708286 34.6872899,31.5150043 L34.6872899,26.996092 L30.3323727,28.4878443 C30.0848004,28.5728575 29.8478548,28.3356247 29.9331552,28.0880524 L31.557597,23.3721163 L34.6872899,20.2424235 L34.6872899,14.9032485 L9.78473457,14.9032485 L9.78473457,31.5150043 Z" id="Fill-1" fill="#FFFFFF"></path>
                  <path d="M16.8285682,13.2765377 C17.5813373,13.2765377 18.191939,12.6662232 18.191939,11.9131669 C18.191939,11.1603978 17.5813373,10.5500833 16.8285682,10.5500833 C16.0755119,10.5500833 15.4651974,11.1603978 15.4651974,11.9131669 C15.4651974,12.6662232 16.0755119,13.2765377 16.8285682,13.2765377" id="Fill-3" fill="#FFFFFF"></path>
                  <path d="M13.0335895,13.2765377 C13.7866458,13.2765377 14.3969603,12.6662232 14.3969603,11.9131669 C14.3969603,11.1603978 13.7866458,10.5500833 13.0335895,10.5500833 C12.2808204,10.5500833 11.6702187,11.1603978 11.6702187,11.9131669 C11.6702187,12.6662232 12.2808204,13.2765377 13.0335895,13.2765377" id="Fill-5" fill="#FFFFFF"></path>
                  <g id="Group-9">
                      <mask id="mask-2" fill="white">
                          <use xlink:href="#path-1"></use>
                      </mask>
                      <g id="Clip-8"></g>
                      <path d="M35.5983386,26.3273884 L35.5983386,31.5149181 C35.5983386,32.9753648 34.4144721,34.1592314 32.9540254,34.1592314 L11.5183437,34.1592314 C10.057897,34.1592314 8.87374323,32.9753648 8.87374323,31.5149181 L8.87374323,11.5678294 C8.87374323,10.1073827 10.057897,8.92322896 11.5183437,8.92322896 L11.7259942,8.92322896 L32.5157477,8.92322896 L32.9540254,8.92322896 C34.4144721,8.92322896 35.5983386,10.1073827 35.5983386,11.5678294 L35.5983386,19.3313172 L39.5069364,15.4227195 L43.0048283,18.9208987 L35.5983386,26.3273884 Z M40.4690792,14.4605766 L42.0288995,12.9007563 C38.5666212,5.29264744 30.903943,0 21.9999569,0 C9.84967203,0 -8.61620486e-05,9.84975819 -8.61620486e-05,22.0000431 C-8.61620486e-05,34.150328 9.84967203,44.0000862 21.9999569,44.0000862 C34.1502418,44.0000862 44,34.150328 44,22.0000431 C44,20.4712411 43.8434723,18.9789144 43.5465004,17.5379978 L40.4690792,14.4605766 Z" id="Fill-7" fill="#FFFFFF" mask="url(#mask-2)"></path>
                  </g>
                  <path d="M20.6235756,13.2765377 C21.3766319,13.2765377 21.9869464,12.6662232 21.9869464,11.9131669 C21.9869464,11.1603978 21.3766319,10.5500833 20.6235756,10.5500833 C19.8708065,10.5500833 19.2602048,11.1603978 19.2602048,11.9131669 C19.2602048,12.6662232 19.8708065,13.2765377 20.6235756,13.2765377" id="Fill-10" fill="#FFFFFF"></path>
              </g>
          </g>
      </g>
  </svg>`,
  facebook: `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1254.000000, -44.000000)" fill="#FFFFFF">
              <g id="fsa-facebook" transform="translate(1254.000000, 44.000000)">
                  <path d="M0,22 C0,9.9 9.9,0 22,0 C34.1,0 44,9.9 44,22 C44,34.1 34.1,44 22,44 C9.9,44 0,34.1 0,22 Z M23.54,34.21 L23.54,22.22 L26.84,22.22 L27.28,18.04 L23.54,18.04 L23.54,15.95 C23.54,14.85 23.65,14.3 25.19,14.3 L27.28,14.3 L27.28,10.23 L23.98,10.23 C20.02,10.23 18.59,12.21 18.59,15.62 L18.59,18.15 L16.17,18.15 L16.17,22.33 L18.59,22.33 L18.59,34.32 C18.59,34.21 23.54,34.21 23.54,34.21 Z"></path>
              </g>
          </g>
      </g>
  </svg>`,
  instagram: `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1502.000000, -44.000000)" fill="#FFFFFF">
              <g id="fsa-instagram" transform="translate(1502.000000, 44.000000)">
                  <path d="M22,0 C9.9,0 0,9.9 0,22 C0,34.1 9.9,44 22,44 C34.1,44 44,34.1 44,22 C44,9.9 34.1,0 22,0 Z M31.9,26.07 C31.9,26.84 31.68,27.72 31.46,28.49 C30.91,29.81 29.92,30.91 28.6,31.35 C27.83,31.68 27.06,31.79 26.18,31.79 C25.08,31.79 24.75,31.79 22.11,31.79 C19.47,31.79 19.03,31.79 18.04,31.79 C17.27,31.79 16.39,31.57 15.62,31.35 C14.3,30.8 13.2,29.81 12.76,28.49 C12.43,27.72 12.32,26.95 12.32,26.07 C12.32,24.97 12.21,24.64 12.21,22 C12.21,19.36 12.21,18.92 12.32,17.93 C12.32,17.16 12.54,16.28 12.76,15.51 C13.31,14.19 14.3,13.09 15.62,12.65 C16.39,12.32 17.16,12.21 18.04,12.21 C19.14,12.21 19.47,12.1 22.11,12.1 C24.75,12.1 25.19,12.1 26.18,12.21 C26.95,12.21 27.83,12.43 28.6,12.65 C29.92,13.2 31.02,14.19 31.46,15.51 C31.79,16.28 31.9,17.05 31.9,17.93 C31.9,19.03 31.9,19.36 31.9,22 C31.9,24.64 31.9,25.08 31.9,26.07 Z M22,16.94 C19.14,16.94 16.94,19.25 16.94,22 C16.94,24.75 19.25,27.06 22,27.06 C24.75,27.06 27.06,24.75 27.06,22 C27.06,19.25 24.86,16.94 22,16.94 C22,16.94 22,16.94 22,16.94 Z M22,25.3 C20.13,25.3 18.7,23.87 18.7,22 C18.7,20.13 20.13,18.7 22,18.7 C23.87,18.7 25.3,20.13 25.3,22 C25.3,23.87 23.87,25.3 22,25.3 Z M28.49,16.72 C28.49,17.38 27.94,17.93 27.28,17.93 C26.62,17.93 26.07,17.38 26.07,16.72 C26.07,16.06 26.62,15.51 27.28,15.51 L27.28,15.51 C27.94,15.51 28.49,16.06 28.49,16.72 Z"></path>
              </g>
          </g>
      </g>
  </svg>`,
  linkedin: `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1378.000000, -44.000000)" fill="#FFFFFF">
              <g id="fsa-linkedin" transform="translate(1378.000000, 44.000000)">
                  <path d="M0,22 C0,9.9 9.9,0 22,0 C34.1,0 44,9.9 44,22 C44,34.1 34.1,44 22,44 C9.9,44 0,34.1 0,22 Z M15.51,18.26 L10.56,18.26 L10.56,33.22 L15.51,33.22 L15.51,18.26 L15.51,18.26 Z M15.84,13.64 C15.84,12.21 14.74,11 13.09,11 C11.33,11 10.23,12.1 10.23,13.64 C10.23,15.07 11.33,16.28 12.98,16.28 L12.98,16.28 C14.74,16.17 15.84,15.07 15.84,13.64 Z M33.55,24.64 C33.55,20.02 31.13,17.93 27.83,17.93 C25.19,17.93 23.98,19.36 23.32,20.35 L23.32,18.26 L18.37,18.26 C18.48,19.69 18.37,33.22 18.37,33.22 L23.32,33.22 L23.32,24.86 C23.32,24.42 23.32,23.98 23.43,23.65 C23.76,22.77 24.64,21.78 25.96,21.78 C27.72,21.78 28.49,23.1 28.49,25.19 L28.49,33.22 L33.44,33.22 C33.55,33.22 33.55,24.64 33.55,24.64 Z"></path>
              </g>
          </g>
      </g>
  </svg>`,
  twitter: `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1316.000000, -44.000000)" fill="#FFFFFF">
              <g id="fsa-twitter" transform="translate(1316.000000, 44.000000)">
                  <path d="M0,22 C0,9.9 9.9,0 22,0 C34.1,0 44,9.9 44,22 C44,34.1 34.1,44 22,44 C9.9,44 0,34.1 0,22 Z M21.34,17.93 L21.34,18.7 L20.57,18.59 C17.82,18.26 15.29,17.05 13.2,14.96 L12.21,13.97 L11.99,14.74 C11.44,16.39 11.77,18.15 12.98,19.36 C13.64,20.02 13.42,20.13 12.43,19.69 C12.1,19.58 11.77,19.47 11.66,19.47 C11.55,19.58 11.88,21.01 12.21,21.56 C12.65,22.33 13.42,23.1 14.3,23.54 L15.07,23.87 L14.19,23.87 C13.31,23.87 13.31,23.87 13.42,24.2 C13.75,25.19 14.96,26.29 16.28,26.73 L17.27,27.06 L16.39,27.61 C15.18,28.38 13.75,28.71 12.32,28.71 C11.66,28.71 11.11,28.82 11.11,28.82 C11.11,28.93 12.98,29.81 14.08,30.14 C17.38,31.13 21.23,30.69 24.2,29.04 C26.29,27.83 28.38,25.41 29.37,22.99 C29.92,21.78 30.47,19.47 30.47,18.37 C30.47,17.71 30.47,17.6 31.35,16.72 C31.9,16.17 32.34,15.73 32.45,15.51 C32.56,15.18 32.56,15.18 31.79,15.51 C30.47,15.95 30.25,15.95 30.91,15.18 C31.35,14.63 32.01,13.75 32.01,13.53 C32.01,13.53 31.79,13.53 31.57,13.75 C31.24,13.86 30.69,14.19 30.25,14.3 L29.37,14.52 L28.6,13.97 C28.16,13.64 27.61,13.42 27.28,13.31 C26.51,13.09 25.3,13.09 24.64,13.42 C22.44,14.08 21.23,15.95 21.34,17.93 Z"></path>
              </g>
          </g>
      </g>
  </svg>`,
  youtube: `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1440.000000, -44.000000)" fill="#FFFFFF">
              <g id="fsa-youtube" transform="translate(1440.000000, 44.000000)">
                  <path d="M0,22 C0,9.9 9.9,0 22,0 C34.1,0 44,9.9 44,22 C44,34.1 34.1,44 22,44 C9.9,44 0,34.1 0,22 Z M33.55,17.6 C33.55,17.6 33.33,15.95 32.67,15.18 C31.79,14.19 30.8,14.19 30.36,14.19 C27.06,13.97 22.11,13.97 22.11,13.97 L22.11,13.97 C22.11,13.97 17.16,13.97 13.86,14.19 C13.42,14.3 12.43,14.3 11.55,15.18 C10.78,15.95 10.45,17.6 10.45,17.6 C10.45,17.6 10.23,19.58 10.23,21.45 L10.23,23.32 C10.23,25.3 10.45,27.17 10.45,27.17 C10.45,27.17 10.67,28.82 11.33,29.59 C12.21,30.58 13.42,30.47 13.97,30.58 C15.95,30.69 22,30.8 22,30.8 C22,30.8 26.95,30.8 30.25,30.58 C30.69,30.58 31.68,30.47 32.56,29.59 C33.22,28.82 33.44,27.17 33.44,27.17 C33.44,27.17 33.66,25.19 33.66,23.32 L33.66,21.45 C33.77,19.47 33.55,17.6 33.55,17.6 Z"></path>
                  <polygon id="Path" points="19.8 25.85 19.8 19.14 26.18 22.55"></polygon>
              </g>
          </g>
      </g>
  </svg>`,
};

Footer.args = {
  footer_links: 'Footer links',
  new_window: 'Open in a new window',
  menu_links: [
    {
      link: { label: 'Copyright', href: '#', external: false },
    },
    {
      link: { label: 'Accessibility', href: '#', external: false },
    },
    {
      link: { label: 'Freedom of information', href: '#', external: false },
    },
    {
      link: { label: 'Terms and conditions', href: '#', external: false },
    },
    {
      link: { label: 'Privacy', href: '#', external: false },
    },
    {
      link: {
        label: 'Personal information charter',
        href: '#',
        external: false,
      },
    },
    {
      link: { label: 'Feedback and complaints', href: '#', external: false },
    },
    {
      link: { label: 'Cookies', href: '#', external: false },
    },
    {
      link: { label: 'Data', href: '#', external: false },
    },
    {
      link: { label: 'GOV.UK', href: '#', external: true },
    },
  ],
  social_media: 'Food Standards Agency on social media',
  social_links: [
    { label: 'Facebook', external: true, href: '#', svg: social_svgs.facebook },
    { label: 'Twitter', external: true, href: '#', svg: social_svgs.twitter },
    { label: 'LinkedIn', external: true, href: '#', svg: social_svgs.linkedin },
    { label: 'Youtube', external: true, href: '#', svg: social_svgs.youtube },
    { label: 'Instagram', external: true, href: '#', svg: social_svgs.instagram },
    { label: 'FSA blog', external: false, href: '#', svg: social_svgs.blog },
  ],
};
