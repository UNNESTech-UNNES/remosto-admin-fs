import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Admin', 'Feedbacks', 'AgeDetails'],
  endpoints: (build) => ({
    // getUser: build.query({
    //   query: (id) => `general/user/${id}`,
    //   providesTags: ['User'],
    // }),
    getAdmin: build.query({
      query: (adminId) => `admins/admin/${adminId}`,
      providesTags: ['Admin'],
    }),
    getFeedbacks: build.query({
      query: () => 'additional/feedbacks',
      providesTags: ['Feedbacks'],
    }),
    getAgeDetails: build.query({
      query: () => 'core/age-details',
      providesTags: ['AgeDetails'],
    }),
  }),
});

export const { useGetUserQuery, useGetFeedbacksQuery, useGetAdminQuery, useGetAgeDetailsQuery } = api;
