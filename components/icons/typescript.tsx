import React from 'react';

import { Container, IconProps } from './common';

export function Typescript({ size = 'medium', styles, title = 'typescript', titleId = 'typescript' }: IconProps) {
  return (
    <Container ratio={1} size={size} styles={styles} title={title} titleId={titleId} viewBox="0 0 100 100">
      <rect width="90" height="90" transform="translate(5 5)" fill="white" />
      <path d="M5 50V5H95V95H5" fill="#294E80" />
      <path
        d="M24.7325 50.1575V53.825H36.4325V87.1251H44.735V53.825H56.4351V50.225C56.4351 48.2 56.435 46.5575 56.345 46.5125C56.345 46.445 49.2125 46.4225 40.55 46.4225L24.8 46.49V50.18L24.7325 50.1575V50.1575ZM77.3151 46.4C79.6101 46.94 81.3651 47.975 82.9401 49.6175C83.7726 50.5175 85.0101 52.0925 85.1001 52.4975C85.1001 52.6325 81.2076 55.265 78.8451 56.7275C78.7551 56.795 78.3951 56.4125 78.0351 55.8275C76.8651 54.1625 75.6726 53.4425 73.8051 53.3075C71.1051 53.1275 69.3051 54.545 69.3051 56.9075C69.3051 57.6275 69.4401 58.0325 69.7101 58.6175C70.3176 59.855 71.4426 60.5975 74.9301 62.1275C81.3651 64.895 84.1551 66.7175 85.8426 69.3276C87.7551 72.2526 88.1826 76.8426 86.9001 80.2851C85.4601 84.0426 81.9501 86.5851 76.9326 87.4176C75.3576 87.6876 71.7576 87.6426 70.0701 87.3501C66.4701 86.6751 63.0276 84.8751 60.9126 82.5576C60.0801 81.6576 58.4826 79.2501 58.5726 79.0926L59.4276 78.5526L62.8026 76.5951L65.3451 75.1101L65.9301 75.8976C66.6726 77.0676 68.3376 78.6426 69.3051 79.1826C72.2301 80.6901 76.1451 80.4876 78.0801 78.7326C78.9126 77.9676 79.2726 77.1576 79.2726 76.0326C79.2726 74.9976 79.1151 74.5251 78.5976 73.7376C77.8776 72.7476 76.4376 71.9376 72.3876 70.1376C67.7301 68.1576 65.7501 66.8975 63.9051 64.9625C62.8476 63.7925 61.8801 61.97 61.4301 60.4625C61.0926 59.1575 60.9801 55.9625 61.2951 54.68C62.2626 50.18 65.6601 47.03 70.5201 46.13C72.0951 45.815 75.8076 45.95 77.3601 46.355L77.3151 46.4V46.4Z"
        fill="white"
      />
    </Container>
  );
}
