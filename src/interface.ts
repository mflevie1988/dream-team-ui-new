import dayjs, { Dayjs } from 'dayjs';

import { AnyAction } from '@reduxjs/toolkit';
import { CustomerDetails } from './reducers/customerDetails';
import { DestinationState } from './reducers/destinations';
import { Reducer } from 'react';
import { RouterState } from 'redux-first-history';

export interface AppState {
  router: Reducer<RouterState, AnyAction>;
  login: Login;
  destination: DestinationState;
  customerDetails: CustomerDetails;
  tripDetails: TripDetails;
  transportDetails: TransportDetail[];
}

export interface Login {
  user: User | null;
  token: string;
  isError?: boolean;
  isLoading?: boolean;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface TripDetails {
  numberOfDays: number;
  startDate: Date | null;
  endDate: Date | null;
}

export interface TransportDetail {
  id: string;
  description: string;
  price: number;
  defaultPricePerDay: number;
}
export type TransportDetailKeys = keyof TransportDetail;
