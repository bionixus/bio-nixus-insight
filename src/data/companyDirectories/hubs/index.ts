/**
 * Hub page inputs (master, country, entity). Each wave adds its hubs here.
 */
import type { DirectoryHubInput } from '../types';
import { masterHub } from './master';
import { bahrainHub, egyptHub, kuwaitHub, omanHub, qatarHub, saudiArabiaHub, uaeHub } from './countries';

export const DIRECTORY_HUB_INPUTS: DirectoryHubInput[] = [
  // Wave 1
  masterHub,
  saudiArabiaHub,
  uaeHub,
  egyptHub,
  kuwaitHub,
  qatarHub,
  omanHub,
  bahrainHub,
];
