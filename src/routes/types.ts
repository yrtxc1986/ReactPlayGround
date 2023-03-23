import type { ReactElement } from 'react';
import type { RouteObject } from 'react-router-dom';

export interface UseAppRoutesResult{
    AppRoutes: ReactElement | null;
}

export interface Route extends Omit<RouteObject, 'children'>{
    children?: Route[]
}