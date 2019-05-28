import React from 'react';

interface Props {
  className: string;
  title: string;
  titleId: string;
}

export function Logo({ className, title, titleId }: Props): JSX.Element {
  return (
    <svg
      aria-labelledby={titleId}
      className={className}
      fill="none"
      role="img"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>
      <rect width="50" height="50" fill="#110A18" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 21.1144L3.85723 17H7.39277L0 24.8856L0 21.1144ZM25 24.8856L17.6072 17H21.1428L25 21.1144V24.8856ZM3.85723 25L11.3572 17H13.6428L21.1428 25H17.6072L12.5 19.5523L7.39277 25H3.85723ZM11.3572 25L12.5 23.781L13.6428 25H11.3572Z"
        fill="#37323E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.6287L3.85723 8H7.39277L0 16.8713L0 12.6287ZM25 16.8713L17.6072 8H21.1428L25 12.6287V16.8713ZM3.85723 17L11.3572 8H13.6428L21.1428 17H17.6072L12.5 10.8713L7.39277 17H3.85723ZM11.3572 17L12.5 15.6287L13.6428 17H11.3572Z"
        fill="#37323E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4.11438L3.85723 0H7.39277L0 7.88562L0 4.11438ZM25 7.88562L17.6072 0H21.1428L25 4.11438V7.88562ZM3.85723 8L11.3572 0H13.6428L21.1428 8H17.6072L12.5 2.55228L7.39277 8H3.85723ZM11.3572 8L12.5 6.78105L13.6428 8H11.3572Z"
        fill="#37323E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 46.1144L3.85723 42H7.39277L0 49.8856L0 46.1144ZM25 49.8856L17.6072 42H21.1428L25 46.1144V49.8856ZM3.85723 50L11.3572 42H13.6428L21.1428 50H17.6072L12.5 44.5523L7.39277 50H3.85723ZM11.3572 50L12.5 48.781L13.6428 50H11.3572Z"
        fill="#37323E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 37.6287L3.85723 33H7.39277L0 41.8713L0 37.6287ZM25 41.8713L17.6072 33H21.1428L25 37.6287V41.8713ZM3.85723 42L11.3572 33H13.6428L21.1428 42H17.6072L12.5 35.8713L7.39277 42H3.85723ZM11.3572 42L12.5 40.6287L13.6428 42H11.3572Z"
        fill="#37323E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 29.1144L3.85723 25H7.39277L0 32.8856L0 29.1144ZM25 32.8856L17.6072 25H21.1428L25 29.1144V32.8856ZM3.85723 33L11.3572 25H13.6428L21.1428 33H17.6072L12.5 27.5523L7.39277 33H3.85723ZM11.3572 33L12.5 31.781L13.6428 33H11.3572Z"
        fill="#37323E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 46.1144L28.8572 42H32.3928L25 49.8856V46.1144ZM50 49.8856L42.6072 42H46.1428L50 46.1144V49.8856ZM28.8572 50L36.3572 42H38.6428L46.1428 50H42.6072L37.5 44.5523L32.3928 50H28.8572ZM36.3572 50L37.5 48.781L38.6428 50H36.3572Z"
        fill="#37323E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 37.6287L28.8572 33H32.3928L25 41.8713V37.6287ZM50 41.8713L42.6072 33H46.1428L50 37.6287V41.8713ZM28.8572 42L36.3572 33H38.6428L46.1428 42H42.6072L37.5 35.8713L32.3928 42H28.8572ZM36.3572 42L37.5 40.6287L38.6428 42H36.3572Z"
        fill="#37323E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 29.1144L28.8572 25H32.3928L25 32.8856V29.1144ZM50 32.8856L42.6072 25H46.1428L50 29.1144V32.8856ZM28.8572 33L36.3572 25H38.6428L46.1428 33H42.6072L37.5 27.5523L32.3928 33H28.8572ZM36.3572 33L37.5 31.781L38.6428 33H36.3572Z"
        fill="#37323E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 21.1144L28.8572 17H32.3928L25 24.8856V21.1144ZM50 24.8856L42.6072 17H46.1428L50 21.1144V24.8856ZM28.8572 25L36.3572 17H38.6428L46.1428 25H42.6072L37.5 19.5523L32.3928 25H28.8572ZM36.3572 25L37.5 23.781L38.6428 25H36.3572Z"
        fill="#37323E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 12.6287L28.8572 8H32.3928L25 16.8713V12.6287ZM50 16.8713L42.6072 8H46.1428L50 12.6287V16.8713ZM28.8572 17L36.3572 8H38.6428L46.1428 17H42.6072L37.5 10.8713L32.3928 17H28.8572ZM36.3572 17L37.5 15.6287L38.6428 17H36.3572Z"
        fill="#37323E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 4.11438L28.8572 0H32.3928L25 7.88562V4.11438ZM50 7.88562L42.6072 0H46.1428L50 4.11438V7.88562ZM28.8572 8L36.3572 0H38.6428L46.1428 8H42.6072L37.5 2.55228L32.3928 8H28.8572ZM36.3572 8L37.5 6.78105L38.6428 8H36.3572Z"
        fill="#37323E"
      />
      <path
        d="M11.8298 37.4557H9.25544V27.8497H11.8106V28.868C12.9121 28.2276 13.9367 27.8113 14.8845 27.6192V30.2128C14.3594 30.3153 13.8727 30.4241 13.4244 30.5394C12.9889 30.6547 12.5855 30.7699 12.2141 30.8852L11.8298 31.0197V37.4557Z"
        fill="white"
      />
      <path
        d="M24.1652 33.7478H18.5169C18.5297 34.337 18.6834 34.766 18.978 35.035C19.2726 35.2911 19.708 35.4192 20.2844 35.4192C21.4755 35.4192 22.5386 35.3808 23.4736 35.3039L24.0115 35.2463L24.0499 37.1483C22.6026 37.5069 21.2706 37.6862 20.0539 37.6862C18.6066 37.6862 17.5563 37.302 16.9031 36.5335C16.2499 35.765 15.9233 34.5163 15.9233 32.7872C15.9233 29.3419 17.3386 27.6192 20.1691 27.6192C22.9613 27.6192 24.3573 29.0665 24.3573 31.9611L24.1652 33.7478ZM18.4977 31.7882H21.8213C21.8213 31.0197 21.6997 30.4882 21.4563 30.1936C21.2258 29.8862 20.8031 29.7325 20.1883 29.7325C19.5736 29.7325 19.1381 29.8926 18.8819 30.2128C18.6386 30.5202 18.5105 31.0453 18.4977 31.7882Z"
        fill="white"
      />
      <path
        d="M33.1326 28.1187L33.0942 30.2512C32.2873 30.1488 31.6085 30.0719 31.0578 30.0207C30.5198 29.9695 30.0908 29.9438 29.7706 29.9438C29.1302 29.9438 28.7203 30.0015 28.541 30.1167C28.3489 30.232 28.2528 30.4113 28.2528 30.6547C28.2528 30.898 28.3809 31.0709 28.6371 31.1734C28.7651 31.2246 28.9829 31.2887 29.2903 31.3655C29.6105 31.4296 30.0331 31.5064 30.5582 31.5961C31.0706 31.6857 31.506 31.8074 31.8646 31.9611C32.2233 32.102 32.5179 32.2877 32.7484 32.5182C32.9789 32.7488 33.1454 33.0305 33.2479 33.3635C33.3504 33.6966 33.4016 34.1 33.4016 34.5739C33.4016 36.6488 32.1144 37.6862 29.54 37.6862C28.7075 37.6862 27.6829 37.5709 26.4661 37.3404L25.8513 37.2251L25.9282 35.0734C26.7351 35.1759 27.4075 35.2527 27.9454 35.3039C28.4962 35.3552 28.9316 35.3808 29.2518 35.3808C29.8794 35.3808 30.3021 35.3168 30.5198 35.1887C30.7376 35.0734 30.8464 34.8941 30.8464 34.6507C30.8464 34.4074 30.7312 34.2281 30.5006 34.1128C30.2701 34.0103 29.6553 33.8695 28.6563 33.6902C28.1568 33.6133 27.7213 33.5108 27.3499 33.3828C26.9784 33.2419 26.671 33.0626 26.4277 32.8448C26.1843 32.6143 25.9986 32.3325 25.8705 31.9995C25.7553 31.6537 25.6976 31.2246 25.6976 30.7123C25.6976 30.2 25.7873 29.7517 25.9666 29.3675C26.1587 28.9832 26.4149 28.663 26.7351 28.4069C27.0681 28.1507 27.4587 27.9586 27.907 27.8305C28.3681 27.7025 28.8676 27.6384 29.4055 27.6384C29.777 27.6384 30.2188 27.6704 30.7311 27.7345C31.2563 27.7857 31.8454 27.8754 32.4986 28.0034L33.1326 28.1187Z"
        fill="white"
      />
      <path
        d="M38.8516 27.6192C39.5432 27.6192 40.395 27.7217 41.4068 27.9266L41.9255 28.0419L41.8487 30.0783C41.3363 30.0271 40.8945 29.9887 40.523 29.963C40.1516 29.9374 39.8442 29.9246 39.6009 29.9246C39.1654 29.9246 38.8004 29.9695 38.5058 30.0591C38.224 30.136 37.9999 30.2832 37.8334 30.501C37.6797 30.7059 37.5708 30.9813 37.5068 31.3271C37.4427 31.6729 37.4107 32.1084 37.4107 32.6335C37.4107 33.1586 37.4427 33.6005 37.5068 33.9591C37.5708 34.3049 37.6797 34.5867 37.8334 34.8044C37.9999 35.0094 38.224 35.1567 38.5058 35.2463C38.8004 35.336 39.1718 35.3808 39.6201 35.3808L41.8487 35.2271L41.9255 37.2828C40.5679 37.5517 39.524 37.6862 38.794 37.6862C37.3723 37.6862 36.3477 37.2892 35.7201 36.4951C35.1053 35.6882 34.7979 34.401 34.7979 32.6335C34.7979 30.866 35.1181 29.5916 35.7585 28.8103C36.3989 28.0162 37.4299 27.6192 38.8516 27.6192Z"
        fill="white"
      />
      <path
        d="M9.22661 23.3734C10.9301 23.3734 11.7818 22.336 11.7818 20.2611L11.3783 20.3956C10.469 20.6902 9.79656 20.8375 9.36109 20.8375C7.96503 20.8375 6.88917 20.5045 6.1335 19.8384C5.37783 19.1596 5 18.1414 5 16.7838C5 15.4389 5.40985 14.3951 6.22956 13.6522C7.06207 12.9094 8.25321 12.5379 9.80297 12.5379C11.3399 12.5379 12.5054 13.1015 13.2995 14.2286C14.1064 15.3557 14.5099 17.0399 14.5099 19.2813C14.5099 21.5227 14.0616 23.1493 13.165 24.1611C12.2685 25.1729 10.9557 25.6788 9.22661 25.6788C8.20198 25.6788 7.13252 25.538 6.01823 25.2562L5.42266 25.1217L5.6532 23.0852C6.95961 23.2774 8.15075 23.3734 9.22661 23.3734ZM9.59164 18.532C10.1936 18.532 10.8276 18.4168 11.4936 18.1862L11.801 18.0902C11.801 15.9256 11.0838 14.8434 9.64927 14.8434C9.03449 14.8434 8.5606 15.0163 8.22759 15.3621C7.89459 15.6951 7.72808 16.169 7.72808 16.7838C7.72808 17.9493 8.34927 18.532 9.59164 18.532Z"
        fill="white"
      />
      <path
        d="M23.7617 18.8394V22.8355C23.7874 23.1429 23.8386 23.3606 23.9154 23.4887C23.9923 23.604 24.1524 23.6872 24.3957 23.7384L24.3189 25.6788C23.6657 25.6788 23.1406 25.634 22.7435 25.5444C22.3593 25.4547 21.9686 25.2754 21.5716 25.0064C20.6366 25.4547 19.6952 25.6788 18.7474 25.6788C16.7622 25.6788 15.7696 24.6286 15.7696 22.5281C15.7696 21.5035 16.045 20.7798 16.5957 20.3572C17.1464 19.9217 17.9918 19.6655 19.1317 19.5887L21.1873 19.435V18.8394C21.1873 18.4424 21.0977 18.1734 20.9184 18.0325C20.7391 17.8788 20.4509 17.802 20.0538 17.802L16.442 17.9557L16.3652 16.169C17.7484 15.7975 19.0548 15.6118 20.2844 15.6118C21.5268 15.6118 22.4169 15.868 22.9548 16.3803C23.4928 16.8926 23.7617 17.7123 23.7617 18.8394ZM21.1873 21.2217L19.4391 21.3754C18.7218 21.4394 18.3632 21.8237 18.3632 22.5281C18.3632 23.2325 18.677 23.5848 19.3046 23.5848C19.7913 23.5848 20.3228 23.5079 20.8992 23.3542L21.1873 23.2774V21.2217Z"
        fill="white"
      />
      <path
        d="M28.7903 18.2631V25.4483H26.2159V15.8424H28.7711V16.3803C29.6292 15.868 30.4297 15.6118 31.1726 15.6118C31.813 15.6118 32.3445 15.7079 32.7671 15.9C33.2026 16.0793 33.5484 16.3611 33.8046 16.7453C34.0736 17.1296 34.2657 17.6099 34.3809 18.1862C34.4962 18.7626 34.5538 19.4478 34.5538 20.2419V25.4483H31.9795V20.3187C31.9795 19.499 31.8834 18.8971 31.6913 18.5128C31.4992 18.1158 31.1149 17.9173 30.5386 17.9173C30.0263 17.9173 29.5203 18.0069 29.0208 18.1862L28.7903 18.2631Z"
        fill="white"
      />
      <path
        d="M42.4256 12H45V25.4483H42.4448V25.0449C41.5483 25.4675 40.7734 25.6788 40.1202 25.6788C39.4286 25.6788 38.8394 25.5828 38.3527 25.3907C37.8788 25.1857 37.4946 24.8784 37.2 24.4685C36.9054 24.0458 36.6941 23.5207 36.566 22.8931C36.4379 22.2527 36.3739 21.4971 36.3739 20.6261C36.3739 18.8714 36.7005 17.5971 37.3537 16.803C38.0069 16.0089 39.0059 15.6118 40.3507 15.6118C40.5557 15.6118 40.799 15.631 41.0808 15.6695C41.3626 15.6951 41.6892 15.7399 42.0606 15.8039L42.4256 15.8808V12ZM42.1566 23.1429L42.4256 23.0852V18.0325C41.7468 17.9044 41.1192 17.8404 40.5428 17.8404C39.5054 17.8404 38.9867 18.7626 38.9867 20.6069C38.9867 21.6059 39.102 22.3168 39.3325 22.7394C39.563 23.1621 39.9473 23.3734 40.4852 23.3734C41.0103 23.3734 41.5675 23.2966 42.1566 23.1429Z"
        fill="white"
      />
    </svg>
  );
}
