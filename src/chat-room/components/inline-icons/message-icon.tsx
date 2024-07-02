/**
 * 페이지 첫 렌더링에 사용하기 위해 인라인으로 정의합니다.
 */

export function MessageIcon({ disabled }: { disabled: boolean }) {
  if (disabled) {
    return (
      <svg
        width="48"
        height="32"
        viewBox="0 0 48 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="32" rx="16" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.4254 10.0619C31.7735 9.09598 30.8335 8.164 29.8706 8.5204L17.3381 13.1591C16.2547 13.5525 16.2112 15.0704 17.2722 15.5245L17.2752 15.5257L21.5086 17.3176L25.5196 13.2393C25.8332 12.9204 26.3417 12.9204 26.6554 13.2393C26.969 13.5582 26.969 14.0752 26.6554 14.3942L22.6423 18.4745L24.4955 22.7809C24.9443 23.8424 26.4623 23.8076 26.8611 22.7246L31.4254 10.0619Z"
          fill="#D5D8DA"
        />
      </svg>
    )
  }

  return (
    <svg
      width="48"
      height="32"
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="32" rx="16" fill="var(--color-blue)" />
      <rect
        width="16"
        height="16"
        transform="translate(16 8)"
        fill="var(--color-blue)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4254 10.0619C31.7735 9.09598 30.8335 8.164 29.8706 8.5204L17.3381 13.1591C16.2547 13.5525 16.2112 15.0704 17.2722 15.5245L17.2752 15.5257L21.5086 17.3176L25.5196 13.2393C25.8332 12.9204 26.3417 12.9204 26.6554 13.2393C26.969 13.5582 26.969 14.0752 26.6554 14.3942L22.6423 18.4745L24.4955 22.7809C24.9443 23.8424 26.4623 23.8076 26.8611 22.7246L31.4254 10.0619Z"
        fill="white"
      />
    </svg>
  )
}
