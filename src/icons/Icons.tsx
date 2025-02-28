import { cn } from "../lib/utils";

type IconProps = {
  color?: string;
};

export const DirectionIcon: React.FC<IconProps> = ({
  color = "text_primary",
}) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18C7.75909 18 6.58977 17.7648 5.49205 17.2943C4.39432 16.8239 3.43977 16.183 2.62841 15.3716C1.81705 14.5602 1.17614 13.6057 0.705682 12.508C0.235227 11.4102 0 10.2409 0 9C0 7.74545 0.235227 6.57273 0.705682 5.48182C1.17614 4.39091 1.81705 3.43977 2.62841 2.62841C3.43977 1.81705 4.39432 1.17614 5.49205 0.705682C6.58977 0.235227 7.75909 0 9 0C10.2545 0 11.4273 0.235227 12.5182 0.705682C13.6091 1.17614 14.5602 1.81705 15.3716 2.62841C16.183 3.43977 16.8239 4.39091 17.2943 5.48182C17.7648 6.57273 18 7.74545 18 9C18 10.2409 17.7648 11.4102 17.2943 12.508C16.8239 13.6057 16.183 14.5602 15.3716 15.3716C14.5602 16.183 13.6091 16.8239 12.5182 17.2943C11.4273 17.7648 10.2545 18 9 18ZM8.48864 15.3614C8.625 15.4977 8.78182 15.5659 8.95909 15.5659C9.13636 15.5659 9.29318 15.4977 9.42955 15.3614L15.3205 9.47045C15.4568 9.33409 15.525 9.17045 15.525 8.97955C15.525 8.78864 15.4568 8.625 15.3205 8.48864L9.42955 2.59773C9.29318 2.46136 9.13636 2.39318 8.95909 2.39318C8.78182 2.39318 8.625 2.46136 8.48864 2.59773L2.59773 8.48864C2.46136 8.625 2.39318 8.78864 2.39318 8.97955C2.39318 9.17045 2.46136 9.33409 2.59773 9.47045L8.48864 15.3614ZM5.70682 11.4341V8.16136C5.70682 7.91591 5.78182 7.71818 5.93182 7.56818C6.08182 7.41818 6.27955 7.34318 6.525 7.34318H9.92045L9.06136 6.44318L10.2068 5.29773L13.0705 8.16136L10.2068 11.025L9.06136 9.87955L9.92045 8.97955H7.34318V11.4341H5.70682ZM9 16.3636C11.0591 16.3636 12.8011 15.6511 14.2261 14.2261C15.6511 12.8011 16.3636 11.0591 16.3636 9C16.3636 6.94091 15.6511 5.19886 14.2261 3.77386C12.8011 2.34886 11.0591 1.63636 9 1.63636C6.94091 1.63636 5.19886 2.34886 3.77386 3.77386C2.34886 5.19886 1.63636 6.94091 1.63636 9C1.63636 11.0591 2.34886 12.8011 3.77386 14.2261C5.19886 15.6511 6.94091 16.3636 9 16.3636Z"
      className={"fill-" + color}
    />
  </svg>
);

export const ThreeChevronRight: React.FC<IconProps> = ({
  color = "text_primary",
}) => (
  <svg
    width="21"
    height="12"
    viewBox="0 0 21 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.5858 6L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893C7.68342 -0.0976314 8.31658 -0.0976313 8.70711 0.292893L13.7071 5.29289Z"
      className={`fill-${color}/60`}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z"
      className={`fill-${color}/40`}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L18.5858 6L14.2929 1.70711C13.9024 1.31658 13.9024 0.683417 14.2929 0.292893C14.6834 -0.0976314 15.3166 -0.0976313 15.7071 0.292893L20.7071 5.29289Z"
      className={`fill-${color}`}
    />
  </svg>
);

