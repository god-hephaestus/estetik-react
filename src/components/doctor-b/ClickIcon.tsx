import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

interface ClickIconProps extends Partial<CustomIconComponentProps> {
  wobble?: boolean;
}

export default function ClickIcon({ wobble, ...props }: ClickIconProps) {
  return (
    <span
      {...props}
      className={`relative inline-flex items-center justify-center w-[35px] h-[35px] leading-[35px] ${
        wobble ? "animate-wobble" : ""
      }`}
      style={{ animation: wobble ? "wobble 2s ease-in-out infinite" : "none" }}
    >
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="absolute inset-0 object-contain"
      >
        <g filter="url(#filter0_b_563_1893)">
          <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
        </g>
        <mask
          id="mask0_563_1893"
          maskUnits="userSpaceOnUse"
          x="6"
          y="6"
          width="24"
          height="24"
        >
          <rect
            x="6.78418"
            y="6.49902"
            width="22.7642"
            height="22.7642"
            fill="url(#pattern0_563_1893)"
          />
        </mask>
        <g mask="url(#mask0_563_1893)">
          <circle cx="18.0242" cy="17.739" r="18.0691" fill="#13A89E" />
        </g>
        <defs>
          <filter
            id="filter0_b_563_1893"
            x="-7.8"
            y="-7.8"
            width="50.6"
            height="50.6"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.9" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_563_1893"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_563_1893"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern0_563_1893"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_563_1893" transform="scale(0.0111111)" />
          </pattern>
          <image
            id="image0_563_1893"
            width="90"
            height="90"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAESUlEQVR4nO3dy48VRRTH8SOogDokoIagokQNcUvYmghoeESJsPC5YCOoEJW/gIhxowsXgq/IClATVwTMqGGhJIoKw0NRwcQYAg4kPOQRIr6QLynvWUxMV99u5vbtOlX1SSaZQHfd7t/0nOmuruoWybIsswm4C1gJfADsBU4Bf+vXKf2394EVwJ1tb68pwFjgCWAH9VwCvgQed220vR9BA+YBPzF6B4D7296f4AATgHfpvbeB8W3vXxCAm4EhmrMTuElSRifkgzTvQLJha7kYqhDSEWAdsAC4B7hev9z3C4E3gF8rtPNNkmWkQk0eBpZVOYMArgaWA0e7tPmWJHh2UWYLMHAF7Q4AW0tbhrmS0Hly2SncWmDMKNofo6XG58ckzrOBJ0tC+LgXIWjY7rfC51GJXckV3/CVlIuSz5kIHPN81heSQN+Fu1Qu8lTJetcCLwC7gAvAGT0/fs79X8l6T3s+y23DdImVdhD5TuHGeta5FfiupAx8DUwuORtxvylFnpFYaS9ckXWe5ccD39Ld574/oMCbnnXek1hpt2aRhZ7lV1HdY542HvQsv1tipX3IRWZ4lnd1uKpPPW24K8giJyRWwF+enR7wLH++RtAnSy5iivwpsXI7V7TH4l++jks124k66BMNBk3Ndo5Lan8MpZ2ghyRWwKaAgt4gsQKeDSjo5RIrd9lbdAku/Q/abcM0iRmwPYCgP5PYuS7KAIJ+RGKnfcX7Wgx6/2huLJgCzB5Zq6V/Qf8L3Ccp0VtW/ylZppYK7bwuqQGu0e7NfgXtxuWNkxQBN7p63Yeg9/luDiQVtjQftPczMuld0FkXOeg+IR/ROeiokI/oHHRUyEd0mEEDE3W924HXdDbB7zqEzN1GexmY0qfNjzroT4BXuwxTcGNL7m1736wHXdVZ4I629y8YNMuNgpo0YtLSi8APwB9aaoZ0SFr8815o3hkdCuwbQYUGHveMLsKxzQ0BllgRlkE37Rl4WMenDOsQt8PAK8ANYhW2uBJ0nViEPS+JRdjzs1iEPRfFIgwSizBILMIgsQiDxCIMEoswSCzCoKYDmQqs1kHmh7Q3zE2OPw18D2wG1gBzyibJ/x8GSVP0ETsu1Kpc+OuBmRXaNqepkBeXPBaiavfjAzno7kG7Hqte2AMsAa7KR3Rx0HVKRhW7Rz7pAIN6WzOaD2KHe5oXBjUV9CLgl7Z3LvqgRzyRcY3ePU6eNM09KBv4KPWkpV9SLyfSTymXE2lDiuVE2pRSOZG2pVJOJBSxlxMJDbA0wqP7nIQImKVj12JxUEIF3AJ8RRwGJWR0norrRmRat0IsoPO857JB4SH7B7hNrMBu3X5HrKFzs7fuS8nadM5ts1iEnbrtntO0SKyj89q8k4Qb8vMSC2AK8KHuWEjl4iGJEXC3e9KXTjtui/thbzRbk+vQl5LN1+nI2/Xtbr81FOx5nVM+qG/dsHMKl2WZROoy0IjxgHNEzU4AAAAASUVORK5CYII="
          />
        </defs>
      </svg>
      <style jsx>{`
        @keyframes wobble {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(30deg);
          }
          75% {
            transform: rotate(-30deg);
          }
        }
      `}</style>
    </span>
  );
}
