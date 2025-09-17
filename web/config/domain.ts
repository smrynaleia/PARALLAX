export const ThreatMapDomain = 'parallax-threatmap.com';

export const getThreatMapUrl = (path: string = ''): string => {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return normalizedPath
    ? `https://${ThreatMapDomain}/${normalizedPath}`
    : `https://${ThreatMapDomain}`;
};