export const CalendarStar: React.FC<IconProps> = ({ color }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("fill-current ", `fill-${color}`)}
  >
    <path d="M21.5 10L24.8456 15.9256L32 16.8748L26.75 21.4876L28.0625 28L21.5 24.9256L14.9375 28L16.25 21.4876L11 16.8748L18.35 15.9256L21.5 10Z" />
    <path d="M31 4.92308C31 4.27024 30.7278 3.64413 30.2434 3.18251C29.7589 2.72088 29.1018 2.46154 28.4167 2.46154H23.25V0H20.6667V2.46154H10.3333V0H7.75V2.46154H2.58333C1.89819 2.46154 1.24111 2.72088 0.756641 3.18251C0.272172 3.64413 0 4.27024 0 4.92308V29.5385C0 30.1913 0.272172 30.8174 0.756641 31.279C1.24111 31.7407 1.89819 32 2.58333 32H7.75V29.5385H2.58333V4.92308H7.75V7.38462H10.3333V4.92308H20.6667V7.38462H23.25V4.92308H28.4167V12.3077H31V4.92308Z" />
  </svg>
);

export const GymFacalities: React.FC<IconProps> = ({ color }) => (
  <svg
    width="36"
    height="20"
    viewBox="0 0 36 20"
    className={"fill-none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3087 2H7.23601C7.00455 2 6.78257 2.10114 6.6189 2.28118C6.45523 2.46121 6.36328 2.70539 6.36328 2.96V17.04C6.36328 17.1661 6.38586 17.2909 6.42971 17.4074C6.47357 17.5238 6.53786 17.6297 6.6189 17.7188C6.69994 17.808 6.79615 17.8787 6.90203 17.9269C7.00791 17.9752 7.1214 18 7.23601 18H11.3087C11.4233 18 11.5368 17.9752 11.6427 17.9269C11.7486 17.8787 11.8448 17.808 11.9258 17.7188C12.0069 17.6297 12.0712 17.5238 12.115 17.4074C12.1589 17.2909 12.1815 17.1661 12.1815 17.04V2.96C12.1815 2.70539 12.0895 2.46121 11.9258 2.28118C11.7622 2.10114 11.5402 2 11.3087 2ZM28.7633 2H24.6906C24.4591 2 24.2371 2.10114 24.0734 2.28118C23.9098 2.46121 23.8178 2.70539 23.8178 2.96V17.04C23.8178 17.1661 23.8404 17.2909 23.8843 17.4074C23.9281 17.5238 23.9924 17.6297 24.0734 17.7188C24.1545 17.808 24.2507 17.8787 24.3566 17.9269C24.4625 17.9752 24.5759 18 24.6906 18H28.7633C28.8779 18 28.9914 17.9752 29.0973 17.9269C29.2031 17.8787 29.2994 17.808 29.3804 17.7188C29.4614 17.6297 29.5257 17.5238 29.5696 17.4074C29.6134 17.2909 29.636 17.1661 29.636 17.04V2.96C29.636 2.70539 29.5441 2.46121 29.3804 2.28118C29.2167 2.10114 28.9947 2 28.7633 2Z"
      className={"stroke-" + color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.1818 9.99995H23.8182M2 13.84V6.15995C2 5.90534 2.09195 5.66116 2.25562 5.48113C2.41928 5.30109 2.64127 5.19995 2.87273 5.19995H5.49091C5.72237 5.19995 5.94435 5.30109 6.10802 5.48113C6.27169 5.66116 6.36364 5.90534 6.36364 6.15995V13.84C6.36364 14.0946 6.27169 14.3387 6.10802 14.5188C5.94435 14.6988 5.72237 14.8 5.49091 14.8H2.87273C2.64127 14.8 2.41928 14.6988 2.25562 14.5188C2.09195 14.3387 2 14.0946 2 13.84ZM34 13.84V6.15995C34 5.90534 33.9081 5.66116 33.7444 5.48113C33.5807 5.30109 33.3587 5.19995 33.1273 5.19995H30.5091C30.2776 5.19995 30.0556 5.30109 29.892 5.48113C29.7283 5.66116 29.6364 5.90534 29.6364 6.15995V13.84C29.6364 14.0946 29.7283 14.3387 29.892 14.5188C30.0556 14.6988 30.2776 14.8 30.5091 14.8H33.1273C33.3587 14.8 33.5807 14.6988 33.7444 14.5188C33.9081 14.3387 34 14.0946 34 13.84Z"
      className={"stroke-" + color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WifiIcon: React.FC<IconProps> = ({ color }) => (
  <svg
    width="32"
    height="23"
    viewBox="0 0 32 23"
    className={cn("fill-current", `text-${color ? color : "text_primary"}`)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.71017 8.58839C6.16077 5.26159 10.8416 3.21625 16.0025 3.21625C21.1634 3.21625 25.8442 5.26159 29.2948 8.58839C29.9349 9.20149 30.9451 9.18139 31.5552 8.54317C32.1653 7.90494 32.1453 6.88479 31.5102 6.27169C27.4895 2.38706 22.0236 0 16.0025 0C9.98145 0 4.51549 2.38706 0.489779 6.26666C-0.145332 6.88479 -0.165336 7.89992 0.444771 8.54317C1.05488 9.18642 2.07006 9.20652 2.70517 8.58839H2.71017ZM16.0025 11.2569C18.843 11.2569 21.4335 12.3172 23.4138 14.0711C24.0789 14.6591 25.0891 14.5937 25.6742 13.9304C26.2593 13.267 26.1943 12.2469 25.5342 11.6589C22.9937 9.40753 19.6531 8.04063 16.0025 8.04063C12.3519 8.04063 9.01128 9.40753 6.47583 11.6589C5.81071 12.2469 5.7507 13.262 6.33581 13.9304C6.92091 14.5988 7.93109 14.6591 8.5962 14.0711C10.5715 12.3172 13.162 11.2569 16.0075 11.2569H16.0025ZM19.2031 19.2975C19.2031 18.4445 18.8659 17.6264 18.2656 17.0233C17.6654 16.4201 16.8513 16.0813 16.0025 16.0813C15.1537 16.0813 14.3396 16.4201 13.7394 17.0233C13.1391 17.6264 12.8019 18.4445 12.8019 19.2975C12.8019 20.1505 13.1391 20.9686 13.7394 21.5717C14.3396 22.1749 15.1537 22.5138 16.0025 22.5138C16.8513 22.5138 17.6654 22.1749 18.2656 21.5717C18.8659 20.9686 19.2031 20.1505 19.2031 19.2975Z" />
  </svg>
);

export const CafeAndTeaBar: React.FC<IconProps> = ({ color }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 21.5581C3.47575 22.6996 5.69293 23.3664 8.22305 23.3362C10.7532 23.3664 12.9703 22.6996 14.4461 21.5581C15.9218 20.4167 18.139 19.7499 20.6691 19.7801C23.1993 19.7499 25.4164 20.4167 26.8922 21.5581M10.8901 2C10.3273 2.40391 9.8714 2.93874 9.56162 3.55829C9.25184 4.17785 9.09755 4.8635 9.11205 5.55603C9.09755 6.24856 9.25184 6.93421 9.56162 7.55376C9.8714 8.17331 10.3273 8.70814 10.8901 9.11205M18.0021 2C17.4394 2.40391 16.9835 2.93874 16.6737 3.55829C16.3639 4.17785 16.2096 4.8635 16.2241 5.55603C16.2096 6.24856 16.3639 6.93421 16.6737 7.55376C16.9835 8.17331 17.4394 8.70814 18.0021 9.11205"
      className={`stroke-${color ? color : "text_primary"}`}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 14.446H26.8922V23.3361C26.8922 26.1655 25.7682 28.8789 23.7676 30.8796C21.7669 32.8802 19.0535 34.0042 16.2241 34.0042H12.6681C9.83873 34.0042 7.12526 32.8802 5.12461 30.8796C3.12396 28.8789 2 26.1655 2 23.3361V14.446Z"
      className={`stroke-${color ? color : "text_primary"}`}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.4404 26.405C27.2345 26.7695 28.1059 26.9334 28.9782 26.8823C29.8504 26.8311 30.6967 26.5664 31.4427 26.1116C32.1887 25.6567 32.8115 25.0256 33.2565 24.2736C33.7014 23.5217 33.9548 22.6719 33.9944 21.7991C34.034 20.9263 33.8586 20.0571 33.4835 19.2679C33.1085 18.4788 32.5454 17.7938 31.8436 17.2733C31.1419 16.7527 30.323 16.4126 29.459 16.2826C28.595 16.1527 27.7123 16.237 26.8885 16.5281"
      className={`stroke-${color ? color : "text_primary"}`}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RupeeSymbolHexagon: React.FC<IconProps> = ({
  color = "text_primary",
}) => (
  <svg
    width="36"
    height="39"
    viewBox="0 0 36 39"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      d="M34 26.4993V12.4988C33.9991 11.886 33.8347 11.2841 33.523 10.7526C33.2113 10.2211 32.7632 9.77842 32.223 9.46849L19.7769 2.46826C19.2372 2.16155 18.6241 2 18 2C17.3759 2 16.7628 2.16155 16.2231 2.46826L3.77696 9.46849C3.23485 9.7763 2.78518 10.2185 2.47323 10.7505C2.16128 11.2824 1.99807 11.8855 2.00002 12.4988V26.503C2.00123 27.1155 2.16581 27.7171 2.47746 28.2482C2.78911 28.7794 3.23704 29.2217 3.77696 29.5315L16.2231 36.5317C16.7628 36.8385 17.3759 37 18 37C18.6241 37 19.2372 36.8385 19.7769 36.5317L32.223 29.5315C32.7654 29.2235 33.2153 28.7811 33.5272 28.2487C33.8392 27.7164 34.0023 27.113 34 26.4993Z"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`stroke-${color}`}
    />
    <path
      d="M12.3525 11.2093H23.6466M12.3525 16.3268H23.6466M20.3525 29.6309L12.3525 21.4443H15.1761C21.4518 21.4443 21.4518 11.2093 15.1761 11.2093"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`stroke-${color}`}
    />
  </svg>
);

export const ComfortLounges: React.FC<IconProps> = ({
  color = "text_primary",
}) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.1111 5.44446V8.11112H13.4445V9.8889H16.1111V12.5556H17.8889V9.8889H20.5556V8.11112H17.8889V5.44446H16.1111Z"
      className={`fill-${color}`}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 3.66667C1 2.95942 1.28095 2.28115 1.78105 1.78105C2.28115 1.28095 2.95942 1 3.66667 1H30.3333C31.0406 1 31.7189 1.28095 32.219 1.78105C32.719 2.28115 33 2.95942 33 3.66667V30.3333C33 31.0406 32.719 31.7189 32.219 32.219C31.7189 32.719 31.0406 33 30.3333 33H3.66667C2.95942 33 2.28115 32.719 1.78105 32.219C1.28095 31.7189 1 31.0406 1 30.3333V3.66667ZM2.77778 3.66667C2.77778 3.43092 2.87143 3.20483 3.03813 3.03813C3.20483 2.87143 3.43092 2.77778 3.66667 2.77778H30.3333C30.5691 2.77778 30.7952 2.87143 30.9619 3.03813C31.1286 3.20483 31.2222 3.43092 31.2222 3.66667V26.7778H28.8524C28.8524 26.722 28.847 26.6663 28.8364 26.6116L27.6898 20.5964L29.4098 14.5778C29.4746 14.3511 29.4467 14.108 29.3323 13.9018C29.2179 13.6957 29.0262 13.5435 28.7996 13.4787C28.5729 13.4138 28.3297 13.4417 28.1236 13.5561C27.9175 13.6706 27.7653 13.8622 27.7004 14.0889L26.6347 17.8204H19.6667V19.5982H20.8293V21.1022H20.3502C20.1451 21.1021 19.9463 21.173 19.7874 21.3028C19.6286 21.4325 19.5195 21.6132 19.4787 21.8143C19.4379 22.0153 19.4679 22.2242 19.5635 22.4057C19.6592 22.5871 19.8146 22.7299 20.0036 22.8098L18.8196 26.5076C18.7918 26.5949 18.7777 26.6861 18.7778 26.7778H15.2222C15.2221 26.6857 15.2077 26.5943 15.1796 26.5067L13.9973 22.8098C14.1858 22.7295 14.3407 22.5866 14.4359 22.4053C14.5312 22.224 14.5608 22.0153 14.52 21.8146C14.4791 21.6139 14.3702 21.4335 14.2116 21.3039C14.0531 21.1742 13.8546 21.1033 13.6498 21.1031H13.1707V19.5982H14.3333V17.8204H7.36444L6.29867 14.0889C6.26931 13.9737 6.21712 13.8655 6.1452 13.7708C6.07328 13.6761 5.98309 13.5968 5.87997 13.5375C5.77685 13.4783 5.66289 13.4404 5.54485 13.426C5.42681 13.4116 5.30708 13.4211 5.19275 13.4538C5.07842 13.4865 4.97182 13.5418 4.87926 13.6165C4.78669 13.6911 4.71005 13.7836 4.65387 13.8884C4.59769 13.9932 4.56311 14.1082 4.55217 14.2266C4.54124 14.3451 4.55418 14.4645 4.59022 14.5778L6.30933 20.5964L5.16356 26.6116C5.15308 26.6663 5.14773 26.722 5.14756 26.7778H2.77778V3.66667ZM30.3333 31.2222C30.5691 31.2222 30.7952 31.1286 30.9619 30.9619C31.1286 30.7952 31.2222 30.5691 31.2222 30.3333V28.5556H2.77778V30.3333C2.77778 30.5691 2.87143 30.7952 3.03813 30.9619C3.20483 31.1286 3.43092 31.2222 3.66667 31.2222H30.3333ZM25.9049 20.7218L25.9769 21.1022H22.6071V19.5982H26.1271L25.9227 20.3111C25.8847 20.4447 25.8786 20.5854 25.9049 20.7218ZM27.0578 26.7778L26.3804 23.2222H21.7378L20.6 26.7778H27.0578ZM8.09511 20.7218L8.02311 21.1022H11.3929V19.5982H7.87289L8.07733 20.3111C8.11526 20.4447 8.12135 20.5854 8.09511 20.7218ZM6.94222 26.7778L7.61955 23.2222H12.2622L13.4 26.7778H6.94222Z"
      className={`fill-${color} stroke-${color}`}
      strokeWidth="0.5"
    />
  </svg>
);

export const ClockArrowRound: React.FC<IconProps> = ({
  color = "text_primary",
}) => (
  <svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.9257 7.3286H15.0801C14.9113 7.3286 14.7731 7.46673 14.7731 7.63556V18.1987C14.7731 18.2985 14.8192 18.3906 14.8998 18.4481L21.2423 23.0793C21.3804 23.1791 21.5722 23.1522 21.672 23.0141L22.7694 21.5177C22.873 21.3757 22.8423 21.1839 22.7041 21.0879L17.2326 17.132V7.63556C17.2326 7.46673 17.0945 7.3286 16.9257 7.3286ZM25.3593 10.214L31.3757 11.6835C31.5675 11.7296 31.7555 11.5838 31.7555 11.3881L31.7862 5.19141C31.7862 4.93434 31.4908 4.78853 31.2913 4.94968L25.2442 9.67298C25.1985 9.70834 25.1637 9.75587 25.1438 9.81012C25.1239 9.86437 25.1198 9.92314 25.1318 9.97965C25.1438 10.0362 25.1716 10.0881 25.2118 10.1296C25.2521 10.1711 25.3032 10.2003 25.3593 10.214ZM31.7939 21.7671L29.6184 21.0189C29.5425 20.9929 29.4595 20.9976 29.3871 21.032C29.3146 21.0664 29.2586 21.1278 29.2308 21.203C29.1579 21.3987 29.0812 21.5906 29.0006 21.7824C28.3176 23.3978 27.3392 24.852 26.0883 26.099C24.8514 27.3398 23.3854 28.3288 21.7718 29.0113C20.1001 29.718 18.3032 30.0808 16.4883 30.0779C14.6542 30.0779 12.8777 29.7211 11.2048 29.0113C9.5911 28.3288 8.12516 27.3398 6.8882 26.099C5.64118 24.852 4.66276 23.3978 3.97594 21.7824C3.27308 20.1098 2.91297 18.3132 2.91694 16.4989C2.91694 14.6649 3.27378 12.8845 3.98362 11.2116C4.6666 9.59624 5.64502 8.14203 6.89587 6.89502C8.13283 5.65422 9.59878 4.6652 11.2125 3.98277C12.8777 3.27293 14.658 2.91609 16.4921 2.91609C18.3262 2.91609 20.1027 3.27293 21.7756 3.98277C23.3893 4.6652 24.8552 5.65422 26.0922 6.89502C26.4836 7.29023 26.8519 7.70078 27.1896 8.13436L29.4841 6.33866C26.4644 2.47868 21.7641 -0.00383252 16.4844 4.44144e-06C7.29107 0.0038414 -0.0912348 7.47057 0.000852236 16.6678C0.0929393 25.7038 7.44072 32.9979 16.4921 32.9979C23.6097 32.9979 29.6721 28.4856 31.9819 22.1661C32.0395 22.005 31.9551 21.8246 31.7939 21.7671Z"
      className={`fill-${color}`}
    />
  </svg>
);

export const TennisBall: React.FC<IconProps> = ({ color = "text_primary" }) => (
  <svg
    width="32"
    height="35"
    viewBox="0 0 32 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.0552 2.3118C24.342 -1.32428 17.5503 -0.593953 12.9009 3.95891C10.362 6.44511 8.90211 9.97241 8.87038 12.4431C8.83864 14.8982 9.28296 18.4877 6.72816 20.9894L0 27.5778L2.2533 29.7843L8.98146 23.1959C11.5363 20.6942 15.2018 21.1292 17.709 21.0982C20.2162 21.0671 23.8342 19.6375 26.3731 17.1513C31.0067 12.5985 31.7683 5.94787 28.0552 2.3118ZM13.4563 16.5919C11.0285 14.2145 11.7901 9.42855 15.1384 6.14987C18.4866 2.87119 23.3581 2.12533 25.8019 4.50276C28.2297 6.88019 27.468 11.6661 24.1198 14.9448C20.7716 18.2235 15.9 18.9694 13.4563 16.5919ZM25.6432 24.8585C26.4842 24.8585 27.2935 25.1849 27.8806 25.7753C29.1183 26.9874 29.1183 28.9608 27.8806 30.1728C27.2935 30.7477 26.4842 31.0741 25.6432 31.0741C24.8022 31.0741 23.9929 30.7477 23.4057 30.1573C22.168 28.9452 22.168 26.9718 23.4057 25.7598C23.9929 25.1849 24.8022 24.8585 25.6432 24.8585ZM25.6432 21.7508C24.3864 21.7483 23.1572 22.1115 22.1115 22.7941C21.0657 23.4768 20.2506 24.4482 19.7695 25.5851C19.2885 26.7221 19.1631 27.9734 19.4093 29.1802C19.6555 30.387 20.2622 31.4951 21.1524 32.3638C22.3902 33.5758 24.0246 34.1818 25.6432 34.1818C26.9 34.1843 28.1292 33.8211 29.1749 33.1385C30.2206 32.4558 31.0357 31.4844 31.5168 30.3475C31.9979 29.2105 32.1233 27.9593 31.8771 26.7524C31.6309 25.5456 31.0242 24.4375 30.1339 23.5688C29.5441 22.9917 28.8439 22.534 28.0733 22.2221C27.3028 21.9101 26.477 21.75 25.6432 21.7508Z"
      className={`fill-${color}`}
    />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ color = "text_primary" }) => (
  <svg
    width={"22"}
    height={"22"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1083 5.271 12.2583 4.363 10.225C3.455 8.19167 3.00067 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
      className={`fill-${color}`}
    />
  </svg>
);

export const Honeykomb: React.FC<IconProps> = ({ color = "text_primary" }) => (
  <svg
    width="19"
    height="20"
    viewBox="0 0 19 20"
    fill="none"
    className={`fill-none text-${color}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1_1072)">
      <path
        d="M15.8333 10.4583C15.8333 9.54833 15.2325 8.78416 14.4042 8.52166C14.5675 8.22999 14.6667 7.89749 14.6667 7.54166C14.6667 6.63166 14.0658 5.86749 13.2375 5.60499C13.4008 5.31333 13.5 4.98083 13.5 4.62499C13.5 3.49916 12.5842 2.58333 11.4583 2.58333H7.375C6.24917 2.58333 5.33333 3.49916 5.33333 4.62499C5.33333 4.98083 5.4325 5.31333 5.59583 5.60499C4.77333 5.86749 4.16667 6.63166 4.16667 7.54166C4.16667 7.89749 4.26583 8.22999 4.42917 8.52166C3.60667 8.78416 3 9.54833 3 10.4583C3 11.1933 3.39083 11.8233 3.97417 12.185C3.72917 12.5175 3.58333 12.9317 3.58333 13.375C3.58333 14.5008 4.49917 15.4167 5.625 15.4167H13.2083C14.3342 15.4167 15.25 14.5008 15.25 13.375C15.25 12.9317 15.1042 12.5175 14.8592 12.185C15.4425 11.8233 15.8333 11.1933 15.8333 10.4583ZM7.375 3.74999H11.4583C11.9425 3.74999 12.3333 4.14083 12.3333 4.62499C12.3333 5.10916 11.9425 5.49999 11.4583 5.49999H7.375C6.89083 5.49999 6.5 5.10916 6.5 4.62499C6.5 4.14083 6.89083 3.74999 7.375 3.74999ZM6.20833 6.66666H12.625C13.1092 6.66666 13.5 7.05749 13.5 7.54166C13.5 8.02583 13.1092 8.41666 12.625 8.41666H6.20833C5.72417 8.41666 5.33333 8.02583 5.33333 7.54166C5.33333 7.05749 5.72417 6.66666 6.20833 6.66666ZM4.75 13.375C4.75 12.8908 5.14083 12.5 5.625 12.5H7.66667V14.25H5.625C5.14083 14.25 4.75 13.8592 4.75 13.375ZM13.2083 14.25H11.1667V12.5H13.2083C13.6925 12.5 14.0833 12.8908 14.0833 13.375C14.0833 13.8592 13.6925 14.25 13.2083 14.25ZM13.7917 11.3333H11.0617C10.8167 10.6567 10.175 10.1667 9.41667 10.1667C8.65833 10.1667 8.01667 10.6567 7.77167 11.3333H5.04167C4.5575 11.3333 4.16667 10.9425 4.16667 10.4583C4.16667 9.97416 4.5575 9.58333 5.04167 9.58333H13.7917C14.2758 9.58333 14.6667 9.97416 14.6667 10.4583C14.6667 10.9425 14.2758 11.3333 13.7917 11.3333Z"
        className={`fill-${color}`}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_1072"
        x="0"
        y="0.583328"
        width="18.8333"
        height="18.8333"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.815755 0 0 0 0 0.309082 0 0 0 0.6 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_1072"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_1072"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
