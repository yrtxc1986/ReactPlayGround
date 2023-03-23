import type { ReactElement } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { RedirectUrlMappingData } from './utils';

interface RedirectParams {
  ObjectID: string;
  DDEM: string;
  DDES: string;
  STAT: string;
}

const STAT_TO_ENUM = (
  STAT: string | null
): 'inputter1' | 'inputter2' | 'supervisor' | null => {
  if (!STAT) {
    return null;
  } else if (STAT.endsWith('C1')) {
    return 'inputter1';
  } else if (STAT.endsWith('C2')) {
    return 'inputter2';
  } else if (STAT.endsWith('CSPV') || STAT.endsWith('CSP')) {
    return 'supervisor';
  } else {
    return null;
  }
};

const STAT_TO_INPUTER = (STAT: string | null): string => {
  switch (STAT_TO_ENUM(STAT)) {
    case 'inputter1':
      return '1';
    case 'inputter2':
      return '2';
    case 'supervisor':
      return '0';
    default:
      return '';
  }
};

const hasPreviousRound = (STAT: string | null): boolean => {
  return !STAT?.startsWith('TODATAC');
};

const getBasicMergeSTAT = (STAT: string): string => {
  switch (STAT_TO_ENUM(STAT)) {
    case 'inputter1':
      return 'TOMDATAC1';
    case 'inputter2':
      return 'TOMDATAC2';
    case 'supervisor':
      return 'TOMDATACSP';
    default:
      return '';
  }
};

const isBasicSTAT = (STAT: string): boolean => {
  return STAT.startsWith('TOD') || STAT.startsWith('TOMD');
};

const getUrl = (DDEM: string, DDES: string, STAT: string): string => {
  const url = RedirectUrlMappingData[`${DDEM}-${DDES}-${STAT}`];
  if (!url && !isBasicSTAT(STAT)) {
    return getUrl(DDEM, DDES, getBasicMergeSTAT(STAT));
  }
  return url;
};

const getRedirectParams = (searchParams: URLSearchParams): RedirectParams | null => {
  if (
    !(
      searchParams.get('ObjectID') ||
      searchParams.get('DDEM') ||
      searchParams.get('DDES') ||
      searchParams.get('STAT')
    )
  ) {
    return null;
  }

  return {
    ObjectID: searchParams.get('ObjectID')!,
    DDEM: searchParams.get('DDEM')!,
    DDES: searchParams.get('DDES')!,
    STAT: searchParams.get('STAT')!,
  };
};

const RedirectPage = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const param = getRedirectParams(searchParams);
  if (!param) {
    return <Navigate to='/4041' />;
  }

  const { ObjectID, DDEM, DDES, STAT } = param;

  const adminPortalRoute = getUrl(DDEM, DDES, STAT);

  if (!adminPortalRoute) {
    return <Navigate to='/4041' />;;
  }

  const redirectLink = `${adminPortalRoute}/${ObjectID}/${STAT_TO_INPUTER(
    STAT
  )}/${hasPreviousRound(STAT)}`;
  return <Navigate to={redirectLink} />;
};

export default RedirectPage;
