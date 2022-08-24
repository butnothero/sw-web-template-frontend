import { getBool } from '@/services';

export const isClient = getBool(process.env.CLIENT);
export const isServer = getBool(process.env.SERVER);
