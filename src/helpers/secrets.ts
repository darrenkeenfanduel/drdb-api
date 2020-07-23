export const ACCESS_TOKEN_SECRET =
  process.env[
    process.env.NODE_ENV === 'production'
      ? 'ACCESS_TOKEN_SECRET'
      : 'DEV_ACCESS_TOKEN_SECRET'
  ];

export const REFRESH_TOKEN_SECRET =
  process.env[
    process.env.NODE_ENV === 'production'
      ? 'REFRESH_TOKEN_SECRET'
      : 'DEV_REFRESH_TOKEN_SECRET'
  ];
