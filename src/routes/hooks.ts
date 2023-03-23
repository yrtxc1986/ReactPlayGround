import {useRoutes} from 'react-router-dom';
import type {UseAppRoutesResult} from './types'

import { appRouter } from './config';

export const useAppRoutes = ():UseAppRoutesResult =>{
    const AppRoutes = useRoutes(appRouter);
    return {AppRoutes};
}