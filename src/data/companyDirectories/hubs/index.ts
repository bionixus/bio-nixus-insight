/**
 * Hub page inputs (master, country, entity). Each wave adds its hubs here.
 */
import type { DirectoryHubInput } from '../types';
import { masterHub } from './master';
import { bahrainHub, egyptHub, kuwaitHub, omanHub, qatarHub, saudiArabiaHub, uaeHub } from './countries';
import {
  banksHub,
  fmcgCompaniesHub,
  medicalDeviceCompaniesHub,
  pharmaceuticalCompaniesHub,
  pharmaceuticalDistributorsHub,
  retailCompaniesHub,
} from './entities';

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
  // Wave 2 — entity hubs
  pharmaceuticalCompaniesHub,
  pharmaceuticalDistributorsHub,
  // Wave 3 — entity hubs
  banksHub,
  fmcgCompaniesHub,
  // Wave 4 — entity hubs
  medicalDeviceCompaniesHub,
  retailCompaniesHub,
];
